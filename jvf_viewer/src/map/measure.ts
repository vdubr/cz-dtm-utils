/**
 * Měření v 2D mapě (inspirace mapy.cz): tlačítko s pravítkem v levém horním
 * rohu mapy zapne nástroj; klikáním se přidávají body, čára se průběžně
 * měří (i k pozici myši). Od 3 bodů se zároveň ukazuje plocha mnohoúhelníku
 * uzavřeného z bodů (vyplněná plocha + čárkovaná uzavírací hrana).
 *
 * - Dvojklik / klik na poslední bod měření ukončí; další klik začne nové.
 * - Backspace vrátí poslední bod, Esc nástroj zavře.
 * - Body se přichytávají k prvkům JVF: k vrcholům (přednost), hranám linií
 *   a obvodů ploch a k průsečíkům linií — jen k prvkům, které se právě
 *   kreslí (viditelná vrstva, filtr prvků, changeset přepínače). Kurzor
 *   přichycení vyznačí a karta ukáže, k čemu (vrchol / hrana / průsečík
 *   a typ objektu).
 * - Během měření klik do mapy nevybírá prvky a dvojklik nepřibližuje.
 *
 * Stejně se měří i ve 3D scéně (viewer3d/measure3d.ts): tlačítko a karta
 * jsou nad mapou i scénou, ve 3D navíc šikmá vzdálenost, vodorovná
 * vzdálenost a převýšení; plocha je vodorovný průmět. Přepnutí 2D ↔ 3D
 * měření ukončí.
 *
 * Délka a plocha ve 2D jsou rovinné v S-JTSK (metry) — viz measureMath.ts.
 */
