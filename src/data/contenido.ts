import type { Idioma } from '../i18n/ui';

type Texto = Record<Idioma, string>;

export interface Tecnologia {
  /** Debe coincidir con lo que pones en `stack` de cada proyecto. */
  nombre: string;
  /** Nombre del icono en Simple Icons. */
  icono: string;
}

export const gruposStack: { titulo: Texto; tecnologias: Tecnologia[] }[] = [
  {
    titulo: { es: 'Frontend', en: 'Frontend' },
    tecnologias: [
      { nombre: 'TypeScript', icono: 'typescript' },
      { nombre: 'React', icono: 'react' },
      { nombre: 'Next.js', icono: 'nextdotjs' },
      { nombre: 'Angular', icono: 'angular' },
      { nombre: 'Astro', icono: 'astro' },
      { nombre: 'Tailwind', icono: 'tailwindcss' },
      { nombre: 'Vite', icono: 'vite' },
      { nombre: 'Ionic', icono: 'ionic' },
      { nombre: 'HTML', icono: 'html5' },
      { nombre: 'CSS', icono: 'css' },
      { nombre: 'JavaScript', icono: 'javascript' },
    ],
  },
  {
    titulo: { es: 'Backend', en: 'Backend' },
    tecnologias: [
      { nombre: 'Java', icono: 'openjdk' },
      { nombre: 'Spring Boot', icono: 'springboot' },
      { nombre: 'Python', icono: 'python' },
      { nombre: 'FastAPI', icono: 'fastapi' },
      { nombre: 'PHP', icono: 'php' },
      { nombre: 'Node.js', icono: 'nodedotjs' },
    ],
  },
  {
    titulo: { es: 'Datos', en: 'Data' },
    tecnologias: [
      { nombre: 'PostgreSQL', icono: 'postgresql' },
      { nombre: 'MySQL', icono: 'mysql' },
      { nombre: 'MongoDB', icono: 'mongodb' },
      { nombre: 'SQLite', icono: 'sqlite' },
    ],
  },
  {
    titulo: { es: 'Herramientas', en: 'Tooling' },
    tecnologias: [
      { nombre: 'Git', icono: 'git' },
      { nombre: 'Docker', icono: 'docker' },
      { nombre: 'GitHub Actions', icono: 'githubactions' },
      { nombre: 'Vercel', icono: 'vercel' },
      { nombre: 'Linux', icono: 'linux' },
    ],
  },
  {
    titulo: { es: 'Diseño y visuales', en: 'Design and visuals' },
    tecnologias: [
      { nombre: 'Figma', icono: 'figma' },
      { nombre: 'Photoshop', icono: 'adobephotoshop' },
      { nombre: 'Illustrator', icono: 'adobeillustrator' },
      { nombre: 'Krita', icono: 'krita' },
      { nombre: 'Blender', icono: 'blender' },
      { nombre: 'After Effects', icono: 'adobeaftereffects' },
    ],
  },
];

export const servicios: { titulo: Texto; detalle: Texto; prueba?: string }[] = [
  {
    titulo: { es: 'Tiendas online y landings', en: 'Online stores and landing pages' },
    detalle: {
      es: 'Webs rápidas pensadas para el celular: catálogo, carrito, pedido por WhatsApp y pagos locales como Yape, Plin o contraentrega.',
      en: 'Fast, mobile-first sites: catalog, cart, WhatsApp ordering and local payment methods.',
    },
    prueba: 'paltishop',
  },
  {
    titulo: { es: 'Paneles y sistemas internos', en: 'Dashboards and internal tools' },
    detalle: {
      es: 'Un solo lugar para pedidos, cobros, stock, envíos y clientes, sincronizado con tu web para que no copies datos a mano.',
      en: 'One place for orders, payments, stock, shipping and customers, synced with your website so nobody copies data by hand.',
    },
    prueba: 'central',
  },
  {
    titulo: { es: 'Aplicaciones web a medida', en: 'Custom web apps' },
    detalle: {
      es: 'Del diseño a la API y la base de datos: cuentas, roles, notificaciones y despliegue.',
      en: 'From design to API and database: accounts, roles, notifications and deployment.',
    },
    prueba: 'huecko',
  },
  {
    titulo: { es: 'Diseño de interfaz e identidad', en: 'Interface and identity design' },
    detalle: {
      es: 'Si todavía no hay diseño, lo hago yo: pantallas en Figma, logo y piezas para redes que combinen con la web.',
      en: "If there's no design yet, I make it: Figma screens, a logo and social assets that match the site.",
    },
  },
];

