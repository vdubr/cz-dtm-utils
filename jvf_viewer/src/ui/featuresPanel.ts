import type { ObjektovyTyp, ZaznamObjektu, ZapisObjektuType } from 'jvf-parser';
import type OlMap from 'ol/Map.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { findFeature } from '../map/jvfLayers.js';
import { highlightFeature, clearHighlight, zoomToFeature } from '../map/highlight.js';
import { highlightThreeFeature, clearThreeHighlight, zoomToThreeFeature } from '../viewer3d/threeScene.js';
import { getIs3dActive, notifyMapAreaResized } from './toggle3d.js';

type ContentFilter = 'all' | 'ZPS' | 'TI' | 'DI' | 'GAD' | 'OPL';

// ── DOM refs ──────────────────────────────────────────────────────────────────
const panel        = document.getElementById('features-panel')         as HTMLElement;
const resizeHandle = document.getElementById('features-panel-resize')  as HTMLElement;
const list         = document.getElementById('features-list')          as HTMLDivElement;
const summaryEl    = document.getElementById('features-summary')       as HTMLDivElement;
const searchInput  = document.getElementById('features-search')        as HTMLInputElement;
const filterBtns   = panel.querySelectorAll<HTMLButtonElement>('.features-filter-btn');

// ── State ─────────────────────────────────────────────────────────────────────
let currentObjekty: ObjektovyTyp[] = [];
let currentFilter: ContentFilter = 'all';
let currentSearch = '';
let activeRow: HTMLElement | null = null;
let activeTarget: { elementName: string; objectId: string } | null = null;
let getJvfLayers: (() => JvfVectorLayer[]) | null = null;
let olMap: OlMap | null = null;
let onHideCallback: (() => void) | null = null;
const expandedGroups = new Set<string>();
const expandedRecords = new Set<string>();

// ── Utils ─────────────────────────────────────────────────────────────────────
function recordKey(elementName: string, objectId: string): string {
  return `${elementName}::${objectId}`;
}

function zapisLabel(z: ZapisObjektuType): { label: string; cls: string } {
  switch (z) {
    case 'i': return { label: 'I', cls: 'zapis-i' };
    case 'u': return { label: 'U', cls: 'zapis-u' };
    case 'd': return { label: 'D', cls: 'zapis-d' };
    default:  return { label: 'R', cls: 'zapis-r' };
  }
}

function matchesFilter(ot: ObjektovyTyp): boolean {
  if (currentFilter === 'all') return true;
  return ot.obsahovaCast === currentFilter;
}

function matchesSearch(ot: ObjektovyTyp, z: ZaznamObjektu): boolean {
  if (!currentSearch) return true;
  const q = currentSearch.toLowerCase();
  if (ot.nazev.toLowerCase().includes(q)) return true;
  if (ot.elementName.toLowerCase().includes(q)) return true;
  const id = z.commonAttributes?.id ?? '';
  if (id.toLowerCase().includes(q)) return true;
  return false;
}

// ── Summary ───────────────────────────────────────────────────────────────────
function renderSummary(): void {
  const totalTypes = currentObjekty.length;
  const totalRecords = currentObjekty.reduce((sum, ot) => sum + ot.zaznamy.length, 0);
  if (totalTypes === 0) {
    summaryEl.textContent = 'Žádná data.';
    summaryEl.className = 'features-summary summary-empty';
    return;
  }
  summaryEl.textContent = `${totalTypes} ${totalTypes === 1 ? 'typ' : totalTypes < 5 ? 'typy' : 'typů'}, ${totalRecords} ${totalRecords === 1 ? 'záznam' : totalRecords < 5 ? 'záznamy' : 'záznamů'}`;
  summaryEl.className = 'features-summary summary-ok';
}

// ── Group toggle ──────────────────────────────────────────────────────────────
function toggleGroup(elementName: string): void {
  if (expandedGroups.has(elementName)) {
    expandedGroups.delete(elementName);
  } else {
    expandedGroups.add(elementName);
  }
  renderRows();
}

