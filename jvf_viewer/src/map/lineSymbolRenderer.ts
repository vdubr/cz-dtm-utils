/**
 * Kreslení značek vložených do linií (Katalog DTM ČR) na canvas — vlastní
 * renderer stylu linie v mapě (map/jvfLayers.ts).
 *
 * - Linie s čárkováním (elektrické vedení [36, 7] mm, plynovod [36, 8] mm,
 *   osa PK [60, 5] mm, …): značka do středu každé mezery vzoru, jako mapa ČÚZK.
 * - Linie bez čárkování nebo s drobným tečkováním (zábradlí, lanové dráhy):
 *   značky v pravidelném rozestupu na nepřerušené čáře.
 *
 * Velikost značky je její nativní velikost z Katalogu (1 SVG jednotka =
 * 0,01 mm papíru, jako bodové značky) — blesk 6,1 mm do mezery 7 mm,
 * „S I" 3,8 mm do 5 mm; volající ji převede na px podle rozlišení.
 *
 * Značka je natočená podle směru úseku a posazená tak, aby její vlastní čára
 * ležela na linii (úroveň čáry z `LINE_SYMBOLS`); tahy mají tloušťku linie.
 * Texty tříd silnic („S I") se drží hlavou nahoru.
 */
import { isUprightSymbol, partStrokePx, type LineSymbolShape } from './lineSymbolShapes.js';

export interface LineSymbolDrawOptions {
  shape: LineSymbolShape;
  /** Tloušťka linie v px canvasu (hlavní čára značky ji převezme). */
  linePx: number;
  /**
   * Vzor čárkování v px canvasu (stejný jako tah linie), značky do mezer.
   * Bez vzoru → pravidelné rozestupy (`intervalPx`).
   */
  dashPx?: number[];
  /** Rozestup značek na nepřerušené čáře (px canvasu). */
  intervalPx: number;
  /** Šířka značky (px canvasu) — nativní velikost z Katalogu. */
  widthPx: number;
  /**
   * Užší značku nekreslit (px canvasu) — při oddálení by byla nečitelná.
   * Pro úzké značky (puntík, „S I") se mez úměrně zmenší (4 px × poměr stran).
   */
  minWidthPx: number;
}

/** Nejvýš tolik mezery čárkování značka vyplní (zbytek = rozestup od čáry). */
const MAX_GAP_FILL = 0.9;

/** Poloha a směr bodu ve vzdálenosti `dist` podél lomené čáry. */
function pointAlong(coords: number[][], cumulative: number[], dist: number): [number, number, number] | null {
  for (let i = 1; i < coords.length; i++) {
    if (cumulative[i]! < dist) continue;
    const a = coords[i - 1]!;
    const b = coords[i]!;
    const segLen = cumulative[i]! - cumulative[i - 1]!;
    if (segLen <= 0) continue;
    const t = (dist - cumulative[i - 1]!) / segLen;
    return [a[0]! + (b[0]! - a[0]!) * t, a[1]! + (b[1]! - a[1]!) * t, Math.atan2(b[1]! - a[1]!, b[0]! - a[0]!)];
  }
  return null;
}

/** Nakreslí jednu značku: střed na (x, y), úroveň čáry na linii, natočenou `angle`. */
function drawSymbol(
  ctx: CanvasRenderingContext2D,
  shape: LineSymbolShape,
  x: number,
  y: number,
  angle: number,
  heightPx: number,
  linePx: number,
): void {
  const [vx, vy, vw, vh] = shape.viewBox;
  const k = heightPx / vh;
  let rot = angle;
  // Text drží hlavou nahoru (směr linie zprava doleva → otočit o 180°).
  if (isUprightSymbol(shape) && Math.abs(angle) > Math.PI / 2) rot += Math.PI;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(k, k);
  ctx.translate(-(vx + vw / 2), -(vy + shape.metrics.baseline * vh));
  for (const part of shape.parts) {
    const path = new Path2D(part.d);
    if (part.fill) {
      ctx.fillStyle = part.fill;
      ctx.fill(path);
    }
    if (part.stroke) {
      ctx.strokeStyle = part.stroke;
      ctx.lineCap = part.lineCap;
      ctx.lineJoin = part.lineJoin;
      // Tloušťka v px canvasu → jednotky viewBoxu (canvas je zmenšený o k).
      ctx.lineWidth = partStrokePx(shape, part, linePx, k) / k;
      ctx.stroke(path);
    }
  }
  ctx.restore();
}

/**
 * Nakreslí značky podél lomené čáry `coords` (px canvasu). Vrací počet
 * nakreslených značek (test, ladění).
 */
export function drawLineSymbols(ctx: CanvasRenderingContext2D, coords: number[][], o: LineSymbolDrawOptions): number {
  if (coords.length < 2) return 0;
  const cumulative = [0];
  for (let i = 1; i < coords.length; i++) {
    const a = coords[i - 1]!;
    const b = coords[i]!;
    cumulative.push(cumulative[i - 1]! + Math.hypot(b[0]! - a[0]!, b[1]! - a[1]!));
  }
  const total = cumulative[cumulative.length - 1]!;
  const { aspect } = o.shape.metrics;

  // Mezera vzoru, do které patří značka (největší liché pole vzoru).
  let offset: number;
  let period: number;
  let width = o.widthPx;
  const dash = o.dashPx && o.dashPx.length >= 2 ? o.dashPx : undefined;
  if (dash) {
    let gapIdx = 1;
    for (let i = 3; i < dash.length; i += 2) if (dash[i]! > dash[gapIdx]!) gapIdx = i;
    period = dash.reduce((s, v) => s + v, 0);
    offset = dash.slice(0, gapIdx).reduce((s, v) => s + v, 0) + dash[gapIdx]! / 2;
    width = Math.min(width, dash[gapIdx]! * MAX_GAP_FILL);
  } else {
    period = o.intervalPx;
    offset = o.intervalPx / 2;
  }
  const minWidth = Math.min(o.minWidthPx, (o.minWidthPx / 3) * aspect);
  if (width < minWidth || period <= 0) return 0;
  const height = width / aspect;

  let count = 0;
  for (let d = offset; d < total; d += period) {
    const p = pointAlong(coords, cumulative, d);
    if (!p) break;
    drawSymbol(ctx, o.shape, p[0], p[1], p[2], height, o.linePx);
    count++;
  }
  return count;
}
