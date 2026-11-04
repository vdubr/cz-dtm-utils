/**
 * Měření ve 3D scéně — stejné chování jako v 2D (map/measure.ts řídí
 * tlačítko, kartu a klávesy; tady je jen 3D „backend").
 *
 * - Klik (krátký do 200 ms bez tažení — viz quickClick.ts) přidá bod, dvojklik nebo klik
 *   na poslední bod měření ukončí, klik na první bod uzavře polygon;
 *   další klik začne nové měření.
 * - Bod pod kurzorem: přichycení k bodům měření (první bod = uzavřít),
 *   k vrcholu viditelného objektu JVF
 *   (do 10 px), jinak k hraně linie (bod na úsečce), jinak povrch zasaženého
 *   objektu / terénu, jinak vodorovná rovina ve výšce posledního bodu.
 * - Body se drží v S-JTSK se skutečnou výškou (bez převýšení scény), takže
 *   změna převýšení měření nemění, jen překreslí.
 * - Čáry (Line2 — tloušťka v px), body a plocha se kreslí přes vše
 *   (depthTest off); popisky délek a plochy jsou DOM nad scénou.
 */
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import {
  addSceneOverlay,
  getThreeCanvasSize,
  getZExaggeration,
  projectSceneToClient,
  raycastForMeasure,
  rayPlaneFromClient,
  removeSceneOverlay,
  sceneToSjtsk,
  sjtskToScene,
} from './threeScene.js';
import { isQuickClick } from './quickClick.js';
import {
  dedupeConsecutive,
  isClosedRing,
  openRing,
  formatArea,
  formatLength,
  polygonArea,
  polylineLength3d,
  type Coord,
} from '../map/measureMath.js';

export type SnapKind = 'vertex' | 'edge' | 'intersection' | 'surface' | 'terrain';
export interface MeasureSnap { kind: SnapKind; elementName: string }

export interface MeasureSnapshot {
  /** Pevné body (bez pozice kurzoru). */
  fixed: Coord[];
  /** Body pro průběžný výpočet (při kreslení vč. pozice kurzoru). */
  live: Coord[];
  drawing: boolean;
  snap: MeasureSnap | null;
}

const COLOR = 0xd81b60;
const SNAP_PX = 10;
const FINISH_PX = 8;
const SEGMENT_LABEL_MIN_PX = 70;

let points: Coord[] = [];
let hover: Coord | null = null;
let hoverSnap: MeasureSnap | null = null;
let finished = false;
let running = false;
let onChange: () => void = () => {};

let group: THREE.Group | null = null;
let lineMaterials: LineMaterial[] = [];
let labelsEl: HTMLDivElement | null = null;
let labelSpecs: Array<{ at: THREE.Vector3; text: string; cls: string; segment?: [THREE.Vector3, THREE.Vector3] }> = [];
let abort: AbortController | null = null;
let raf: number | null = null;
let dirty = true;
let lastExag = 1;
let pendingMove: { x: number; y: number } | null = null;

// ── Textury bodů ──────────────────────────────────────────────────────────────
function makeTexture(draw: (ctx: CanvasRenderingContext2D, s: number) => void): THREE.Texture {
  const s = 64;
  const canvas = document.createElement('canvas');
  canvas.width = s;
  canvas.height = s;
  const ctx = canvas.getContext('2d')!;
  draw(ctx, s);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const css = '#d81b60';
let texVertex: THREE.Texture | null = null;
let texPointer: THREE.Texture | null = null;
let texSnapVertex: THREE.Texture | null = null;
let texSnapEdge: THREE.Texture | null = null;
function textures(): void {
  if (texVertex) return;
  texVertex = makeTexture((c, s) => {
    c.beginPath(); c.arc(s / 2, s / 2, s * 0.34, 0, Math.PI * 2);
    c.fillStyle = '#ffffff'; c.fill(); c.lineWidth = s * 0.14; c.strokeStyle = css; c.stroke();
  });
  texPointer = makeTexture((c, s) => {
    c.beginPath(); c.arc(s / 2, s / 2, s * 0.36, 0, Math.PI * 2);
    c.fillStyle = 'rgba(216,27,96,0.25)'; c.fill(); c.lineWidth = s * 0.08; c.strokeStyle = css; c.stroke();
  });
  texSnapVertex = makeTexture((c, s) => {
    c.fillStyle = '#ffffff'; c.fillRect(s * 0.18, s * 0.18, s * 0.64, s * 0.64);
    c.fillStyle = css; c.fillRect(s * 0.26, s * 0.26, s * 0.48, s * 0.48);
  });
  texSnapEdge = makeTexture((c, s) => {
    c.beginPath(); c.moveTo(s / 2, s * 0.1); c.lineTo(s * 0.9, s / 2); c.lineTo(s / 2, s * 0.9); c.lineTo(s * 0.1, s / 2); c.closePath();
    c.fillStyle = 'rgba(216,27,96,0.6)'; c.fill(); c.lineWidth = s * 0.08; c.strokeStyle = '#ffffff'; c.stroke();
  });
}

// ── Přichycení ────────────────────────────────────────────────────────────────
/** Vrcholy objektu ve světových souřadnicích (sprite = jeho pozice). */
function worldVertices(obj: THREE.Object3D): THREE.Vector3[] {
  if ((obj as THREE.Sprite).isSprite) return [obj.getWorldPosition(new THREE.Vector3())];
  const geom = (obj as THREE.Mesh).geometry as THREE.BufferGeometry | undefined;
  const pos = geom?.getAttribute?.('position');
  if (!pos || pos.count > 20000) return [];
  const out: THREE.Vector3[] = [];
  obj.updateMatrixWorld();
  for (let i = 0; i < pos.count; i++) {
    out.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)).applyMatrix4(obj.matrixWorld));
  }
  return out;
}

