---
titulo: Central
resumen: Panel que administra tres tiendas de regalos desde un solo lugar y se sincroniza con sus webs cada minuto.
rol: Diseño, frontend, backend y despliegue
categorias: [clientes, web, backend]
stack: [Next.js, React, TypeScript, SQLite, MySQL, Node.js]
destacado: true
orden: 1
privado: true
tono: oliva
icono: storefront
---

## El problema

Tres tiendas de regalos llevaban sus pedidos y su caja en Poscake (Pancake POS), y cada web tenía su propio catálogo, stock y cupones. Para saber qué faltaba enviar, cuánto se había cobrado o si quedaba stock de un pack había que mirar en varios sitios y copiar datos a mano.

## Qué construí

Central es una aplicación aparte, con su propio dominio, que reemplaza a Poscake y se vuelve la fuente de verdad del negocio:

- Pedidos de punta a punta: pago por verificar, por cobrar, por enviar, en camino, en agencia, incidencias, contraentrega, devoluciones, cambios y cancelaciones.
- Envíos por agencia, con rastreo en línea donde la agencia lo permite.
- Catálogo, packs, stock y códigos de descuento compartidos entre tiendas.
- Clientes y reportes, con cuentas y roles para el equipo.
- Notificaciones push en el celular cuando entra un pedido.

## Cómo está hecho

- Next.js 15 con App Router, React 19 y TypeScript, con CSS Modules y sin librerías de componentes.
- Base de datos en `node:sqlite`, para no depender de módulos nativos. `sharp` procesa las imágenes del catálogo.
- Sincronización en los dos sentidos: un proceso trae cada minuto lo nuevo y lo cambiado de las bases MySQL de cada web. Escribir en las webs exige un permiso explícito y hace un respaldo antes.
- Pruebas con el test runner de Node y pruebas de punta a punta en navegador. Una semilla genera pedidos inventados en todas las etapas para probar sin datos reales de clientes.

## Cómo trabajamos

El dueño toma las decisiones visuales: antes de cambiar algo que se ve, le muestro opciones. Las versiones salen pequeñas y seguido: se aprueban en `develop`, pasan por una rama `release/` etiquetada y solo `main` llega al servidor.
