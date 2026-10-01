---
titulo: SafeZone
resumen: A support platform for victims of violence, with a GPS panic button and real-time alerts.
rol: Frontend and architecture
categorias: [web, universidad]
stack: [React, TypeScript, Tailwind, Spring Boot]
destacado: true
orden: 4
repos:
  - { nombre: 'SafeZone_Frontend', url: 'https://github.com/Nakusuo/SafeZone_Frontend' }
tono: hueso
---

## The problem

Someone at risk needs to ask for help in seconds, and the people who respond (psychologists and legal advocates) need to see that alert immediately and follow the case afterwards.

## What I built

Four roles with four different dashboards: **administrator, victim, psychologist and legal advocate**.

- **Floating panic button** with GPS location, a manual fallback when location isn't available, and a 10-second countdown before it sends automatically, so it can be cancelled.
- **Real-time alerts panel** so professionals can respond to and close cases.
- **Report management** by type of violence.

## How it's built

- **React 18, TypeScript and Tailwind**, with a feature-based architecture so each domain can grow independently.
- The backend is a Spring Boot API. An environment variable switches between **mock data and the real backend**, so the frontend could be built and demoed without depending on the server.
