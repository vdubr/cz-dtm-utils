import { dialectOf, formatVersionLabel } from 'jvf-parser';
import {
  countZaznamy,
  getProjects,
  MAX_PROJECTS,
} from '../state/projects.js';
import {
  isProjectVisible,
  setProjectVisible,
  subscribeFeatureFilter,
} from '../state/featureFilter.js';
import { showConfirm } from './confirmModal.js';

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/**
 * Sekce „Projekty" v levém panelu — seznam načtených JVF souborů.
 *
 * Každý řádek: barevná tečka projektu, název souboru (tooltip s verzí
 * JVF DTM / dialektu), počet záznamů, zeměkoule (přiblížit na rozsah
 * projektu), oko (skrýt / zobrazit všechny prvky projektu ve 2D, 3D
 * i v Přehledu prvků — dimenze projekt filtru prvků) a popelnice pro odebrání.
 * Sekce se zobrazuje jen pokud je načten
 * aspoň jeden projekt — bez dat se UI nemění (prázdný stav vieweru).
 *
 * Hlavička sekce je sbalitelná (klik na „Projekty") — s více načtenými
 * soubory seznam roste a zabírá místo, sbalením se schová. Počet projektů
 * zůstává v hlavičce viditelný i ve sbaleném stavu. Stav je in-memory
 * (přežije rerender, ne reload) — konzistentní s ostatními stavy vieweru.
 *
 * Další projekt se přidává stávajícími cestami: tlačítko „Nahrát soubor"
 * (multi-výběr) nebo drag & drop kamkoli nad okno aplikace.
 */

export interface ProjectsPanelCallbacks {
  /** Volá se po kliknutí na popelnici u projektu. Orchestraci (rebuild) řeší volající. */
  onRemove: (projectId: string) => void;
  /** Volá se po kliknutí na řádek projektu — zoom na extent projektu (2D i 3D). */
  onZoom: (projectId: string) => void;
}

/** Promítne viditelnost projektů (filtr prvků) do ikon oka v řádcích. */
function syncProjectVisibility(): void {
  document.querySelectorAll<HTMLElement>('.project-item[data-project-id]').forEach((row) => {
    const visible = isProjectVisible(row.dataset['projectId']);
    row.classList.toggle('project-hidden', !visible);
    const btn = row.querySelector<HTMLButtonElement>('.project-visibility-btn');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(visible));
    btn.title = visible ? 'Skrýt všechny prvky projektu' : 'Zobrazit všechny prvky projektu';
    btn.setAttribute('aria-label', btn.title);
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = visible ? 'visibility' : 'visibility_off';
  });
}
let visibilityWired = false;

/** Sbalený stav sekce — in-memory, default rozbaleno. */
let collapsed = false;
/** Zaručí připojení click listeneru na hlavičku jen jednou. */
let headerWired = false;

function applyCollapsedState(section: HTMLElement): void {
  section.classList.toggle('collapsed', collapsed);
  const header = document.getElementById('projects-header');
  header?.setAttribute('aria-expanded', String(!collapsed));
}

