---
titulo: paltishop.store
resumen: Tienda de regalos armados y personalizados, pensada para quien llega desde TikTok o Instagram con el celular.
rol: Diseño y desarrollo completo
categorias: [clientes, web]
stack: [HTML, CSS, JavaScript, PHP, MySQL]
destacado: true
orden: 2
privado: true
demo: https://paltishop.store
portada: proyectos/paltishop.webp
tono: tierra
---

## El problema

Paltishop vende regalos armados a mano: packs en caja con peluche, flores, joyería o lámparas, con los colores y la dedicatoria que elige quien compra. Casi todas las visitas llegan desde el celular, después de ver un video en TikTok o Instagram, y quieren decidir rápido **qué regalar, cuánto cuesta y cuándo llega**.

## Qué construí

- **Catálogo por categorías** y ficha de producto con opciones de color, modelo y dedicatoria.
- **Carrito con datos de entrega** y, con el mismo peso, **pedido por WhatsApp** con el mensaje ya escrito.
- **Pagos locales**: tarjeta, Yape, Plin y contraentrega.
- **Seguimiento de pedido**, favoritos y **reseñas con foto** de clientas recibiendo su caja.
- Libro de reclamaciones y páginas legales.

## Cómo está hecho

- **HTML, CSS y JavaScript sin framework** para que cargue rápido con datos móviles.
- **API y panel de administración en PHP sobre MySQL**, en un VPS propio.
- **PWA con service worker**: cada cambio de estilos o scripts sube la versión de caché para que nadie se quede con una versión vieja.
- Los pedidos, productos, stock y cupones se gestionan desde Central, el panel que hice para las tiendas.