/** Bod pod kurzorem (scéna) + druh přichycení. */
function resolvePoint(clientX: number, clientY: number): { scene: THREE.Vector3; snap: MeasureSnap | null } | null {
  // 0. Body vlastního měření (první bod s ≥3 body = uzavření polygonu).
  if (!finished) {
    let own: { v: THREE.Vector3; d: number; i: number } | null = null;
    points.forEach((c, i) => {
      const v = sjtskToScene(c[0] ?? 0, c[1] ?? 0, c[2] ?? 0);
      const p = v ? projectSceneToClient(v) : null;
      if (!v || !p) return;
      const d = Math.hypot(p.x - clientX, p.y - clientY);
      if (d <= SNAP_PX && (!own || d < own.d)) own = { v, d, i };
    });
    if (own) {
      const o = own as { v: THREE.Vector3; d: number; i: number };
      const first = o.i === 0 && points.length >= 3;
      return { scene: o.v, snap: { kind: 'vertex', elementName: first ? 'první bod (uzavřít)' : 'bod měření' } };
    }
  }

  const hits = raycastForMeasure(clientX, clientY);
  const dataHits = hits.filter((h) => !h.isTerrain);

  // 1. Vrchol do SNAP_PX — z několika nejbližších zasažených objektů.
  let best: { v: THREE.Vector3; d: number; name: string } | null = null;
  const seen = new Set<THREE.Object3D>();
  for (const h of dataHits) {
    if (seen.has(h.object)) continue;
    seen.add(h.object);
    if (seen.size > 6) break;
    for (const v of worldVertices(h.object)) {
      const p = projectSceneToClient(v);
      if (!p) continue;
      const d = Math.hypot(p.x - clientX, p.y - clientY);
      if (d <= SNAP_PX && (!best || d < best.d)) best = { v, d, name: h.elementName ?? 'prvek' };
    }
  }
  if (best) return { scene: best.v, snap: { kind: 'vertex', elementName: best.name } };

  // 2. Hrana linie — Three.js vrací bod přímo na úsečce.
  const lineHit = dataHits.find((h) => (h.object as THREE.Line).isLine);
  if (lineHit) return { scene: lineHit.point, snap: { kind: 'edge', elementName: lineHit.elementName ?? 'prvek' } };

  // 3. Povrch objektu / terénu.
  const first = hits[0];
  if (first) {
    return {
      scene: first.point,
      snap: first.isTerrain
        ? { kind: 'terrain', elementName: '' }
        : { kind: 'surface', elementName: first.elementName ?? 'prvek' },
    };
  }

  // 4. Vodorovná rovina ve výšce posledního bodu (jinak těžiště dat).
  const last = points[points.length - 1];
  const lastScene = last ? sjtskToScene(last[0] ?? 0, last[1] ?? 0, last[2] ?? 0) : null;
  const onPlane = rayPlaneFromClient(clientX, clientY, lastScene?.y ?? 0);
  return onPlane ? { scene: onPlane, snap: null } : null;
}

function toCoord(v: THREE.Vector3): Coord | null {
  return sceneToSjtsk(v);
}

// ── Kreslení ──────────────────────────────────────────────────────────────────
function disposeGroup(): void {
  if (!group) return;
  group.traverse((o) => {
    const m = o as THREE.Mesh;
    m.geometry?.dispose?.();
    const mat = m.material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
    else mat?.dispose?.();
  });
  group.clear();
  lineMaterials = [];
}

function line2(pts: THREE.Vector3[], color: number, width: number, opacity = 1): Line2 {
  const geom = new LineGeometry();
  geom.setPositions(pts.flatMap((p) => [p.x, p.y, p.z]));
  const mat = new LineMaterial({
    color,
    linewidth: width,
    transparent: true,
    opacity,
    depthTest: false,
    depthWrite: false,
  });
  lineMaterials.push(mat);
  const l = new Line2(geom, mat);
  l.computeLineDistances();
  l.renderOrder = 1000;
  return l;
}

