// Legend modal — zobrazí kompletní legendu všech objektových typů z ENTITY_CATALOG
// s reprezentativním swatch (point/line/polygon) podle stylu z Katalogu DTM.

import { ENTITY_CATALOG } from 'jvf-parser';
import type { EntityMeta } from 'jvf-parser';
import type { ObjektovyTyp } from 'jvf-dtm-types';
import { LAYER_COLORS, resolveStyle } from '../map/jvfLayers.js';

const SVG_BASE = './symboly/';

/**
 * Adapter EntityMeta → ObjektovyTyp pro `resolveStyle()`.
 * `resolveStyle` používá pouze `codeBase` a `obsahovaCast`, ale typový kontrakt
 * vyžaduje plný ObjektovyTyp; doplníme prázdný `zaznamy` array.
 */
function entityMetaToObjektovyTyp(meta: EntityMeta): ObjektovyTyp {
  return {
    elementName: meta.elementName,
    nazev: meta.nazev,
    codeBase: meta.codeBase,
    codeSuffix: meta.codeSuffix,
    kategorieObjektu: meta.kategorieObjektu,
    skupinaObjektu: meta.skupinaObjektu,
    obsahovaCast: meta.obsahovaCast,
    zaznamy: [],
  };
}

/** Mapuj `EntityMeta.geomType` na konceptuální typ pro swatch. */
type SwatchKind = 'point' | 'line' | 'polygon';

function swatchKindFor(meta: EntityMeta): SwatchKind {
  switch (meta.geomType) {
    case 'point':
      return 'point';
    case 'curve':
      return 'line';
    case 'surface':
    case 'surface+multiCurve':
      return 'polygon';
    default:
      return 'line';
  }
}

