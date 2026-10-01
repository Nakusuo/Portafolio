---
titulo: Huecko
resumen: Coordinar planes entre amigos sin 40 mensajes de WhatsApp. Cruza horarios y propone cuándo coinciden todos.
rol: Producto, frontend y backend
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

## El problema

Quedar con un grupo de amigos siempre termina igual: decenas de mensajes preguntando quién puede cuándo y nadie que lleve la cuenta. Huecko hace ese cruce por ti.

## Qué hace

Cada persona registra su disponibilidad una vez, con bloques recurrentes (las clases de cada semana) y puntuales. La app cruza los horarios del grupo y propone ventanas donde de verdad coinciden.

- Heatmap semanal de la disponibilidad del grupo, con un umbral configurable.
- Propuestas con votación: de 2 a 5 ventanas, confirmación, retrasos e imprevistos.
- Importación de horarios por foto (OCR) que entra como borrador para revisarlo.
- Panel de administración, publicado en la versión 0.4.0.
- Tus bloques de horario son privados: el grupo solo ve cuándo estás libre.

## Cómo está hecho

- Frontend en React, TypeScript y Vite, desplegado en Vercel. Tiene un modo demo que funciona sin backend.
- Backend en Spring Boot 3 con Java 17, sobre PostgreSQL y MongoDB.
- Contrato de API documentado entre el front y el backend, para que los dos avancen por separado.
- Servicio de IA en construcción para sugerir ventanas de horario a partir de la disponibilidad del grupo.
