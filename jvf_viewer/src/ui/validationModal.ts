import type { TopologyError } from 'jvf-topology';

type FilterType = 'all' | 'error' | 'warning';

let currentErrors: TopologyError[] = [];
let currentFilter: FilterType = 'all';
const expandedGroups = new Set<string>();

const modal = document.getElementById('validation-modal') as HTMLDivElement;
const tbody = document.getElementById('validation-tbody') as HTMLTableSectionElement;
const summary = document.getElementById('modal-summary') as HTMLDivElement;
const emptyMsg = document.getElementById('modal-empty') as HTMLDivElement;
const closeBtn = document.getElementById('modal-close') as HTMLButtonElement;
const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');

function toggleGroup(code: string): void {
  if (expandedGroups.has(code)) {
    expandedGroups.delete(code);
  } else {
    expandedGroups.add(code);
  }
  const isNowExpanded = expandedGroups.has(code);

  const headerTr = tbody.querySelector<HTMLTableRowElement>(`tr[data-code="${CSS.escape(code)}"]`);
  if (headerTr) {
    const chevron = headerTr.querySelector<HTMLElement>('.group-chevron');
    if (chevron) {
      chevron.textContent = isNowExpanded ? '▾' : '▸';
      chevron.classList.toggle('expanded', isNowExpanded);
    }
  }

  tbody
    .querySelectorAll<HTMLTableRowElement>(`tr[data-group="${CSS.escape(code)}"]`)
    .forEach((r) => { r.style.display = isNowExpanded ? '' : 'none'; });
}

function renderRows(): void {
  const filtered =
    currentFilter === 'all'
      ? currentErrors
      : currentErrors.filter((e) => e.severity === currentFilter);

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    emptyMsg.style.display = '';
    tbody.closest('table')!.style.display = 'none';
    return;
  }

  emptyMsg.style.display = 'none';
  tbody.closest('table')!.style.display = '';

  // Group by code, preserve insertion order
  const groups = new Map<string, TopologyError[]>();
  for (const err of filtered) {
    const list = groups.get(err.code) ?? [];
    list.push(err);
    groups.set(err.code, list);
  }

  for (const [code, errors] of groups) {
    const isExpanded = expandedGroups.has(code);
    const severity = errors.some((e) => e.severity === 'error') ? 'error' : 'warning';

    // ── Group header row ──────────────────────────────────────────────────
    const headerTr = document.createElement('tr');
    headerTr.className = `group-header group-header-${severity}`;
    headerTr.dataset['code'] = code;
    headerTr.title = 'Kliknout pro rozbalení / sbalení';

    const tdSev = document.createElement('td');
    tdSev.className = 'col-sev';
    const badge = document.createElement('span');
    badge.className = `severity-badge severity-${severity}`;
    badge.textContent = severity === 'error' ? 'E' : 'W';
    badge.title = severity === 'error' ? 'Chyba' : 'Varovani';
    tdSev.appendChild(badge);

    const tdCode = document.createElement('td');
    tdCode.className = 'col-code';
    tdCode.textContent = code;

    const tdMeta = document.createElement('td');
    tdMeta.className = 'group-meta';
    tdMeta.colSpan = 3;

    const chevron = document.createElement('span');
    chevron.className = `group-chevron${isExpanded ? ' expanded' : ''}`;
    chevron.textContent = isExpanded ? '▾' : '▸';

    const countBadge = document.createElement('span');
    countBadge.className = `group-count-badge group-count-${severity}`;
    countBadge.textContent = String(errors.length);

    tdMeta.append(chevron, countBadge);
    headerTr.append(tdSev, tdCode, tdMeta);
    headerTr.addEventListener('click', () => toggleGroup(code));
    tbody.appendChild(headerTr);

    // ── Detail rows ───────────────────────────────────────────────────────
    for (const err of errors) {
      const tr = document.createElement('tr');
      tr.className = `row-${err.severity} group-row`;
      tr.dataset['group'] = code;
      tr.style.display = isExpanded ? '' : 'none';

      const tdSevEmpty = document.createElement('td');
      tdSevEmpty.className = 'col-sev';

      const tdCodeEmpty = document.createElement('td');
      tdCodeEmpty.className = 'col-code';

      const tdType = document.createElement('td');
      tdType.className = 'col-type';
      tdType.textContent = err.objektovyTyp;

      const tdId = document.createElement('td');
      tdId.className = 'col-id';
      tdId.textContent = err.objectId ?? '';

      const tdMsg = document.createElement('td');
      tdMsg.className = 'col-msg';
      tdMsg.textContent = err.message;

      tr.append(tdSevEmpty, tdCodeEmpty, tdType, tdId, tdMsg);
      tbody.appendChild(tr);
    }
  }
}

function renderSummary(): void {
  const errors = currentErrors.filter((e) => e.severity === 'error').length;
  const warnings = currentErrors.filter((e) => e.severity === 'warning').length;

  if (currentErrors.length === 0) {
    summary.textContent = 'Zadne problemy.';
    summary.className = 'modal-summary summary-ok';
  } else {
    const parts: string[] = [];
    if (errors > 0) parts.push(`${errors} ${errors === 1 ? 'chyba' : errors < 5 ? 'chyby' : 'chyb'}`);
    if (warnings > 0) parts.push(`${warnings} ${warnings === 1 ? 'varovani' : 'varovani'}`);
    summary.textContent = parts.join(', ');
    summary.className = errors > 0 ? 'modal-summary summary-errors' : 'modal-summary summary-warnings';
  }
}

function setFilter(filter: FilterType): void {
  currentFilter = filter;
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === filter);
  });
  renderRows();
}

function closeModal(): void {
  modal.style.display = 'none';
}

function openModal(): void {
  modal.style.display = '';
}

// Close on overlay click (outside panel)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

closeBtn.addEventListener('click', closeModal);

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display !== 'none') closeModal();
});

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    setFilter((btn.dataset['filter'] as FilterType) ?? 'all');
  });
});

export function showValidationModal(errors: TopologyError[]): void {
  currentErrors = errors;
  currentFilter = 'all';
  expandedGroups.clear();
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === 'all');
  });
  renderSummary();
  renderRows();
  openModal();
}
