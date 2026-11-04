---
titulo: SVTFLIX
resumen: Sitio fan de SEVENTEEN con aspecto de streaming. Portada con videos, filas por categoría, fichas de miembros y buscador.
rol: Diseño, frontend y contenido
categorias: [fanbases, web]
stack: [HTML, Tailwind CSS, JavaScript, Google Sheets, Google Forms]
orden: 15
portada: proyectos/svtflix.webp
demo: https://nakusuo.github.io/svtflix/
repos:
  - { nombre: 'svtflix', url: 'https://github.com/Nakusuo/svtflix' }
tono: oliva
---

## Por qué lo hice

Soy fan de My Chemical Romance y tengo una cuenta de Instagram para compartir cosas de mi fandom. Ahí vi que una fanbase es más que personas que escuchan la misma música: se organizan, comparten y se apoyan. Cuando tuve la oportunidad de ayudar a una fanbase de SEVENTEEN, la tomé como una forma de devolver ese apoyo.

## El problema

La web de la fanbase estaba hecha en Canva y su contenido vivía dentro del editor. La idea fue sacarlo a una hoja de cálculo, para que quien administre la web pueda cambiar un dato sin tocar el diseño.

## Qué hice

- Pasé el contenido de Canva a tablas CSV: 961 imágenes y 14 clips, con una guía para editarlo.
- Portada con video, Top 13, redes y filas de contenido.
- Fichas de cada miembro y páginas internas, como conciertos o variety.
- Buscador sobre un índice de 6384 videos, y "Mi lista" guardada en el navegador.
- Versión para celular y computadora.

## Cómo está hecho

Es un sitio estático con HTML, Tailwind CSS v4 y JavaScript sin frameworks. Una hoja de Google Sheets publicada como CSV funciona como administrador de contenido. No tiene backend, cuentas ni servidor de pago, porque la fanbase no tiene presupuesto para eso.

## Estado

En desarrollo. La vista previa está en GitHub Pages. Falta conectar la hoja definitiva, revisar los enlaces del contenido y publicar la versión final en Vercel. Hay decisiones que el equipo de la fanbase todavía tiene que responder, y el plan las deja anotadas.
