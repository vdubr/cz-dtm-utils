// Legend modal — zobrazí kompletní legendu všech objektových typů z ENTITY_CATALOG
// s reprezentativním swatch (point/line/polygon) podle stylu z Katalogu DTM.

import { getEntityCatalog } from 'jvf-parser';
import type { ObjektovyTyp } from 'jvf-dtm-types';
import { getActiveVersion, onActiveVersionChange } from '../state/activeVersion.js';
import { LAYER_COLORS, resolveRepresentativeStyle } from '../map/jvfLayers.js';
import { markDialectObjekty } from '../map/dialectStyle.js';
import { compareContentParts } from '../state/contentParts.js';
import { buildStyleSwatch, type SwatchKind } from './symbolSwatch.js';

/**
 * Metadata entity z katalogu aktivní verze (širší varianta — 1.5.0.1 zahrnuje
 * i `obsahovaCast: 'PSPI'`). Odvozeno z návratového typu `getEntityCatalog`,
 * aby legenda přijala i PSPI/nové typy.
 */
type EntityMeta = ReturnType<typeof getEntityCatalog>[string];

/**
 * Adapter EntityMeta → ObjektovyTyp pro `resolveRepresentativeStyle()`.
 * Ten používá `codeBase`, `codeSuffix` (typ geometrie) a `obsahovaCast` —
 * stejná definice stylu jako mapa; typový kontrakt vyžaduje plný
 * ObjektovyTyp, doplníme prázdný `zaznamy` array.
 */
function entityMetaToObjektovyTyp(meta: EntityMeta): ObjektovyTyp {
  const ot: ObjektovyTyp = {
    elementName: meta.elementName,
    nazev: meta.nazev,
    codeBase: meta.codeBase,
    codeSuffix: meta.codeSuffix,
    kategorieObjektu: meta.kategorieObjektu,
    skupinaObjektu: meta.skupinaObjektu,
    obsahovaCast: meta.obsahovaCast,
    zaznamy: [],
  };
  // Legenda aktivní verze dialektu (UDM, ŽXML) → swatche v symbologii dialektu.
  markDialectObjekty([ot], getActiveVersion());
  return ot;
}

/** Mapuj `EntityMeta.geomType` na konceptuální typ pro swatch. */
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

/** Náhled symbolu entity (sdílený se záhlavími kategorií v Přehledu prvků). */
function buildLegendSwatch(meta: EntityMeta): HTMLElement {
  return buildStyleSwatch(resolveRepresentativeStyle(entityMetaToObjektovyTyp(meta)), swatchKindFor(meta));
}

/** Render kompletní legendy do `#legend-modal-body`. */
function renderLegendContent(container: HTMLElement, filter: string = ''): void {
  container.innerHTML = '';

  // Seskup katalog aktivní verze podle obsahovaCast → kategorieObjektu →
  // skupinaObjektu. Verzně-vědomé — pro 1.5.0.1 obsahuje i PSPI a nové typy.
  const filterLower = filter.trim().toLowerCase();
  const allEntities = Object.values(getEntityCatalog(getActiveVersion()));
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

  // Stabilní pořadí: JVF, UDM, ŽXML, ostatní (alfa) — viz state/contentParts.ts.
  const sortedCasts = [...groups.keys()].sort(compareContentParts);

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
  // Legenda je katalogová podle aktivní verze — po načtení souboru jiné verze
  // (např. UDM) ji při dalším otevření překresli.
  onActiveVersionChange(() => {
    rendered = false;
  });

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
