---
titulo: Central
resumen: A dashboard that runs three gift shops from one place and syncs with their websites every minute.
rol: Design, frontend, backend and deployment
categorias: [clientes, web, backend]
stack: [Next.js, React, TypeScript, SQLite, MySQL, Node.js]
destacado: true
orden: 1
privado: true
tono: oliva
---

## The problem

Three gift shops tracked orders and payments in Poscake (Pancake POS), while each website kept its own catalog, stock and coupons. Knowing what still had to ship, how much had been collected or whether a pack was in stock meant checking several places and copying data by hand.

## What I built

**Central** is a standalone app on its own domain that replaces Poscake and becomes the business's source of truth:

- **End-to-end orders**: payment to verify, to collect, to ship, in transit, at the courier, incidents, cash on delivery, returns, exchanges and cancellations.
- **Shipping** through couriers, with online tracking where the courier supports it.
- **Catalog, packs, stock and discount codes** shared across shops.
- **Customers and reports**, with accounts and roles for the team.
- **Push notifications** on the phone when an order comes in.

## How it's built

- **Next.js 15 with the App Router, React 19 and TypeScript**, using CSS Modules and no component library.
- **Database on `node:sqlite`**, so there are no native modules to compile. `sharp` processes catalog images.
- **Two-way sync**: a process pulls new and changed data from each website's MySQL database every minute. Writing back to the websites requires explicit permission and takes a backup first.
- **Tests** with Node's test runner plus end-to-end browser tests. A seed script generates fake orders in every stage so nothing is tested on real customer data.

## How we work

The owner makes the visual calls: before changing anything people will see, I show options. Releases are small and frequent: approved on `develop`, cut into a tagged `release/` branch, and only `main` reaches the server.