// ── Row click ─────────────────────────────────────────────────────────────────
function handleRowClick(row: HTMLElement, elementName: string, objectId: string): void {
  // Druhý klik → zrušit (toggle off)
  if (activeRow === row) {
    row.classList.remove('active');
    activeRow = null;
    activeTarget = null;
    clearHighlight();
    clearThreeHighlight();
    // Sbalit detail
    expandedRecords.delete(recordKey(elementName, objectId));
    const detailEl = row.nextElementSibling;
    if (detailEl?.classList.contains('feature-detail')) {
      (detailEl as HTMLElement).style.display = 'none';
    }
    return;
  }

  if (activeRow) activeRow.classList.remove('active');
  activeRow = row;
  activeTarget = { elementName, objectId };
  row.classList.add('active');

  // Rozbalit detail tohoto záznamu
  expandedRecords.add(recordKey(elementName, objectId));
  const detailEl = row.nextElementSibling;
  if (detailEl?.classList.contains('feature-detail')) {
    (detailEl as HTMLElement).style.display = '';
  }

  applyHighlight(elementName, objectId);
}

function applyHighlight(elementName: string, objectId: string): void {
  if (!olMap || !getJvfLayers) return;

  if (getIs3dActive()) {
    highlightThreeFeature(elementName, objectId);
    zoomToThreeFeature(elementName, objectId);
    return;
  }

  const feature = findFeature(getJvfLayers(), elementName, objectId);
  if (!feature) return;

  highlightFeature(feature);
  zoomToFeature(olMap, feature);
}

/**
 * Re-apply highlight + zoom for the currently selected feature in the active view.
 * Volá se po přepnutí 2D ↔ 3D, aby výběr přežil změnu pohledu.
 */
export function reapplyActiveFeatureHighlight(): void {
  if (!activeTarget) return;
  applyHighlight(activeTarget.elementName, activeTarget.objectId);
}

// ── Render ────────────────────────────────────────────────────────────────────
function renderAttributes(z: ZaznamObjektu): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'feature-detail-inner';

  // CommonAttributes
  const common = z.commonAttributes ?? {};
  const commonEntries = Object.entries(common).filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (commonEntries.length > 0) {
    const h = document.createElement('div');
    h.className = 'feature-detail-section-title';
    h.textContent = 'Společné atributy';
    wrap.appendChild(h);
    wrap.appendChild(buildKVTable(commonEntries));
  }

  // Specific attributes
  const attrs = z.attributes ?? {};
  const attrEntries = Object.entries(attrs).filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (attrEntries.length > 0) {
    const h = document.createElement('div');
    h.className = 'feature-detail-section-title';
    h.textContent = 'Atributy objektu';
    wrap.appendChild(h);
    wrap.appendChild(buildKVTable(attrEntries));
  }

  // Geometrie summary
  const geomCount = z.geometrie?.length ?? 0;
  const geomLine = document.createElement('div');
  geomLine.className = 'feature-detail-meta';
  if (geomCount === 0) {
    geomLine.textContent = 'Žádná geometrie';
  } else {
    const types = z.geometrie.map((g) => g.type).join(', ');
    geomLine.textContent = `${geomCount} ${geomCount === 1 ? 'geometrie' : 'geometrie'} (${types})`;
  }
  wrap.appendChild(geomLine);

  if (commonEntries.length === 0 && attrEntries.length === 0 && geomCount === 0) {
    const empty = document.createElement('div');
    empty.className = 'feature-detail-empty';
    empty.textContent = 'Žádné atributy.';
    wrap.appendChild(empty);
  }

  return wrap;
}

function buildKVTable(entries: [string, unknown][]): HTMLElement {
  const tbl = document.createElement('table');
  tbl.className = 'feature-detail-table';
  const tbody = document.createElement('tbody');
  for (const [k, v] of entries) {
    const tr = document.createElement('tr');
    const tdK = document.createElement('td');
    tdK.className = 'kv-key';
    tdK.textContent = k;
    const tdV = document.createElement('td');
    tdV.className = 'kv-value';
    tdV.textContent = String(v);
    tr.append(tdK, tdV);
    tbody.appendChild(tr);
  }
  tbl.appendChild(tbody);
  return tbl;
}

