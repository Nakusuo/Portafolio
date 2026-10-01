/**
 * Datos personales. Lo que esté vacío no se muestra en la página.
 * - correo: si lo pones, el botón "Escríbeme" abre el correo en vez de Instagram.
 * - cv: deja el PDF en public/ (por ejemplo public/cv.pdf) y escribe aquí 'cv.pdf'.
 */
export const perfil = {
  nombre: 'Nakusu',
  usuarioGithub: 'Nakusuo',
  github: 'https://github.com/Nakusuo',
  instagram: 'https://instagram.com/n4kusu',
  instagramUsuario: '@n4kusu',
  correo: '',
  cv: '',
};

/** A dónde lleva el botón de contacto: correo si existe, si no Instagram. */
export const enlaceContacto = perfil.correo ? `mailto:${perfil.correo}` : perfil.instagram;
