/**
 * Globální stav „zobrazit changeset záznamy" per typ `ZapisObjektu`:
 *
 *   'i' — nové záznamy (budou vloženy do DTM, ještě nemají DTM ID) → zeleně
 *   'u' — editované záznamy → oranžově
 *   'd' — mazané záznamy (budou odstraněny z referenční databáze ZPS) → červeně
 *
 * Při validaci ručních úprav nebo při kontrole přejímky je užitečné vidět,
 * co dávka do DTM přidá / změní / odebere — odtud tři nezávislé přepínače.
 *
 * Stav je modul-level singleton (jeden viewer = jedna sada flagů). Posluchače
 * UI vrstvy (2D OL i 3D Three.js) se přihlásí přes `subscribeChangesetToggle`,
 * modul je zavolá pokaždé, když se některý flag změní přes `setShowZapis`.
 *
 * **Přístup k vykreslení**:
 * - 2D (OL): style function v `map/jvfLayers.ts` čte `isShowZapis(zo)` při
 *   každém renderu features. Po přepnutí flagu volá UI `layer.changed()` na
 *   všech vrstvách, aby se přepočítal styl.
 * - 3D (Three.js): scéna má per-objekt `userData['jvfZapisObjektu']`. Při
 *   flipu se traverzuje scéna a nastavuje se `obj.visible` + barva
 *   materiálu — žádný rebuild nutný.
 */

/** Typy `ZapisObjektu`, pro které existuje changeset přepínač. */
export type ChangesetZapisType = 'i' | 'u' | 'd';

export type ChangesetToggleListener = (
  type: ChangesetZapisType,
  value: boolean,
) => void;

const flags: Record<ChangesetZapisType, boolean> = {
  i: false,
  u: false,
  d: false,
};

const listeners = new Set<ChangesetToggleListener>();

/** Je hodnota `ZapisObjektu` jedním z changeset typů (i/u/d)? Type guard. */
export function isChangesetZapis(value: unknown): value is ChangesetZapisType {
  return value === 'i' || value === 'u' || value === 'd';
}

export function isShowZapis(type: ChangesetZapisType): boolean {
  return flags[type];
}

export function setShowZapis(type: ChangesetZapisType, value: boolean): void {
  if (flags[type] === value) return;
  flags[type] = value;
  for (const listener of listeners) {
    listener(type, value);
  }
}

export function subscribeChangesetToggle(
  listener: ChangesetToggleListener,
): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
