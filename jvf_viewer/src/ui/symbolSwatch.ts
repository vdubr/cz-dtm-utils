/**
 * Malý náhled symbolu objektového typu (bod / linie / plocha) — společný
 * pro legendu DTM a hlavičky kategorií v Přehledu prvků, aby vypadaly
 * stejně. Vzhled podle stylu načtených dat (`resolveDataStyle`), legenda
 * velkou ikonou geometrie (`buildGeometryIcon`).
 */
import type { ObjektovyTyp } from 'jvf-parser';
import { resolveDataStyle, type ResolvedStyle } from '../map/jvfLayers.js';

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

/** Konceptuální typ náhledu. */
export type SwatchKind = 'point' | 'line' | 'polygon';

/** Typ náhledu podle geometrie záznamů načteného objektového typu. */
export function swatchKindForObjektovyTyp(ot: ObjektovyTyp): SwatchKind {
  const types = new Set(ot.zaznamy.flatMap((z) => z.geometrie.map((g) => g.type)));
  if (types.has('Polygon')) return 'polygon';
  if (types.has('Point')) return 'point';
  return 'line';
}

/** Barva bez alfa přípony (`#rrggbbaa` → `#rrggbb`). */
function opaque(color: string): string {
  return color.length > 7 ? color.slice(0, 7) : color;
}

/** Element náhledu symbolu (16×16 / 24×16) pro daný styl a typ. */
export function buildStyleSwatch(s: ResolvedStyle, kind: SwatchKind): HTMLElement {
  if (kind === 'point') {
    if (s.pointSvg) {
      const img = document.createElement('img');
      img.src = SVG_BASE + s.pointSvg;
      img.width = 16;
      img.height = 16;
      img.className = 'layer-symbol-img';
      img.loading = 'lazy';
      img.alt = '';
      return img;
    }
    const span = document.createElement('span');
    span.className = 'layer-symbol-dot';
    span.style.background = s.strokeColor;
    return span;
  }

  if (kind === 'polygon') {
    const span = document.createElement('span');
    span.className = 'layer-symbol-polygon';
    // Výplň i s průhledností — plocha jen obrysem (OP, záměry) má jen nádech.
    span.style.background = s.fillColor;
    span.style.borderColor = opaque(s.strokeColor);
    return span;
  }

  // Linie se značkou (Katalog *_l_*.svg): úsek čáry, značka, úsek čáry.
  const stroke = opaque(s.strokeColor);
  if (s.lineSymbolSvg) {
    const svg = svgEl('svg', { width: '24', height: '16', viewBox: '0 0 24 16', class: 'layer-symbol-line-svg' });
    svg.append(...lineWithSymbol(s.lineSymbolSvg, stroke, 2, 24, 8, 14, 12));
    return svg as unknown as HTMLElement;
  }

  // Linie — s čárkováním jako SVG, jinak prostý pruh.
  if (s.lineDashMm && s.lineDashMm.length >= 2) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 16');
    svg.classList.add('layer-symbol-line-svg');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', '8');
    line.setAttribute('x2', '24');
    line.setAttribute('y2', '8');
    line.setAttribute('stroke', stroke);
    line.setAttribute('stroke-width', '2');
    // Nejdelší úsek vzoru ≈ 6 px, aby byl vzor v malém náhledu vidět.
    const maxMm = Math.max(...s.lineDashMm);
    const scale = maxMm > 0 ? 6 / maxMm : 1;
    line.setAttribute('stroke-dasharray', s.lineDashMm.map((v) => (v * scale).toFixed(1)).join(' '));
    svg.appendChild(line);
    return svg as unknown as HTMLElement;
  }
  const span = document.createElement('span');
  span.className = 'layer-symbol-line';
  span.style.background = stroke;
  return span;
}

const SVG_NS = 'http://www.w3.org/2000/svg';

/** SVG prvek s atributy. */
function svgEl<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string>): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

/** Barva `#rrggbb[aa]` → barva + průhlednost pro SVG atributy. */
function colorWithOpacity(color: string): { color: string; opacity: string } {
  if (/^#[0-9a-f]{8}$/i.test(color)) {
    return { color: color.slice(0, 7), opacity: (parseInt(color.slice(7), 16) / 255).toFixed(3) };
  }
  return { color, opacity: '1' };
}

