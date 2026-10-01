---
titulo: Huecko
resumen: Plan things with friends without 40 WhatsApp messages. It crosses everyone's schedules and suggests when you all overlap.
rol: Product, frontend and backend
categorias: [web, backend, personal]
stack: [React, TypeScript, Vite, Java, Spring Boot, PostgreSQL, MongoDB, Vercel]
destacado: true
orden: 3
demo: https://huecko.vercel.app
portada: proyectos/huecko.webp
repos:
  - { nombre: 'huecko-frontend', url: 'https://github.com/Nakusuo/huecko-frontend' }
  - { nombre: 'huecko-backend', url: 'https://github.com/Nakusuo/huecko-backend' }
  - { nombre: 'huecko-ai-service', url: 'https://github.com/Nakusuo/huecko-ai-service' }
tono: oliva
---

## The problem

Making plans with a group always ends the same way: dozens of messages asking who's free when, and nobody keeping track. Huecko does that cross-check for you.

## What it does

Each person enters their availability once, as recurring blocks (weekly classes) and one-off ones. The app crosses the group's schedules and suggests windows where everyone is actually free.

- Weekly heatmap of the group's availability, with a configurable threshold.
- Proposals with voting: 2 to 5 windows, confirmation, delays and last-minute changes.
- Schedule import from a photo (OCR), saved as a draft to review.
- Admin panel, shipped in version 0.4.0.
- Your schedule blocks stay private: the group only sees when you're free.

## How it's built

- Frontend in React, TypeScript and Vite, deployed on Vercel. It has a demo mode that runs without a backend.
- Backend in Spring Boot 3 with Java 17, on PostgreSQL and MongoDB.
- Documented API contract between frontend and backend, so both can move independently.
- AI service in progress to suggest time windows from the group's availability.
