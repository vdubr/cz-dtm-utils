/**
 * Sekce překryvu v panelu vrstev (DTM ČR, katastr): hlavní přepínač,
 * sytost, Vybrat vše / Zrušit vše a podvrstvy. Překryv s více službami má
 * skupiny (rozbalovací, zaškrtávátko se stavem „částečně", počet), s jedinou
 * službou rovnou seznam podvrstev. Obsah se vytvoří do `#overlay-{id}`
 * (index.html); stav drží state/overlays.ts, vrstvy map/overlayLayers.ts.
 */
import type { OverlayService } from '../map/overlayCatalog.js';
import type { OverlayState } from '../state/overlays.js';

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function subRow(state: OverlayState, svc: OverlayService, name: string, title: string, maxScale: number): HTMLElement {
  const row = el('label', 'overlay-check-row overlay-sub');
  row.title = `${title} (${name}) — kreslí se do měřítka 1 : ${Math.round(maxScale).toLocaleString('cs-CZ')}`;
  const cb = el('input', 'm3-checkbox');
  cb.type = 'checkbox';
  cb.dataset['overlaySub'] = `${svc.id}:${name}`;
  cb.addEventListener('change', () => state.setSublayer(svc.id, name, cb.checked));
  row.append(cb, el('span', undefined, title));
  return row;
}

function renderLayers(state: OverlayState, container: HTMLElement): void {
  container.innerHTML = '';
  const services = state.def.services;
  if (services.length === 1) {
    // Jediná služba (katastr) — rovnou podvrstvy.
    const svc = services[0]!;
    const list = el('div', 'overlay-sublayers overlay-sublayers--flat');
    for (const l of svc.sublayers) list.appendChild(subRow(state, svc, l.name, l.title, l.maxScale));
    container.appendChild(list);
    return;
  }
  for (const svc of services) {
    const group = el('div', 'overlay-group');
    group.dataset['overlayService'] = svc.id;
    const header = el('div', 'overlay-group-header');

    const expand = el('button', 'overlay-expand');
    expand.type = 'button';
    expand.setAttribute('aria-expanded', 'false');
    expand.title = `Rozbalit vrstvy „${svc.title}"`;
    expand.innerHTML = '<span class="material-symbols-outlined">chevron_right</span>';

    const label = el('label', 'overlay-check-row');
    const check = el('input', 'm3-checkbox');
    check.type = 'checkbox';
    check.dataset['overlayServiceCheck'] = svc.id;
    check.addEventListener('change', () => state.setService(svc.id, check.checked));
    label.append(check, el('span', undefined, svc.title));

    const count = el('span', 'overlay-count');
    count.dataset['overlayCount'] = svc.id;
    header.append(expand, label, count);

    const subs = el('div', 'overlay-sublayers');
    subs.hidden = true;
    for (const l of svc.sublayers) subs.appendChild(subRow(state, svc, l.name, l.title, l.maxScale));
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
function sync(state: OverlayState, section: HTMLElement): void {
  const id = state.def.id;
  const toggle = section.querySelector<HTMLInputElement>(`#toggle-${id}`);
  const body = section.querySelector<HTMLElement>(`#${id}-body`);
  const opacity = section.querySelector<HTMLInputElement>(`#${id}-opacity`);
  const on = state.isEnabled();
  if (toggle) toggle.checked = on;
  if (body) body.hidden = !on;
  if (opacity) opacity.value = String(Math.round(state.getOpacity() * 100));
  for (const svc of state.def.services) {
    const n = state.getSelection(svc.id).length;
    const check = section.querySelector<HTMLInputElement>(`[data-overlay-service-check="${svc.id}"]`);
    if (check) {
      check.checked = n === svc.sublayers.length;
      check.indeterminate = n > 0 && n < svc.sublayers.length;
    }
    const count = section.querySelector<HTMLElement>(`[data-overlay-count="${svc.id}"]`);
    if (count) count.textContent = `${n}/${svc.sublayers.length}`;
    for (const l of svc.sublayers) {
      const cb = section.querySelector<HTMLInputElement>(`[data-overlay-sub="${svc.id}:${l.name}"]`);
      if (cb) cb.checked = state.isSelected(svc.id, l.name);
    }
  }
}

/** Vytvoří sekci překryvu v `#overlay-{id}` a napojí ovládání na stav. */
export function setupOverlayPanel(state: OverlayState): void {
  const def = state.def;
  const section = document.getElementById(`overlay-${def.id}`);
  if (!section) return;
  section.innerHTML = `
    <label class="toggle-row overlay-toggle" title="${def.description}">
      <span class="panel-section-title overlay-title">${def.title}</span>
      <input type="checkbox" class="m3-switch" id="toggle-${def.id}" />
    </label>
    <div id="${def.id}-body" class="overlay-body" hidden>
      <div class="basemap-opacity-row">
        <span class="material-symbols-outlined basemap-opacity-icon" title="Sytost překryvu">opacity</span>
        <input type="range" class="m3-slider" id="${def.id}-opacity" min="0" max="100" value="100" title="Sytost překryvu (2D i 3D)" />
        <span id="${def.id}-spinner" class="terrain-spinner" hidden></span>
      </div>
      <div class="overlay-actions">
        <button type="button" class="overlay-action-btn" data-overlay-all="1">Vybrat vše</button>
        <button type="button" class="overlay-action-btn" data-overlay-all="0">Zrušit vše</button>
      </div>
      <div class="overlay-layers"></div>
      <p class="overlay-note"></p>
    </div>`;
  const note = section.querySelector<HTMLElement>('.overlay-note')!;
  note.append(def.note, document.createElement('br'), def.attribution);
  renderLayers(state, section.querySelector<HTMLElement>('.overlay-layers')!);

  const toggle = section.querySelector<HTMLInputElement>(`#toggle-${def.id}`)!;
  toggle.addEventListener('change', () => state.setEnabled(toggle.checked));
  const opacity = section.querySelector<HTMLInputElement>(`#${def.id}-opacity`)!;
  opacity.addEventListener('input', () => state.setOpacity(Number(opacity.value) / 100));
  section.querySelectorAll<HTMLButtonElement>('[data-overlay-all]').forEach((btn) => {
    btn.addEventListener('click', () => state.setAll(btn.dataset['overlayAll'] === '1'));
  });

  state.subscribe(() => sync(state, section));
  sync(state, section);
}

/** Spinner stahování překryvu (volá map/overlayLayers.ts). */
export function setOverlayLoading(id: string, loading: boolean): void {
  const spinner = document.getElementById(`${id}-spinner`);
  if (spinner) spinner.hidden = !loading;
}
