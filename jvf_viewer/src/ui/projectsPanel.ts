import {
  countZaznamy,
  getProjects,
  MAX_PROJECTS,
} from '../state/projects.js';

/**
 * Sekce „Projekty" v levém panelu — seznam načtených JVF souborů.
 *
 * Každý řádek: barevná tečka projektu, název souboru, počet záznamů
 * a tlačítko × pro odebrání. Sekce se zobrazuje jen pokud je načten
 * aspoň jeden projekt — bez dat se UI nemění (prázdný stav vieweru).
 *
 * Další projekt se přidává stávajícími cestami: tlačítko „Nahrát soubor"
 * (multi-výběr) nebo drag & drop kamkoli nad okno aplikace.
 */

export interface ProjectsPanelCallbacks {
  /** Volá se po kliknutí na × u projektu. Orchestraci (rebuild) řeší volající. */
  onRemove: (projectId: string) => void;
  /** Volá se po kliknutí na řádek projektu — zoom na extent projektu (2D i 3D). */
  onZoom: (projectId: string) => void;
}

export function renderProjectsPanel(callbacks: ProjectsPanelCallbacks): void {
  const section = document.getElementById('projects-section');
  const list = document.getElementById('projects-list');
  if (!section || !list) return;

  const projects = getProjects();
  section.style.display = projects.length > 0 ? '' : 'none';
  list.innerHTML = '';
  if (projects.length === 0) return;

  for (const project of projects) {
    const row = document.createElement('div');
    row.className = 'project-item';
    row.title = `${project.nazev} — klik přiblíží pohled na rozsah projektu`;
    row.addEventListener('click', () => {
      callbacks.onZoom(project.id);
    });

    const dot = document.createElement('span');
    dot.className = 'project-dot';
    dot.style.background = project.color;

    const nameEl = document.createElement('span');
    nameEl.className = 'project-name';
    nameEl.textContent = project.nazev;

    const countEl = document.createElement('span');
    countEl.className = 'project-count';
    countEl.textContent = String(countZaznamy(project.dtm));
    countEl.title = 'Počet záznamů v projektu';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'project-remove-btn';
    removeBtn.textContent = '×';
    removeBtn.title = `Odebrat projekt „${project.nazev}"`;
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      callbacks.onRemove(project.id);
    });

    row.append(dot, nameEl, countEl, removeBtn);
    list.appendChild(row);
  }

  // Hint na limit — zobrazit jen když je kapacita vyčerpaná.
  if (projects.length >= MAX_PROJECTS) {
    const hint = document.createElement('div');
    hint.className = 'projects-limit-hint';
    hint.textContent = `Dosažen limit ${MAX_PROJECTS} projektů — pro přidání dalšího nejprve některý odeberte.`;
    list.appendChild(hint);
  }
}
