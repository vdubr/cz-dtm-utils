import type { TopologyError } from 'jvf-parser';

type FilterType = 'all' | 'error' | 'warning';

let currentErrors: TopologyError[] = [];
let currentFilter: FilterType = 'all';

const modal = document.getElementById('validation-modal') as HTMLDivElement;
const tbody = document.getElementById('validation-tbody') as HTMLTableSectionElement;
const summary = document.getElementById('modal-summary') as HTMLDivElement;
const emptyMsg = document.getElementById('modal-empty') as HTMLDivElement;
const closeBtn = document.getElementById('modal-close') as HTMLButtonElement;
const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');

function renderRows(): void {
  const filtered =
    currentFilter === 'all'
      ? currentErrors
      : currentErrors.filter((e) => e.severity === currentFilter);

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    emptyMsg.style.display = '';
    tbody.closest('table')!.style.display = 'none';
  } else {
    emptyMsg.style.display = 'none';
    tbody.closest('table')!.style.display = '';
    for (const err of filtered) {
      const tr = document.createElement('tr');
      tr.className = `row-${err.severity}`;

      const tdSev = document.createElement('td');
      tdSev.className = 'col-sev';
      const badge = document.createElement('span');
      badge.className = `severity-badge severity-${err.severity}`;
      badge.textContent = err.severity === 'error' ? 'E' : 'W';
      badge.title = err.severity === 'error' ? 'Chyba' : 'Varovani';
      tdSev.appendChild(badge);

      const tdCode = document.createElement('td');
      tdCode.className = 'col-code';
      tdCode.textContent = err.code;

      const tdType = document.createElement('td');
      tdType.className = 'col-type';
      tdType.textContent = err.objektovyTyp;

      const tdId = document.createElement('td');
      tdId.className = 'col-id';
      tdId.textContent = err.objectId ?? '';

      const tdMsg = document.createElement('td');
      tdMsg.className = 'col-msg';
      tdMsg.textContent = err.message;

      tr.append(tdSev, tdCode, tdType, tdId, tdMsg);
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
  filterBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset['filter'] === 'all');
  });
  renderSummary();
  renderRows();
  openModal();
}
