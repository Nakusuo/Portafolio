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
    es: 'Entregas pequeñas y seguidas: ves avances reales cada pocos días, no una sorpresa al final.',
    en: 'Small, frequent deliveries: you see real progress every few days, not a surprise at the end.',
  },
  {
    es: 'Lo visual lo decides tú. Te muestro opciones antes de cambiar algo que se ve.',
    en: 'You make the visual calls. I show options before changing anything people will see.',
  },
  {
    es: 'Nada toca tus datos reales sin una copia de respaldo antes.',
    en: 'Nothing touches your real data without a backup first.',
  },
];

export const lab: { titulo: Texto; detalle: Texto; enlace?: string; tono: 'oliva' | 'tierra' | 'hueso' }[] = [
  {
    titulo: { es: 'Mi escritorio en KDE Plasma 6', en: 'My KDE Plasma 6 desktop' },
    detalle: {
      es: 'Tema propio "Verde Tech", ventanas en mosaico con Krohnkite y un dashboard de terminales.',
      en: 'Custom "Verde Tech" theme, tiling windows with Krohnkite and a terminal dashboard.',
    },
    enlace: 'https://github.com/Nakusuo/dotfiles',
    tono: 'oliva',
  },
  {
    titulo: { es: 'Un README que se actualiza solo', en: 'A self-updating README' },
    detalle: {
      es: 'Banner SVG animado y tarjetas de estadísticas que se regeneran con GitHub Actions.',
      en: 'Animated SVG banner and stats cards regenerated by GitHub Actions.',
    },
    enlace: 'https://github.com/Nakusuo/Nakusuo',
    tono: 'hueso',
  },
  {
    titulo: { es: 'Ilustración y diseño gráfico', en: 'Illustration and graphic design' },
    detalle: {
      es: 'Krita, Illustrator y Photoshop. Piezas sueltas, identidades y portadas.',
      en: 'Krita, Illustrator and Photoshop. One-off pieces, identities and covers.',
    },
    tono: 'tierra',
  },
  {
    titulo: { es: '3D y motion', en: '3D and motion' },
    detalle: {
      es: 'Modelado en Blender y animación en After Effects.',
      en: 'Modelling in Blender and animation in After Effects.',
    },
    tono: 'oliva',
  },
];

export const sobreMi: Texto[] = [
  {
    es: 'Estoy en tercer año de Ingeniería de Software. Me muevo entre el diseño y el código: me importa tanto que la arquitectura tenga sentido como que la interfaz se sienta bien de usar.',
    en: "I'm in my third year of Software Engineering. I move between design and code: I care as much about architecture that makes sense as about an interface that feels good to use.",
  },
  {
    es: 'Hoy mantengo en producción el panel que usan tres tiendas de regalos para llevar pedidos, envíos y stock, y la tienda web de una de ellas. En paralelo construyo Huecko, una app para coordinar planes entre amigos.',
    en: "Right now I maintain the dashboard three gift shops use for orders, shipping and stock, plus the online store of one of them. On the side I'm building Huecko, an app to coordinate plans with friends.",
  },
];
