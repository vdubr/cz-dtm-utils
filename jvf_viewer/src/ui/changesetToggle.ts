import type { JvfDtm } from 'jvf-parser';
import {
  isShowZapis,
  setShowZapis,
  subscribeChangesetToggle,
  type ChangesetZapisType,
} from '../state/changesetToggle.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { applyChangesetHighlight } from '../viewer3d/threeScene.js';

/**
 * Wiring checkboxů „Zobrazit nové (zeleně) / editované (oranžově) /
 * mazané (červeně)" v levém panelu.
 *
 * Sekce `#changeset-options-section` se zobrazuje jen pokud nahraný JVF
 * obsahuje aspoň jeden záznam se `ZapisObjektu` ∈ {i, u, d} — typicky
 * changeset, ale i nově vytvořené soubory DI/TI (kompletní zápis se samými
 * `i` záznamy bez DTM ID). Každý řádek s checkboxem se navíc zobrazuje
 * jen pro typ, který se v souboru skutečně vyskytuje.
 *
 * Při flipu kteréhokoli flagu modul:
 *   1. zavolá `layer.changed()` na všech 2D OL vrstvách → style fn se
 *      přepočítá a záznamy daného typu se buď skryjí, nebo přebarví,
 *   2. zavolá `applyChangesetHighlight()` na 3D scéně.
 *
 * Default: po nahrání souboru jsou všechny přítomné typy **zaškrtnuté** —
 * uživatel typicky chce hned vidět, co dávka do DTM přidá / změní / odebere.
 */

/** Mapování typ zápisu → id checkboxu a id řádku v index.html. */
const TOGGLE_UI: Record<ChangesetZapisType, { checkboxId: string; rowId: string }> = {
  i: { checkboxId: 'toggle-show-inserted', rowId: 'row-show-inserted' },
  u: { checkboxId: 'toggle-show-updated', rowId: 'row-show-updated' },
  d: { checkboxId: 'toggle-show-deleted', rowId: 'row-show-deleted' },
};

const CHANGESET_TYPES: ChangesetZapisType[] = ['i', 'u', 'd'];

let layersGetter: () => JvfVectorLayer[] = () => [];
let unsubscribe: (() => void) | null = null;

function getCheckbox(type: ChangesetZapisType): HTMLInputElement | null {
  return document.getElementById(TOGGLE_UI[type].checkboxId) as HTMLInputElement | null;
}

/**
 * Inicializace UI a wiring na state. Volat jednou při startu aplikace.
 */
export function setupChangesetToggle(getLayers: () => JvfVectorLayer[]): void {
  layersGetter = getLayers;

  for (const type of CHANGESET_TYPES) {
    const checkbox = getCheckbox(type);
    if (!checkbox) continue;
    // Sync UI ↔ state na startu
    checkbox.checked = isShowZapis(type);
    checkbox.addEventListener('change', () => {
      setShowZapis(type, checkbox.checked);
    });
  }

  // Listener: refresh 2D + 3D při každé změně kteréhokoli flagu
  if (unsubscribe) unsubscribe();
  unsubscribe = subscribeChangesetToggle((type, value) => {
    // Sync zpět do UI (pro případ, že flag byl změněn mimo checkbox)
    const checkbox = getCheckbox(type);
    if (checkbox && checkbox.checked !== value) checkbox.checked = value;
    refreshAllLayers();
    applyChangesetHighlight();
  });
}

/**
 * Vyhodnotit, které typy `ZapisObjektu` (i/u/d) parsovaný JVF obsahuje,
 * a podle toho zobrazit / skrýt sekci i jednotlivé řádky s checkboxy.
 * Volat z `onJvfLoaded` po každém načtení souboru.
 *
 * Default chování:
 *  - soubor s i/u/d záznamy → sekce viditelná, přítomné typy mají řádek
 *    a checkbox zaškrtnutý (záznamy se hned zobrazí barevně),
 *  - typ v souboru chybí → jeho řádek skrytý a flag resetovaný na `false`,
 *    aby nezůstal aktivní z předchozího souboru.
 */
export function updateChangesetToggleVisibility(dtm: JvfDtm | null): void {
  const section = document.getElementById('changeset-options-section');
  if (!section) return;

  const present = new Set<ChangesetZapisType>();
  if (dtm !== null) {
    for (const ot of dtm.objekty) {
      for (const z of ot.zaznamy) {
        if (z.zapisObjektu === 'i' || z.zapisObjektu === 'u' || z.zapisObjektu === 'd') {
          present.add(z.zapisObjektu);
        }
      }
    }
  }

  for (const type of CHANGESET_TYPES) {
    const row = document.getElementById(TOGGLE_UI[type].rowId);
    const checkbox = getCheckbox(type);
    if (present.has(type)) {
      if (row) row.style.display = '';
      // Default ON pro nový soubor — uživatel hned vidí, co se mění
      if (checkbox) checkbox.checked = true;
      setShowZapis(type, true);
    } else {
      if (row) row.style.display = 'none';
      // Reset flagu, aby zůstal `false` pro další soubor
      setShowZapis(type, false);
      if (checkbox) checkbox.checked = false;
    }
  }

  section.style.display = present.size > 0 ? '' : 'none';
}

/**
 * Donutit OL přepočítat styly na všech aktuálně nahraných JVF vrstvách.
 * `olLayer.changed()` triggeruje re-render, style function se zavolá znovu
 * a v ní se uplatní nový stav `isShowZapis()`.
 */
function refreshAllLayers(): void {
  for (const { olLayer } of layersGetter()) {
    olLayer.changed();
  }
}
