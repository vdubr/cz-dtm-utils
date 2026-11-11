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

/**
 * Posluchač změny kteréhokoli flagu (viditelnost typu nebo „Obarvit změny");
 * aktuální stav si čte přes `isShowZapis` / `isHighlightZapis`.
 */
export type ChangesetToggleListener = () => void;

const flags: Record<ChangesetZapisType, boolean> = {
  i: false,
  u: false,
  d: false,
};

/**
 * „Obarvit změny" — pod viditelné changeset záznamy kreslit lem barvy typu
 * změny (zelená/oranžová/červená); jen styl, viditelnost řídí `flags`.
 * Vypnuto → záznamy se kreslí jen vlastní symbologií — typicky u UDM, kde
 * jsou všechna data nová (`i`) a zelený lem by přebil vzhled objektů.
 */
let highlight = true;

const listeners = new Set<ChangesetToggleListener>();

/** Je hodnota `ZapisObjektu` jedním z changeset typů (i/u/d)? Type guard. */
export function isChangesetZapis(value: unknown): value is ChangesetZapisType {
  return value === 'i' || value === 'u' || value === 'd';
}

export function isShowZapis(type: ChangesetZapisType): boolean {
  return flags[type];
}

export function setShowZapis(type: ChangesetZapisType, value: boolean): void {
  setChangesetFlags({ show: { [type]: value } });
}

export function isHighlightZapis(): boolean {
  return highlight;
}

export function setHighlightZapis(value: boolean): void {
  setChangesetFlags({ highlight: value });
}

/**
 * Nastaví více flagů najednou a posluchače zavolá **jednou** (jen při změně)
 * — po načtení dat se tak 2D vrstvy a 3D scéna přepočítají jen jednou.
 */
export function setChangesetFlags(next: {
  highlight?: boolean;
  show?: Partial<Record<ChangesetZapisType, boolean>>;
}): void {
  let changed = false;
  if (next.highlight !== undefined && next.highlight !== highlight) {
    highlight = next.highlight;
    changed = true;
  }
  for (const [type, value] of Object.entries(next.show ?? {}) as [ChangesetZapisType, boolean][]) {
    if (flags[type] === value) continue;
    flags[type] = value;
    changed = true;
  }
  if (!changed) return;
  for (const listener of listeners) listener();
}

/** Kreslit záznam daného typu zápisu zvýrazňovací barvou? (viditelný + highlight) */
export function shouldHighlightZapis(type: ChangesetZapisType): boolean {
  return highlight && flags[type];
}

export function subscribeChangesetToggle(
  listener: ChangesetToggleListener,
): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
