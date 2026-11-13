import { dialectOf, type JvfDtm } from 'jvf-parser';
import {
  isShowZapis,
  setShowZapis,
  isHighlightZapis,
  setHighlightZapis,
  setChangesetFlags,
  subscribeChangesetToggle,
  type ChangesetZapisType,
} from '../state/changesetToggle.js';
import { ZAPIS_HIGHLIGHT_COLORS, type JvfVectorLayer } from '../map/jvfLayers.js';
import { applyChangesetHighlight } from '../viewer3d/threeScene.js';
import { closeMapCard, setupMapCard } from './mapCard.js';

/**
 * Tlačítko „Změny" nad mapou (jako DTM / Katastr) s kartou „Změny v souboru":
 * přepínač **Obarvit změny** mění jen styl (pod změněné prvky přidá lem
 * barvy změny), zaškrtávátka **Nové · Editované · Mazané** (s barevnou
 * tečkou a počtem záznamů) jsou filtr — záznamy daného typu `ZapisObjektu`
 * skryjí / zobrazí, a to i bez obarvení (tečky jsou barevné jen při obarvení).
 *
 * Tlačítko `#changes-control` se zobrazuje jen pokud načtená data
 * obsahují aspoň jeden záznam se `ZapisObjektu` ∈ {i, u, d} — typicky
 * changeset, ale i nově vytvořené soubory DI/TI (kompletní zápis se samými
 * `i` záznamy bez DTM ID). Zaškrtávátko je pro každý typ, který se v datech
 * vyskytuje — i když je jediný (např. vše editované).
 *
 * Při změně flagů modul:
 *   1. zavolá `layer.changed()` na všech 2D OL vrstvách → style fn se
 *      přepočítá a záznamy daného typu se skryjí / zobrazí, lem se přidá / zmizí,
 *   2. zavolá `applyChangesetHighlight()` na 3D scéně.
 *
 * Default: po nahrání souboru jsou všechny přítomné typy **zobrazené** —
 * uživatel typicky chce hned vidět, co dávka do DTM přidá / změní / odebere.
 */

const CHANGESET_TYPES: ChangesetZapisType[] = ['i', 'u', 'd'];

/** „Všechny záznamy jsou …" — jediný typ změny v datech. */
const ONLY_LABEL: Record<ChangesetZapisType, string> = {
  i: 'nové',
  u: 'editované',
  d: 'mazané',
};

let layersGetter: () => JvfVectorLayer[] = () => [];
let unsubscribe: (() => void) | null = null;

/** Řádek typu v kartě (`data-zapis`) a jeho zaškrtávátko. */
function getRow(type: ChangesetZapisType): HTMLElement | null {
  return document.querySelector<HTMLElement>(`.changeset-row[data-zapis="${type}"]`);
}
function getCheckbox(type: ChangesetZapisType): HTMLInputElement | null {
  return getRow(type)?.querySelector<HTMLInputElement>('input') ?? null;
}
function getHighlightCheckbox(): HTMLInputElement | null {
  return document.getElementById('toggle-highlight-zapis') as HTMLInputElement | null;
}

/**
 * Promítne stav do karty a tlačítka: zaškrtávátka, šedé tečky bez obarvení
 * (jinak by slibovaly barvu, kterou mapa nekreslí) a aktivní barva tlačítka
 * při obarvení nebo filtru (skrytý typ, který v datech je).
 */
function syncUi(): void {
  const highlight = isHighlightZapis();
  const highlightCheckbox = getHighlightCheckbox();
  if (highlightCheckbox) highlightCheckbox.checked = highlight;
  document.getElementById('changeset-options-section')?.classList.toggle('highlight-off', !highlight);
  let filtered = false;
  for (const type of CHANGESET_TYPES) {
    const checkbox = getCheckbox(type);
    if (checkbox) checkbox.checked = isShowZapis(type);
    if (getRow(type)?.hidden === false && !isShowZapis(type)) filtered = true;
  }
  document.getElementById('btn-changes-menu')?.classList.toggle('is-on', highlight || filtered);
}

/**
 * Inicializace UI a wiring na state. Volat jednou při startu aplikace.
 */
export function setupChangesetToggle(getLayers: () => JvfVectorLayer[]): void {
  layersGetter = getLayers;
  setupMapCard('btn-changes-menu', 'changes-card');

  for (const type of CHANGESET_TYPES) {
    // Barva tečky = barva lemu změny v mapě (jediný zdroj ZAPIS_HIGHLIGHT_COLORS).
    getRow(type)?.style.setProperty('--zapis-color', ZAPIS_HIGHLIGHT_COLORS[type].stroke);
    const checkbox = getCheckbox(type);
    checkbox?.addEventListener('change', () => setShowZapis(type, checkbox.checked));
  }
  const highlightCheckbox = getHighlightCheckbox();
  highlightCheckbox?.addEventListener('change', () => setHighlightZapis(highlightCheckbox.checked));

  // Listener: UI + refresh 2D + 3D při každé změně flagů
  if (unsubscribe) unsubscribe();
  unsubscribe = subscribeChangesetToggle(() => {
    syncUi();
    refreshAllLayers();
    applyChangesetHighlight();
  });
  syncUi();
}

/**
 * Vyhodnotit, které typy `ZapisObjektu` (i/u/d) načtené JVF soubory
 * obsahují (**sjednocení přes všechny projekty**), a podle toho zobrazit /
 * skrýt tlačítko i jednotlivá zaškrtávátka s počty. Volat po každé změně
 * načtených dat (přidání / odebrání projektu); prázdné pole = žádná data.
 *
 * Default chování:
 *  - aspoň jeden záznam i/u/d → tlačítko viditelné, přítomné typy zobrazené,
 *  - typ v datech chybí → řádek skrytý a flag resetovaný na `false`,
 *    aby nezůstal aktivní z předchozích dat,
 *  - jsou-li všechny záznamy stejného typu, nápověda to řekne (zaškrtávátko
 *    zůstává — jeho vypnutí skryje změněné záznamy).
 */
export function updateChangesetToggleVisibility(dtms: readonly JvfDtm[]): void {
  const control = document.getElementById('changes-control');
  if (!control) return;

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

  const present = CHANGESET_TYPES.filter((t) => counts[t] > 0);
  for (const type of CHANGESET_TYPES) {
    const row = getRow(type);
    if (!row) continue;
    row.hidden = counts[type] === 0;
    const count = row.querySelector('.changeset-count');
    if (count) count.textContent = counts[type].toLocaleString('cs-CZ');
  }
  const hint = document.getElementById('changeset-hint');
  if (hint) {
    const filter = 'Zaškrtávátka filtrují — záznamy typu zobrazí / skryjí.';
    const style = 'Obarvení mění jen vzhled — pod prvek přidá lem barvy změny, nic neskryje.';
    // Jediný typ změny a žádné nezměněné záznamy → „Všechny záznamy jsou …".
    const only = present.length === 1 && !hasUnchanged ? present[0] : undefined;
    hint.textContent = only
      ? `Všechny záznamy jsou ${ONLY_LABEL[only]} (${counts[only].toLocaleString('cs-CZ')}). ${filter} ${style}`
      : `${filter} ${style}`;
  }
  control.hidden = present.length === 0;
  if (control.hidden) closeMapCard('changes-card');

  // Default ON pro přítomné typy, chybějící typ se resetuje, aby nezůstal
  // aktivní pro další soubor — jedním voláním (jeden přepočet vrstev).
  setChangesetFlags({
    highlight: highlightDefault,
    show: { i: counts.i > 0, u: counts.u > 0, d: counts.d > 0 },
  });
  syncUi();
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
