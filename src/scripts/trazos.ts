// Reconocedor de trazos de un solo golpe ($1 Unistroke, Wobbrock et al. 2007).
// Compara el dibujo contra plantillas: no necesita entrenamiento ni librerías.

export interface Punto {
  x: number;
  y: number;
}

const N = 64;
const TAMANO = 250;
const MEDIA_DIAGONAL = 0.5 * Math.sqrt(2 * TAMANO * TAMANO);
const RANGO = (45 * Math.PI) / 180;
const PASO = (2 * Math.PI) / 180;
const PHI = 0.5 * (-1 + Math.sqrt(5));

const distancia = (a: Punto, b: Punto) => Math.hypot(b.x - a.x, b.y - a.y);

function largo(pts: Punto[]) {
  let d = 0;
  for (let i = 1; i < pts.length; i++) d += distancia(pts[i - 1], pts[i]);
  return d;
}

function centro(pts: Punto[]): Punto {
  const s = pts.reduce((a, p) => ({ x: a.x + p.x, y: a.y + p.y }), { x: 0, y: 0 });
  return { x: s.x / pts.length, y: s.y / pts.length };
}

function remuestrear(entrada: Punto[]): Punto[] {
  const pts = entrada.map((p) => ({ ...p }));
  const intervalo = largo(pts) / (N - 1);
  const salida = [pts[0]];
  let acumulado = 0;
  for (let i = 1; i < pts.length; i++) {
    const d = distancia(pts[i - 1], pts[i]);
    if (acumulado + d >= intervalo && d > 0) {
      const t = (intervalo - acumulado) / d;
      const q = { x: pts[i - 1].x + t * (pts[i].x - pts[i - 1].x), y: pts[i - 1].y + t * (pts[i].y - pts[i - 1].y) };
      salida.push(q);
      pts.splice(i, 0, q);
      acumulado = 0;
    } else {
      acumulado += d;
    }
  }
  while (salida.length < N) salida.push(pts[pts.length - 1]);
  return salida.slice(0, N);
}

function rotar(pts: Punto[], angulo: number): Punto[] {
  const c = centro(pts);
  const cos = Math.cos(angulo);
  const sin = Math.sin(angulo);
  return pts.map((p) => ({
    x: (p.x - c.x) * cos - (p.y - c.y) * sin + c.x,
    y: (p.x - c.x) * sin + (p.y - c.y) * cos + c.y,
  }));
}

function normalizar(entrada: Punto[]): Punto[] {
  let pts = remuestrear(entrada);
  const c = centro(pts);
  pts = rotar(pts, -Math.atan2(c.y - pts[0].y, c.x - pts[0].x));
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const ancho = Math.max(...xs) - Math.min(...xs) || 1;
  const alto = Math.max(...ys) - Math.min(...ys) || 1;
  pts = pts.map((p) => ({ x: (p.x * TAMANO) / ancho, y: (p.y * TAMANO) / alto }));
  const c2 = centro(pts);
  return pts.map((p) => ({ x: p.x - c2.x, y: p.y - c2.y }));
}

function distanciaRuta(a: Punto[], b: Punto[]) {
  let d = 0;
  for (let i = 0; i < a.length; i++) d += distancia(a[i], b[i]);
  return d / a.length;
}

function mejorAngulo(pts: Punto[], plantilla: Punto[]) {
  let a = -RANGO;
  let b = RANGO;
  let x1 = PHI * a + (1 - PHI) * b;
  let f1 = distanciaRuta(rotar(pts, x1), plantilla);
  let x2 = (1 - PHI) * a + PHI * b;
  let f2 = distanciaRuta(rotar(pts, x2), plantilla);
  while (Math.abs(b - a) > PASO) {
    if (f1 < f2) {
      b = x2;
      x2 = x1;
      f2 = f1;
      x1 = PHI * a + (1 - PHI) * b;
      f1 = distanciaRuta(rotar(pts, x1), plantilla);
    } else {
      a = x1;
      x1 = x2;
      f1 = f2;
      x2 = (1 - PHI) * a + PHI * b;
      f2 = distanciaRuta(rotar(pts, x2), plantilla);
    }
  }
  return Math.min(f1, f2);
}

// Plantillas dibujadas con puntos. Cada forma va en los dos sentidos de trazo.
const poligono = (vertices: [number, number][]) => {
  const pts: Punto[] = [];
  for (let i = 0; i < vertices.length - 1; i++) {
    const [x1, y1] = vertices[i];
    const [x2, y2] = vertices[i + 1];
    for (let t = 0; t < 1; t += 0.1) pts.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
  }
  const [x, y] = vertices[vertices.length - 1];
  pts.push({ x, y });
  return pts;
};

const circulo = Array.from({ length: 40 }, (_, i) => {
  const a = -Math.PI / 2 + (i / 39) * 2 * Math.PI;
  return { x: Math.cos(a) * 100, y: Math.sin(a) * 100 };
});

export type Forma = 'circulo' | 'cuadrado' | 'triangulo' | 'check' | 'zigzag';

const formas: [Forma, Punto[]][] = [
  ['circulo', circulo],
  ['cuadrado', poligono([[0, 0], [0, 100], [100, 100], [100, 0], [0, 0]])],
  ['cuadrado', poligono([[0, 0], [100, 0], [100, 100], [0, 100], [0, 0]])],
  ['triangulo', poligono([[50, 0], [0, 90], [100, 90], [50, 0]])],
  ['triangulo', poligono([[0, 90], [100, 90], [50, 0], [0, 90]])],
  ['check', poligono([[0, 50], [35, 90], [100, 0]])],
  ['zigzag', poligono([[0, 0], [100, 0], [0, 100], [100, 100]])],
  ['zigzag', poligono([[0, 20], [33, 80], [66, 20], [100, 80]])],
];

const plantillas = formas.flatMap(([nombre, pts]) => [
  { nombre, pts: normalizar(pts) },
  { nombre, pts: normalizar([...pts].reverse()) },
]);

/** Devuelve la forma más parecida y una puntuación de 0 a 1. */
export function reconocer(trazo: Punto[]): { forma: Forma; puntuacion: number } | null {
  if (trazo.length < 8 || largo(trazo) < 40) return null;
  const pts = normalizar(trazo);
  let mejor = { forma: plantillas[0].nombre, d: Infinity };
  for (const p of plantillas) {
    const d = mejorAngulo(pts, p.pts);
    if (d < mejor.d) mejor = { forma: p.nombre, d };
  }
  return { forma: mejor.forma, puntuacion: 1 - mejor.d / MEDIA_DIAGONAL };
}