export const comoTrabajo: Texto[] = [
  {
    es: 'Entrego por partes pequeñas, así ves avances cada pocos días.',
    en: 'I deliver in small parts, so you see progress every few days.',
  },
  {
    es: 'Lo visual lo decides tú: te muestro opciones antes de cambiar algo que se ve.',
    en: 'You make the visual calls: I show options before changing anything people will see.',
  },
  {
    es: 'Antes de tocar tus datos reales, saco una copia de respaldo.',
    en: 'Before touching your real data, I take a backup.',
  },
];

export const lab: {
  titulo: Texto;
  detalle: Texto;
  enlace?: string;
  tono: 'oliva' | 'tierra' | 'hueso';
  /** Imagen dentro de public/ y dirección que muestra la ventana. */
  imagen?: string;
  direccion?: string;
  /** Icono de Phosphor cuando no hay imagen. */
  icono: string;
}[] = [
  {
    titulo: { es: 'Mi escritorio en KDE Plasma 6', en: 'My KDE Plasma 6 desktop' },
    detalle: {
      es: 'Tema propio "Verde Tech", ventanas en mosaico con Krohnkite y un dashboard de terminales.',
      en: 'Custom "Verde Tech" theme, tiling windows with Krohnkite and a terminal dashboard.',
    },
    enlace: 'https://github.com/Nakusuo/dotfiles',
    tono: 'oliva',
    imagen: 'lab/kde.webp',
    direccion: '~/dotfiles',
    icono: 'desktop-tower',
  },
  {
    titulo: { es: 'Un README que se actualiza solo', en: 'A self-updating README' },
    detalle: {
      es: 'Banner SVG animado y tarjetas de estadísticas que se regeneran con GitHub Actions.',
      en: 'Animated SVG banner and stats cards regenerated by GitHub Actions.',
    },
    enlace: 'https://github.com/Nakusuo/Nakusuo',
    tono: 'hueso',
    imagen: 'lab/banner.svg',
    direccion: 'github.com/Nakusuo',
    icono: 'git-branch',
  },
  {
    titulo: { es: 'Ilustración y diseño gráfico', en: 'Illustration and graphic design' },
    detalle: {
      es: 'Krita, Illustrator y Photoshop. Piezas sueltas, identidades y portadas.',
      en: 'Krita, Illustrator and Photoshop. One-off pieces, identities and covers.',
    },
    tono: 'tierra',
    icono: 'paint-brush',
  },
  {
    titulo: { es: '3D y motion', en: '3D and motion' },
    detalle: {
      es: 'Modelado en Blender y animación en After Effects.',
      en: 'Modelling in Blender and animation in After Effects.',
    },
    tono: 'oliva',
    icono: 'cube',
  },
];

export const sobreMi: Texto[] = [
  {
    es: 'Estoy en cuarto año de Ingeniería de Software. Me muevo entre el diseño y el código: me importa tanto que la arquitectura tenga sentido como que la interfaz se sienta bien de usar.',
    en: "I'm in my fourth year of Software Engineering. I move between design and code: I care as much about architecture that makes sense as about an interface that feels good to use.",
  },
  {
    es: 'Hoy mantengo en producción el panel que usan tres tiendas de regalos para llevar pedidos, envíos y stock, y la tienda web de una de ellas. En paralelo construyo Huecko, una app para coordinar planes entre amigos.',
    en: "Right now I maintain the dashboard three gift shops use for orders, shipping and stock, plus the online store of one of them. On the side I'm building Huecko, an app to coordinate plans with friends.",
  },
];

/** Principios cortos, como notas pegadas en Sobre mí. */
export const principios: Texto[] = [
  { es: 'Lo que subo al repo, lo entiendo.', en: 'If I push it, I understand it.' },
  { es: 'Muchas entregas chicas le ganan a una grande.', en: 'Many small releases beat one big one.' },
  { es: 'Si no se usa bien en el celular, no está terminado.', en: "If it doesn't work well on a phone, it isn't done." },
  { es: 'Un formulario corto le gana a uno completo.', en: 'A short form beats a complete one.' },
];

export interface Paso {
  lugar: string;
  rol: Texto;
  fechas: Texto;
  detalle?: Texto;
}