function pointsObj(pts: THREE.Vector3[], tex: THREE.Texture, size: number): THREE.Points {
  const geom = new THREE.BufferGeometry().setFromPoints(pts);
  const mat = new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    map: tex,
    transparent: true,
    alphaTest: 0.05,
    depthTest: false,
    depthWrite: false,
  });
  const p = new THREE.Points(geom, mat);
  p.renderOrder = 1002;
  return p;
}

function liveCoords(): Coord[] {
  const drawing = !finished && points.length > 0;
  return dedupeConsecutive(drawing && hover ? [...points, hover] : points);
}

function rebuild(): void {
  if (!group) return;
  disposeGroup();
  textures();
  labelSpecs = [];
  const coords = liveCoords();
  const closed = isClosedRing(coords);
  const toScene = (list: Coord[]) => list
    .map((c) => sjtskToScene(c[0] ?? 0, c[1] ?? 0, c[2] ?? 0))
    .filter((v): v is THREE.Vector3 => v !== null);
  const scenePts = toScene(coords);
  const ringScene = toScene(openRing(coords));

  if (ringScene.length >= 3) {
    // Plocha: triangulace ve vodorovném průmětu (x, z), vrcholy ve 3D.
    const contour = ringScene.map((v) => new THREE.Vector2(v.x, v.z));
    const faces = THREE.ShapeUtils.triangulateShape(contour, []);
    const geom = new THREE.BufferGeometry().setFromPoints(ringScene);
    geom.setIndex(faces.flat());
    const fill = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
      color: COLOR,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    }));
    fill.renderOrder = 999;
    group.add(fill);
    // Neuzavřený polygon: slabá uzavírací hrana (uzavřený ji má v čáře).
    if (!closed) group.add(line2([scenePts[scenePts.length - 1]!, scenePts[0]!], COLOR, 1.5, 0.7));
    const centroid = ringScene.reduce((a, v) => a.add(v.clone()), new THREE.Vector3()).divideScalar(ringScene.length);
    labelSpecs.push({ at: centroid, text: formatArea(polygonArea(openRing(coords))), cls: 'measure-label measure-label--area' });
  }
  if (scenePts.length >= 2) {
    group.add(line2(scenePts, 0xffffff, 6, 0.9));
    group.add(line2(scenePts, COLOR, 3));
    for (let i = 1; i < scenePts.length; i++) {
      if (scenePts.length < 3) break; // u jediného úseku stačí celková délka
      const a = scenePts[i - 1]!;
      const b = scenePts[i]!;
      labelSpecs.push({
        at: a.clone().add(b).multiplyScalar(0.5),
        text: formatLength(polylineLength3d([coords[i - 1]!, coords[i]!])),
        cls: 'measure-label',
        segment: [a, b],
      });
    }
    labelSpecs.push({
      at: scenePts[scenePts.length - 1]!,
      text: formatLength(polylineLength3d(coords)),
      cls: 'measure-label measure-label--total',
    });
  }
  // Pevné body + kurzor.
  const fixedScene = toScene(openRing(points));
  if (fixedScene.length > 0) group.add(pointsObj(fixedScene, texVertex!, 11));
  if (hover && !finished) {
    const h = sjtskToScene(hover[0] ?? 0, hover[1] ?? 0, hover[2] ?? 0);
    if (h) {
      const tex = hoverSnap?.kind === 'vertex' ? texSnapVertex! : hoverSnap?.kind === 'edge' ? texSnapEdge! : texPointer!;
      group.add(pointsObj([h], tex, hoverSnap?.kind === 'vertex' || hoverSnap?.kind === 'edge' ? 18 : 14));
    }
  }
  renderLabels();
}

function renderLabels(): void {
  if (!labelsEl) return;
  labelsEl.innerHTML = '';
  for (const spec of labelSpecs) {
    const el = document.createElement('div');
    el.className = spec.cls;
    el.textContent = spec.text;
    labelsEl.appendChild(el);
  }
  positionLabels();
}

function positionLabels(): void {
  if (!labelsEl) return;
  const host = labelsEl.getBoundingClientRect();
  labelSpecs.forEach((spec, i) => {
    const el = labelsEl!.children[i] as HTMLElement | undefined;
    if (!el) return;
    const p = projectSceneToClient(spec.at);
    let show = p !== null;
    if (show && spec.segment) {
      const a = projectSceneToClient(spec.segment[0]);
      const b = projectSceneToClient(spec.segment[1]);
      show = !!a && !!b && Math.hypot(a.x - b.x, a.y - b.y) >= SEGMENT_LABEL_MIN_PX;
    }
    el.hidden = !show;
    if (show && p) el.style.transform = `translate(${p.x - host.left}px, ${p.y - host.top}px) translate(-50%, -50%)`;
  });
}