/** Vytvoř malý HTML element se symbolem (16×16, podobné layerPanel.buildSymbolEl). */
function buildLegendSwatch(meta: EntityMeta): HTMLElement {
  const ot = entityMetaToObjektovyTyp(meta);
  const s = resolveStyle(ot);
  const kind = swatchKindFor(meta);

  if (kind === 'point') {
    if (s.pointSvg) {
      const img = document.createElement('img');
      img.src = SVG_BASE + s.pointSvg;
      img.width = 16;
      img.height = 16;
      img.className = 'layer-symbol-img';
      img.loading = 'lazy';
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
    const stroke = s.strokeColor.length > 7 ? s.strokeColor.slice(0, 7) : s.strokeColor;
    const fill = s.fillColor.length > 7 ? s.fillColor.slice(0, 7) : s.fillColor;
    span.style.background = fill;
    span.style.borderColor = stroke;
    return span;
  }

  // Line — preferuj SVG s dash patternem, jinak prostý pruh.
  const stroke = s.strokeColor.length > 7 ? s.strokeColor.slice(0, 7) : s.strokeColor;
  if (s.lineDashMm && s.lineDashMm.length >= 2) {
    // Vykresli SVG čáru s dash pattern — hodnoty v mm jsou ze symbology, ale
    // pro 24px swatch je škálujeme dolů, aby pattern byl vidět.
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
    // Škála: nejdelší segment v patternu mapuj cca na 6 px
    const maxMm = Math.max(...s.lineDashMm);
    const scale = maxMm > 0 ? 6 / maxMm : 1;
    const dasharray = s.lineDashMm.map((v) => (v * scale).toFixed(1)).join(' ');
    line.setAttribute('stroke-dasharray', dasharray);
    svg.appendChild(line);
    return svg as unknown as HTMLElement;
  }
  const span = document.createElement('span');
  span.className = 'layer-symbol-line';
  span.style.background = stroke;
  return span;
}

/** Render kompletní legendy do `#legend-modal-body`. */
function renderLegendContent(container: HTMLElement, filter: string = ''): void {
  container.innerHTML = '';

  // Seskup ENTITY_CATALOG podle obsahovaCast → kategorieObjektu → skupinaObjektu.
  const filterLower = filter.trim().toLowerCase();
  const allEntities = Object.values(ENTITY_CATALOG);
  const filtered = filterLower
    ? allEntities.filter((m) => {
        return (
          m.nazev.toLowerCase().includes(filterLower) ||
          m.elementName.toLowerCase().includes(filterLower) ||
          m.codeBase.includes(filterLower) ||
          m.kategorieObjektu.toLowerCase().includes(filterLower) ||
          m.skupinaObjektu.toLowerCase().includes(filterLower)
        );
      })
    : allEntities;

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-hint">Nic neodpovídá hledanému výrazu.</div>';
    return;
  }

  // Mapa: obsahovaCast → kategorieObjektu → EntityMeta[]
  const groups = new Map<string, Map<string, EntityMeta[]>>();
  for (const meta of filtered) {
    const cast = meta.obsahovaCast || '—';
    const kat = meta.kategorieObjektu || '—';
    if (!groups.has(cast)) groups.set(cast, new Map());
    const catMap = groups.get(cast)!;
    if (!catMap.has(kat)) catMap.set(kat, []);
    catMap.get(kat)!.push(meta);
  }

  // Stabilní pořadí: ZPS, TI, DI, GAD, OPL, ostatní (alfa).
  const CAST_ORDER = ['ZPS', 'TI', 'DI', 'GAD', 'OPL'];
  const sortedCasts = [...groups.keys()].sort((a, b) => {
    const ai = CAST_ORDER.indexOf(a);
    const bi = CAST_ORDER.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b, 'cs');
  });

  for (const cast of sortedCasts) {
    const catMap = groups.get(cast)!;
    const total = [...catMap.values()].reduce((acc, arr) => acc + arr.length, 0);

    const groupEl = document.createElement('section');
    groupEl.className = 'legend-cast-group';

    const groupHeader = document.createElement('header');
    groupHeader.className = 'legend-cast-header';
    const color = LAYER_COLORS[cast] ?? '#90a4ae';
    groupHeader.innerHTML = `
      <span class="layer-group-dot" style="background:${color}"></span>
      <span class="legend-cast-name">${cast}</span>
      <span class="legend-cast-count">${total}</span>
    `;
    groupEl.appendChild(groupHeader);

    const sortedKats = [...catMap.keys()].sort((a, b) => a.localeCompare(b, 'cs'));
    for (const kat of sortedKats) {
      const items = catMap.get(kat)!;
      items.sort((a, b) => a.nazev.localeCompare(b.nazev, 'cs'));

      const katEl = document.createElement('div');
      katEl.className = 'legend-kat-group';

      const katHeader = document.createElement('div');
      katHeader.className = 'legend-kat-header';
      katHeader.textContent = kat;
      katEl.appendChild(katHeader);

      const grid = document.createElement('div');
      grid.className = 'legend-grid';

      for (const meta of items) {
        const row = document.createElement('div');
        row.className = 'legend-item';
        row.title = `${meta.elementName} · kód ${meta.codeBase}`;

        const swatch = buildLegendSwatch(meta);
        const swatchWrap = document.createElement('div');
        swatchWrap.className = 'legend-swatch';
        swatchWrap.appendChild(swatch);

        const info = document.createElement('div');
        info.className = 'legend-item-info';
        info.innerHTML = `
          <span class="legend-name">${meta.nazev || meta.elementName}</span>
          <span class="legend-meta">${meta.skupinaObjektu || ''} · ${meta.codeBase}</span>
        `;

        row.appendChild(swatchWrap);
        row.appendChild(info);
        grid.appendChild(row);
      }

      katEl.appendChild(grid);
      groupEl.appendChild(katEl);
    }

    container.appendChild(groupEl);
  }
}

export function setupLegendModal(): void {
  const btn = document.getElementById('btn-legend');
  const modal = document.getElementById('legend-modal');
  const closeBtn = document.getElementById('legend-modal-close');
  const body = document.getElementById('legend-modal-body');
  const search = document.getElementById('legend-modal-search') as HTMLInputElement | null;

  if (!btn || !modal || !closeBtn || !body) {
    console.warn('[legendModal] chybí některý DOM prvek');
    return;
  }

  let rendered = false;

  const open = (): void => {
    if (!rendered) {
      renderLegendContent(body, search?.value ?? '');
      rendered = true;
    }
    modal.style.display = 'flex';
  };

  const close = (): void => {
    modal.style.display = 'none';
  };

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') close();
  });

  // Inkrementální filtrování (debounce by tu bylo overkill — 358 položek).
  if (search) {
    search.addEventListener('input', () => {
      renderLegendContent(body, search.value);
    });
  }
}