function renderRows(): void {
  list.innerHTML = '';
  // Ponecháme activeRow null jen pokud cíl už není v listu
  activeRow = null;

  const filtered = currentObjekty
    .filter(matchesFilter)
    .map((ot) => ({ ot, zaznamy: ot.zaznamy.filter((z) => matchesSearch(ot, z)) }))
    .filter(({ zaznamy }) => zaznamy.length > 0);

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'features-list-empty';
    empty.textContent = currentObjekty.length === 0
      ? 'Žádná data. Nahrajte JVF soubor.'
      : 'Žádné položky pro vybraný filtr.';
    list.appendChild(empty);
    return;
  }

  for (const { ot, zaznamy } of filtered) {
    const expanded = expandedGroups.has(ot.elementName);

    // Group header
    const header = document.createElement('div');
    header.className = `feature-group-header part-${ot.obsahovaCast}`;
    header.dataset['element'] = ot.elementName;
    header.title = `${ot.nazev} — ${ot.obsahovaCast} (klikni pro rozbalení)`;

    const chevron = document.createElement('span');
    chevron.className = `group-chevron${expanded ? ' expanded' : ''}`;
    chevron.textContent = expanded ? '▾' : '▸';

    const partBadge = document.createElement('span');
    partBadge.className = `part-badge part-${ot.obsahovaCast}`;
    partBadge.textContent = String(ot.obsahovaCast);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'feature-group-name';
    nameSpan.textContent = ot.nazev;

    const elSpan = document.createElement('span');
    elSpan.className = 'feature-group-element';
    elSpan.textContent = ot.elementName;

    const countBadge = document.createElement('span');
    countBadge.className = 'group-count-badge group-count-features';
    countBadge.textContent = String(zaznamy.length);

    header.append(chevron, partBadge, nameSpan, elSpan, countBadge);
    header.addEventListener('click', () => toggleGroup(ot.elementName));
    list.appendChild(header);

    if (!expanded) continue;

    // Detail rows
    for (const z of zaznamy) {
      const objectId = z.commonAttributes?.id ?? '';
      const hasTarget = !!objectId;
      const key = recordKey(ot.elementName, objectId);
      const isActive = activeTarget !== null
        && activeTarget.elementName === ot.elementName
        && activeTarget.objectId === objectId;

      const row = document.createElement('div');
      row.className = `feature-row${hasTarget ? ' has-target' : ' no-target'}${isActive ? ' active' : ''}`;
      row.dataset['element'] = ot.elementName;
      row.dataset['id'] = objectId;

      const zoomIcon = document.createElement('span');
      zoomIcon.className = 'feature-zoom-icon';
      zoomIcon.textContent = '⌖';
      zoomIcon.title = hasTarget ? 'Zoom na objekt' : 'Objekt nelze lokalizovat (chybí ID)';

      const zapis = zapisLabel(z.zapisObjektu);
      const zapisBadge = document.createElement('span');
      zapisBadge.className = `zapis-badge ${zapis.cls}`;
      zapisBadge.textContent = zapis.label;
      zapisBadge.title = `ZapisObjektu='${z.zapisObjektu}'`;

      const idSpan = document.createElement('span');
      idSpan.className = 'feature-row-id';
      idSpan.textContent = objectId || '— bez ID —';

      const popisSpan = document.createElement('span');
      popisSpan.className = 'feature-row-popis';
      popisSpan.textContent = z.commonAttributes?.popisObjektu ?? '';

      row.append(zoomIcon, zapisBadge, idSpan, popisSpan);
      if (hasTarget) {
        row.addEventListener('click', () => handleRowClick(row, ot.elementName, objectId));
      }
      list.appendChild(row);

      if (isActive) activeRow = row;

      // Detail (atributy) — vytvoříme vždy, ale display řídíme expandedRecords
      const detail = document.createElement('div');
      detail.className = 'feature-detail';
      detail.style.display = expandedRecords.has(key) ? '' : 'none';
      detail.appendChild(renderAttributes(z));
      list.appendChild(detail);
    }
  }
}

