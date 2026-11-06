/**
 * Malý náhled symbolu objektového typu (bod / linie / plocha) — společný
 * pro legendu DTM a hlavičky kategorií v Přehledu prvků, aby vypadaly
 * stejně. Vzhled podle stylu načtených dat (`resolveDataStyle`), legenda
 * velkou ikonou geometrie (`buildGeometryIcon`).
 */
import { endConnectors, offsetPolyline, pointsAlongLine, type ObjektovyTyp } from 'jvf-parser';
import { resolveDataStyle, tickWidthPx, type ResolvedStyle } from '../map/jvfLayers.js';
import { LINE_SYMBOLS } from '../map/lineSymbols.generated.js';
import { loadLineSymbol, partStrokePx } from '../map/lineSymbolShapes.js';

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

/**
 * URL značky pro náhled (legenda, panely): značky SŽ (`zxml/`) mají náhled
 * oříznutý na kresbu (`zxml/nahled/`) — rámec mapy je souměrný kolem
 * vkládacího bodu a u značek se stožárem by kresba zabrala jen polovinu.
 */
export function symbolPreviewUrl(path: string): string {
  return SVG_BASE + path.replace(/^zxml\//, 'zxml/nahled/');
}

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
      img.src = symbolPreviewUrl(s.pointSvg);
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

  // ŽXML: souběžné čáry, linie bez osy, značka opakovaná podél linie.
  if (hasLineExtras(s)) {
    const svg = svgEl('svg', { width: '24', height: '16', viewBox: '0 0 24 16', class: 'layer-symbol-line-svg' });
    svg.append(...lineWithExtras(s, [[0, 8], [24, 8]], 1.5, { offsetPx: 5, dashPx: 6, intervalPx: 10, sizePx: 6 }));
    return svg as unknown as HTMLElement;
  }

  // Linie se značkou (Katalog *_l_*.svg): úsek čáry, značka, úsek čáry.
  const stroke = opaque(s.strokeColor);
  if (s.lineSymbolSvg) {
    const svg = svgEl('svg', { width: '24', height: '16', viewBox: '0 0 24 16', class: 'layer-symbol-line-svg' });
    svg.append(...lineWithSymbol(s.lineSymbolSvg, stroke, 1.25, 24, 8, 12, 10, 2));
    return svg as unknown as HTMLElement;
  }

  // Plot — plná čára s příčkami.
  if (s.lineTicksMm) {
    const svg = svgEl('svg', { width: '24', height: '16', viewBox: '0 0 24 16', class: 'layer-symbol-line-svg' });
    svg.append(...lineWithTicks('M0 8 H24', stroke, 1.5, 7));
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
 * Vloží tvar značky (map/lineSymbolShapes — sdílený s mapou) do vnořeného
 * `<svg>` (místo `<image>`, aby šla řídit tloušťka tahů): hlavní čára značky
 * má `mainPx`, ostatní tahy poměr z Katalogu (tlustá čára VVTL, ZVN, stoky).
 * Tloušťka tak nezávisí na zmenšení značky a sedí s linií vedle.
 */
function mountSymbol(target: SVGSVGElement, file: string, mainPx: number, heightPx: number): void {
  void loadLineSymbol(file).then((shape) => {
    if (!shape) return;
    target.setAttribute('viewBox', shape.viewBox.join(' '));
    const pxPerUnit = heightPx / shape.viewBox[3];
    for (const part of shape.parts) {
      target.appendChild(svgEl('path', {
        d: part.d,
        fill: part.fill ?? 'none',
        ...(part.stroke
          ? {
              stroke: part.stroke,
              'stroke-width': partStrokePx(shape, part, mainPx, pxPerUnit).toFixed(2),
              'stroke-linecap': part.lineCap,
              'stroke-linejoin': part.lineJoin,
              'vector-effect': 'non-scaling-stroke',
            }
          : {}),
      }));
    }
  });
}

/**
 * Rovná linie se značkou v mezeře uprostřed (jak ji kreslí Katalog DTM ČR):
 * úsek čáry, mezera, značka, mezera, úsek čáry. Značka má zachovaný poměr
 * stran (nejvýš `maxW` × `maxH`) a sedí tak, aby její vlastní čára navazovala
 * na linii (`LINE_SYMBOLS` — zub plynovodu visí pod čarou, blesk nad ní).
 * Čáry linie i značky mají stejnou tloušťku `strokeWidth` (jako ostatní
 * linie v legendě a panelu vrstev).
 */
function lineWithSymbol(
  file: string,
  stroke: string,
  strokeWidth: number,
  width: number,
  y: number,
  maxW: number,
  maxH: number,
  gap: number,
): SVGElement[] {
  const { aspect, baseline } = LINE_SYMBOLS[file] ?? { aspect: 1, baseline: 0.5 };
  const h = Math.min(maxH, maxW / aspect);
  const w = h * aspect;
  const left = (width - w) / 2;
  const segment = (x1: number, x2: number): SVGElement =>
    svgEl('line', { x1: String(x1), y1: String(y), x2: String(x2), y2: String(y), stroke, 'stroke-width': strokeWidth.toFixed(2) });
  const symbol = svgEl('svg', {
    x: String(left),
    y: String(y - baseline * h),
    width: String(w),
    height: String(h),
    overflow: 'visible',
  });
  mountSymbol(symbol, file, strokeWidth, h);
  return [segment(0, left - gap), symbol, segment(left + w + gap, width)];
}

/**
 * Plná čára s příčkami (plot): základní tah a přes něj širší tah
 * s krátkými čárkami v rozestupu `gapPx` (jako mapa, viz `createTickStyle`).
 */
function lineWithTicks(d: string, stroke: string, strokeWidth: number, gapPx: number): SVGElement[] {
  const base = { d, fill: 'none', stroke, 'stroke-linejoin': 'round' };
  return [
    svgEl('path', { ...base, 'stroke-width': strokeWidth.toFixed(1) }),
    svgEl('path', {
      ...base,
      'stroke-width': tickWidthPx(strokeWidth).toFixed(1),
      'stroke-dasharray': `1.2 ${gapPx}`,
      'stroke-dashoffset': String(-gapPx / 2),
    }),
  ];
}

/** Má linie souběžné čáry, značku opakovanou podél linie nebo skrytou osu (ŽXML)? */
function hasLineExtras(s: ResolvedStyle): boolean {
  return Boolean(s.lineStrokes || s.lineRepeat || s.lineNoAxis);
}

interface ExtrasScale {
  /** Největší odsazení souběžné čáry v px náhledu. */
  offsetPx: number;
  /** Nejdelší úsek čárkování v px náhledu. */
  dashPx: number;
  intervalPx: number;
  sizePx: number;
}

/**
 * Linie ŽXML v náhledu: osa (není-li skrytá), souběžné čáry s odsazením
 * zmenšeným do náhledu (pořadí a strana jako v mapě), spojky na koncích
 * a značky opakované podél osy.
 */
function lineWithExtras(s: ResolvedStyle, pts: number[][], width: number, k: ExtrasScale): SVGElement[] {
  const toD = (line: number[][]): string => 'M' + line.map((q) => `${q[0]!.toFixed(1)} ${q[1]!.toFixed(1)}`).join(' L');
  const dash = (mm: number[] | undefined): Record<string, string> => {
    if (!mm || mm.length < 2) return {};
    const scale = k.dashPx / Math.max(...mm);
    return { 'stroke-dasharray': mm.map((v) => Math.max(1, v * scale).toFixed(1)).join(' ') };
  };
  const out: SVGElement[] = [];
  const base = { fill: 'none', 'stroke-linejoin': 'round' };
  if (!s.lineNoAxis) {
    out.push(svgEl('path', { ...base, d: toD(pts), stroke: opaque(s.strokeColor), 'stroke-width': width.toFixed(1), ...dash(s.lineDashMm) }));
  }
  const maxMm = Math.max(0, ...(s.lineStrokes ?? []).map((l) => Math.abs(l.offsetMm)));
  for (const l of s.lineStrokes ?? []) {
    // SVG má osu Y dolů — „vlevo ve směru linie" je záporné odsazení.
    const off = offsetPolyline(pts, maxMm > 0 ? (-l.offsetMm / maxMm) * k.offsetPx : 0);
    const d = [off, ...(l.endTicks ? endConnectors(pts, off) : [])].map(toD).join(' ');
    out.push(svgEl('path', {
      ...base,
      d,
      stroke: opaque(l.color),
      'stroke-width': Math.max(1, (width * l.widthPx) / Math.max(1, s.strokeWidthPx)).toFixed(1),
      ...dash(l.dashMm),
    }));
  }
  if (s.lineRepeat) {
    for (const p of pointsAlongLine(pts, k.intervalPx / 2, k.intervalPx)) {
      out.push(svgEl('image', {
        href: SVG_BASE + s.lineRepeat.svg,
        x: (p.x - k.sizePx / 2).toFixed(1),
        y: (p.y - k.sizePx / 2).toFixed(1),
        width: String(k.sizePx),
        height: String(k.sizePx),
        transform: `rotate(${((p.angle * 180) / Math.PI).toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)})`,
      }));
    }
  }
  return out;
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
        href: symbolPreviewUrl(s.pointSvg),
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
  if (hasLineExtras(s)) {
    const pts = [[8, 44], [32, 18], [58, 38], [88, 12]];
    svg.append(...lineWithExtras(s, pts, width, { offsetPx: 8, dashPx: 14, intervalPx: 22, sizePx: 12 }));
    return svg;
  }
  if (s.lineSymbolSvg) {
    // Rovná linie se značkou v mezeře uprostřed (jako mapa ČÚZK).
    svg.append(...lineWithSymbol(s.lineSymbolSvg, stroke, width, ICON_W, ICON_H / 2, 46, 20, 6));
    return svg;
  }
  if (s.lineTicksMm) {
    svg.append(...lineWithTicks('M8 44 L32 18 L58 38 L88 12', stroke, width, 9));
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
