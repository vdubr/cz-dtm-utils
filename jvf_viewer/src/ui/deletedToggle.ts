import type { JvfDtm } from 'jvf-parser';
import {
  isShowDeleted,
  setShowDeleted,
  subscribeShowDeleted,
} from '../state/deletedToggle.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { applyDeletedHighlight } from '../viewer3d/threeScene.js';

/**
 * Wiring checkboxu „Zobrazit mazané (červeně)" v levém panelu.
 *
 * Sekce `#deleted-options-section` se zobrazuje **jen pokud nahraný JVF
 * obsahuje aspoň jeden záznam se `ZapisObjektu='d'`** (typicky changeset).
 * V kompletním zápisu (`TypZapisu='kompletní zápis'`) by checkbox neměl
 * smysl — všechny záznamy v souboru jsou aktivní.
 *
 * Při flipu flagu modul:
 *   1. zavolá `layer.changed()` na všech 2D OL vrstvách → style fn se
 *      přepočítá a mazané se buď skryjí, nebo přebarví červeně,
 *   2. zavolá `applyDeletedHighlight(showDeleted)` na 3D scéně.
 *
 * Default: po nahrání souboru s mazanými je checkbox **zaškrtnutý** —
 * uživatel typicky chce mazané vidět hned, aby zkontroloval změnu před
 * akceptací do IS DMVS.
 */

let layersGetter: () => JvfVectorLayer[] = () => [];
let unsubscribe: (() => void) | null = null;

/**
 * Inicializace UI a wiring na state. Volat jednou při startu aplikace.
 */
export function setupDeletedToggle(getLayers: () => JvfVectorLayer[]): void {
  layersGetter = getLayers;

  const checkbox = document.getElementById('toggle-show-deleted') as HTMLInputElement | null;
  if (!checkbox) return;

  // Sync UI ↔ state na startu
  checkbox.checked = isShowDeleted();

  checkbox.addEventListener('change', () => {
    setShowDeleted(checkbox.checked);
  });

  // Listener: refresh 2D + 3D při každé změně state
  if (unsubscribe) unsubscribe();
  unsubscribe = subscribeShowDeleted((showDeleted) => {
    // Sync zpět do UI (pro případ, že flag byl změněn mimo checkbox)
    if (checkbox.checked !== showDeleted) checkbox.checked = showDeleted;
    refreshAllLayers();
    applyDeletedHighlight(showDeleted);
  });
}

/**
 * Vyhodnotit, zda parsovaný JVF obsahuje aspoň jeden mazaný záznam, a podle
 * toho zobrazit / skrýt sekci s checkboxem. Volat z `onJvfLoaded` po
 * každém načtení souboru.
 *
 * Default chování:
 *  - changeset s mazanými → sekce viditelná, checkbox zaškrtnutý (mazané
 *    se hned zobrazí červeně, uživatel vidí změnu),
 *  - kompletní zápis (žádné mazané) → sekce skrytá, flag se resetuje na
 *    `false` aby nezůstal aktivní z předchozího souboru.
 */
export function updateDeletedToggleVisibility(dtm: JvfDtm | null): void {
  const section = document.getElementById('deleted-options-section');
  const checkbox = document.getElementById('toggle-show-deleted') as HTMLInputElement | null;
  if (!section) return;

  const hasDeleted =
    dtm !== null &&
    dtm.objekty.some((ot) => ot.zaznamy.some((z) => z.zapisObjektu === 'd'));

  if (hasDeleted) {
    section.style.display = '';
    // Default ON pro nový soubor s mazanými — uživatel hned vidí, co se mění
    if (checkbox && !checkbox.checked) {
      checkbox.checked = true;
      setShowDeleted(true);
    }
  } else {
    section.style.display = 'none';
    // Reset flagu, aby zůstal `false` pro další (možná kompletní) soubor
    if (isShowDeleted()) setShowDeleted(false);
    if (checkbox) checkbox.checked = false;
  }
}

/**
 * Donutit OL přepočítat styly na všech aktuálně nahraných JVF vrstvách.
 * `olLayer.changed()` triggeruje re-render, style function se zavolá znovu
 * a v ní se uplatní nový stav `isShowDeleted()`.
 */
function refreshAllLayers(): void {
  for (const { olLayer } of layersGetter()) {
    olLayer.changed();
  }
}