/** Relativní jas barvy `#rrggbb` (0 = černá, 1 = bílá). */
function luminance(color: string): number {
  const m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(color);
  if (!m) return 0;
  const [r, g, b] = [m[1]!, m[2]!, m[3]!].map((h) => parseInt(h, 16) / 255);
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

/**
 * Rovná linie se značkou v mezeře uprostřed (jak ji kreslí Katalog DTM ČR):
 * úsek čáry, značka (`symbolW` × `symbolH`, poměr stran zachovaný), úsek čáry.
 */
function lineWithSymbol(
  file: string,
  stroke: string,
  strokeWidth: number,
  width: number,
  y: number,
  symbolW: number,
  symbolH: number,
): SVGElement[] {
  const gapStart = (width - symbolW) / 2;
  const segment = (x1: number, x2: number): SVGElement =>
    svgEl('line', { x1: String(x1), y1: String(y), x2: String(x2), y2: String(y), stroke, 'stroke-width': String(strokeWidth) });
  return [
    segment(0, gapStart),
    svgEl('image', {
      href: SVG_BASE + file,
      x: String(gapStart),
      y: String(y - symbolH / 2),
      width: String(symbolW),
      height: String(symbolH),
      preserveAspectRatio: 'xMidYMid meet',
    }),
    segment(gapStart + symbolW, width),
  ];
}

/** Rozměr ikony geometrie (viewBox) — dlaždice legendy DTM. */
const ICON_W = 96;
const ICON_H = 56;

/**
 * Velký náhled ve tvaru geometrie (dlaždice legendy DTM): bod = značka
 * uprostřed, linie = lomená čára, plocha = nepravidelný mnohoúhelník — vše
 * v barvě, tloušťce a čárkování reprezentativního stylu.
 */
export function buildGeometryIcon(
  s: ResolvedStyle,
  kind: SwatchKind,
  /** Velikost značky bodu v px (definiční bod je v mapě drobná značka). */
  pointSize = 36,
): SVGSVGElement {
  const svg = svgEl('svg', {
    viewBox: `0 0 ${ICON_W} ${ICON_H}`,
    width: String(ICON_W),
    height: String(ICON_H),
    class: 'legend-geom-icon',
    'aria-hidden': 'true',
  });
  const stroke = opaque(s.strokeColor);

  if (kind === 'point') {
    if (s.pointSvg) {
      svg.appendChild(svgEl('image', {
        href: SVG_BASE + s.pointSvg,
        x: String(ICON_W / 2 - pointSize / 2),
        y: String(ICON_H / 2 - pointSize / 2),
        width: String(pointSize),
        height: String(pointSize),
      }));
    } else {
      const r = Math.min(6, pointSize / 2);
      svg.appendChild(svgEl('circle', { cx: String(ICON_W / 2), cy: String(ICON_H / 2), r: String(r), fill: stroke }));
    }
    return svg;
  }

  if (kind === 'polygon') {
    const fill = colorWithOpacity(s.fillColor);
    const d = 'M14 46 L20 14 L52 8 L82 20 L76 48 L42 50 Z';
    svg.appendChild(svgEl('path', {
      d,
      fill: fill.color,
      'fill-opacity': fill.opacity,
      stroke,
      'stroke-width': Math.min(3, Math.max(1, s.strokeWidthPx)).toFixed(1),
      'stroke-linejoin': 'round',
    }));
    // Velmi světlá plocha (bílá, světle šedá) by na světlém podkladu
    // dlaždice zanikla — jemný neutrální obrys jen pro čitelnost legendy.
    if (luminance(stroke) > 0.82) {
      svg.appendChild(svgEl('path', {
        d,
        fill: 'none',
        stroke: '#5f6368',
        'stroke-opacity': '0.45',
        'stroke-width': '1',
        'stroke-dasharray': '3 2',
        'stroke-linejoin': 'round',
      }));
    }
    return svg;
  }

  const width = Math.min(6, Math.max(1.5, s.strokeWidthPx * 1.4));
  if (s.lineSymbolSvg) {
    // Rovná linie se značkou v mezeře uprostřed (jako mapa ČÚZK).
    svg.append(...lineWithSymbol(s.lineSymbolSvg, stroke, width, ICON_W, ICON_H / 2, 34, 22));
    return svg;
  }
  const line = svgEl('path', {
    d: 'M8 44 L32 18 L58 38 L88 12',
    fill: 'none',
    stroke,
    'stroke-width': width.toFixed(1),
    'stroke-linejoin': 'round',
  });
  if (s.lineDashMm && s.lineDashMm.length >= 2) {
    // Nejdelší úsek vzoru ≈ 14 px, aby byl vzor na dlaždici čitelný.
    const maxMm = Math.max(...s.lineDashMm);
    const scale = maxMm > 0 ? 14 / maxMm : 1;
    line.setAttribute('stroke-dasharray', s.lineDashMm.map((v) => Math.max(1.5, v * scale).toFixed(1)).join(' '));
  }
  svg.appendChild(line);
  return svg;
}

/** Náhled symbolu v obalu `.legend-swatch` (stejné rozměry jako v legendě). */
export function buildLegendSwatchFor(ot: ObjektovyTyp, kind = swatchKindForObjektovyTyp(ot)): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'legend-swatch';
  // Značka podle načtených dat (u variant podle atributu nejčastější hodnota).
  wrap.appendChild(buildStyleSwatch(resolveDataStyle(ot).style, kind));
  return wrap;
}