function frame(): void {
  raf = requestAnimationFrame(frame);
  if (!group) return;
  addSceneOverlay(group); // po znovunačtení scény se vrátí do nové
  const exag = getZExaggeration();
  if (exag !== lastExag) {
    lastExag = exag;
    dirty = true;
  }
  if (pendingMove) {
    const { x, y } = pendingMove;
    pendingMove = null;
    const r = resolvePoint(x, y);
    hover = r ? toCoord(r.scene) : null;
    hoverSnap = r?.snap ?? null;
    dirty = true;
    onChange();
  }
  if (dirty) {
    dirty = false;
    rebuild();
  } else {
    positionLabels();
  }
  const size = getThreeCanvasSize();
  if (size) for (const m of lineMaterials) m.resolution.set(size.width, size.height);
}

// ── Vstup ─────────────────────────────────────────────────────────────────────
function finish(): void {
  if (points.length >= 2) {
    finished = true;
    hover = null;
    hoverSnap = null;
    dirty = true;
    onChange();
  }
}

function onClick(e: MouseEvent): void {
  if (!isQuickClick(e)) return; // tažení / posun scény, dlouhé stisknutí
  if (finished) {
    points = [];
    finished = false;
  }
  // Klik na první bod (≥3 body) → uzavřít polygon a ukončit.
  const first = points[0];
  if (first && points.length >= 3) {
    const fs = sjtskToScene(first[0] ?? 0, first[1] ?? 0, first[2] ?? 0);
    const fp = fs ? projectSceneToClient(fs) : null;
    if (fp && Math.hypot(fp.x - e.clientX, fp.y - e.clientY) <= SNAP_PX) {
      points.push(first);
      finish();
      return;
    }
  }
  const last = points[points.length - 1];
  if (last && points.length >= 2) {
    const ls = sjtskToScene(last[0] ?? 0, last[1] ?? 0, last[2] ?? 0);
    const lp = ls ? projectSceneToClient(ls) : null;
    if (lp && Math.hypot(lp.x - e.clientX, lp.y - e.clientY) <= FINISH_PX) {
      finish(); // klik na poslední bod
      return;
    }
  }
  const r = resolvePoint(e.clientX, e.clientY);
  const c = r ? toCoord(r.scene) : null;
  if (!c) return;
  points.push(c);
  hover = c;
  hoverSnap = r?.snap ?? null;
  dirty = true;
  onChange();
}

// ── API pro map/measure.ts ────────────────────────────────────────────────────
export function start3d(changed: () => void): void {
  if (running) return;
  running = true;
  onChange = changed;
  points = [];
  hover = null;
  hoverSnap = null;
  finished = false;
  dirty = true;
  lastExag = getZExaggeration();
  group = new THREE.Group();
  group.name = 'measure3d';
  addSceneOverlay(group);

  const mapArea = document.getElementById('map-area');
  labelsEl = document.createElement('div');
  labelsEl.className = 'measure-labels';
  mapArea?.appendChild(labelsEl);

  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
  abort = new AbortController();
  const opts = { signal: abort.signal };
  if (canvas) {
    canvas.style.cursor = 'crosshair';
    canvas.addEventListener('pointermove', (e) => {
      if (e.buttons !== 0 || finished) return; // otáčení / posun scény
      pendingMove = { x: e.clientX, y: e.clientY };
    }, opts);
    canvas.addEventListener('pointerleave', () => {
      hover = null;
      hoverSnap = null;
      dirty = true;
      onChange();
    }, opts);
    canvas.addEventListener('click', onClick, opts);
    canvas.addEventListener('dblclick', (e) => {
      e.preventDefault();
      if (isQuickClick(e)) finish();
    }, opts);
  }
  raf = requestAnimationFrame(frame);
}

export function stop3d(): void {
  if (!running) return;
  running = false;
  abort?.abort();
  abort = null;
  if (raf !== null) cancelAnimationFrame(raf);
  raf = null;
  disposeGroup();
  if (group) removeSceneOverlay(group);
  group = null;
  labelsEl?.remove();
  labelsEl = null;
  labelSpecs = [];
  points = [];
  hover = null;
  hoverSnap = null;
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
  if (canvas) canvas.style.cursor = 'grab';
}

export function undo3d(): void {
  if (finished) finished = false;
  points = points.slice(0, -1);
  dirty = true;
  onChange();
}

export function restart3d(): void {
  points = [];
  finished = false;
  hover = null;
  hoverSnap = null;
  dirty = true;
  onChange();
}

export function snapshot3d(): MeasureSnapshot {
  const drawing = !finished && points.length > 0;
  return {
    fixed: points,
    live: liveCoords(),
    drawing,
    snap: finished ? null : hoverSnap,
  };
}
