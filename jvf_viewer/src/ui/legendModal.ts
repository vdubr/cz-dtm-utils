// Legend modal — jediná legenda aplikace: všechny objektové typy katalogu
// aktivní verze jako mřížka dlaždic — velký náhled ve tvaru geometrie (bod /
// linie / plocha) ve vzhledu mapy, pod ním název a typ geometrie. Objekt se
// vzhledem podle hodnot číselníku má dlaždici pro každou hodnotu (Katalog DTM
// ČR, u dialektů UDM / ŽXML pravidla jejich stylů). U dialektu s vlastními
// znaky je v hlavičce „Stáhnout SVG (ZIP)" (ui/symbolZip.ts).

import { formatVersionLabel, getEntityCatalog, getStyleTable } from 'jvf-parser';
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
import { downloadSymbolZip } from './symbolZip.js';

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

/** Obsahová část v legendě — sekce a počet typů (lišta čipů nad legendou). */
interface LegendPart {
  cast: string;
  count: number;
  section: HTMLElement;
}

/** Poloha prvku v obsahu legendy (px od začátku scrollovaného obsahu). */
function legendOffset(container: HTMLElement, el: HTMLElement): number {
  return el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
}

/**
 * Posune legendu na prvek (sekce části / kategorie) uvnitř `container`;
 * kategorie pod přišpendlený nadpis části (`stickyOffset`).
 */
function scrollLegendTo(container: HTMLElement, el: HTMLElement, stickyOffset = 0): void {
  const top = Math.max(0, legendOffset(container, el) - stickyOffset);
  // Dlouhý skok (víc než 2 obrazovky) hned, krátký plynule.
  const far = Math.abs(top - container.scrollTop) > container.clientHeight * 2;
  container.scrollTo({ top, behavior: far ? 'instant' : 'smooth' });
  // Okamžitý skok nevyvolá `scrollend` vždy — aktivní čip uvolnit hned.
  if (far) pinnedPart = null;
}

/**
 * Lišta čipů obsahových částí nad legendou (ve všech nástrojích — JVF,
 * UDM, ŽXML): podtržení barvou části a počet typů v aktuálním výsledku
 * hledání; klik posune legendu na část, aktivní čip sleduje scrollování
 * (`syncActivePart`).
 */
function renderPartChips(nav: HTMLElement, container: HTMLElement, parts: readonly LegendPart[]): void {
  nav.replaceChildren();
  nav.hidden = parts.length < 2;
  for (const { cast, count, section } of parts) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'legend-part-chip';
    chip.dataset['part'] = cast;
    chip.title = `${contentPartTitle(cast)} — ${count} ${pluralTypes(count)}`;
    const name = document.createElement('span');
    name.className = 'part-underline';
    name.style.setProperty('--part-color', LAYER_COLORS[cast] ?? '#90a4ae');
    name.textContent = cast;
    const n = document.createElement('span');
    n.className = 'legend-part-count';
    n.textContent = String(count);
    chip.append(name, n);
    chip.addEventListener('click', () => {
      // Vybraná část zůstane aktivní, dokud posun nedoběhne (krátká poslední
      // část se nahoru doscrollovat nedá).
      pinnedPart = cast;
      setActivePart(nav, cast);
      scrollLegendTo(container, section);
    });
    nav.appendChild(chip);
  }
  syncActivePart(nav, container);
}

/** Část vybraná klikem na čip — aktivní do konce posunu (`scrollend`). */
let pinnedPart: string | null = null;

/**
 * Výška přišpendleného nadpisu části → `--legend-cast-h` (pod ním se drží
 * nadpis kategorie; s výběrem kategorie je nadpis vyšší). Až u otevřené legendy.
 */
function syncCastHeaderHeight(container: HTMLElement): void {
  const h = container.querySelector<HTMLElement>('.legend-cast-header')?.offsetHeight;
  if (h) container.style.setProperty('--legend-cast-h', `${h}px`);
}

/** Zvýrazní čip části, ve které je horní okraj legendy. */
function syncActivePart(nav: HTMLElement, container: HTMLElement): void {
  if (pinnedPart) return;
  const sections = [...container.querySelectorAll<HTMLElement>('.legend-cast-group')];
  const top = container.scrollTop + 8;
  let active = sections[0]?.dataset['part'];
  for (const s of sections) if (legendOffset(container, s) <= top) active = s.dataset['part'];
  // Dole v legendě (poslední krátká část) aktivní poslední — jen u otevřené legendy.
  const scrolled = container.scrollTop > 0 && container.clientHeight > 0;
  if (scrolled && container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
    active = sections[sections.length - 1]?.dataset['part'] ?? active;
  }
  if (active) setActivePart(nav, active);
}

function setActivePart(nav: HTMLElement, active: string): void {
  for (const chip of nav.querySelectorAll<HTMLElement>('.legend-part-chip')) {
    const on = chip.dataset['part'] === active;
    chip.classList.toggle('active', on);
    if (on) chip.setAttribute('aria-current', 'true');
    else chip.removeAttribute('aria-current');
  }
}

