---
titulo: Autocheckout
resumen: A self-checkout kiosk for convenience stores. It recognises products with a camera, checks their weight and takes payment with a QR code.
impacto: "Goal: a purchase in under 45 s. The full purchase is tested end to end with Playwright."
categorias: [universidad, web, backend]
stack: [Python, FastAPI, React, TypeScript, Vite, OpenCV, ONNX Runtime, Playwright]
destacado: true
orden: 3
repos:
  - { nombre: 'autocheckout-vision', url: 'https://github.com/Nakusuo/autocheckout-vision' }
portada: proyectos/autocheckout.webp
tono: tierra
icono: scan
---

## The problem

A convenience store has a single cashier who scans every item by hand. At peak hours people wait up to 8 minutes to buy one to three items, and many leave without buying. Regular self-checkout kiosks just move that scanning onto the customer.

## What it does

The customer places their items in front of the camera and the kiosk recognises them on its own. The goal is to finish a purchase in under 45 seconds.

- Recognition by similarity to a gallery of product photos (DINOv2 and colour), with no model training needed. It is ready to switch to YOLOv8 once there is a dataset of the catalogue.
- Optional scale that checks the weight (±5 g) to catch tampering.
- QR payment (simulated Yape/Plin) through a gateway that signs every response.
- Cashier panel with help requests, alerts for unrecognised items and today's sales.
- A simulator to run the demo step by step without a camera or scale.

## How it's built

- Kiosk API in Python with FastAPI. Vision runs on OpenCV and ONNX Runtime.
- A separate simulated payment gateway over HTTPS (TLS 1.3), with RS256-signed responses that the kiosk verifies.
- React, TypeScript and Vite interface, in portrait format for a touch screen.
- End-to-end tests with Playwright that walk through a full purchase with all three services.
- Every purchase is logged, and a script compares the results with the targets in the requirements document.
- A team project, built from a software requirements specification (SRS).