export function renderProjectsPanel(callbacks: ProjectsPanelCallbacks): void {
  const section = document.getElementById('projects-section');
  const list = document.getElementById('projects-list');
  if (!section || !list) return;

  const projects = getProjects();
  section.style.display = projects.length > 0 ? '' : 'none';
  list.innerHTML = '';
  if (projects.length === 0) return;

  // Sbalitelná hlavička — listener připojit jen jednou (hlavička je mimo
  // list, přežívá rerender). Počet projektů ukázat i ve sbaleném stavu.
  const header = document.getElementById('projects-header');
  const countBadge = document.getElementById('projects-header-count');
  if (countBadge) countBadge.textContent = String(projects.length);
  if (header && !headerWired) {
    header.addEventListener('click', () => {
      collapsed = !collapsed;
      applyCollapsedState(section);
    });
    headerWired = true;
  }
  applyCollapsedState(section);
  if (!visibilityWired) {
    visibilityWired = true;
    subscribeFeatureFilter(syncProjectVisibility);
  }

  for (const project of projects) {
    // Verze JVF DTM / dialektu — „Verze UDM 2.1.1 (JVF 1.5.0.2)".
    const { verze, verzeJvfDtm } = project.dtm;
    const versionTitle = dialectOf(verze)
      ? `Verze ${formatVersionLabel(verze)}${verzeJvfDtm ? ` (JVF ${verzeJvfDtm})` : ''}`
      : `Verze ${formatVersionLabel(verze)}`;

    const row = document.createElement('div');
    row.className = 'project-item';
    row.dataset['projectId'] = project.id;
    row.title = `${project.nazev} — ${versionTitle}; klik přiblíží pohled na rozsah projektu`;
    row.addEventListener('click', () => {
      callbacks.onZoom(project.id);
    });

    const dot = document.createElement('span');
    dot.className = 'project-dot';
    dot.style.background = project.color;

    // Název — tooltip s verzí JVF DTM daného projektu (verze je per-soubor,
    // při více projektech může mít každý řádek jinou).
    const nameEl = document.createElement('span');
    nameEl.className = 'project-name';
    nameEl.textContent = project.nazev;
    nameEl.title = versionTitle;
    nameEl.dataset['version'] = versionTitle;

    const countEl = document.createElement('span');
    countEl.className = 'project-count';
    countEl.textContent = String(countZaznamy(project.dtm));
    countEl.title = 'Počet záznamů v projektu';

    // Zeměkoule — přiblížit pohled na rozsah projektu (2D i 3D).
    const zoomBtn = document.createElement('button');
    zoomBtn.type = 'button';
    zoomBtn.className = 'project-icon-btn project-zoom-btn';
    zoomBtn.title = 'Přiblížit na rozsah projektu';
    zoomBtn.setAttribute('aria-label', `Přiblížit na projekt „${project.nazev}"`);
    zoomBtn.innerHTML = '<span class="material-symbols-outlined">public</span>';
    zoomBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      callbacks.onZoom(project.id);
    });

    // Oko — skrýt / zobrazit všechny prvky projektu (filtr prvků, projekt).
    const eyeBtn = document.createElement('button');
    eyeBtn.type = 'button';
    eyeBtn.className = 'project-icon-btn project-visibility-btn';
    eyeBtn.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    eyeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setProjectVisible(project.id, !isProjectVisible(project.id));
    });

    // Popelnice — odebrat projekt.
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'project-icon-btn project-remove-btn';
    removeBtn.title = `Odebrat projekt „${project.nazev}"`;
    removeBtn.setAttribute('aria-label', removeBtn.title);
    removeBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    removeBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      // Odebrání je potřeba potvrdit — přijde se o načtená data i kontrolu.
      const choice = await showConfirm({
        title: 'Odebrat projekt?',
        bodyHtml: `<p>Projekt <strong>${escapeHtml(project.nazev)}</strong> se odebere z mapy,
          vrstev výkresu i Přehledu prvků. Soubor na disku zůstane beze změny.</p>`,
        buttons: [
          { label: 'Zrušit', variant: 'secondary' },
          { label: 'Odebrat', variant: 'danger' },
        ],
      });
      if (choice === 'Odebrat') callbacks.onRemove(project.id);
    });

    row.append(dot, nameEl, countEl, zoomBtn, eyeBtn, removeBtn);
    list.appendChild(row);
  }
  syncProjectVisibility();

  // Hint na limit — zobrazit jen když je kapacita vyčerpaná.
  if (projects.length >= MAX_PROJECTS) {
    const hint = document.createElement('div');
    hint.className = 'projects-limit-hint';
    hint.textContent = `Dosažen limit ${MAX_PROJECTS} projektů — pro přidání dalšího nejprve některý odeberte.`;
    list.appendChild(hint);
  }
}
