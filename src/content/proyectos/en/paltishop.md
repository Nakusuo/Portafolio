---
titulo: paltishop.store
resumen: An online store for handmade, personalized gift boxes, built for people arriving from TikTok or Instagram on their phone.
rol: Full design and development
categorias: [clientes, web]
stack: [HTML, CSS, JavaScript, PHP, MySQL]
destacado: true
orden: 2
privado: true
demo: https://paltishop.store
portada: proyectos/paltishop.webp
tono: tierra
---

## The problem

Paltishop sells handmade gifts: boxed packs with plush toys, flowers, jewelry or lamps, in the colors and with the message the buyer chooses. Almost every visit comes from a phone after a TikTok or Instagram video, and people want to decide fast what to give, how much it costs and when it arrives.

## What I built

- Catalog by category and product pages with color, model and message options.
- Cart with delivery details and, with equal weight, ordering through WhatsApp with the message already written.
- Local payment methods: card, Yape, Plin and cash on delivery.
- Order tracking, favorites and photo reviews from customers receiving their box.
- Complaints book and legal pages.

## How it's built

- HTML, CSS and JavaScript with no framework, so it loads fast on mobile data.
- API and admin panel in PHP on MySQL, on a self-managed VPS.
- PWA with a service worker: every style or script change bumps the cache version so nobody gets stuck on an old build.
- Orders, products, stock and coupons are managed from Central, the dashboard I built for the shops.
