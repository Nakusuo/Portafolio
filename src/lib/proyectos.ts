import { getCollection, type CollectionEntry } from 'astro:content';
import type { Idioma } from '../i18n/ui';

export type Proyecto = CollectionEntry<'proyectos'>;

/** "es/huecko" → "huecko" */
export const slugDe = (p: Proyecto) => p.id.split('/').slice(1).join('/');

export async function proyectosEn(idioma: Idioma): Promise<Proyecto[]> {
  const todos = await getCollection('proyectos', (p) => p.id.startsWith(`${idioma}/`));
  return todos.sort((a, b) => a.data.orden - b.data.orden);
}
