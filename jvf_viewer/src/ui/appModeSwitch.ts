/**
 * Přepínač režimu aplikace (JVF / UDM, …) v hlavičce a dialogy kolem něj.
 *
 * - Klik na jiný režim: jsou-li načtené soubory, zeptá se (přepnutím se
 *   zavřou), pak `setAppMode` → main.ts vyčistí projekty a přestaví UI.
 * - Načtení souboru jiného modelu (`ensureAppModeForFile`): nabídne přepnutí
 *   do režimu souboru; bez přepnutí se soubor nenačte.
 * - Prvky s atributem `data-mode="udm"` (seznam režimů oddělený mezerou) se
 *   zobrazují jen v daném režimu (ukázkové soubory, Export do CAD, …).
 */
import type { JvfDtm } from 'jvf-parser';
import {
  APP_MODES,
  appModeDef,
  appModeForDtm,
  getAppMode,
  onAppModeChange,
  setAppMode,
  type AppMode,
} from '../state/appMode.js';
import { getProjectCount } from '../state/projects.js';
import { showConfirm } from './confirmModal.js';

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/** Text o zavření načtených souborů (prázdný, když nic načteno není). */
function closingNote(): string {
  const n = getProjectCount();
  if (n === 0) return '';
  const files = n === 1 ? 'načtený soubor' : n < 5 ? `${n} načtené soubory` : `${n} načtených souborů`;
  return `<p>Přepnutím se zavře ${files}.</p>`;
}

/** Zobrazí jen prvky patřící aktuálnímu režimu, zvýrazní tlačítko režimu. */
export function applyAppModeToUi(mode: AppMode = getAppMode()): void {
  document.body.dataset['appMode'] = mode;
  document.querySelectorAll<HTMLElement>('[data-mode]').forEach((el) => {
    const modes = (el.dataset['mode'] ?? '').split(/\s+/);
    el.hidden = !modes.includes(mode);
  });
  // Hlavička i kopie v panelu vrstev (mobil, `#app-mode-switch-drawer`).
  document.querySelectorAll<HTMLButtonElement>('.app-mode-switch button').forEach((btn) => {
    const active = btn.dataset['modeBtn'] === mode;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

/**
 * Požadavek na přepnutí režimu z UI. Při načtených souborech se ptá
 * (přepnutí je zavře). Vrací, zda se režim přepnul.
 */
export async function requestAppMode(target: AppMode): Promise<boolean> {
  if (target === getAppMode()) return true;
  if (getProjectCount() > 0) {
    const confirm = `Přepnout do ${appModeDef(target).label}`;
    const choice = await showConfirm({
      title: `Přepnout do režimu ${appModeDef(target).label}?`,
      bodyHtml: `<p>Režim <strong>${escapeHtml(appModeDef(target).title)}</strong>.</p>${closingNote()}`,
      buttons: [
        { label: 'Zrušit', variant: 'secondary' },
        { label: confirm, variant: 'primary' },
      ],
    });
    if (choice !== confirm) return false;
  }
  setAppMode(target);
  return true;
}

/**
 * Kontrola při načítání souboru: patří-li do jiného režimu, nabídne přepnutí.
 * Vrací `true`, pokud se soubor může načíst (režim sedí nebo se přepnul).
 */
export async function ensureAppModeForFile(data: JvfDtm, fileName: string): Promise<boolean> {
  const target = appModeForDtm(data);
  const current = getAppMode();
  if (target === current) return true;
  const confirm = `Přepnout do ${appModeDef(target).label}`;
  const choice = await showConfirm({
    title: `Soubor patří do režimu ${appModeDef(target).label}`,
    bodyHtml: `
      <p>Soubor <strong>${escapeHtml(fileName)}</strong> je
        <strong>${escapeHtml(appModeDef(target).title)}</strong>, ale pracujete
        v režimu <strong>${escapeHtml(appModeDef(current).title)}</strong>.</p>
      <p>Pro jeho otevření přepněte do režimu ${appModeDef(target).label}.</p>
      ${closingNote()}`,
    buttons: [
      { label: 'Zrušit', variant: 'secondary' },
      { label: confirm, variant: 'primary' },
    ],
  });
  if (choice !== confirm) return false;
  setAppMode(target);
  return true;
}

/** Vykreslí přepínač do `#app-mode-switch` a navěsí obsluhu. */
export function setupAppModeSwitch(): void {
  for (const id of ['app-mode-switch', 'app-mode-switch-drawer']) {
    const host = document.getElementById(id);
    if (!host) continue;
    host.innerHTML = '';
    for (const m of APP_MODES) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset['modeBtn'] = m.id;
      btn.textContent = m.label;
      btn.title = `Režim ${m.title}`;
      btn.addEventListener('click', () => {
        void requestAppMode(m.id);
      });
      host.appendChild(btn);
    }
  }
  applyAppModeToUi();
  onAppModeChange((mode) => applyAppModeToUi(mode));
}
