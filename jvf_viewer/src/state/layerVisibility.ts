/**
 * Viditelnost vrstev (objektových typů) — jediný zdroj pravdy pro panel
 * vrstev, Přehled prvků (ikona oka u kategorie), 2D mapu i 3D scénu.
 * Kdokoli viditelnost změní, posluchači ji promítnou všude ostatně.
 *
 * Klíč vrstvy = `resolveLayerKey(ot)` (`elementName`, při více projektech
 * kvalifikovaný `{projectId}:`). Reprezentace přes množinu skrytých vrstev:
 * prázdná = vše viditelné. Stav se resetuje při přestavbě dat (main.ts).
 */
export type LayerVisibilityListener = () => void;

const hiddenLayers = new Set<string>();
const listeners = new Set<LayerVisibilityListener>();

function notify(): void {
  for (const listener of listeners) listener();
}

/** Je vrstva viditelná? */
export function isLayerVisible(key: string): boolean {
  return !hiddenLayers.has(key);
}

/** Zobrazit / skrýt vrstvu. Notifikuje posluchače jen při změně. */
export function setLayerVisible(key: string, visible: boolean): void {
  const changed = visible ? hiddenLayers.delete(key) : !hiddenLayers.has(key);
  if (!visible) hiddenLayers.add(key);
  if (changed) notify();
}

/** Přepnout viditelnost vrstvy. */
export function toggleLayerVisible(key: string): void {
  setLayerVisible(key, !isLayerVisible(key));
}

/** Vše viditelné (při načtení jiných dat). */
export function resetLayerVisibility(): void {
  if (hiddenLayers.size === 0) return;
  hiddenLayers.clear();
  notify();
}

export function subscribeLayerVisibility(listener: LayerVisibilityListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
