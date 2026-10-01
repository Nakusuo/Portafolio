import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Un archivo por proyecto y por idioma: src/content/proyectos/es/huecko.md y en/huecko.md.
 * Si `destacado` es true, el cuerpo del markdown es el caso de estudio y tiene página propia.
 * Si no, solo aparece en la lista de "Todo lo demás" y el cuerpo puede ir vacío.
 */
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    rol: z.string().optional(),
    categorias: z.array(z.enum(['clientes', 'web', 'movil', 'backend', 'universidad', 'personal'])),
    stack: z.array(z.string()),
    destacado: z.boolean().default(false),
    orden: z.number().default(99),
    repos: z.array(z.object({ nombre: z.string(), url: z.url() })).default([]),
    demo: z.url().optional(),
    privado: z.boolean().default(false),
    /** Imagen dentro de public/, por ejemplo 'proyectos/huecko.webp'. */
    portada: z.string().optional(),
    /** Color de la portada tipográfica cuando no hay imagen. */
    tono: z.enum(['oliva', 'tierra', 'hueso']).default('oliva'),
  }),
});

export const collections = { proyectos };
