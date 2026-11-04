---
titulo: SVTFLIX
resumen: Fan site for SEVENTEEN with a streaming look. Home page with videos, category rows, member profiles and search.
rol: Design, frontend and content
categorias: [fanbases, web]
stack: [HTML, Tailwind CSS, JavaScript, Google Sheets, Google Forms]
orden: 15
portada: proyectos/svtflix.webp
demo: https://nakusuo.github.io/svtflix/
repos:
  - { nombre: 'svtflix', url: 'https://github.com/Nakusuo/svtflix' }
tono: oliva
---

## Why I did it

I am a My Chemical Romance fan and I run an Instagram account to share things from my fandom. There I saw that a fanbase is more than people who listen to the same music: they organize, share and support each other. When I had the chance to help a SEVENTEEN fanbase, I took it as a way to give that support back.

## The problem

The fanbase's website was built in Canva, and its content lived inside the editor. The idea was to move that content into a spreadsheet, so whoever runs the site can change a piece of data without touching the design.

## What I did

- Moved the Canva content into CSV tables: 961 images and 14 clips, with a guide for editing them.
- Home page with video, Top 13, social links and content rows.
- Profile page for each member and internal pages, such as concerts or variety.
- Search over an index of 6384 videos, and "My list" saved in the browser.
- Layout for phone and desktop.

## How it is built

It is a static site made with HTML, Tailwind CSS v4 and plain JavaScript, with no frameworks. A Google Sheets spreadsheet published as CSV works as the content manager. It has no backend, no accounts and no paid server, because the fanbase has no budget for those.

## Status

In progress. The preview is on GitHub Pages. Still to do: connect the final spreadsheet, review the content links and publish the final version on Vercel. The fanbase team still has to answer some decisions, and the plan keeps them written down.
