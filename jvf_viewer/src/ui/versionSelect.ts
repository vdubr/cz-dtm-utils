/**
 * Version selector v hlavičce — `<select>` s podporovanými verzemi JVF DTM.
 *
 * Pokud uživatel přepne verzi a v aplikaci jsou nahraná data, ukáže se
 * confirm modal s upozorněním, že přepnutí způsobí ztrátu načtených dat.
 * Po potvrzení se zavolá `onChangeWithDataLoss(newVersion)` (typicky
 * vyčistí scénu) a aktivní verze se přepne. Při odmítnutí se select
 * vrátí na předchozí hodnotu.
 *
 * Pokud nejsou žádná data nahraná, přepnutí proběhne bez ptaní.
 */

import { SUPPORTED_VERSIONS, type JvfVersion } from 'jvf-parser';
import { getActiveVersion, setActiveVersion } from '../state/activeVersion.js';
import { showConfirm } from './confirmModal.js';

interface SetupOptions {
  /** Vrací `true`, pokud jsou aktuálně nahraná JVF data (a přepnutí by je vymazalo). */
  hasData: () => boolean;
  /** Volá se po potvrzení přepnutí, když byla data nahraná — má je vyčistit ze scény. */
  onClearData: () => void;
}

export function setupVersionSelect(opts: SetupOptions): void {
  const select = document.getElementById('version-select') as HTMLSelectElement | null;
  if (!select) return;

  // Naplň options ze SUPPORTED_VERSIONS
  select.innerHTML = '';
  for (const v of SUPPORTED_VERSIONS) {
    const option = document.createElement('option');
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  }
  select.value = getActiveVersion();

  // Disable, pokud je jen jedna verze — ale necháme ji vidět jako indikátor.
  if (SUPPORTED_VERSIONS.length === 1) {
    select.disabled = true;
    select.title = 'Aktuálně je podporována pouze jedna verze JVF DTM.';
  }

  select.addEventListener('change', async () => {
    const newVersion = select.value as JvfVersion;
    const oldVersion = getActiveVersion();
    if (newVersion === oldVersion) return;

    if (opts.hasData()) {
      const choice = await showConfirm({
        title: 'Změnit verzi JVF DTM?',
        bodyHtml: `
          <p>
            Chystáte se přepnout aktivní verzi z <strong>${oldVersion}</strong>
            na <strong>${newVersion}</strong>.
          </p>
          <p>
            <strong>Aktuálně načtená data budou odstraněna</strong>, protože
            byla zpracována pro verzi ${oldVersion}. Po přepnutí bude potřeba
            soubor nahrát znovu (musí odpovídat verzi ${newVersion}).
          </p>
        `,
        buttons: [
          { label: 'Zrušit', variant: 'secondary' },
          { label: 'Přepnout a vymazat data', variant: 'danger' },
        ],
      });

      if (choice !== 'Přepnout a vymazat data') {
        // Zrušit nebo zavřeno — vrátit select na původní hodnotu
        select.value = oldVersion;
        return;
      }

      opts.onClearData();
    }

    setActiveVersion(newVersion);
  });
}
