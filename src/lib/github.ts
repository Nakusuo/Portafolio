/**
 * Últimos commits de los repos públicos, leídos de la API de GitHub al compilar.
 * Si la API falla o no responde, devuelve una lista vacía y la sección no se muestra.
 * En GitHub Actions usa GITHUB_TOKEN para no chocar con el límite de peticiones.
 */
import { perfil } from '../data/perfil';

export interface Commit {
  repo: string;
  mensaje: string;
  fecha: string;
  sha: string;
  url: string;
}

const api = 'https://api.github.com';
const cabeceras: Record<string, string> = { Accept: 'application/vnd.github+json' };
const entorno = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env;
const token = import.meta.env.GITHUB_TOKEN ?? entorno?.GITHUB_TOKEN;
if (token) cabeceras.Authorization = `Bearer ${token}`;

const pedir = async <T>(ruta: string): Promise<T> => {
  const respuesta = await fetch(`${api}${ruta}`, { headers: cabeceras, signal: AbortSignal.timeout(8000) });
  if (!respuesta.ok) throw new Error(`GitHub ${respuesta.status} en ${ruta}`);
  return respuesta.json() as Promise<T>;
};

type Repo = { name: string; full_name: string; fork: boolean };
type CommitApi = {
  sha: string;
  html_url: string;
  commit: { message: string; author: { date: string } };
  author: { type: string } | null;
};

// El README de perfil se regenera solo con GitHub Actions: sus commits no son trabajo
const reposIgnorados = new Set([perfil.usuarioGithub]);

let cache: Promise<Commit[]> | undefined;

export function ultimosCommits(limite = 6): Promise<Commit[]> {
  cache ??= (async () => {
    try {
      const repos = await pedir<Repo[]>(`/users/${perfil.usuarioGithub}/repos?sort=pushed&per_page=8&type=owner`);
      const recientes = repos.filter((r) => !r.fork && !reposIgnorados.has(r.name)).slice(0, 4);
      const listas = await Promise.all(
        recientes.map(async (r) => {
          const commits = await pedir<CommitApi[]>(`/repos/${r.full_name}/commits?per_page=4`);
          return commits
            .filter((c) => c.author?.type !== 'Bot' && !c.commit.message.startsWith('Merge '))
            .map((c) => ({
              repo: r.name,
              mensaje: c.commit.message.split('\n')[0],
              fecha: c.commit.author.date,
              sha: c.sha.slice(0, 7),
              url: c.html_url,
            }));
        }),
      );
      return listas.flat().sort((a, b) => b.fecha.localeCompare(a.fecha));
    } catch (error) {
      console.warn(`[portafolio] sin últimos commits: ${(error as Error).message}`);
      return [];
    }
  })();
  return cache.then((commits) => commits.slice(0, limite));
}
