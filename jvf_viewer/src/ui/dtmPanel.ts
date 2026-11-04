/**
 * Sekce „DTM ČR (překryv)" v panelu vrstev: hlavní přepínač, sytost,
 * Vybrat vše / Zrušit vše a skupiny služeb (rozbalovací, zaškrtávátko se
 * stavem „částečně", počet vybraných) s podvrstvami. Stav drží
 * state/dtmOverlay.ts, vrstvy kreslí map/dtmOverlay.ts.
 */
import { DTM_SERVICES } from '../map/dtmCatalog.js';
import {
  getDtmOpacity,
  getDtmSelection,
  isDtmEnabled,
  isDtmSublayerSelected,
  setDtmAll,
  setDtmEnabled,
  setDtmOpacity,
  setDtmService,
  setDtmSublayer,
  subscribeDtmOverlay,
} from '../state/dtmOverlay.js';

function renderGroups(container: HTMLElement): void {
  container.innerHTML = '';
  for (const svc of DTM_SERVICES) {
    const group = document.createElement('div');
    group.className = 'dtm-group';
    group.dataset['dtmService'] = svc.id;

    const header = document.createElement('div');
    header.className = 'dtm-group-header';

    const expand = document.createElement('button');
    expand.type = 'button';
    expand.className = 'dtm-expand';
    expand.setAttribute('aria-expanded', 'false');
    expand.title = `Rozbalit vrstvy „${svc.title}"`;
    expand.innerHTML = '<span class="material-symbols-outlined">chevron_right</span>';

    const label = document.createElement('label');
    label.className = 'dtm-check-row';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'm3-checkbox';
    check.dataset['dtmServiceCheck'] = svc.id;
    check.addEventListener('change', () => setDtmService(svc.id, check.checked));
    const name = document.createElement('span');
    name.textContent = svc.title;
    label.append(check, name);

    const count = document.createElement('span');
    count.className = 'dtm-count';
    count.dataset['dtmCount'] = svc.id;

    header.append(expand, label, count);

    const subs = document.createElement('div');
    subs.className = 'dtm-sublayers';
    subs.hidden = true;
    for (const l of svc.sublayers) {
      const row = document.createElement('label');
      row.className = 'dtm-check-row dtm-sub';
      row.title = `${l.title} (${l.name}) — kreslí se do měřítka 1 : ${Math.round(l.maxScale - 1).toLocaleString('cs-CZ')}`;
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'm3-checkbox';
      cb.dataset['dtmSub'] = `${svc.id}:${l.name}`;
      cb.addEventListener('change', () => setDtmSublayer(svc.id, l.name, cb.checked));
      const t = document.createElement('span');
      t.textContent = l.title;
      row.append(cb, t);
      subs.appendChild(row);
    }

    expand.addEventListener('click', () => {
      const open = subs.hidden;
      subs.hidden = !open;
      expand.setAttribute('aria-expanded', String(open));
      expand.classList.toggle('expanded', open);
    });

    group.append(header, subs);
    container.appendChild(group);
  }
}

/** Promítne stav do přepínače a zaškrtávátek. */
function syncPanel(): void {
  const toggle = document.getElementById('toggle-dtm') as HTMLInputElement | null;
  const body = document.getElementById('dtm-body');
  const opacity = document.getElementById('dtm-opacity') as HTMLInputElement | null;
  const on = isDtmEnabled();
  if (toggle) toggle.checked = on;
  if (body) body.hidden = !on;
  if (opacity) opacity.value = String(Math.round(getDtmOpacity() * 100));
  for (const svc of DTM_SERVICES) {
    const n = getDtmSelection(svc.id).length;
    const check = document.querySelector<HTMLInputElement>(`[data-dtm-service-check="${svc.id}"]`);
    if (check) {
      check.checked = n === svc.sublayers.length;
      check.indeterminate = n > 0 && n < svc.sublayers.length;
    }
    const count = document.querySelector<HTMLElement>(`[data-dtm-count="${svc.id}"]`);
    if (count) count.textContent = `${n}/${svc.sublayers.length}`;
    for (const l of svc.sublayers) {
      const cb = document.querySelector<HTMLInputElement>(`[data-dtm-sub="${svc.id}:${l.name}"]`);
      if (cb) cb.checked = isDtmSublayerSelected(svc.id, l.name);
    }
  }
}

/** Naplní sekci DTM v panelu vrstev a napojí ovládání na stav. */
export function setupDtmPanel(): void {
  const container = document.getElementById('dtm-layers');
  if (!container) return;
  renderGroups(container);

  const toggle = document.getElementById('toggle-dtm') as HTMLInputElement | null;
  toggle?.addEventListener('change', () => setDtmEnabled(toggle.checked));
  const opacity = document.getElementById('dtm-opacity') as HTMLInputElement | null;
  opacity?.addEventListener('input', () => setDtmOpacity(Number(opacity.value) / 100));
  document.querySelectorAll<HTMLButtonElement>('[data-dtm-all]').forEach((btn) => {
    btn.addEventListener('click', () => setDtmAll(btn.dataset['dtmAll'] === '1'));
  });

  subscribeDtmOverlay(syncPanel);
  syncPanel();
}

/** Spinner stahování DTM (volá map/dtmOverlay.ts). */
export function setDtmLoading(loading: boolean): void {
  const spinner = document.getElementById('dtm-spinner');
  if (spinner) spinner.hidden = !loading;
}
