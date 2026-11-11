/**
 * Stav překryvných vrstev (DTM ČR, katastr) — zapnutí, vybrané podvrstvy
 * a sytost, jeden objekt na překryv. Jediný zdroj pravdy pro panel
 * (ui/overlayPanel.ts), 2D vrstvy (map/overlayLayers.ts) i 3D přehoz přes
 * terén (viewer3d/threeScene.ts). Jen v paměti (bez ukládání).
 */
import { OVERLAYS, type OverlayDef } from '../map/overlayCatalog.js';

export type OverlayListener = () => void;

function key(serviceId: string, name: string): string {
  return `${serviceId}:${name}`;
}

export class OverlayState {
  readonly def: OverlayDef;
  private enabled = false;
  /** Vybrané podvrstvy (`svc:name`). Výchozí = všechny. */
  private readonly selected = new Set<string>();
  private opacity = 1;
  private readonly listeners = new Set<OverlayListener>();

  constructor(def: OverlayDef) {
    this.def = def;
    for (const s of def.services) for (const l of s.sublayers) this.selected.add(key(s.id, l.name));
  }

  private notify(): void {
    for (const l of this.listeners) l();
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setEnabled(on: boolean): void {
    if (on === this.enabled) return;
    this.enabled = on;
    this.notify();
  }

  isSelected(serviceId: string, name: string): boolean {
    return this.selected.has(key(serviceId, name));
  }

  setSublayer(serviceId: string, name: string, on: boolean): void {
    const k = key(serviceId, name);
    if (on === this.selected.has(k)) return;
    if (on) this.selected.add(k);
    else this.selected.delete(k);
    this.notify();
  }

  /** Vybrat / zrušit všechny podvrstvy jedné služby. */
  setService(serviceId: string, on: boolean): void {
    const svc = this.def.services.find((s) => s.id === serviceId);
    if (!svc) return;
    let changed = false;
    for (const l of svc.sublayers) {
      const k = key(svc.id, l.name);
      if (on !== this.selected.has(k)) {
        changed = true;
        if (on) this.selected.add(k);
        else this.selected.delete(k);
      }
    }
    if (changed) this.notify();
  }

  /** Vybrat / zrušit všechny podvrstvy všech služeb. */
  setAll(on: boolean): void {
    const before = this.selected.size;
    this.selected.clear();
    if (on) for (const s of this.def.services) for (const l of s.sublayers) this.selected.add(key(s.id, l.name));
    if (this.selected.size !== before) this.notify();
  }

  /** Vybrané podvrstvy služby (názvy z katalogu), v pořadí katalogu. */
  getSelection(serviceId: string): string[] {
    const svc = this.def.services.find((s) => s.id === serviceId);
    return svc ? svc.sublayers.filter((l) => this.selected.has(key(svc.id, l.name))).map((l) => l.name) : [];
  }

  /** Je překryv zapnutý a má aspoň jednu vybranou podvrstvu? */
  isActive(): boolean {
    return this.enabled && this.def.services.some((s) => this.getSelection(s.id).length > 0);
  }

  getOpacity(): number {
    return this.opacity;
  }

  setOpacity(value: number): void {
    const v = Math.min(1, Math.max(0, value));
    if (v === this.opacity) return;
    this.opacity = v;
    this.notify();
  }

  subscribe(listener: OverlayListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

const states = new Map<OverlayDef['id'], OverlayState>(OVERLAYS.map((d) => [d.id, new OverlayState(d)]));

export function getOverlayState(id: OverlayDef['id']): OverlayState {
  return states.get(id)!;
}

/** Všechny stavy překryvů v pořadí vykreslování. */
export function getOverlayStates(): OverlayState[] {
  return OVERLAYS.map((d) => states.get(d.id)!);
}

/** Přihlásí posluchače ke všem překryvům. */
export function subscribeOverlays(listener: OverlayListener): void {
  for (const s of states.values()) s.subscribe(listener);
}
