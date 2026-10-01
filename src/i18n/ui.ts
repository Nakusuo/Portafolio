export const idiomas = ['es', 'en'] as const;
export type Idioma = (typeof idiomas)[number];

/** Une la ruta con el `base` de GitHub Pages (/Portafolio). */
export function url(ruta = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpia = ruta.startsWith('/') ? ruta : `/${ruta}`;
  return `${base}${limpia}`;
}

/** Ruta de una página en el idioma pedido. El español va sin prefijo. */
export function rutaEn(idioma: Idioma, ruta = '/'): string {
  const limpia = ruta.startsWith('/') ? ruta : `/${ruta}`;
  return url(idioma === 'es' ? limpia : `/en${limpia === '/' ? '/' : limpia}`);
}

export const textos = {
  es: {
    meta: {
      titulo: 'Nakusu · Desarrollo y diseño',
      descripcion:
        'Portafolio de Nakusu: estudiante de Ingeniería de Software que hace frontend, backend y diseño. Proyectos con clientes reales, casos de estudio y stack.',
    },
    nav: {
      trabajo: 'Trabajo',
      servicios: 'Servicios',
      lab: 'Lab',
      sobreMi: 'Sobre mí',
      contacto: 'Escríbeme',
      menu: 'Menú',
      tema: 'Cambiar tema',
      otroIdioma: 'English',
    },
    hero: {
      miNombre: 'mi nombre es',
      etiquetas: ['hago cosas', 'Ing. de Software · 3er año', 'frontend + backend', 'también diseño'],
      estado: 'Abierto a prácticas y proyectos',
      titulo: 'Diseño interfaces y construyo lo que hay detrás.',
      bajada:
        'Estudiante de Ingeniería de Software. Hago frontend, backend y diseño, y ya tengo sistemas funcionando con clientes reales.',
      verTrabajo: 'Ver trabajo',
      pregunta: '¿Qué te trae por aquí?',
      rutas: [
        { etiqueta: 'Busco talento', destino: '/trabajo', detalle: 'Proyectos, stack y CV' },
        { etiqueta: 'Necesito un proyecto', destino: '/servicios', detalle: 'Qué hago y cómo trabajo' },
        { etiqueta: 'Solo curioseo', destino: '/lab', detalle: 'Diseño, 3D y experimentos' },
      ],
      capturas: 'Capturas de paltishop.store y de Huecko',
    },
    inicio: {
      stackTitulo: 'Lo que uso a diario',
      verStack: 'Ver todo el stack',
      verTrabajo: 'Ver todo el trabajo',
    },
    destacados: {
      titulo: 'Trabajo destacado',
      bajada: 'Sistemas en producción para negocios reales y proyectos completos de punta a punta.',
      leer: 'Leer caso',
      privado: 'Código privado',
    },
    proyectos: {
      titulo: 'Todo lo demás',
      bajada: 'Entregas de la universidad, prácticas y cosas que hice por curiosidad.',
      todos: 'Todos',
      repo: 'Repo',
      demo: 'Demo',
      vacio: 'No hay proyectos en esta categoría todavía.',
    },
    categorias: {
      clientes: 'Clientes',
      web: 'Web',
      movil: 'Móvil',
      backend: 'Backend',
      universidad: 'Universidad',
      personal: 'Personal',
    },
    stack: {
      titulo: 'Lo que domino',
      bajada: 'Sin barras de porcentaje. Cada tecnología dice en qué proyecto la usé, para que lo compruebes.',
      usadoEn: 'Usado en',
      cv: 'Descargar CV',
    },
    servicios: {
      titulo: 'Lo que puedo hacer por ti',
      bajada: 'Si tienes un negocio y necesitas algo que funcione, esto es lo que hago.',
    },
    lab: {
      titulo: 'Lab',
      bajada: 'Lo que hago cuando nadie me lo pide: diseño, ilustración, 3D y configurar mi escritorio más de lo razonable.',
    },
    ia: {
      titulo: 'Cómo uso la IA',
      nota: 'sin humo',
      bajada:
        'La uso todos los días, pero no como una máquina de "hazme esto". Es una herramienta más: me ayuda a buscar, a planear y a desarrollar mejor. Las decisiones y el código final siguen siendo míos.',
      pasos: [
        {
          titulo: 'Investigar',
          detalle:
            'Comparar opciones antes de elegir una librería, leer documentación más rápido y entender errores que no había visto antes.',
        },
        {
          titulo: 'Planear',
          detalle:
            'Desglosar una funcionalidad en pasos, escribir la especificación y detectar casos borde antes de escribir código.',
        },
        {
          titulo: 'Desarrollar',
          detalle:
            'Un segundo par de ojos: revisar código, proponer pruebas y pensar en voz alta cuando algo no cuadra. Lo que entra al repo lo leo y lo entiendo.',
        },
      ],
      noHago: 'Lo que no hago:',
      tachado: 'pegar un prompt, copiar la respuesta y publicarla sin entenderla.',
      herramientas: 'Las que uso',
    },
    sobreMi: {
      titulo: 'Sobre mí',
    },
    contacto: {
      titulo: '¿Hablamos?',
      bajada: 'Prácticas, un proyecto o solo para comentar algo que viste aquí. Respondo rápido.',
    },
    caso: {
      volver: 'Volver al trabajo',
      rol: 'Rol',
      stack: 'Stack',
      enlaces: 'Enlaces',
      siguiente: 'Siguiente caso',
      privado: 'El código es privado porque es de un cliente. Puedo enseñarlo en una entrevista.',
      verWeb: 'Ver en vivo',
    },
    pie: {
      hecho: 'Hecho a mano con Astro.',
      caraB: 'side B',
    },
  },
  en: {
    meta: {
      titulo: 'Nakusu · Development and design',
      descripcion:
        'Portfolio of Nakusu: software engineering student working across frontend, backend and design. Real client projects, case studies and stack.',
    },
    nav: {
      trabajo: 'Work',
      servicios: 'Services',
      lab: 'Lab',
      sobreMi: 'About',
      contacto: 'Get in touch',
      menu: 'Menu',
      tema: 'Toggle theme',
      otroIdioma: 'Español',
    },
    hero: {
      miNombre: 'my name is',
      etiquetas: ['I make things', 'Software Eng. · 3rd year', 'frontend + backend', 'design too'],
      estado: 'Open to internships and projects',
      titulo: 'I design interfaces and build what runs behind them.',
      bajada:
        'Software engineering student. I work across frontend, backend and design, with systems already running for real clients.',
      verTrabajo: 'See work',
      pregunta: 'What brings you here?',
      rutas: [
        { etiqueta: "I'm hiring", destino: '/trabajo', detalle: 'Projects, stack and CV' },
        { etiqueta: 'I need a project', destino: '/servicios', detalle: 'What I do and how I work' },
        { etiqueta: 'Just browsing', destino: '/lab', detalle: 'Design, 3D and experiments' },
      ],
      capturas: 'Screenshots of paltishop.store and Huecko',
    },
    inicio: {
      stackTitulo: 'What I use daily',
      verStack: 'See the full stack',
      verTrabajo: 'See all work',
    },
    destacados: {
      titulo: 'Selected work',
      bajada: 'Production systems for real businesses and end-to-end projects.',
      leer: 'Read case',
      privado: 'Private code',
    },
    proyectos: {
      titulo: 'Everything else',
      bajada: 'University assignments, practice projects and things I made out of curiosity.',
      todos: 'All',
      repo: 'Repo',
      demo: 'Demo',
      vacio: 'No projects in this category yet.',
    },
    categorias: {
      clientes: 'Clients',
      web: 'Web',
      movil: 'Mobile',
      backend: 'Backend',
      universidad: 'University',
      personal: 'Personal',
    },
    stack: {
      titulo: 'What I work with',
      bajada: 'No percentage bars. Each technology lists the projects where I used it, so you can check.',
      usadoEn: 'Used in',
      cv: 'Download CV',
    },
    servicios: {
      titulo: 'What I can build for you',
      bajada: 'If you run a business and need something that works, this is what I do.',
    },
    lab: {
      titulo: 'Lab',
      bajada: 'What I make when nobody asks: design, illustration, 3D and tuning my desktop more than is reasonable.',
    },
    ia: {
      titulo: 'How I use AI',
      nota: 'no hype',
      bajada:
        'I use it every day, but not as a "do this for me" machine. It is one more tool: it helps me research, plan and build better. The decisions and the final code are still mine.',
      pasos: [
        {
          titulo: 'Research',
          detalle:
            'Compare options before picking a library, read documentation faster and understand errors I had never seen before.',
        },
        {
          titulo: 'Plan',
          detalle:
            'Break a feature into steps, write the spec and catch edge cases before writing any code.',
        },
        {
          titulo: 'Build',
          detalle:
            'A second pair of eyes: review code, suggest tests and think out loud when something does not add up. Whatever lands in the repo, I read and understand.',
        },
      ],
      noHago: 'What I do not do:',
      tachado: 'paste a prompt, copy the answer and ship it without understanding it.',
      herramientas: 'What I use',
    },
    sobreMi: {
      titulo: 'About',
    },
    contacto: {
      titulo: "Let's talk",
      bajada: 'Internships, a project, or just a comment on something you saw here. I reply fast.',
    },
    caso: {
      volver: 'Back to work',
      rol: 'Role',
      stack: 'Stack',
      enlaces: 'Links',
      siguiente: 'Next case',
      privado: "The code is private because it belongs to a client. I'm happy to walk through it in an interview.",
      verWeb: 'See it live',
    },
    pie: {
      hecho: 'Handmade with Astro.',
      caraB: 'side B',
    },
  },
} as const;

export type Textos = (typeof textos)[Idioma];
