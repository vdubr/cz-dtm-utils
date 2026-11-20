import type OlMap from 'ol/Map.js';
import { createEmpty, extend, isEmpty } from 'ol/extent.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { isJvfFeatureDisplayed } from '../map/jvfLayers.js';
import { zoomToThreeExtent } from '../viewer3d/threeScene.js';
import { getIs3dActive } from './toggle3d.js';
import {
  clearAttributeFilter,
  getAttributeFilter,
  setAttributeFilter,
} from '../state/featureFilter.js';
import {
  formatAttributeName,
  formatAttributeValue,
  getAttributeIndex,
  type AttributeInfo,
} from '../state/attributeIndex.js';
import { matchesSearch, normalizeSearch } from './searchField.js';
import { joinCs } from '../util/text.js';

/**
 * Filtr podle hodnoty atributu v Přehledu prvků (řádek „Atribut:“):
 * výběr atributu, seznam hodnot se zaškrtávátky, čip aktivního filtru
 * a „Přiblížit na výběr“. Stav filtru drží `state/featureFilter.ts`
 * (dimenze atribut) — tento modul je jen jeho ovládání.
 */

/** Víc hodnot se najednou nevykresluje — zbytek se najde hledáním. */
const MAX_RENDERED_VALUES = 200;

const rootEl = document.getElementById('features-attr-filter') as HTMLDivElement;

let olMap: OlMap | null = null;
let getJvfLayers: (() => JvfVectorLayer[]) | null = null;

/** Atribut zvolený v UI (filtr se zapne až výběrem hodnoty). */
let selectedAttr: string | null = null;
/** Seznam hodnot rozbalený. */
let open = false;
/** Hledání v hodnotách. */
let valueQuery = '';
/** Data, ke kterým patří výběr v UI (řádek se ukazuje jen s daty). */
let currentData: readonly unknown[] = [];

export function initAttributeFilter(map: OlMap, getLayers: () => JvfVectorLayer[]): void {
  olMap = map;
  getJvfLayers = getLayers;
}

/**
 * Data zobrazená v Přehledu prvků. Při nových datech se výběr atributu
 * zapomene (samotný filtr resetuje `resetFeatureFilter` při přestavbě dat).
 */
export function setAttributeFilterData(objekty: readonly unknown[]): void {
  if (objekty === currentData) return;
  currentData = objekty;
  selectedAttr = null;
  open = false;
  valueQuery = '';
}

function findAttr(name: string | null): AttributeInfo | undefined {
  return name ? getAttributeIndex().find((a) => a.name === name) : undefined;
}

/** Vykreslí řádek filtru podle stavu (volá Přehled prvků při každé změně filtru). */
export function renderAttributeFilter(): void {
  if (currentData.length === 0) {
    rootEl.style.display = 'none';
    rootEl.replaceChildren();
    return;
  }
  const filter = getAttributeFilter();
  if (filter) selectedAttr = filter.name;
  const prevScroll = rootEl.querySelector('.attr-filter-list')?.scrollTop ?? 0;
  rootEl.style.display = '';
  rootEl.replaceChildren();

  const label = document.createElement('span');
  label.className = 'features-level-label';
  label.textContent = 'Atribut:';
  rootEl.append(label, buildAttrSelect());

  if (selectedAttr) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'attr-filter-icon-btn';
    toggle.title = open ? 'Skrýt hodnoty' : 'Zobrazit hodnoty';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">${open ? 'expand_less' : 'expand_more'}</span>`;
    toggle.addEventListener('click', () => {
      open = !open;
      renderAttributeFilter();
    });
    rootEl.append(toggle);
  }

  if (filter) rootEl.append(buildActiveChip(filter.name, filter.values), buildZoomButton());

  const attr = findAttr(selectedAttr);
  if (open && attr) {
    rootEl.append(buildValuesBox(attr));
    const listEl = rootEl.querySelector('.attr-filter-list');
    if (listEl) listEl.scrollTop = prevScroll;
  }
}

/**
 * Výběr atributu. Index atributů se počítá až při prvním otevření výběru
 * (projde všechny záznamy) — do té doby má výběr jen zástupnou volbu.
 */
function buildAttrSelect(): HTMLSelectElement {
  const select = document.createElement('select');
  select.className = 'attr-filter-select';
  select.setAttribute('aria-label', 'Atribut pro filtr');
  select.title = 'Zobrazit jen prvky s vybranými hodnotami atributu';
  const placeholder = new Option('vyberte atribut…', '');
  select.append(placeholder);
  let filled = false;
  const fill = (): void => {
    if (filled) return;
    filled = true;
    for (const a of getAttributeIndex()) {
      const opt = new Option(`${formatAttributeName(a)} (${a.values.length})`, a.name);
      opt.selected = a.name === selectedAttr;
      select.append(opt);
    }
  };
  if (selectedAttr) fill();
  select.addEventListener('pointerdown', fill);
  select.addEventListener('focus', fill);
  select.addEventListener('keydown', fill);
  select.addEventListener('change', () => {
    const name = select.value || null;
    if (getAttributeFilter()?.name !== name) clearAttributeFilter();
    selectedAttr = name;
    open = name !== null;
    valueQuery = '';
    renderAttributeFilter();
  });
  return select;
}