import Draw, { type DrawEvent } from 'ol/interaction/Draw.js';
import Snap from 'ol/interaction/Snap.js';
import Collection from 'ol/Collection.js';
import Feature from 'ol/Feature.js';
import type { SnapEvent } from 'ol/events/SnapEvent.js';
import RegularShape from 'ol/style/RegularShape.js';
import DoubleClickZoom from 'ol/interaction/DoubleClickZoom.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import LineString from 'ol/geom/LineString.js';
import Polygon from 'ol/geom/Polygon.js';
import MultiPoint from 'ol/geom/MultiPoint.js';
import Point from 'ol/geom/Point.js';
import Style from 'ol/style/Style.js';
import Stroke from 'ol/style/Stroke.js';
import Fill from 'ol/style/Fill.js';
import CircleStyle from 'ol/style/Circle.js';
import Text from 'ol/style/Text.js';
import { never } from 'ol/events/condition.js';
import type OlMap from 'ol/Map.js';
import type { FeatureLike } from 'ol/Feature.js';
import type { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';
import {
  dedupeConsecutive,
  isClosedRing,
  openRing,
  samePoint,
  formatArea,
  formatHeightDelta,
  formatLength,
  heightDelta,
  polygonArea,
  polylineLength,
  polylineLength3d,
  segmentLength,
  type Coord,
} from './measureMath.js';
import { getIs3dActive, onViewModeChange } from '../ui/toggle3d.js';
import {
  restart3d,
  snapshot3d,
  start3d,
  stop3d,
  undo3d,
  type MeasureSnap,
  type MeasureSnapshot,
  type SnapKind,
} from '../viewer3d/measure3d.js';

const COLOR = '#d81b60';
const FONT = '500 12px Roboto, system-ui, sans-serif';
/** Popisek úseku jen tehdy, když je úsek na obrazovce delší než tolik px. */
const SEGMENT_LABEL_MIN_PX = 70;

// ── Styl ──────────────────────────────────────────────────────────────────────
const haloStroke = new Stroke({ color: 'rgba(255,255,255,0.9)', width: 5 });
const lineStroke = new Stroke({ color: COLOR, width: 2.5 });
const closingStroke = new Stroke({ color: COLOR, width: 1.5, lineDash: [6, 6] });
const areaFill = new Fill({ color: 'rgba(216,27,96,0.12)' });
const vertexImage = new CircleStyle({
  radius: 4.5,
  fill: new Fill({ color: '#ffffff' }),
  stroke: new Stroke({ color: COLOR, width: 2 }),
});
const pointerStyle = new Style({
  image: new CircleStyle({
    radius: 6,
    fill: new Fill({ color: 'rgba(216,27,96,0.25)' }),
    stroke: new Stroke({ color: COLOR, width: 1.5 }),
  }),
});
/** Kurzor přichycený k vrcholu / průsečíku: plný čtverec. */
const snapVertexStyle = new Style({
  image: new RegularShape({
    points: 4,
    radius: 8,
    angle: Math.PI / 4,
    fill: new Fill({ color: COLOR }),
    stroke: new Stroke({ color: '#ffffff', width: 2 }),
  }),
});
/** Kurzor přichycený k hraně: kosočtverec s výplní. */
const snapEdgeStyle = new Style({
  image: new RegularShape({
    points: 4,
    radius: 8,
    fill: new Fill({ color: 'rgba(216,27,96,0.55)' }),
    stroke: new Stroke({ color: '#ffffff', width: 2 }),
  }),
});

function label(text: string, opts: { bold?: boolean; offsetY?: number; accent?: boolean } = {}): Text {
  return new Text({
    text,
    font: opts.bold ? FONT.replace('500', '700') : FONT,
    offsetY: opts.offsetY ?? 0,
    padding: [2, 5, 2, 5],
    fill: new Fill({ color: opts.accent ? '#ffffff' : '#1a1b20' }),
    backgroundFill: new Fill({ color: opts.accent ? COLOR : 'rgba(255,255,255,0.92)' }),
    overflow: true,
  });
}

/** Styl měřené čáry: plocha (≥3 body), čára, vrcholy, popisky úseků a součtů. */
function measureStyle(feature: FeatureLike, resolution: number): Style[] {
  const geom = feature.getGeometry();
  if (!geom) return [];
  if (geom.getType() === 'Point') {
    // Kurzor kreslení — při přichycení k prvku jiný symbol.
    if (snapInfo) return [snapInfo.kind === 'edge' ? snapEdgeStyle : snapVertexStyle];
    return [pointerStyle];
  }
  if (geom.getType() !== 'LineString') return [];

  const coords = dedupeConsecutive((geom as LineString).getCoordinates());
  if (coords.length === 0) return [];
  const styles: Style[] = [];
  // Uzavřený polygon (klik na první bod) — uzavírací hrana je součástí čáry.
  const closed = isClosedRing(coords);
  const ringPts = openRing(coords);

  if (ringPts.length >= 3) {
    const ring = [...ringPts, ringPts[0]!] as number[][];
    const polygon = new Polygon([ring]);
    styles.push(new Style({ geometry: polygon, fill: areaFill }));
    if (!closed) {
      styles.push(new Style({
        geometry: new LineString([coords[coords.length - 1]! as number[], coords[0]! as number[]]),
        stroke: closingStroke,
      }));
    }
    styles.push(new Style({
      geometry: polygon.getInteriorPoint(),
      text: label(formatArea(polygonArea(ringPts)), { bold: true }),
    }));
  }

  styles.push(new Style({ stroke: haloStroke }), new Style({ stroke: lineStroke }));
  styles.push(new Style({ geometry: new MultiPoint(ringPts as number[][]), image: vertexImage }));

  // Délky úseků u jejich středů (jen dost dlouhé, ať se popisky nepřekrývají).
  if (coords.length >= 3) {
    for (let i = 1; i < coords.length; i++) {
      const a = coords[i - 1]!;
      const b = coords[i]!;
      const len = segmentLength(a, b);
      if (len / resolution < SEGMENT_LABEL_MIN_PX) continue;
      styles.push(new Style({
        geometry: new Point([((a[0] ?? 0) + (b[0] ?? 0)) / 2, ((a[1] ?? 0) + (b[1] ?? 0)) / 2]),
        text: label(formatLength(len)),
      }));
    }
  }
  // Celková délka u posledního bodu.
  if (coords.length >= 2) {
    styles.push(new Style({
      geometry: new Point(coords[coords.length - 1]! as number[]),
      text: label(formatLength(polylineLength(coords)), { bold: true, offsetY: -18, accent: true }),
    }));
  }
  return styles;
}

// ── Stav ──────────────────────────────────────────────────────────────────────
let map: OlMap | null = null;
let getSnapFeatures: () => Feature[] = () => [];
const source = new VectorSource();
const layer = new VectorLayer({ source, style: measureStyle, zIndex: 1000 });
let draw: Draw | null = null;
let snap: Snap | null = null;
const snapFeatures = new Collection<Feature>();
/**
 * Body rozkresleného měření jako cíl přichycení — klik na první bod
 * polygon uzavře (a měření ukončí).
 */
const ownVertices = new Feature(new MultiPoint([]));
let closing = false;
/** Aktuální přichycení kurzoru ve 2D (null = volně). */
let snapInfo: MeasureSnap | null = null;
let sketchKey: EventsKey | null = null;
let sketchCoords: Coord[] | null = null; // během kreslení (vč. pozice myši)
let active = false;
/** Pohled, ve kterém měření běží (2D mapa / 3D scéna). */
let mode: '2d' | '3d' = '2d';

let button: HTMLButtonElement;
let card: HTMLElement;
let lengthEl: HTMLElement;
let lengthLabelEl: HTMLElement;
let horizEl: HTMLElement;
let dzEl: HTMLElement;
let areaEl: HTMLElement;
let areaLabelEl: HTMLElement;
let pointsEl: HTMLElement;
let snapEl: HTMLElement;
let snapTargetEl: HTMLElement;
/** Český název objektového typu podle elementName (pro řádek přichycení). */
let resolveObjectName: (elementName: string) => string | undefined = () => undefined;
let undoBtn: HTMLButtonElement;
let restartBtn: HTMLButtonElement;

const SNAP_KIND_LABEL: Record<SnapKind, string> = {
  vertex: 'vrchol',
  edge: 'hrana',
  intersection: 'průsečík',
  surface: 'plocha',
  terrain: 'terén',
};

export function isMeasureActive(): boolean {
  return active;
}

/** Posluchači zapnutí / vypnutí měření (např. dotaz na parcelu se vypne). */
const activeListeners = new Set<(on: boolean) => void>();

export function onMeasureActiveChange(listener: (on: boolean) => void): () => void {
  activeListeners.add(listener);
  return () => activeListeners.delete(listener);
}

/** Body měření (pro testy přes dev háček): pevné body bez pozice kurzoru. */
export function getMeasurePoints(): Coord[] {
  return snapshot().fixed;
}

/** Měřené body 2D: rozkreslená čára (vč. kurzoru), jinak dokončené měření. */
function currentCoords2d(): { coords: Coord[]; drawing: boolean } {
  if (sketchCoords) return { coords: sketchCoords, drawing: true };
  const f = source.getFeatures()[0];
  const g = f?.getGeometry() as LineString | undefined;
  return { coords: g ? g.getCoordinates() : [], drawing: false };
}

/** Jednotný pohled na stav měření (2D i 3D). */
function snapshot(): MeasureSnapshot {
  if (mode === '3d') return snapshot3d();
  const { coords, drawing } = currentCoords2d();
  return {
    fixed: drawing ? coords.slice(0, -1) : coords,
    live: dedupeConsecutive(coords),
    drawing,
    snap: snapInfo,
  };
}

function updateCard(): void {
  if (!card) return;
  const s = snapshot();
  const pts = s.live;
  const is3d = mode === '3d';
  card.classList.toggle('measure-card--3d', is3d);
  lengthLabelEl.textContent = is3d ? 'Vzdálenost 3D' : 'Vzdálenost';
  areaLabelEl.textContent = is3d ? 'Plocha (průmět)' : 'Plocha';
  lengthEl.textContent = pts.length >= 2
    ? formatLength(is3d ? polylineLength3d(pts) : polylineLength(pts))
    : '—';
  horizEl.textContent = pts.length >= 2 ? formatLength(polylineLength(pts)) : '—';
  dzEl.textContent = pts.length >= 2 ? formatHeightDelta(heightDelta(pts)) : '—';
  const ring = openRing(pts);
  areaEl.textContent = ring.length >= 3 ? formatArea(polygonArea(ring)) : 'od 3 bodů';
  const fixedCount = openRing(s.fixed).length;
  pointsEl.textContent = isClosedRing(s.fixed) ? `${fixedCount} (uzavřeno)` : String(fixedCount);
  // Zpět / Nové měření jen tehdy, když je co vrátit / zahodit.
  undoBtn.disabled = s.fixed.length === 0;
  restartBtn.disabled = s.fixed.length === 0;
  // Přichycení: druh v řádku, objekt pod ním na celou šířku (český název,
  // dlouhý se zkrátí — celý název + elementName v tooltipu).
  snapEl.textContent = s.snap ? SNAP_KIND_LABEL[s.snap.kind] : '—';
  const el = s.snap && s.snap.kind !== 'terrain' ? s.snap.elementName : '';
  const name = el ? (resolveObjectName(el) ?? el) : '';
  snapTargetEl.hidden = !name;
  snapTargetEl.textContent = name;
  snapTargetEl.title = name && name !== el ? `${name} (${el})` : name;
}

/** Je souřadnice vrcholem geometrie prvku? (jinak jde o průsečík) */
function isFeatureVertex(feature: Feature, c: Coord): boolean {
  const flat = (feature.getGeometry() as { getFlatCoordinates?: () => number[]; getStride?: () => number } | undefined);
  const coords = flat?.getFlatCoordinates?.();
  const stride = flat?.getStride?.() ?? 2;
  if (!coords) return true;
  for (let i = 0; i + 1 < coords.length; i += stride) {
    if (Math.abs(coords[i]! - (c[0] ?? 0)) < 1e-6 && Math.abs(coords[i + 1]! - (c[1] ?? 0)) < 1e-6) return true;
  }
  return false;
}

function onSnap(e: SnapEvent): void {
  if (e.feature === ownVertices) {
    const fixed = sketchCoords ? sketchCoords.slice(0, -1) : [];
    const first = fixed.length >= 3 && samePoint(e.vertex, fixed[0]);
    const elementName = first ? 'první bod (uzavřít)' : 'bod měření';
    if (snapInfo?.elementName !== elementName) {
      snapInfo = { kind: 'vertex', elementName };
      updateCard();
    }
    return;
  }
  const kind: SnapKind = e.segment && e.segment.length > 1
    ? 'edge'
    : isFeatureVertex(e.feature, e.vertex) ? 'vertex' : 'intersection';
  const elementName = (e.feature.get('jvfElementName') as string | undefined) ?? 'prvek';
  if (snapInfo?.kind !== kind || snapInfo.elementName !== elementName) {
    snapInfo = { kind, elementName };
    updateCard();
  }
}

function onUnsnap(): void {
  if (!snapInfo) return;
  snapInfo = null;
  updateCard();
}

/**
 * Naplní přichytávání ve 2D aktuálně kreslenými prvky JVF. Volá se při
 * zapnutí a po každé změně dat, viditelnosti vrstev, filtru prvků či
 * changeset přepínačů (main.ts → refreshMeasureSnap). Ve 3D se přichytává
 * přímo k viditelným objektům scény (viewer3d/measure3d.ts).
 */
function refreshSnaps(): void {
  if (!map) return;
  snapFeatures.clear();
  if (!active || mode !== '2d') {
    if (snap) map.removeInteraction(snap);
    snap = null;
    return;
  }
  snapFeatures.extend(getSnapFeatures());
  snapFeatures.push(ownVertices);
  if (!snap) {
    // Snap musí být přidán až po Draw (zpracuje události dřív).
    snap = new Snap({
      features: snapFeatures,
      vertex: true,
      edge: true,
      intersection: true,
      pixelTolerance: 10,
    });
    snap.on('snap', onSnap);
    snap.on('unsnap', onUnsnap);
    map.addInteraction(snap);
  }
}

function setDoubleClickZoom(enabled: boolean): void {
  map?.getInteractions().forEach((i) => {
    if (i instanceof DoubleClickZoom) i.setActive(enabled);
  });
}

function onDrawStart(e: DrawEvent): void {
  source.clear(); // jedno měření najednou (jako mapy.cz)
  const geom = e.feature.getGeometry() as LineString;
  sketchCoords = geom.getCoordinates();
  closing = false;
  sketchKey = geom.on('change', () => {
    sketchCoords = geom.getCoordinates();
    const fixed = sketchCoords.slice(0, -1);
    (ownVertices.getGeometry() as MultiPoint).setCoordinates(fixed as number[][]);
    // Klik na první bod (přichycený) → polygon uzavřít a měření ukončit.
    if (!closing && isClosedRing(dedupeConsecutive(fixed))) {
      closing = true;
      setTimeout(() => draw?.finishDrawing(), 0);
    }
    updateCard();
  });
  updateCard();
}

function endSketch(): void {
  if (sketchKey) unByKey(sketchKey);
  sketchKey = null;
  sketchCoords = null;
  (ownVertices.getGeometry() as MultiPoint).setCoordinates([]);
}

function onDrawEnd(e: DrawEvent): void {
  endSketch();
  const geom = e.feature.getGeometry() as LineString;
  geom.setCoordinates(dedupeConsecutive(geom.getCoordinates()) as number[][]);
  // Feature se do zdroje přidá až po události — karta se přepočte potom.
  setTimeout(updateCard, 0);
}

/** Vrátit poslední bod (rozkreslené i dokončené měření). */
export function undoMeasurePoint(): void {
  if (!active) return;
  if (mode === '3d') {
    undo3d();
    return;
  }
  if (sketchCoords && draw) {
    draw.removeLastPoint();
    if (sketchCoords && sketchCoords.length <= 1) {
      draw.abortDrawing();
      endSketch();
    }
  } else {
    const f = source.getFeatures()[0];
    const g = f?.getGeometry() as LineString | undefined;
    if (g) {
      const c = g.getCoordinates();
      if (c.length > 2) g.setCoordinates(c.slice(0, -1));
      else source.clear();
    }
  }
  updateCard();
}

/** Zahodit měření a začít znovu (nástroj zůstává zapnutý). */
export function restartMeasure(): void {
  if (mode === '3d') {
    restart3d();
    return;
  }
  draw?.abortDrawing();
  endSketch();
  source.clear();
  updateCard();
}

function start2d(): void {
  if (!map) return;
  map.getTargetElement()?.classList.add('measure-active');
  draw = new Draw({
    source,
    type: 'LineString',
    style: measureStyle,
    stopClick: true, // klik nevybírá prvky v mapě
    freehandCondition: never,
  });
  draw.on('drawstart', onDrawStart);
  draw.on('drawend', onDrawEnd);
  draw.on('drawabort', () => { endSketch(); updateCard(); });
  map.addInteraction(draw);
  refreshSnaps();
  setDoubleClickZoom(false);
}

function stop2d(): void {
  if (!map) return;
  map.getTargetElement()?.classList.remove('measure-active');
  if (draw) {
    draw.abortDrawing();
    map.removeInteraction(draw);
  }
  draw = null;
  endSketch();
  refreshSnaps(); // odebere přichytávání (active = false)
  snapInfo = null;
  source.clear();
  setDoubleClickZoom(true);
}

export function setMeasureActive(on: boolean): void {
  if (!map || on === active) return;
  // Nejdřív ostatní nástroje (vypnou se a vrátí kurzor), pak měření.
  for (const l of activeListeners) l(on);
  if (on) {
    mode = getIs3dActive() ? '3d' : '2d';
    active = true;
    if (mode === '3d') start3d(updateCard);
    else start2d();
  } else {
    active = false;
    if (mode === '3d') stop3d();
    else stop2d();
  }
  button.classList.toggle('active', on);
  button.setAttribute('aria-pressed', String(on));
  button.title = on ? 'Ukončit měření (Esc)' : 'Měřit vzdálenost a plochu';
  card.hidden = !on;
  updateCard();
}

/** Po přestavbě dat (nové / skryté vrstvy) obnovit přichytávání. */
export function refreshMeasureSnap(): void {
  if (active) refreshSnaps();
}

function onKeyDown(ev: KeyboardEvent): void {
  if (!active) return;
  const t = ev.target as HTMLElement | null;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
  if (ev.key === 'Escape') {
    // Zachytit dřív, než Esc zavře boční panel (posluchače na document).
    ev.stopPropagation();
    setMeasureActive(false);
  } else if (ev.key === 'Backspace' || ev.key === 'Delete') {
    ev.preventDefault();
    undoMeasurePoint();
  }
}

/**
 * Přidá nad mapu (2D i 3D) tlačítko měření a kartu s výsledky.
 * @param getFeatures právě kreslené prvky JVF pro přichytávání bodů ve 2D.
 * @param getObjectName český název objektového typu podle elementName.
 */
export function setupMeasure(
  olMap: OlMap,
  getFeatures: () => Feature[],
  getObjectName: (elementName: string) => string | undefined = () => undefined,
): void {
  map = olMap;
  getSnapFeatures = getFeatures;
  resolveObjectName = getObjectName;
  map.addLayer(layer);
  const mapArea = document.getElementById('map-area')!;

  const tools = document.createElement('div');
  tools.className = 'map-tools';
  button = document.createElement('button');
  button.type = 'button';
  button.id = 'btn-measure';
  button.className = 'measure-btn';
  button.title = 'Měřit vzdálenost a plochu';
  button.setAttribute('aria-label', 'Měření vzdálenosti a plochy');
  button.setAttribute('aria-pressed', 'false');
  button.innerHTML = '<span class="material-symbols-outlined">straighten</span>';
  button.addEventListener('click', () => setMeasureActive(!active));
  tools.appendChild(button);
  mapArea.appendChild(tools);

  card = document.createElement('div');
  card.className = 'measure-card';
  card.id = 'measure-card';
  card.hidden = true;
  card.setAttribute('role', 'status');
  card.setAttribute('aria-live', 'polite');
  card.innerHTML = `
    <div class="measure-card-head">
      <span class="material-symbols-outlined">straighten</span>
      <span class="measure-card-title">Měření</span>
      <button type="button" class="measure-icon-btn" data-measure-action="close" title="Zavřít měření (Esc)" aria-label="Zavřít měření">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <dl class="measure-values">
      <dt data-measure-label="length">Vzdálenost</dt><dd data-measure="length">—</dd>
      <dt class="measure-3d-only">Vodorovně</dt><dd class="measure-3d-only" data-measure="horizontal">—</dd>
      <dt class="measure-3d-only">Převýšení</dt><dd class="measure-3d-only" data-measure="dz">—</dd>
      <dt data-measure-label="area">Plocha</dt><dd data-measure="area">od 3 bodů</dd>
      <dt>Body</dt><dd data-measure="points">0</dd>
      <dt>Přichycení</dt><dd data-measure="snap">—</dd>
      <dd class="measure-snap-target" data-measure="snap-target" hidden></dd>
    </dl>
    <p class="measure-hint">Klikáním přidávejte body (přichytí se k vrcholům, hranám a průsečíkům prvků).
      Klik na první bod uzavře polygon, dvojklik nebo klik na poslední bod měření ukončí,
      Backspace vrátí bod, Esc zavře.</p>
    <div class="measure-actions">
      <button type="button" class="measure-text-btn" data-measure-action="undo">
        <span class="material-symbols-outlined">undo</span>Zpět
      </button>
      <button type="button" class="measure-text-btn" data-measure-action="restart">
        <span class="material-symbols-outlined">restart_alt</span>Nové měření
      </button>
    </div>`;
  lengthEl = card.querySelector('[data-measure="length"]')!;
  lengthLabelEl = card.querySelector('[data-measure-label="length"]')!;
  horizEl = card.querySelector('[data-measure="horizontal"]')!;
  dzEl = card.querySelector('[data-measure="dz"]')!;
  areaEl = card.querySelector('[data-measure="area"]')!;
  areaLabelEl = card.querySelector('[data-measure-label="area"]')!;
  pointsEl = card.querySelector('[data-measure="points"]')!;
  snapEl = card.querySelector('[data-measure="snap"]')!;
  snapTargetEl = card.querySelector('[data-measure="snap-target"]')!;
  undoBtn = card.querySelector('[data-measure-action="undo"]')!;
  restartBtn = card.querySelector('[data-measure-action="restart"]')!;
  card.addEventListener('click', (ev) => {
    const action = (ev.target as HTMLElement).closest<HTMLElement>('[data-measure-action]')?.dataset['measureAction'];
    if (action === 'close') setMeasureActive(false);
    else if (action === 'undo') undoMeasurePoint();
    else if (action === 'restart') restartMeasure();
  });
  mapArea.appendChild(card);

  window.addEventListener('keydown', onKeyDown, { capture: true });
  // Přepnutí 2D ↔ 3D měření ukončí (body patří k pohledu, ve kterém vznikly).
  onViewModeChange(() => setMeasureActive(false));
}
