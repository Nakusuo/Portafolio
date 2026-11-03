---
titulo: Autocheckout
resumen: Quiosco de auto-cobro para tiendas de conveniencia. Reconoce los productos con la cámara, valida el peso y cobra con un QR.
impacto: "Meta: una compra en menos de 45 s. La compra completa se prueba de punta a punta con Playwright."
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

## El problema

En una tienda de conveniencia hay un solo cajero, que escanea cada producto a mano. En horas punta la espera llega a 8 minutos por compras de uno a tres productos, y mucha gente se va sin comprar. Los quioscos de auto-cobro de siempre solo trasladan ese escaneo al cliente.

## Qué hace

El cliente deja sus productos frente a la cámara y el quiosco los reconoce solo. La meta es cerrar una compra en menos de 45 segundos.

- Reconocimiento por parecido con una galería de fotos de cada producto (DINOv2 y color), sin tener que entrenar un modelo. Está listo para cambiar a YOLOv8 cuando haya dataset del catálogo.
- Balanza opcional que valida el peso (±5 g) para detectar trampas.
- Pago con QR (Yape/Plin simulados) mediante una pasarela que firma cada respuesta.
- Panel de caja con pedidos de ayuda, alertas de productos no reconocidos y ventas del día.
- Simulador para presentar la demo paso a paso sin cámara ni balanza.

## Cómo está hecho

- API del quiosco en Python con FastAPI. La visión corre con OpenCV y ONNX Runtime.
- Pasarela de pago simulada aparte, por HTTPS (TLS 1.3) y con respuestas firmadas con RS256 que el quiosco verifica.
- Interfaz en React, TypeScript y Vite, en formato vertical para pantalla táctil.
- Pruebas de punta a punta con Playwright que recorren la compra completa con los tres servicios.
- Cada compra queda registrada y un script la compara con las metas del documento de requisitos.
- Proyecto en equipo, a partir de un documento de requisitos (SRS).
