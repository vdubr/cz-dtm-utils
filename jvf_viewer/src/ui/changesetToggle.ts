import { dialectOf, type JvfDtm } from 'jvf-parser';
import {
  isShowZapis,
  setShowZapis,
  isHighlightZapis,
  setHighlightZapis,
  subscribeChangesetToggle,
  type ChangesetZapisType,
} from '../state/changesetToggle.js';
import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { applyChangesetHighlight } from '../viewer3d/threeScene.js';

/**
 * Blok „Změny v souboru" v levém panelu: přepínače **Nové · Editované ·
 * Mazané** (s barevnou tečkou a počtem záznamů) záznamy daného typu
 * `ZapisObjektu` skryjí / zobrazí, přepínač „Obarvit změny" přidá pod
 * změněné prvky lem barvy změny (tečky jsou barevné jen při obarvení).
 *
 * Blok `#changeset-options-section` se zobrazuje jen pokud načtená data
 * obsahují aspoň jeden záznam se `ZapisObjektu` ∈ {i, u, d} — typicky
 * changeset, ale i nově vytvořené soubory DI/TI (kompletní zápis se samými
 * `i` záznamy bez DTM ID). Přepínač je jen pro typ, který se v datech
 * vyskytuje; přepínače typů se neukazují vůbec, když jsou všechny záznamy
 * stejného typu (skrytí by jen vyprázdnilo mapu — to umí oko u projektu).
 *
 * Při změně kteréhokoli flagu modul:
 *   1. zavolá `layer.changed()` na všech 2D OL vrstvách → style fn se
 *      přepočítá a záznamy daného typu se skryjí / zobrazí, lem se přidá / zmizí,
 *   2. zavolá `applyChangesetHighlight()` na 3D scéně.
 *
 * Default: po nahrání souboru jsou všechny přítomné typy **zobrazené** —
 * uživatel typicky chce hned vidět, co dávka do DTM přidá / změní / odebere.
 */

/** Typ zápisu → id checkboxu a id řádku v index.html. */
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

function getHighlightCheckbox(): HTMLInputElement | null {
  return document.getElementById('toggle-highlight-zapis') as HTMLInputElement | null;
}

/** Barevné tečky u typů jen při zapnutém obarvení — jinak by slibovaly barvu, kterou mapa nekreslí. */
function syncHighlightClass(on: boolean): void {
  document.getElementById('changeset-options-section')?.classList.toggle('highlight-off', !on);
}

/**
 * Inicializace UI a wiring na state. Volat jednou při startu aplikace.
 */
export function setupChangesetToggle(getLayers: () => JvfVectorLayer[]): void {
  layersGetter = getLayers;

  for (const type of CHANGESET_TYPES) {
    const checkbox = getCheckbox(type);
    if (!checkbox) continue;
    checkbox.checked = isShowZapis(type);
    checkbox.addEventListener('change', () => {
      setShowZapis(type, checkbox.checked);
    });
  }

  const highlightCheckbox = getHighlightCheckbox();
  if (highlightCheckbox) {
    highlightCheckbox.checked = isHighlightZapis();
    highlightCheckbox.addEventListener('change', () => {
      setHighlightZapis(highlightCheckbox.checked);
    });
  }
  syncHighlightClass(isHighlightZapis());

  // Listener: refresh 2D + 3D při každé změně kteréhokoli flagu
  if (unsubscribe) unsubscribe();
  unsubscribe = subscribeChangesetToggle((type, value) => {
    // Sync zpět do UI (i pro změnu flagu mimo ovládací prvek)
    const checkbox = type === 'highlight' ? getHighlightCheckbox() : getCheckbox(type);
    if (checkbox && checkbox.checked !== value) checkbox.checked = value;
    if (type === 'highlight') syncHighlightClass(value);
    refreshAllLayers();
    applyChangesetHighlight();
  });
}

/**
 * Vyhodnotit, které typy `ZapisObjektu` (i/u/d) načtené JVF soubory
 * obsahují (**sjednocení přes všechny projekty**), a podle toho zobrazit /
 * skrýt blok i jednotlivé přepínače s počty. Volat po každé změně načtených dat
 * (přidání / odebrání projektu); prázdné pole = žádná data.
 *
 * Default chování:
 *  - aspoň jeden záznam i/u/d → blok viditelný, přítomné typy zobrazené,
 *  - typ v datech chybí → řádek skrytý a flag resetovaný na `false`,
 *    aby nezůstal aktivní z předchozích dat,
 *  - jediná skupina záznamů (např. vše nové) → přepínače typů skryté, zbude obarvení.
 */
export function updateChangesetToggleVisibility(dtms: readonly JvfDtm[]): void {
  const section = document.getElementById('changeset-options-section');
  if (!section) return;

  const counts: Record<ChangesetZapisType, number> = { i: 0, u: 0, d: 0 };
  let hasUnchanged = false;
  // Obarvení změn je default ON, pokud changeset záznamy obsahuje
  // aspoň jeden soubor čistého JVF DTM. Jsou-li jen v souborech dialektů
  // (UDM, ŽXML), default OFF — jde typicky o data geodeta celá jako nová
  // (`i`) a zelená by překryla vlastní symbologii dialektu.
  let highlightDefault = false;
  for (const dtm of dtms) {
    let hasChangeset = false;
    for (const ot of dtm.objekty) {
      for (const z of ot.zaznamy) {
        if (z.zapisObjektu === 'i' || z.zapisObjektu === 'u' || z.zapisObjektu === 'd') {
          counts[z.zapisObjektu]++;
          hasChangeset = true;
        } else {
          hasUnchanged = true;
        }
      }
    }
    if (hasChangeset && !dialectOf(dtm.verze)) highlightDefault = true;
  }
  setHighlightZapis(highlightDefault);
  const highlightCheckbox = getHighlightCheckbox();
  if (highlightCheckbox) highlightCheckbox.checked = highlightDefault;
  syncHighlightClass(highlightDefault);

  const present = CHANGESET_TYPES.filter((t) => counts[t] > 0);
  for (const type of CHANGESET_TYPES) {
    const shown = counts[type] > 0;
    // Default ON pro nový soubor — uživatel hned vidí, co se mění;
    // chybějící typ se resetuje, aby nezůstal aktivní pro další soubor.
    setShowZapis(type, shown);
    const checkbox = getCheckbox(type);
    if (checkbox) checkbox.checked = shown;
    const row = document.getElementById(TOGGLE_UI[type].rowId);
    if (!row) continue;
    row.hidden = !shown;
    const count = row.querySelector('.changeset-count');
    if (count) count.textContent = counts[type].toLocaleString('cs-CZ');
  }

  const rows = document.getElementById('changeset-rows');
  if (rows) rows.hidden = present.length + (hasUnchanged ? 1 : 0) < 2;
  section.style.display = present.length > 0 ? '' : 'none';
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
