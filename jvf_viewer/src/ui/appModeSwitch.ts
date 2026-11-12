/**
 * Spouštěč nástrojů (JVF / UDM / JŽM) v hlavičce a dialogy kolem přepnutí.
 *
 * - Každý nástroj má vlastní adresu (`/`, `/udm`, `/jzm`), název v hlavičce
 *   a barevné schéma (`data-app` na <html> → app-themes.css).
 * - Dlaždice spouštěče jsou odkazy: prostřední klik / Ctrl+klik otevře
 *   nástroj v nové záložce; běžný klik přepne v místě — jsou-li načtené
 *   soubory, zeptá se (přepnutím se zavřou), pak `setAppMode` → main.ts
 *   vyčistí projekty a přestaví UI.
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
  appModeHref,
  getAppMode,
  onAppModeChange,
  setAppMode,
  type AppMode,
  isAppModeEnabled,
} from '../state/appMode.js';
import { getProjectCount } from '../state/projects.js';
import { showConfirm } from './confirmModal.js';
import { openInfoModal } from './infoModal.js';

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

/**
 * Promítne nástroj do UI: barevné schéma (`data-app`), název a odznak
 * v hlavičce, titulek stránky, aktivní dlaždici spouštěče a prvky patřící
 * jen některým nástrojům (`data-mode="udm jzm"` — ukázky, …).
 */
