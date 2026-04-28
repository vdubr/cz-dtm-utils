import type { TopologyError } from 'jvf-topology';
import type OlMap from 'ol/Map.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { findFeature } from '../map/jvfLayers.js';
import { highlightFeature, clearHighlight, zoomToFeature } from '../map/highlight.js';
import { highlightThreeFeature, clearThreeHighlight, zoomToThreeFeature } from '../viewer3d/threeScene.js';
import { getIs3dActive, notifyMapAreaResized } from './toggle3d.js';

type FilterType = 'all' | 'error' | 'warning';

// ── DOM refs ──────────────────────────────────────────────────────────────────
const panel      = document.getElementById('error-panel')       as HTMLElement;
const resizeHandle = document.getElementById('error-panel-resize') as HTMLElement;
const errorList  = document.getElementById('error-list')        as HTMLDivElement;
const summaryEl  = document.getElementById('error-summary')     as HTMLDivElement;
const filterBtns = panel.querySelectorAll<HTMLButtonElement>('.filter-btn');

// ── State ─────────────────────────────────────────────────────────────────────
let currentErrors: TopologyError[] = [];
let currentFilter: FilterType = 'all';
let activeRow: HTMLElement | null = null;
let activeError: TopologyError | null = null;
let getJvfLayers: (() => JvfVectorLayer[]) | null = null;
let olMap: OlMap | null = null;
let onHideCallback: (() => void) | null = null;
const expandedGroups = new Set<string>();

// ── Summary ───────────────────────────────────────────────────────────────────
function renderSummary(): void {
  const errors   = currentErrors.filter((e) => e.severity === 'error').length;
  const warnings = currentErrors.filter((e) => e.severity === 'warning').length;

  if (currentErrors.length === 0) {
    summaryEl.textContent = 'Žádné problémy.';
    summaryEl.className = 'error-summary summary-ok';
  } else {
    const parts: string[] = [];
    if (errors   > 0) parts.push(`${errors} ${errors === 1 ? 'chyba' : errors < 5 ? 'chyby' : 'chyb'}`);
    if (warnings > 0) parts.push(`${warnings} varování`);
    summaryEl.textContent = parts.join(', ');
    summaryEl.className = errors > 0 ? 'error-summary summary-errors' : 'error-summary summary-warnings';
  }
}

// ── Group toggle ──────────────────────────────────────────────────────────────
function toggleGroup(code: string): void {
  if (expandedGroups.has(code)) {
    expandedGroups.delete(code);
  } else {
    expandedGroups.add(code);
  }
  const expanded = expandedGroups.has(code);

  const headerEl = errorList.querySelector<HTMLElement>(`.error-group-header[data-code="${CSS.escape(code)}"]`);
  if (headerEl) {
    const chevron = headerEl.querySelector<HTMLElement>('.group-chevron');
    if (chevron) {
      chevron.textContent = expanded ? '▾' : '▸';
      chevron.classList.toggle('expanded', expanded);
    }
  }

  errorList
    .querySelectorAll<HTMLElement>(`.error-row[data-group="${CSS.escape(code)}"]`)
    .forEach((r) => { r.style.display = expanded ? '' : 'none'; });
}

// ── Row click ─────────────────────────────────────────────────────────────────
function handleRowClick(row: HTMLElement, err: TopologyError): void {
  // Druhý klik na stejný řádek → zrušit výběr (toggle off).
  if (activeRow === row) {
    row.classList.remove('active');
    activeRow = null;
    activeError = null;
    clearHighlight();
    clearThreeHighlight();
    return;
  }

  // Deactivate previous
  if (activeRow) activeRow.classList.remove('active');
  activeRow = row;
  activeError = err;
  row.classList.add('active');

  applyHighlight(err);
}

/** Apply highlight + zoom for the given error in the currently active view (2D or 3D). */
function applyHighlight(err: TopologyError): void {
  if (!err.objectId || !olMap || !getJvfLayers) return;

  if (getIs3dActive()) {
    highlightThreeFeature(err.objektovyTyp, err.objectId);
    zoomToThreeFeature(err.objektovyTyp, err.objectId);
    return;
  }

  const feature = findFeature(getJvfLayers(), err.objektovyTyp, err.objectId);
  if (!feature) return;

  highlightFeature(feature);
  zoomToFeature(olMap, feature);
}

/**
 * Re-apply highlight + zoom for the currently selected error in the active view.
 * Called after switching 2D ↔ 3D so selection persists across view modes.
 */
export function reapplyActiveHighlight(): void {
  if (!activeError) return;
  applyHighlight(activeError);
}

