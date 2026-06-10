/**
 * Globální stav „zobrazit mazané záznamy" (`ZapisObjektu='d'`).
 *
 * V changeset JVF souborech (`TypZapisu='změnové věty'`) značí mazané záznamy
 * geometrie, která bude po přijetí dávky odstraněna z referenční databáze ZPS.
 * Při validaci ručních úprav nebo při kontrole přejímky je užitečné si je
 * dočasně zobrazit červeně — odtud tento toggle.
 *
 * Stav je modul-level singleton (jeden viewer = jeden flag). Posluchače UI
 * vrstvy (2D OL i 3D Three.js) se přihlásí přes `subscribe`, modul je zavolá
 * pokaždé, když se hodnota změní přes `setShowDeleted`.
 *
 * **Přístup k vykreslení**:
 * - 2D (OL): style function v `map/jvfLayers.ts` čte `isShowDeleted()` při
 *   každém renderu features. Po přepnutí flagu volá UI `layer.changed()` na
 *   všech vrstvách, aby se přepočítal styl.
 * - 3D (Three.js): scéna má per-objekt `userData['jvfZapisObjektu']` a
 *   `userData['jvfDeletedColorOverride']`. Při flipu se traverzuje scéna a
 *   nastavuje se `obj.visible` + barva materiálu — žádný rebuild nutný.
 */

export type ShowDeletedListener = (showDeleted: boolean) => void;

let showDeleted = false;
const listeners = new Set<ShowDeletedListener>();

export function isShowDeleted(): boolean {
  return showDeleted;
}

export function setShowDeleted(value: boolean): void {
  if (showDeleted === value) return;
  showDeleted = value;
  for (const listener of listeners) {
    listener(value);
  }
}

export function subscribeShowDeleted(listener: ShowDeletedListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
