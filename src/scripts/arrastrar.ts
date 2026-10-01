/**
 * Etiquetas que se pueden despegar y mover con el mouse o el dedo.
 * - Cada etiqueta lleva [data-arrastrable].
 * - Su contenedor lleva [data-grupo-arrastre]; dentro, un botón [data-repegar] las devuelve a su sitio.
 * El desplazamiento va en la propiedad `translate`, así no pisa el `transform` de la animación de pegado.
 */
export function activarArrastre() {
  document.querySelectorAll<HTMLElement>('[data-arrastrable]').forEach((etiqueta) => {
    let inicioX = 0;
    let inicioY = 0;
    let previo = { dx: etiqueta.dataset.dx, dy: etiqueta.dataset.dy, translate: '' };

    etiqueta.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      etiqueta.setPointerCapture(e.pointerId);
      etiqueta.classList.remove('volviendo');
      etiqueta.classList.add('agarrada');
      previo = { dx: etiqueta.dataset.dx, dy: etiqueta.dataset.dy, translate: etiqueta.style.translate };
      inicioX = e.clientX - Number(etiqueta.dataset.dx ?? 0);
      inicioY = e.clientY - Number(etiqueta.dataset.dy ?? 0);
    });

    etiqueta.addEventListener('pointermove', (e) => {
      if (!etiqueta.hasPointerCapture(e.pointerId)) return;
      const dx = e.clientX - inicioX;
      const dy = e.clientY - inicioY;
      etiqueta.dataset.dx = String(dx);
      etiqueta.dataset.dy = String(dy);
      etiqueta.style.translate = `${dx}px ${dy}px`;
    });

    const soltar = (e: PointerEvent) => {
      if (!etiqueta.hasPointerCapture(e.pointerId)) return;
      etiqueta.releasePointerCapture(e.pointerId);
      etiqueta.classList.remove('agarrada');
      if (etiqueta.dataset.dx || etiqueta.dataset.dy) {
        etiqueta.closest('[data-grupo-arrastre]')?.classList.add('movido');
      }
    };
    etiqueta.addEventListener('pointerup', soltar);
    // El navegador cancela cuando el dedo decide hacer scroll: la etiqueta vuelve a donde estaba
    etiqueta.addEventListener('pointercancel', () => {
      etiqueta.classList.remove('agarrada');
      if (previo.dx === undefined) delete etiqueta.dataset.dx;
      else etiqueta.dataset.dx = previo.dx;
      if (previo.dy === undefined) delete etiqueta.dataset.dy;
      else etiqueta.dataset.dy = previo.dy;
      etiqueta.style.translate = previo.translate;
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-repegar]').forEach((boton) => {
    boton.addEventListener('click', () => {
      const grupo = boton.closest('[data-grupo-arrastre]');
      grupo?.querySelectorAll<HTMLElement>('[data-arrastrable]').forEach((etiqueta) => {
        etiqueta.classList.add('volviendo');
        etiqueta.style.translate = '';
        delete etiqueta.dataset.dx;
        delete etiqueta.dataset.dy;
      });
      grupo?.classList.remove('movido');
    });
  });
}