export function applyAppModeToUi(mode: AppMode = getAppMode()): void {
  const def = appModeDef(mode);
  document.body.dataset['appMode'] = mode;
  document.documentElement.dataset['app'] = mode;
  document.title = def.docTitle;
  document.querySelectorAll<HTMLElement>('[data-mode]').forEach((el) => {
    const modes = (el.dataset['mode'] ?? '').split(/\s+/);
    el.hidden = !modes.includes(mode);
  });
  // Odznak a název nástroje — hlavička i řádek v panelu vrstev (mobil).
  document.querySelectorAll<HTMLElement>('[data-app-badge]').forEach((badge) => {
    badge.textContent = def.label;
    badge.dataset['appId'] = mode;
  });
  document.querySelectorAll<HTMLElement>('[data-app-name]').forEach((el) => {
    el.textContent = def.appName;
  });
  document.querySelectorAll<HTMLElement>('[data-app-format]').forEach((el) => {
    el.textContent = def.dataFormat;
  });
  document.querySelectorAll<HTMLAnchorElement>('.app-launcher-tile').forEach((tile) => {
    const active = tile.dataset['modeBtn'] === mode;
    tile.classList.toggle('active', active);
    if (active) tile.setAttribute('aria-current', 'page');
    else tile.removeAttribute('aria-current');
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
  // Nástroj vypnutý v tomto buildu (produkce zatím bez UDM) → soubor odmítnout.
  if (!isAppModeEnabled(target)) {
    await showConfirm({
      title: 'Nepodporovaný formát',
      bodyHtml: `
        <p>Soubor <strong>${escapeHtml(fileName)}</strong> je ve formátu
          <strong>${escapeHtml(appModeDef(target).title)}</strong>, který tato
          verze aplikace zatím nepodporuje.</p>
        <p>Aplikace načítá soubory ${escapeHtml(APP_MODES.map((m) => m.dataFormat).join(', ').replace(/, ([^,]+)$/, ' a $1'))}.</p>`,
      buttons: [{ label: 'Rozumím', variant: 'primary' }],
    });
    return false;
  }
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

/**
 * Vykreslí spouštěč nástrojů (`#app-launcher`) a navěsí obsluhu. Otevírá ho
 * tlačítko v hlavičce (`#btn-app-launcher`, desktop) i řádek nástroje
 * v panelu vrstev (`#btn-app-launcher-drawer`, mobil — tam je spouštěč
 * spodním panelem).
 */
export function setupAppModeSwitch(): void {
  const buttons = ['btn-app-launcher', 'btn-app-launcher-drawer']
    .map((id) => document.getElementById(id) as HTMLButtonElement | null)
    .filter((b): b is HTMLButtonElement => b !== null);
  const panel = document.getElementById('app-launcher');
  // Jediný nástroj v buildu (např. VITE_APP_MODES=jvf): spouštěč zůstává jako
  // nabídka (popis aplikace, Legenda DTM, O aplikaci) — bez dlaždic nástrojů.
  const single = APP_MODES.length < 2;
  if (single) {
    for (const b of buttons) {
      b.title = 'Nabídka — Legenda DTM, O aplikaci a historie verzí';
      b.setAttribute('aria-label', 'Nabídka');
    }
  } else {
    // Popisky podle nástrojů zapnutých v buildu (index.html má všechny).
    const labels = APP_MODES.map((m) => m.label).join(', ');
    for (const b of buttons) {
      const drawer = b.id === 'btn-app-launcher-drawer';
      b.title = drawer ? `Přepnout nástroj (${labels})` : `Nástroje DTM — ${labels}`;
      if (!drawer) b.setAttribute('aria-label', `Nástroje DTM (${labels})`);
    }
  }
  if (buttons.length > 0 && panel) {
    let opener: HTMLButtonElement | null = null;
    const close = (focusButton = false): void => {
      if (panel.hidden) return;
      panel.hidden = true;
      for (const b of buttons) b.setAttribute('aria-expanded', 'false');
      if (focusButton) opener?.focus();
    };
    const open = (from: HTMLButtonElement): void => {
      opener = from;
      panel.hidden = false;
      from.setAttribute('aria-expanded', 'true');
      panel.querySelector<HTMLElement>('.app-launcher-tile.active, .app-launcher-tile, .app-launcher-link')?.focus();
    };
    /** Výběr v mobilním panelu vrstev zavře i panel (jako tlačítka v něm). */
    const closeDrawer = (): void => {
      document.body.classList.remove('drawer-open');
      document.getElementById('btn-drawer')?.setAttribute('aria-expanded', 'false');
    };

    panel.innerHTML = '';
    const heading = document.createElement('span');
    heading.className = 'app-launcher-heading';
    heading.textContent = 'Nástroje DTM';
    const grid = document.createElement('div');
    grid.className = 'app-launcher-grid';
    for (const m of APP_MODES) {
      const tile = document.createElement('a');
      tile.className = 'app-launcher-tile';
      tile.href = appModeHref(m.id);
      tile.dataset['modeBtn'] = m.id;
      tile.title = m.title;
      tile.innerHTML =
        `<span class="app-badge" data-app-id="${m.id}" aria-hidden="true">${escapeHtml(m.label)}</span>` +
        `<span class="app-launcher-name">${escapeHtml(m.label)}</span>` +
        `<span class="app-launcher-org">${escapeHtml(m.org)}</span>`;
      tile.addEventListener('click', (e) => {
        // Nová záložka / okno: nechat prohlížeči.
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        close();
        closeDrawer();
        void requestAppMode(m.id);
      });
      grid.appendChild(tile);
    }
    // Popis nástroje a formátu pod dlaždicemi: aktivní nástroj, při najetí
    // / zaměření dlaždice popis jejího nástroje.
    const desc = document.createElement('p');
    desc.className = 'app-launcher-desc';
    desc.id = 'app-launcher-desc';
    desc.setAttribute('aria-live', 'polite');
    const showDesc = (target: AppMode): void => {
      desc.textContent = appModeDef(target).description;
    };
    for (const tile of grid.querySelectorAll<HTMLAnchorElement>('.app-launcher-tile')) {
      const id = tile.dataset['modeBtn'] as AppMode;
      tile.setAttribute('aria-describedby', 'app-launcher-desc');
      tile.addEventListener('mouseenter', () => showDesc(id));
      tile.addEventListener('focus', () => showDesc(id));
    }
    grid.addEventListener('mouseleave', () => showDesc(getAppMode()));
    grid.addEventListener('focusout', (e) => {
      if (!grid.contains(e.relatedTarget as Node | null)) showDesc(getAppMode());
    });
    showDesc(getAppMode());
    onAppModeChange((mode) => showDesc(mode));

    const links = document.createElement('div');
    links.className = 'app-launcher-links';
    for (const [label, action] of [
      ['Legenda DTM', () => document.getElementById('btn-legend')?.click()],
      ['O aplikaci a historie verzí', openInfoModal],
    ] as const) {
      const link = document.createElement('button');
      link.type = 'button';
      link.className = 'app-launcher-link';
      link.textContent = label;
      link.addEventListener('click', () => {
        close();
        closeDrawer();
        action();
      });
      links.appendChild(link);
    }
    if (single) panel.append(desc, links);
    else panel.append(heading, grid, desc, links);

    for (const button of buttons) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!panel.hidden) {
          close();
          return;
        }
        // Z panelu vrstev (mobil): panel zavřít, spouštěč je spodní panel přes mapu.
        if (button.id === 'btn-app-launcher-drawer') closeDrawer();
        open(button);
      });
    }
    document.addEventListener('click', (e) => {
      const target = e.target as Node | null;
      if (!panel.hidden && target && !panel.contains(target) && !buttons.some((b) => b.contains(target))) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) close(true);
    });
  }
  applyAppModeToUi();
  onAppModeChange((mode) => applyAppModeToUi(mode));
}