// ── Filter / search ───────────────────────────────────────────────────────────
function setFilter(filter: ContentFilter): void {
  currentFilter = filter;
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === filter);
  });
  renderRows();
}

// ── Panel open/close ──────────────────────────────────────────────────────────
export function showFeatures(objekty: ObjektovyTyp[]): void {
  currentObjekty = objekty;
  if (!expandedGroups.size && objekty.length > 0 && objekty.length <= 8) {
    // Auto-expand u malých souborů
    for (const ot of objekty) expandedGroups.add(ot.elementName);
  }
  renderSummary();
  renderRows();
  panel.style.display = '';
  notifyMapAreaResized();
}

export function hideFeatures(): void {
  panel.style.display = 'none';
  clearHighlight();
  clearThreeHighlight();
  if (activeRow) { activeRow.classList.remove('active'); activeRow = null; }
  activeTarget = null;
  onHideCallback?.();
  notifyMapAreaResized();
}

export function isFeaturesPanelVisible(): boolean {
  return panel.style.display !== 'none';
}

/**
 * Vyber prvek z mapy v panelu — rozbalí příslušnou grupu, najde řádek,
 * zobrazí detail, scrollne do view a označí jako aktivní. Volá se z map
 * click handlerů (2D / 3D), aby uživatel viděl atributy klikutého objektu.
 *
 * Nemění highlight v mapě — předpokládá se, že volající (map handler) si
 * highlight řeší sám. Pokud panel není viditelný, no-op.
 */
export function selectFeatureInPanel(elementName: string, objectId: string): void {
  if (!isFeaturesPanelVisible()) return;
  if (!objectId) return;

  // Zajistit, že daná grupa je rozbalená
  expandedGroups.add(elementName);
  const key = recordKey(elementName, objectId);
  expandedRecords.add(key);

  // Pokud filtr / search skryje typ, zruš filtr (uživatel klikl, chce vidět)
  const ot = currentObjekty.find((o) => o.elementName === elementName);
  if (ot) {
    if (currentFilter !== 'all' && ot.obsahovaCast !== currentFilter) {
      setFilter('all');
    }
    if (currentSearch) {
      // Zkontroluj, jestli se objekt projde aktuálním filtrem; pokud ne, vyčisti
      const z = ot.zaznamy.find((z) => z.commonAttributes?.id === objectId);
      if (z && !matchesSearch(ot, z)) {
        currentSearch = '';
        searchInput.value = '';
      }
    }
  }

  // Aktualizovat target před renderem, aby renderRows nastavil active class
  activeTarget = { elementName, objectId };
  renderRows();

  // Najít row v DOM a scrollnout
  const row = list.querySelector<HTMLElement>(
    `.feature-row[data-element="${CSS.escape(elementName)}"][data-id="${CSS.escape(objectId)}"]`,
  );
  if (row) {
    activeRow = row;
    row.classList.add('active');
    // Detail rozbalit
    const detailEl = row.nextElementSibling;
    if (detailEl?.classList.contains('feature-detail')) {
      (detailEl as HTMLElement).style.display = '';
    }
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
export function initFeaturesPanel(
  map: OlMap,
  getLayers: () => JvfVectorLayer[],
  opts: { onHide?: () => void } = {},
): void {
  olMap = map;
  getJvfLayers = getLayers;
  onHideCallback = opts.onHide ?? null;

  // Escape — zavřít
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFeaturesPanelVisible()) hideFeatures();
  });

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setFilter((btn.dataset['filter'] as ContentFilter) ?? 'all');
    });
  });

  // Search
  searchInput.addEventListener('input', () => {
    currentSearch = searchInput.value.trim();
    renderRows();
  });

  // Klik na row detail vnitřek by neměl zavírat
  list.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.feature-detail')) {
      e.stopPropagation();
    }
  });

  // Resize handle — drag levou hranu
  resizeHandle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = panel.offsetWidth;

    function onMove(ev: MouseEvent): void {
      const delta = startX - ev.clientX;
      const newWidth = Math.max(280, Math.min(window.innerWidth * 0.6, startWidth + delta));
      panel.style.width = `${newWidth}px`;
    }
    function onUp(): void {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}
