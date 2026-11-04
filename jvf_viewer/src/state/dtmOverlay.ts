/**
 * Stav překryvné vrstvy DTM ČR — zapnutí, vybrané podvrstvy a sytost.
 * Jediný zdroj pravdy pro panel (ui/dtmPanel.ts), 2D vrstvy
 * (map/dtmOverlay.ts) i 3D přehoz přes terén (viewer3d/basemapTexture.ts).
 * Jen v paměti (bez ukládání). Vzor state/basemapChoice.ts.
 */
import { DTM_SERVICES, dtmKey } from '../map/dtmCatalog.js';

export type DtmOverlayListener = () => void;

let enabled = false;
/** Vybrané podvrstvy (`svc:name`). Výchozí = všechny. */
const selected = new Set<string>(
  DTM_SERVICES.flatMap((s) => s.sublayers.map((l) => dtmKey(s.id, l.name))),
);
let opacity = 1;
const listeners = new Set<DtmOverlayListener>();

function notify(): void {
  for (const l of listeners) l();
}

export function isDtmEnabled(): boolean {
  return enabled;
}

export function setDtmEnabled(on: boolean): void {
  if (on === enabled) return;
  enabled = on;
  notify();
}

export function isDtmSublayerSelected(serviceId: string, name: string): boolean {
  return selected.has(dtmKey(serviceId, name));
}

export function setDtmSublayer(serviceId: string, name: string, on: boolean): void {
  const key = dtmKey(serviceId, name);
  if (on === selected.has(key)) return;
  if (on) selected.add(key);
  else selected.delete(key);
  notify();
}

/** Vybrat / zrušit všechny podvrstvy jedné služby. */
export function setDtmService(serviceId: string, on: boolean): void {
  const svc = DTM_SERVICES.find((s) => s.id === serviceId);
  if (!svc) return;
  let changed = false;
  for (const l of svc.sublayers) {
    const key = dtmKey(svc.id, l.name);
    if (on !== selected.has(key)) {
      changed = true;
      if (on) selected.add(key);
      else selected.delete(key);
    }
  }
  if (changed) notify();
}

/** Vybrat / zrušit všechny podvrstvy všech služeb. */
export function setDtmAll(on: boolean): void {
  const before = selected.size;
  selected.clear();
  if (on) for (const s of DTM_SERVICES) for (const l of s.sublayers) selected.add(dtmKey(s.id, l.name));
  if (selected.size !== before) notify();
}

/** Vybrané podvrstvy služby (názvy pro LAYERS), v pořadí katalogu. */
export function getDtmSelection(serviceId: string): string[] {
  const svc = DTM_SERVICES.find((s) => s.id === serviceId);
  return svc ? svc.sublayers.filter((l) => selected.has(dtmKey(svc.id, l.name))).map((l) => l.name) : [];
}

export function getDtmOpacity(): number {
  return opacity;
}

export function setDtmOpacity(value: number): void {
  const v = Math.min(1, Math.max(0.1, value));
  if (v === opacity) return;
  opacity = v;
  notify();
}

export function subscribeDtmOverlay(listener: DtmOverlayListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
