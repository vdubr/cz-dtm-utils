/**
 * Modal pro zobrazení protokolu chyb JVF DTM 1.5.0.1 (`ErrorProtocol`, R5).
 *
 * Protokol chyb (`ServisJVFDTM/ProtokolChyb`) je samostatný artefakt, ne
 * mapová data — zobrazuje se jako report: sekce DTI a ZPS, v každé seznam
 * kontrol a jejich chyb. Modal se staví dynamicky s existujícími CSS třídami
 * (`modal-overlay` / `modal-dialog` / `modal-body`), bez zásahu do index.html.
 */
import type { ErrorProtocol, ProtokolKontrola } from 'jvf-parser';

let overlay: HTMLDivElement | null = null;
let bodyEl: HTMLDivElement | null = null;
let titleEl: HTMLHeadingElement | null = null;

function ensureModal(): void {
  if (overlay) return;

  overlay = document.createElement('div');
  overlay.id = 'error-protocol-modal';
  overlay.className = 'modal-overlay';
  overlay.style.display = 'none';

  const dialog = document.createElement('div');
  dialog.className = 'modal-dialog modal-dialog-lg';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');

  const header = document.createElement('div');
  header.className = 'modal-header';

  titleEl = document.createElement('h2');
  titleEl.textContent = 'Protokol chyb';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.title = 'Zavřít';
  closeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
  closeBtn.addEventListener('click', close);

  header.append(titleEl, closeBtn);

  bodyEl = document.createElement('div');
  bodyEl.className = 'modal-body';
  bodyEl.id = 'error-protocol-modal-body';

  dialog.append(header, bodyEl);
  overlay.appendChild(dialog);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.style.display !== 'none') close();
  });

  document.body.appendChild(overlay);
}

function close(): void {
  if (overlay) overlay.style.display = 'none';
}

function countErrors(kontroly: ProtokolKontrola[]): number {
  return kontroly.reduce((n, k) => n + k.chyby.length, 0);
}

/** Vykreslí jednu sekci (DTI / ZPS) se seznamem kontrol a chyb. */
function renderSekce(title: string, kontroly: ProtokolKontrola[]): HTMLElement {
  const section = document.createElement('section');
  section.className = 'legend-cast-group';

  const head = document.createElement('header');
  head.className = 'legend-cast-header';
  const total = countErrors(kontroly);
  head.innerHTML = `
    <span class="legend-cast-name"></span>
    <span class="legend-cast-count">${total}</span>
  `;
  const nameSpan = head.querySelector('.legend-cast-name');
  if (nameSpan) nameSpan.textContent = `${title} — ${kontroly.length} kontrol, ${total} chyb`;
  section.appendChild(head);

  if (kontroly.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'error-list-empty';
    empty.textContent = 'Žádné kontroly.';
    section.appendChild(empty);
    return section;
  }

  for (const k of kontroly) {
    if (k.chyby.length === 0) continue;
    const kBlock = document.createElement('div');
    kBlock.className = 'error-group';

    const kHead = document.createElement('div');
    kHead.className = 'error-group-header error-group-error';
    const kod = k.kod ? `Kontrola ${k.kod}` : 'Kontrola';
    const skupina = typeof k.attributes.Skupina === 'string' ? ` · ${k.attributes.Skupina}` : '';
    kHead.textContent = `${kod}${skupina} (${k.chyby.length})`;
    kBlock.appendChild(kHead);

    for (const chyba of k.chyby) {
      const row = document.createElement('div');
      row.className = 'error-row error-row-error';
      const idPart = chyba.objektId ? ` [ID: ${chyba.objektId}]` : '';
      row.textContent = `${chyba.popis ?? '(bez popisu)'}${idPart}`;
      kBlock.appendChild(row);
    }
    section.appendChild(kBlock);
  }
  return section;
}

/**
 * Zobrazí protokol chyb v modalu. `sourceLabel` (název souboru) se ukáže
 * v titulku.
 */
export function showErrorProtocol(proto: ErrorProtocol, sourceLabel?: string): void {
  ensureModal();
  if (!overlay || !bodyEl || !titleEl) return;

  titleEl.textContent = sourceLabel ? `Protokol chyb — ${sourceLabel}` : 'Protokol chyb';

  bodyEl.innerHTML = '';
  const totalDti = countErrors(proto.dti);
  const totalZps = countErrors(proto.zps);

  const summary = document.createElement('div');
  summary.className = 'error-summary summary-errors';
  summary.textContent = `Celkem ${totalDti + totalZps} chyb (DTI: ${totalDti}, ZPS: ${totalZps}).`;
  bodyEl.appendChild(summary);

  bodyEl.appendChild(renderSekce('DTI', proto.dti));
  bodyEl.appendChild(renderSekce('ZPS', proto.zps));

  overlay.style.display = 'flex';
}
