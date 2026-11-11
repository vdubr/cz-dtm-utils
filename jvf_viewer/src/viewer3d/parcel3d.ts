/**
 * Hranice označené parcely ve 3D (map/parcelQuery.ts): obrys položený na
 * povrch terénu (výšky ze svislého paprsku na DMR, hrany zjemněné po ~2 m,
 * aby obrys sledoval terén), kreslený přes scénu (Line2, depthTest off).
 * Po změně převýšení nebo znovunačtení scény se obrys přepočítá.
 */
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import {
  addSceneOverlay,
  drapeOnTerrain,
  getThreeCanvasSize,
  getVisibleTerrainCount,
  getZExaggeration,
  isThreeSceneReady,
  removeSceneOverlay,
} from './threeScene.js';

const COLOR = 0xd81b60;
/** Krok zjemnění hran (m) a strop počtu bodů obrysu. */
const STEP_M = 2;
const MAX_POINTS = 6000;

let rings: number[][][] = [];
let fallbackZ = 0;
let group: THREE.Group | null = null;
let materials: LineMaterial[] = [];
let raf: number | null = null;
let builtExag = NaN;
let builtTerrainKey = '';

/** Zjemní uzavřený ring (body po ~STEP_M), ať obrys kopíruje terén. */
function densify(ring: number[][], step: number): number[][] {
  const out: number[][] = [];
  for (let i = 0; i < ring.length - 1; i++) {
    const a = ring[i]!;
    const b = ring[i + 1]!;
    const len = Math.hypot(b[0]! - a[0]!, b[1]! - a[1]!);
    const n = Math.max(1, Math.ceil(len / step));
    for (let k = 0; k < n; k++) out.push([a[0]! + ((b[0]! - a[0]!) * k) / n, a[1]! + ((b[1]! - a[1]!) * k) / n]);
  }
  if (ring.length > 0) out.push(ring[ring.length - 1]!);
  return out;
}

function line(pts: THREE.Vector3[], color: number, width: number): Line2 {
  const geom = new LineGeometry();
  geom.setPositions(pts.flatMap((p) => [p.x, p.y, p.z]));
  const mat = new LineMaterial({ color, linewidth: width, transparent: true, depthTest: false, depthWrite: false });
  materials.push(mat);
  const l = new Line2(geom, mat);
  l.computeLineDistances();
  l.renderOrder = 1003;
  return l;
}

function disposeGroup(): void {
  if (!group) return;
  group.traverse((o) => {
    const l = o as Line2;
    l.geometry?.dispose();
    (l.material as THREE.Material | undefined)?.dispose();
  });
  group.clear();
  materials = [];
}

function terrainKey(): string {
  // Načtení / skrytí terénu → přepočítat výšky.
  return String(getVisibleTerrainCount());
}

function build(): void {
  if (!group) return;
  disposeGroup();
  const step = Math.max(STEP_M, rings.reduce((s, r) => s + perimeter(r), 0) / MAX_POINTS);
  for (const ring of rings) {
    const pts = drapeOnTerrain(densify(ring, step), fallbackZ);
    if (pts.length < 2) continue;
    group.add(line(pts, 0xffffff, 6));
    group.add(line(pts, COLOR, 3));
  }
  builtExag = getZExaggeration();
  builtTerrainKey = terrainKey();
}

function perimeter(ring: number[][]): number {
  let s = 0;
  for (let i = 1; i < ring.length; i++) s += Math.hypot(ring[i]![0]! - ring[i - 1]![0]!, ring[i]![1]! - ring[i - 1]![1]!);
  return s;
}

function frame(): void {
  raf = requestAnimationFrame(frame);
  if (!group || !isThreeSceneReady()) return;
  addSceneOverlay(group); // po znovunačtení scény do nové
  if (getZExaggeration() !== builtExag || terrainKey() !== builtTerrainKey) build();
  const size = getThreeCanvasSize();
  if (size) for (const m of materials) m.resolution.set(size.width, size.height);
}

/**
 * Zobrazí hranici parcely ve 3D.
 * @param polygons polygony parcely ([vnější, …otvory], body [x, y] S-JTSK)
 * @param z skutečná výška pro body mimo terén (např. výška kliknutého místa)
 */
export function showParcel3d(polygons: number[][][][], z: number): void {
  rings = polygons.flat();
  fallbackZ = z;
  if (!group) {
    group = new THREE.Group();
    group.name = 'parcel3d';
  }
  addSceneOverlay(group);
  build(); // dočtení terénu později výšky přepočítá (viz frame)
  if (raf === null) raf = requestAnimationFrame(frame);
}

/** Odebere hranici parcely ze 3D. */
export function clearParcel3d(): void {
  if (raf !== null) cancelAnimationFrame(raf);
  raf = null;
  disposeGroup();
  if (group) removeSceneOverlay(group);
  rings = [];
}

/** Počet zobrazených obrysů (pro testy). */
export function getParcel3dRingCount(): number {
  return group ? group.children.length / 2 : 0;
}
