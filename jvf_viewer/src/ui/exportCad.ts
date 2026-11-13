/**
 * Export načteného projektu do AutoCADu (DXF) ve vzhledu datového modelu —
 * stejném jako ve vieweru: JVF DTM podle Katalogu DTM ČR (ČÚZK), UDM podle
 * knihovny ČKZ, ŽXML se znaky SŽ.
 *
 * Dialog (přes `showConfirm`): výběr projektu, verze DXF a voleb; po potvrzení
 * se líně načte balíček `jvf-cad` (export není potřeba při běžném prohlížení)
 * a výkres se stáhne jako soubor. Vše běží lokálně v prohlížeči.
 */
import type { JvfProject } from '../state/projects.js';
import { showConfirm } from './confirmModal.js';
import { downloadBlob } from '../util/download.js';
import { getAppMode } from '../state/appMode.js';
import { track } from '../analytics.js';

const EXPORT_LABEL = 'Exportovat';

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function bodyHtml(projects: readonly JvfProject[]): string {
  // Výplně ploch má jen Katalog DTM ČR (čisté JVF DTM bez dialektu).
  const anyJvf = projects.some((p) => !p.dtm.dialect);
  const projectSelect =
    projects.length > 1
      ? `<label class="cad-row">Projekt
           <select id="cad-project">${projects
             .map((p) => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.nazev)}</option>`)
             .join('')}</select>
         </label>`
      : '';
  return `
    <div class="cad-export">
      ${projectSelect}
      <fieldset class="cad-row">
        <legend>Formát</legend>
        <label><input type="radio" name="cad-format" value="R2013" checked>
          DXF (AutoCAD 2013+) — barvy přesně (true color)</label>
        <label><input type="radio" name="cad-format" value="R2000">
          DXF R2000 — pro starší CAD, barvy zaokrouhlené na paletu AutoCADu</label>
      </fieldset>
      <p class="cad-note cad-dwg">
        <strong>DWG:</strong> DXF otevřete v AutoCADu a uložte jako DWG
        (Uložit jako → Výkres AutoCADu *.dwg).
      </p>
      <label class="cad-row"><input type="checkbox" id="cad-deleted">
        Zahrnout mazané záznamy (na hladiny <code>…_DEL</code>)</label>
      <label class="cad-row"><input type="checkbox" id="cad-flat">
        Výkres ve 2D (výšky Z = 0)</label>
      ${
        anyJvf
          ? `<label class="cad-row"><input type="checkbox" id="cad-fill" checked>
        Vyplnit plochy barvou dle Katalogu DTM ČR (JVF)</label>`
          : ''
      }
      <p class="cad-note">
        Vzhled jako v mapě: JVF DTM podle Katalogu kartografických symbolů
        DTM ČR (ČÚZK), UDM podle knihovny ČKZ, ŽXML se znaky SŽ. Hladiny
        podle objektových typů, značky jako bloky, popisy jako texty,
        atributy objektů v XDATA „UDM" (AutoCAD: <code>XDLIST</code>).
        Souřadnice EPSG:5514, měřítko značek a textů 1:500.
        Typy čar mají čárkování dle vzoru; značky vložené do čar
        (ploty, sítě TI) se nekreslí.
      </p>
    </div>`;
}

/** Otevře dialog exportu do CAD a po potvrzení stáhne výkres. */
export async function openExportCadDialog(projects: readonly JvfProject[]): Promise<void> {
  if (projects.length === 0) return;
  const choice = await showConfirm({
    title: 'Export do CAD (AutoCAD DXF)',
    bodyHtml: bodyHtml(projects),
    buttons: [
      { label: 'Zrušit', variant: 'secondary' },
      { label: EXPORT_LABEL, variant: 'primary' },
    ],
  });
  if (choice !== EXPORT_LABEL) return;

  const projectId = (document.getElementById('cad-project') as HTMLSelectElement | null)?.value;
  const project = projects.find((p) => p.id === projectId) ?? projects[0]!;
  const format = (document.querySelector('input[name="cad-format"]:checked') as HTMLInputElement | null)?.value;
  const version = format === 'R2000' ? 'R2000' : 'R2013';
  const includeDeleted = (document.getElementById('cad-deleted') as HTMLInputElement | null)?.checked ?? false;
  const flatten2D = (document.getElementById('cad-flat') as HTMLInputElement | null)?.checked ?? false;
  const fillAreas = (document.getElementById('cad-fill') as HTMLInputElement | null)?.checked ?? true;

  try {
    const { exportDxf } = await import('jvf-cad');
    const { dxf } = exportDxf(project.dtm, { version, includeDeleted, flatten2D, fillAreas });
    const base = project.nazev.replace(/\.(jvf\.)?(xml|jvf)$/i, '');
    downloadBlob(dxf, 'application/dxf', `${base}${version === 'R2000' ? '_R2000' : ''}.dxf`);
    track('export_dxf', { mode: getAppMode(), format: version, fill: fillAreas });
  } catch (err) {
    console.error('Export do CAD selhal:', err);
    await showConfirm({
      title: 'Export do CAD selhal',
      bodyHtml: `<p>${escapeHtml(err instanceof Error ? err.message : String(err))}</p>`,
      buttons: [{ label: 'Rozumím', variant: 'primary' }],
    });
  }
}
