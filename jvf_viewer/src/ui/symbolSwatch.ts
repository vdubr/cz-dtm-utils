/**
 * Malý náhled symbolu objektového typu (bod / linie / plocha) — společný
 * pro legendu DTM a hlavičky kategorií v Přehledu prvků, aby vypadaly
 * stejně. Vzhled podle reprezentativního stylu (`resolveRepresentativeStyle`).
 */
import type { ObjektovyTyp } from 'jvf-parser';
import { resolveRepresentativeStyle, type ResolvedStyle } from '../map/jvfLayers.js';

const SVG_BASE = './symboly/';

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
    span.style.background = opaque(s.fillColor);
    span.style.borderColor = opaque(s.strokeColor);
    return span;
  }

  // Linie — s čárkováním jako SVG, jinak prostý pruh.
  const stroke = opaque(s.strokeColor);
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

/** Náhled symbolu v obalu `.legend-swatch` (stejné rozměry jako v legendě). */
export function buildLegendSwatchFor(ot: ObjektovyTyp, kind = swatchKindForObjektovyTyp(ot)): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'legend-swatch';
  wrap.appendChild(buildStyleSwatch(resolveRepresentativeStyle(ot), kind));
  return wrap;
}
