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
      etiquetas: ['hago cosas', 'Ing. de Software · 4.º año', 'frontend + backend', 'también diseño'],
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
      bajada: 'Debajo de cada tecnología están los proyectos donde la usé.',
      usadoEn: 'Usado en',
      cv: 'Descargar CV',
    },
    servicios: {
      titulo: 'Lo que puedo hacer por ti',
      bajada: 'Hago webs y sistemas para negocios. Cada servicio enlaza a un proyecto real donde ya lo hice.',
    },
    lab: {
      titulo: 'Lab',
      bajada: 'Lo que hago cuando nadie me lo pide: diseño, ilustración, 3D y configurar mi escritorio más de lo razonable.',
    },
    ia: {
      titulo: 'Cómo uso la IA',
      bajada:
        'Es una herramienta más en mi forma de trabajar. Las decisiones las tomo yo, y reviso cada cambio antes de que entre al proyecto.',
      pasos: [
        {
          titulo: 'Investigar',
          detalle:
            'Comparo librerías antes de elegir una y entiendo errores nuevos sin pasar la tarde en foros.',
        },
        {
          titulo: 'Planear',
          detalle:
            'Antes de escribir código, parto la funcionalidad en pasos pequeños y busco los casos borde.',
        },
        {
          titulo: 'Desarrollar',
          detalle: 'Me ayuda a revisar código y a escribir pruebas. Leo y entiendo todo lo que subo al repo.',
        },
      ],
      herramientas: 'Con qué',
    },
    sobreMi: {
      titulo: 'Sobre mí',
    },
    principios: {
      titulo: 'Principios',
      bajada: 'Lo que me repito cuando trabajo.',
    },
    contacto: {
      titulo: '¿Hablamos?',
      bajada: 'Para prácticas, un proyecto o un comentario sobre algo que viste aquí.',
    },
    caso: {
      volver: 'Volver al trabajo',
      rol: 'Rol',
      stack: 'Stack',
      enlaces: 'Enlaces',
      siguiente: 'Siguiente caso',
      privado: 'El código es privado porque pertenece a un cliente.',
      verWeb: 'Ver en vivo',
    },
    pie: {
      hecho: 'Hecho con Astro.',
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
      etiquetas: ['I make things', 'Software Eng. · 4th year', 'frontend + backend', 'design too'],
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
      bajada: 'Under each technology are the projects where I used it.',
      usadoEn: 'Used in',
      cv: 'Download CV',
    },
    servicios: {
      titulo: 'What I can build for you',
      bajada: 'I build websites and systems for businesses. Each service links to a real project where I already did it.',
    },
    lab: {
      titulo: 'Lab',
      bajada: 'What I make when nobody asks: design, illustration, 3D and tuning my desktop more than is reasonable.',
    },
    ia: {
      titulo: 'How I use AI',
      bajada:
        'It is one more tool in how I work. I make the decisions, and I review every change before it goes into the project.',
      pasos: [
        {
          titulo: 'Research',
          detalle: 'I compare libraries before picking one and work through unfamiliar errors without losing an afternoon to forums.',
        },
        {
          titulo: 'Plan',
          detalle: 'Before writing code, I break the feature into small steps and look for edge cases.',
        },
        {
          titulo: 'Build',
          detalle: 'It helps me review code and write tests. I read and understand everything I push to the repo.',
        },
      ],
      herramientas: 'Tools',
    },
    sobreMi: {
      titulo: 'About',
    },
    principios: {
      titulo: 'Principles',
      bajada: 'What I keep telling myself while I work.',
    },
    contacto: {
      titulo: "Let's talk",
      bajada: 'About internships, a project, or something you saw here.',
    },
    caso: {
      volver: 'Back to work',
      rol: 'Role',
      stack: 'Stack',
      enlaces: 'Links',
      siguiente: 'Next case',
      privado: 'The code is private because it belongs to a client.',
      verWeb: 'See it live',
    },
    pie: {
      hecho: 'Built with Astro.',
      caraB: 'side B',
    },
  },
} as const;

export type Textos = (typeof textos)[Idioma];
