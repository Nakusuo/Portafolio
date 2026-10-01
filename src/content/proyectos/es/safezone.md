---
titulo: SafeZone
resumen: Plataforma de apoyo a víctimas de violencia, con botón de pánico por GPS y alertas en tiempo real.
rol: Frontend y arquitectura
categorias: [web, universidad]
stack: [React, TypeScript, Tailwind, Spring Boot]
destacado: true
orden: 4
repos:
  - { nombre: 'SafeZone_Frontend', url: 'https://github.com/Nakusuo/SafeZone_Frontend' }
tono: hueso
---

## El problema

Una persona en riesgo necesita pedir ayuda en segundos, y quienes la atienden (psicólogas y defensores legales) necesitan ver ese aviso en el momento y llevar el caso después.

## Qué construí

Cuatro roles con cuatro dashboards distintos: **administradora, víctima, psicóloga y defensor legal**.

- **Botón de pánico flotante** con geolocalización por GPS, una alternativa manual si no hay ubicación y una cuenta atrás de 10 segundos antes del envío automático, para poder cancelarlo.
- **Panel de alertas en tiempo real** para que las profesionales atiendan y cierren casos.
- **Gestión de denuncias** por tipo de violencia.

## Cómo está hecho

- **React 18, TypeScript y Tailwind**, con una arquitectura organizada por funcionalidades para que cada dominio crezca por separado.
- El backend es una API en Spring Boot. Una variable de entorno cambia entre **datos simulados y backend real**, así el frontend se pudo desarrollar y mostrar sin depender del servidor.