/** Experiencia, del más reciente al más antiguo (sale del CV). */
export const experiencia: Paso[] = [
  {
    lugar: 'Central · panel de tres tiendas',
    rol: { es: 'Desarrollo y mantenimiento', en: 'Development and maintenance' },
    fechas: { es: 'Hoy', en: 'Now' },
    detalle: {
      es: 'Panel en producción para pedidos, envíos y stock, más la tienda web de una de las marcas.',
      en: 'Production dashboard for orders, shipping and stock, plus the online store of one of the brands.',
    },
  },
  {
    lugar: 'Policía Nacional del Perú · UNITIC',
    rol: { es: 'Auxiliar administrativo, Unidad de Tecnología', en: 'Administrative assistant, IT Unit' },
    fechas: { es: 'nov. 2024 – mar. 2026', en: 'Nov 2024 – Mar 2026' },
    detalle: {
      es: 'Soporte técnico a los equipos del área: diagnóstico, reparación e instalación de software. Apoyo en capacitaciones internas.',
      en: 'Tech support for the unit: diagnosis, repair and software installs. Helped run internal trainings.',
    },
  },
  {
    lugar: 'CMM Ingenieros Constructora y Consultoría',
    rol: { es: 'Asistente administrativa', en: 'Administrative assistant' },
    fechas: { es: 'nov. 2023 – ago. 2024', en: 'Nov 2023 – Aug 2024' },
    detalle: {
      es: 'Registros y reportes para gerencia, seguimiento de trámites y atención a clientes.',
      en: 'Records and reports for management, paperwork follow-up and client support.',
    },
  },
];

export const formacion: Paso[] = [
  {
    lugar: 'Universidad Tecnológica del Perú (UTP)',
    rol: { es: 'Ingeniería de Software · 8.º ciclo', en: 'Software Engineering · 8th term' },
    fechas: { es: '2023 – hoy', en: '2023 – now' },
  },
  {
    lugar: 'Británico',
    rol: { es: 'Inglés · Advanced Phase', en: 'English · Advanced Phase' },
    fechas: { es: '2023', en: '2023' },
  },
];

/** Certificados agrupados por quien los emite. */
export const certificados: { emisor: string; fechas: string; tono: 'oliva' | 'vino' | 'tierra' | 'hueso'; cursos: Texto[] }[] = [
  {
    emisor: 'Cisco Networking Academy · UTP',
    fechas: '2025',
    tono: 'vino',
    cursos: [
      { es: 'Introducción a la ciberseguridad', en: 'Introduction to Cybersecurity' },
      { es: 'CCNA: Introducción a las redes', en: 'CCNA: Introduction to Networks' },
      { es: 'Seguridad de terminales', en: 'Endpoint Security' },
      { es: 'Defensa de la red', en: 'Network Defense' },
      { es: 'Gestión de amenazas cibernéticas', en: 'Cyber Threat Management' },
    ],
  },
  {
    emisor: 'UTP · Ingeniería de Software',
    fechas: '2025 – 2026',
    tono: 'oliva',
    cursos: [
      { es: 'Soporte técnico de computadoras', en: 'Computer Technical Support' },
      { es: 'Excel intermedio', en: 'Intermediate Excel' },
      { es: 'Tutora STEM de Física', en: 'STEM Physics Tutor' },
      { es: 'Tutora STEM de Matemática', en: 'STEM Math Tutor' },
    ],
  },
  {
    emisor: 'UNI · Oficina de TI',
    fechas: '2024',
    tono: 'tierra',
    cursos: [{ es: 'Programación en Python básico · nota 18/20', en: 'Basic Python Programming · grade 18/20' }],
  },
  {
    emisor: 'Lima Educa · Perú Digital',
    fechas: '2024',
    tono: 'hueso',
    cursos: [
      { es: 'SQL Server Fundamentals', en: 'SQL Server Fundamentals' },
      { es: 'Power BI', en: 'Power BI' },
      { es: 'Tablas dinámicas y dashboards', en: 'Pivot tables and dashboards' },
      { es: 'Excel, Word y PowerPoint', en: 'Excel, Word and PowerPoint' },
      { es: 'Soporte técnico remoto', en: 'Remote technical support' },
    ],
  },
];

/** Las canciones de la cara B (vienen del README de GitHub). */
export const pistasCaraB: Record<Idioma, string[]> = {
  es: ['commits a las 2am', '"arreglo esto mañana" (no lo arregló)', 'el CSS que sí funcionó a la primera', 'ruido blanco'],
  en: ['commits at 2am', "\"I'll fix this tomorrow\" (didn't)", 'the CSS that worked on the first try', 'white noise'],
};
