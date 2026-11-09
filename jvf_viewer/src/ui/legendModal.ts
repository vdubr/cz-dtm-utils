// Legend modal — zobrazí kompletní legendu všech objektových typů z ENTITY_CATALOG
// jako mřížku dlaždic: velký náhled ve tvaru geometrie (bod / linie / plocha)
// podle reprezentativního stylu z Katalogu DTM, pod ním název a typ geometrie.

import { getEntityCatalog } from 'jvf-parser';
import type { ObjektovyTyp } from 'jvf-dtm-types';
import { getActiveVersion, onActiveVersionChange } from '../state/activeVersion.js';
import {
  LAYER_COLORS,
  resolveRepresentativeStyle,
  resolveVariantStyles,
  type ResolvedStyle,
  type VariantStyle,
} from '../map/jvfLayers.js';
import { markDialectObjekty } from '../map/dialectStyle.js';
import { compareContentParts, contentPartTitle } from '../state/contentParts.js';
import { attachSearchClear, matchesSearch, normalizeSearch } from './searchField.js';
import { buildGeometryIcon, type SwatchKind } from './symbolSwatch.js';

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

/** Definiční bod plochy (`BudovaDefinicniBod`, v 1.4.3 `BudovaDefBod`). */
function isDefBod(meta: EntityMeta): boolean {
  return meta.geomType === 'point' && /(DefBod|DefinicniBod)$/i.test(meta.elementName);
}

/**
 * Náhled entity ve tvaru geometrie (dlaždice legendy). Obecný definiční bod
 * (značka `*_db.svg` nebo tečka) drobně jako v mapě; definiční bod s vlastní
 * značkou plochy (hřbitov, komín, …) v plné velikosti.
 */
function buildLegendIcon(meta: EntityMeta, style: ResolvedStyle): SVGSVGElement {
  const genericDefBod = isDefBod(meta) && (!style.pointSvg || /_db\.svg$/.test(style.pointSvg));
  return buildGeometryIcon(style, swatchKindFor(meta), genericDefBod ? 14 : 32);
}

/** Položka legendy: entita a varianty vzhledu, které se ukážou jako dlaždice. */
interface LegendEntry {
  meta: EntityMeta;
  ot: ObjektovyTyp;
  variants: VariantStyle[];
}

/** Typ geometrie česky — odliší dvojice se stejným názvem (definiční bod / plocha). */
function geomLabel(meta: EntityMeta): string {
  switch (meta.geomType) {
    case 'point':
      return isDefBod(meta) ? 'Definiční bod' : 'Bod';
    case 'curve':
      return 'Linie';
    default:
      return 'Plocha';
  }
}

/** „typ / typy / typů" podle počtu. */
function pluralTypes(n: number): string {
  if (n === 1) return 'typ';
  return n >= 2 && n <= 4 ? 'typy' : 'typů';
}

/** Render kompletní legendy do `#legend-modal-body`. */
function renderLegendContent(container: HTMLElement, filter: string = ''): void {
  container.innerHTML = '';

  // Seskup katalog aktivní verze podle obsahovaCast → kategorieObjektu →
  // skupinaObjektu. Verzně-vědomé — pro 1.5.0.1 obsahuje i PSPI a nové typy.
  // Hledá se i v hodnotách variant („sloup" najde sloupy podpěrného
  // zařízení) — pak se ukážou jen odpovídající varianty.
  const q = normalizeSearch(filter.trim());
  const filtered: LegendEntry[] = [];
  for (const m of Object.values(getEntityCatalog(getActiveVersion()))) {
    const ot = entityMetaToObjektovyTyp(m);
    const variants = resolveVariantStyles(ot);
    const metaHit =
      !q || matchesSearch(q, m.nazev, m.elementName, m.codeBase, m.kategorieObjektu, m.skupinaObjektu);
    if (metaHit) {
      filtered.push({ meta: m, ot, variants });
      continue;
    }
    const hits = variants.filter((v) => matchesSearch(q, v.value));
    if (hits.length > 0) filtered.push({ meta: m, ot, variants: hits });
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-hint">Nic neodpovídá hledanému výrazu.</div>';
    return;
  }

  // Mapa: obsahovaCast → kategorieObjektu → LegendEntry[]
  const groups = new Map<string, Map<string, LegendEntry[]>>();
  for (const entry of filtered) {
    const cast = entry.meta.obsahovaCast || '—';
    const kat = entry.meta.kategorieObjektu || '—';
    if (!groups.has(cast)) groups.set(cast, new Map());
    const catMap = groups.get(cast)!;
    if (!catMap.has(kat)) catMap.set(kat, []);
    catMap.get(kat)!.push(entry);
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
      <span class="legend-cast-name part-underline" style="--part-color:${color}">${cast}<span class="part-title">${contentPartTitle(cast)}</span></span>
      <span class="legend-cast-count">${total} ${pluralTypes(total)}</span>
    `;
    groupEl.appendChild(groupHeader);

    const sortedKats = [...catMap.keys()].sort((a, b) => a.localeCompare(b, 'cs'));
    for (const kat of sortedKats) {
      const items = catMap.get(kat)!;
      items.sort((a, b) => a.meta.nazev.localeCompare(b.meta.nazev, 'cs'));

      const katEl = document.createElement('div');
      katEl.className = 'legend-kat-group';

      const katHeader = document.createElement('div');
      katHeader.className = 'legend-kat-header';
      katHeader.textContent = kat;
      katEl.appendChild(katHeader);

      const grid = document.createElement('div');
      grid.className = 'legend-grid';

      for (const { meta, ot, variants } of items) {
        // Objekt se vzhledem podle atributu = dlaždice pro každou hodnotu.
        const tiles: { variant?: string; style: ResolvedStyle }[] = variants.length > 0
          ? variants.map((v) => ({ variant: v.value, style: v.style }))
          : [{ style: resolveRepresentativeStyle(ot) }];
        const name = meta.nazev || meta.elementName;
        for (const { variant, style } of tiles) {
          const tile = document.createElement('div');
          tile.className = 'legend-item legend-tile';
          tile.title = [name, variant, meta.skupinaObjektu, `${meta.elementName} · kód ${meta.codeBase}`]
            .filter(Boolean)
            .join('\n');

          const preview = document.createElement('div');
          preview.className = 'legend-swatch legend-tile-preview';
          preview.appendChild(buildLegendIcon(meta, style));

          const info = document.createElement('div');
          info.className = 'legend-item-info';
          info.innerHTML = `
            <span class="legend-name">${name}</span>
            ${variant ? `<span class="legend-meta legend-variant">${variant}</span>` : ''}
            <span class="legend-meta">${geomLabel(meta)}</span>
            <span class="legend-meta legend-code">${meta.codeBase}</span>
          `;

          tile.appendChild(preview);
          tile.appendChild(info);
          grid.appendChild(tile);
        }
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
    attachSearchClear(search);
    search.addEventListener('input', () => {
      renderLegendContent(body, search.value);
    });
  }
}