/** Čip aktivního filtru: „CisStaOb: PS 02-01-71 +1“, × filtr zruší. */
function buildActiveChip(name: string, values: ReadonlySet<string>): HTMLElement {
  const attr = findAttr(name);
  const labels = [...values].map((k) => {
    const v = attr?.values.find((x) => x.key === k);
    return v ? formatAttributeValue(v) : k;
  });
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'level-chip active attr-filter-chip';
  const first = values.size === 1 ? labels[0]! : `${[...values][0] || 'bez hodnoty'} +${values.size - 1}`;
  chip.title = `${attr ? formatAttributeName(attr) : name}: ${joinCs(labels)} — kliknutím filtr zrušíte`;
  const text = document.createElement('span');
  text.className = 'attr-filter-chip-text';
  text.textContent = `${name}: ${first}`;
  const close = document.createElement('span');
  close.className = 'material-symbols-outlined';
  close.setAttribute('aria-hidden', 'true');
  close.textContent = 'close';
  chip.append(text, close);
  chip.setAttribute('aria-label', `Zrušit filtr ${name}`);
  chip.addEventListener('click', () => {
    open = false;
    clearAttributeFilter();
  });
  return chip;
}

function buildZoomButton(): HTMLElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'attr-filter-icon-btn attr-filter-zoom';
  btn.title = 'Přiblížit na prvky podle filtru';
  btn.setAttribute('aria-label', 'Přiblížit na prvky podle filtru');
  btn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">zoom_in_map</span>';
  btn.addEventListener('click', zoomToFiltered);
  return btn;
}

/** Přiblíží 2D mapu / 3D scénu na rozsah prvků, které filtr zobrazuje. */
function zoomToFiltered(): void {
  if (!olMap || !getJvfLayers) return;
  const extent = createEmpty();
  for (const { olLayer } of getJvfLayers()) {
    if (!olLayer.getVisible()) continue;
    for (const f of olLayer.getSource()?.getFeatures() ?? []) {
      if (!isJvfFeatureDisplayed(f)) continue;
      const g = f.getGeometry();
      if (g) extend(extent, g.getExtent());
    }
  }
  if (isEmpty(extent)) return;
  if (getIs3dActive()) zoomToThreeExtent(extent[0]!, extent[1]!, extent[2]!, extent[3]!);
  else olMap.getView().fit(extent, { padding: [40, 40, 40, 40], maxZoom: 20, duration: 600 });
}

/** Seznam hodnot: hledání, akce, zaškrtávátka „hodnota — název (počet)“ a „jen tato“. */
function buildValuesBox(attr: AttributeInfo): HTMLElement {
  const box = document.createElement('div');
  box.className = 'attr-filter-values';
  const filter = getAttributeFilter();
  const selected = filter?.name === attr.name ? filter.values : new Set<string>();

  const search = document.createElement('input');
  search.type = 'search';
  search.className = 'features-search attr-filter-search';
  search.placeholder = `Hledat v hodnotách (${attr.values.length})…`;
  search.value = valueQuery;

  const actions = document.createElement('div');
  actions.className = 'attr-filter-actions';
  const count = document.createElement('span');
  count.className = 'attr-filter-count';
  const selectedRecords = attr.values.filter((v) => selected.has(v.key)).reduce((s, v) => s + v.count, 0);
  count.textContent = selected.size
    ? `Vybráno ${selected.size} z ${attr.values.length} · ${selectedRecords} záznamů`
    : 'Zaškrtněte hodnoty, které chcete zobrazit';
  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'attr-filter-link';
  clearBtn.textContent = 'Zrušit filtr';
  clearBtn.disabled = selected.size === 0;
  clearBtn.addEventListener('click', () => clearAttributeFilter());
  actions.append(count, clearBtn);

  const listEl = document.createElement('div');
  listEl.className = 'attr-filter-list';
  listEl.setAttribute('role', 'group');
  listEl.setAttribute('aria-label', `Hodnoty atributu ${attr.name}`);

  const fillList = (): void => {
    const q = normalizeSearch(valueQuery);
    const matching = q ? attr.values.filter((v) => matchesSearch(q, v.key, v.label)) : attr.values;
    listEl.replaceChildren();
    for (const v of matching.slice(0, MAX_RENDERED_VALUES)) {
      const row = document.createElement('label');
      row.className = 'attr-filter-row';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'm3-checkbox';
      cb.checked = selected.has(v.key);
      cb.addEventListener('change', () => {
        const next = new Set(selected);
        if (cb.checked) next.add(v.key); else next.delete(v.key);
        if (next.size === 0) clearAttributeFilter();
        else setAttributeFilter(attr.name, next);
      });
      const text = document.createElement('span');
      text.className = 'attr-filter-value';
      text.textContent = formatAttributeValue(v);
      text.title = formatAttributeValue(v);
      const n = document.createElement('span');
      n.className = 'attr-filter-value-count';
      n.textContent = String(v.count);
      const only = document.createElement('button');
      only.type = 'button';
      only.className = 'attr-filter-link attr-filter-only';
      only.textContent = 'jen tato';
      only.title = `Zobrazit jen ${formatAttributeValue(v)}`;
      only.addEventListener('click', (e) => {
        e.preventDefault();
        setAttributeFilter(attr.name, [v.key]);
      });
      row.append(cb, text, n, only);
      listEl.append(row);
    }
    if (matching.length > MAX_RENDERED_VALUES) {
      const more = document.createElement('div');
      more.className = 'attr-filter-more';
      more.textContent = `… a dalších ${matching.length - MAX_RENDERED_VALUES} — upřesněte hledáním`;
      listEl.append(more);
    } else if (matching.length === 0) {
      const none = document.createElement('div');
      none.className = 'attr-filter-more';
      none.textContent = 'Žádná hodnota neodpovídá hledání.';
      listEl.append(none);
    }
  };
  fillList();
  search.addEventListener('input', () => {
    valueQuery = search.value.trim();
    listEl.scrollTop = 0;
    fillList();
  });

  box.append(search, actions, listEl);
  return box;
}