// ── Render rows ───────────────────────────────────────────────────────────────
function renderRows(): void {
  errorList.innerHTML = '';
  activeRow = null;
  activeError = null;

  const filtered =
    currentFilter === 'all'
      ? currentErrors
      : currentErrors.filter((e) => e.severity === currentFilter);

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'error-list-empty';
    empty.textContent = currentErrors.length === 0 ? 'Žádné problémy.' : 'Žádné položky pro vybraný filtr.';
    errorList.appendChild(empty);
    return;
  }

  // Group by error code
  const groups = new Map<string, TopologyError[]>();
  for (const err of filtered) {
    const list = groups.get(err.code) ?? [];
    list.push(err);
    groups.set(err.code, list);
  }

  for (const [code, errors] of groups) {
    const expanded = expandedGroups.has(code);
    const severity = errors.some((e) => e.severity === 'error') ? 'error' : 'warning';

    // ── Group header ──────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.className = `error-group-header error-group-${severity}`;
    header.dataset['code'] = code;
    header.title = 'Kliknout pro rozbalení / sbalení';

    const chevron = document.createElement('span');
    chevron.className = `group-chevron${expanded ? ' expanded' : ''}`;
    chevron.textContent = expanded ? '▾' : '▸';

    const badge = document.createElement('span');
    badge.className = `severity-badge severity-${severity}`;
    badge.textContent = severity === 'error' ? 'E' : 'W';

    const codeSpan = document.createElement('span');
    codeSpan.className = 'error-group-code';
    codeSpan.textContent = code;

    const countBadge = document.createElement('span');
    countBadge.className = `group-count-badge group-count-${severity}`;
    countBadge.textContent = String(errors.length);

    header.append(chevron, badge, codeSpan, countBadge);
    header.addEventListener('click', () => toggleGroup(code));
    errorList.appendChild(header);

    // ── Detail rows ───────────────────────────────────────────────────────────
    for (const err of errors) {
      const hasTarget = !!err.objectId;
      const row = document.createElement('div');
      row.className = `error-row error-row-${err.severity}${hasTarget ? ' has-target' : ' no-target'}`;
      row.dataset['group'] = code;
      row.style.display = expanded ? '' : 'none';

      const typeSpan = document.createElement('span');
      typeSpan.className = 'error-row-type';
      typeSpan.textContent = err.objektovyTyp;

      const idSpan = document.createElement('span');
      idSpan.className = 'error-row-id';
      idSpan.textContent = err.objectId ?? '—';

      const msgSpan = document.createElement('span');
      msgSpan.className = 'error-row-msg';
      msgSpan.textContent = err.message;

      const zoomIcon = document.createElement('span');
      zoomIcon.className = 'error-zoom-icon';
      zoomIcon.textContent = '⌖';
      zoomIcon.title = hasTarget ? 'Zoom na objekt' : 'Objekt nelze lokalizovat';

      row.append(zoomIcon, typeSpan, idSpan, msgSpan);
      row.addEventListener('click', () => handleRowClick(row, err));
      errorList.appendChild(row);
    }
  }
}

// ── Filter ────────────────────────────────────────────────────────────────────
function setFilter(filter: FilterType): void {
  currentFilter = filter;
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === filter);
  });
  renderRows();
}

// ── Panel open/close ──────────────────────────────────────────────────────────
export function showErrors(errors: TopologyError[]): void {
  currentErrors = errors;
  currentFilter = 'all';
  expandedGroups.clear();
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === 'all');
  });
  renderSummary();
  renderRows();
  panel.style.display = '';
  // 3D canvas musí přepočítat svůj framebuffer — ResizeObserver někdy
  // nevystřelí, když se mění velikost přes display: none/'' sourozence.
  notifyMapAreaResized();
}

export function hideErrors(): void {
  panel.style.display = 'none';
  clearHighlight();
  clearThreeHighlight();
  if (activeRow) { activeRow.classList.remove('active'); activeRow = null; }
  activeError = null;
  onHideCallback?.();
  // Stejně tak při zavření — viz showErrors.
  notifyMapAreaResized();
}

export function isPanelVisible(): boolean {
  return panel.style.display !== 'none';
}

// ── Init ──────────────────────────────────────────────────────────────────────
export function initErrorPanel(
  map: OlMap,
  getLayers: () => JvfVectorLayer[],
  opts: { onHide?: () => void } = {},
): void {
  olMap = map;
  getJvfLayers = getLayers;
  onHideCallback = opts.onHide ?? null;

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPanelVisible()) hideErrors();
  });

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setFilter((btn.dataset['filter'] as FilterType) ?? 'all');
    });
  });

  // Resize handle — drag left edge of panel
  resizeHandle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = panel.offsetWidth;

    function onMove(ev: MouseEvent): void {
      const delta = startX - ev.clientX;
      const newWidth = Math.max(240, Math.min(window.innerWidth * 0.6, startWidth + delta));
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
