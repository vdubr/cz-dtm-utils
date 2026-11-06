/**
 * Tvary značek vložených do linií (Katalog DTM ČR, `*_l_*.svg`) jako
 * vektorové cesty — sdílí je mapa (kreslení na canvas, map/lineSymbolRenderer)
 * i náhledy v legendě a panelu vrstev (ui/symbolSwatch). Kreslí se jako
 * cesty, ne obrázek, aby tahy značky šlo kreslit stejně tlustě jako linii.
 *
 * SVG se načte jednou (fetch), rozebere na cesty a sdílí se.
 */
import { LINE_SYMBOLS, type LineSymbolMetrics } from './lineSymbols.generated.js';

/** Jedna cesta značky (barvy a tloušťka v jednotkách viewBoxu). */
export interface LineSymbolPart {
  /** Data cesty (SVG `d`), kruh převedený na oblouky. */
  d: string;
  /** Výplň, `null` = bez výplně. */
  fill: string | null;
  /** Barva tahu, `null` = bez tahu. */
  stroke: string | null;
  strokeWidth: number;
  lineCap: CanvasLineCap;
  lineJoin: CanvasLineJoin;
}

export interface LineSymbolShape {
  file: string;
  /** viewBox: x, y, šířka, výška. */
  viewBox: [number, number, number, number];
  parts: LineSymbolPart[];
  /** Úroveň čáry a poměr stran (generováno — scripts/viewer/build-line-symbols.py). */
  metrics: LineSymbolMetrics;
}

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;
const loading = new Map<string, Promise<LineSymbolShape | null>>();
const loaded = new Map<string, LineSymbolShape | null>();

function attr(el: Element, name: string): string | null {
  return el.getAttribute(name);
}

function partOf(el: Element): LineSymbolPart | null {
  let d: string | null;
  if (el.tagName === 'circle') {
    const cx = Number(attr(el, 'cx') ?? 0);
    const cy = Number(attr(el, 'cy') ?? 0);
    const r = Number(attr(el, 'r') ?? 0);
    d = `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
  } else {
    d = attr(el, 'd');
  }
  if (!d) return null;
  const fill = attr(el, 'fill');
  const stroke = attr(el, 'stroke');
  return {
    d,
    // Výchozí výplň SVG je černá (text tříd silnic, puntík zábradlí).
    fill: fill === 'none' ? null : (fill ?? '#000000'),
    stroke: stroke && stroke !== 'none' ? stroke : null,
    strokeWidth: Number(attr(el, 'stroke-width') ?? 1),
    lineCap: (attr(el, 'stroke-linecap') as CanvasLineCap | null) ?? 'butt',
    lineJoin: (attr(el, 'stroke-linejoin') as CanvasLineJoin | null) ?? 'miter',
  };
}

function parse(file: string, text: string): LineSymbolShape | null {
  const root = new DOMParser().parseFromString(text, 'image/svg+xml').documentElement;
  const vb = (root.getAttribute('viewBox') ?? '').split(/[\s,]+/).map(Number);
  if (vb.length !== 4 || vb.some((v) => !Number.isFinite(v))) return null;
  const parts = Array.from(root.querySelectorAll('path, circle'))
    .map(partOf)
    .filter((p): p is LineSymbolPart => p !== null);
  return {
    file,
    viewBox: vb as [number, number, number, number],
    parts,
    metrics: LINE_SYMBOLS[file] ?? { aspect: vb[2]! / vb[3]!, baseline: 0.5, stroke: 0, width: vb[2]! },
  };
}

/** Načte tvar značky (jednou; další volání vrací stejný Promise). */
export function loadLineSymbol(file: string): Promise<LineSymbolShape | null> {
  let p = loading.get(file);
  if (!p) {
    p = fetch(SVG_BASE + file)
      .then((r) => (r.ok ? r.text() : ''))
      .then((text) => (text ? parse(file, text) : null))
      .catch(() => null)
      .then((shape) => {
        loaded.set(file, shape);
        return shape;
      });
    loading.set(file, p);
  }
  return p;
}

/** Už načtený tvar značky (synchronně, pro kreslení), jinak `undefined`. */
export function getLineSymbol(file: string): LineSymbolShape | null | undefined {
  return loaded.get(file);
}

/**
 * Tloušťka tahu části značky v px tak, aby hlavní čára značky měla `linePx`
 * (jako linie vedle) a ostatní tahy poměr z Katalogu (tlustá čára VVTL, ZVN).
 * Značka bez hlavní čáry (`metrics.stroke` 0) má tahy úměrné své velikosti.
 */
export function partStrokePx(shape: LineSymbolShape, part: LineSymbolPart, linePx: number, symbolPxPerUnit: number): number {
  const mainUnits = shape.metrics.stroke * shape.viewBox[3];
  if (mainUnits <= 0) return part.strokeWidth * symbolPxPerUnit;
  // Tenké tahy (šipky stoky vedle tlusté čáry) nejméně 60 % linie — jinak by zanikly.
  return Math.max((part.strokeWidth / mainUnits) * linePx, 0.6 * linePx);
}

/** Značka bez vlastní čáry, jen výplň (text třídy silnice, puntík) — kreslí se vždy hlavou nahoru. */
export function isUprightSymbol(shape: LineSymbolShape): boolean {
  return shape.parts.every((p) => p.stroke === null);
}