/** Render kompletní legendy do `#legend-modal-body`; vrací obsahové části (lišta čipů). */
function renderLegendContent(container: HTMLElement, filter: string = ''): LegendPart[] {
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
    return [];
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
  const parts: LegendPart[] = [];

  for (const cast of sortedCasts) {
    const catMap = groups.get(cast)!;
    const total = [...catMap.values()].reduce((acc, arr) => acc + arr.length, 0);

    const groupEl = document.createElement('section');
    groupEl.className = 'legend-cast-group';
    groupEl.dataset['part'] = cast;
    parts.push({ cast, count: total, section: groupEl });

    const groupHeader = document.createElement('header');
    groupHeader.className = 'legend-cast-header';
    const color = LAYER_COLORS[cast] ?? '#90a4ae';
    groupHeader.innerHTML = `
      <span class="legend-cast-name part-underline" style="--part-color:${color}">${cast}<span class="part-title">${contentPartTitle(cast)}</span></span>
      <span class="legend-cast-count">${total} ${pluralTypes(total)}</span>
    `;
    groupEl.appendChild(groupHeader);

    const sortedKats = [...catMap.keys()].sort((a, b) => a.localeCompare(b, 'cs'));
    // Skok na kategorii části (víc kategorií): výběr v nadpisu části.
    const katEls = new Map<string, HTMLElement>();
    if (sortedKats.length > 1) {
      const select = document.createElement('select');
      select.className = 'legend-kat-jump';
      select.setAttribute('aria-label', `Kategorie — ${contentPartTitle(cast)}`);
      select.title = 'Přejít na kategorii';
      select.append(new Option(`Kategorie (${sortedKats.length})`, ''));
      for (const kat of sortedKats) select.append(new Option(kat, kat));
      select.addEventListener('change', () => {
        const target = katEls.get(select.value);
        if (target) scrollLegendTo(container, target, groupHeader.offsetHeight);
        select.value = '';
      });
      groupHeader.appendChild(select);
    }
    for (const kat of sortedKats) {
      const items = catMap.get(kat)!;
      items.sort((a, b) => a.meta.nazev.localeCompare(b.meta.nazev, 'cs'));

      const katEl = document.createElement('div');
      katEl.className = 'legend-kat-group';
      katEls.set(kat, katEl);

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
  return parts;
}

export function setupLegendModal(): void {
  const btn = document.getElementById('btn-legend');
  const modal = document.getElementById('legend-modal');
  const closeBtn = document.getElementById('legend-modal-close');
  const body = document.getElementById('legend-modal-body');
  const search = document.getElementById('legend-modal-search') as HTMLInputElement | null;
  const title = document.getElementById('legend-modal-title');
  const dl = document.getElementById('legend-download-svg') as HTMLButtonElement | null;
  const nav = document.getElementById('legend-modal-parts');

  if (!btn || !modal || !closeBtn || !body) {
    console.warn('[legendModal] chybí některý DOM prvek');
    return;
  }

  let rendered = false;
  /** Vykreslí legendu a lištu částí podle aktuálního hledání. */
  const render = (): void => {
    const parts = renderLegendContent(body, search?.value ?? '');
    if (nav) renderPartChips(nav, body, parts);
  };
  if (nav) {
    body.addEventListener('scroll', () => syncActivePart(nav, body), { passive: true });
    // Po doběhnutí posunu z čipu zase sledovat scrollování (wheel = uživatel převzal).
    body.addEventListener('scrollend', () => { pinnedPart = null; });
    body.addEventListener('wheel', () => { pinnedPart = null; }, { passive: true });
  }
  // Legenda je katalogová podle aktivní verze — po načtení souboru jiné verze
  // (např. UDM) ji při dalším otevření překresli.
  onActiveVersionChange(() => {
    rendered = false;
  });

  const open = (): void => {
    if (!rendered) {
      render();
      rendered = true;
    }
    // Dialekt (UDM, ŽXML): verze v titulku a stažení znaků jako SVG.
    const version = getActiveVersion();
    const dialect = Boolean(getStyleTable(version));
    if (title) title.textContent = dialect ? `Legenda — ${formatVersionLabel(version)}` : 'Legenda DTM';
    if (dl) dl.hidden = !dialect;
    modal.style.display = 'flex';
    syncCastHeaderHeight(body);
    if (nav) syncActivePart(nav, body);
  };

  dl?.addEventListener('click', () => {
    void (async () => {
      const label = dl.textContent;
      dl.disabled = true;
      dl.textContent = 'Připravuji…';
      try {
        await downloadSymbolZip(getActiveVersion());
      } finally {
        dl.disabled = false;
        dl.textContent = label;
      }
    })();
  });

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
      render();
      syncCastHeaderHeight(body);
      body.scrollTop = 0;
    });
    // „/" skočí do hledání (mimo pole formuláře).
    document.addEventListener('keydown', (e) => {
      if (e.key !== '/' || modal.style.display === 'none') return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      e.preventDefault();
      search.focus();
    });
  }
}
