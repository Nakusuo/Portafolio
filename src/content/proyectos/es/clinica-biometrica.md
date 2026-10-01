---
titulo: Clínica Biométrica
resumen: Telemedicina con inicio de sesión por reconocimiento facial, citas, expedientes y videollamadas.
rol: Backend y frontend
categorias: [web, backend, universidad]
stack: [Python, FastAPI, PostgreSQL, Docker, Angular, TypeScript]
destacado: true
orden: 5
repos:
  - { nombre: 'Backend-ClinicaBiometrica', url: 'https://github.com/Nakusuo/Backend-ClinicaBiometrica' }
  - { nombre: 'Frontend-ClinicaBiometrica', url: 'https://github.com/Nakusuo/Frontend-ClinicaBiometrica' }
tono: tierra
icono: heartbeat
---

## El problema

Un portal de telemedicina junta en un solo lugar la agenda, la historia clínica y la consulta a distancia. Este además permite entrar con reconocimiento facial.

## Qué construí

- API de telemedicina: pacientes, doctores, citas y expedientes.
- Autenticación con JWT y un endpoint de inicio de sesión facial.
- Portal web con gestión de citas y videollamadas por WebRTC.

## Cómo está hecho

- Backend en FastAPI y PostgreSQL, documentado en Swagger desde el primer commit y empaquetado con Docker.
- Frontend en Angular 16 con Angular Material.
