# Portafolio

Mi portafolio personal: proyectos destacados con su caso de estudio, todo lo demás que he hecho, el stack que uso y un laboratorio de cosas visuales. En español e inglés.

**Web:** https://nakusuo.github.io/Portafolio/

Hecho con [Astro](https://astro.build), sin frameworks de interfaz. Se publica en GitHub Pages con cada push a `main`, y se vuelve a compilar cada día para refrescar la sección "En qué ando" con mis últimos commits.

## Arrancar en local

Necesitas Node.js 22.12 o superior.

```bash
npm install
npm run dev      # http://localhost:4321/Portafolio/
npm run build    # genera dist/
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Proyectos (un archivo por idioma) | `src/content/proyectos/es/` y `src/content/proyectos/en/` |
| Datos personales (Instagram, correo, CV) | `src/data/perfil.ts` |
| Textos de la interfaz | `src/i18n/ui.ts` |
| Resto de contenido (stack, trayectoria, fun facts) | `src/data/contenido.ts` |
| Imágenes de portada de proyectos | `public/proyectos/` |

Para añadir un proyecto, crea `es/<nombre>.md` y `en/<nombre>.md` con los mismos campos (los explica `src/content.config.ts`). Con `destacado: true`, el cuerpo del archivo es el caso de estudio y tiene página propia. Con `privado: true`, se indica que el código no es público.

## Ramas

`feature/*` → `develop` → `main` (con tag de versión). Commits en español.
