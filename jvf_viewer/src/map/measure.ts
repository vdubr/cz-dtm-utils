/**
 * Měření v 2D mapě (inspirace mapy.cz): tlačítko s pravítkem v levém horním
 * rohu mapy zapne nástroj; klikáním se přidávají body, čára se průběžně
 * měří (i k pozici myši). Od 3 bodů se zároveň ukazuje plocha mnohoúhelníku
 * uzavřeného z bodů (vyplněná plocha + čárkovaná uzavírací hrana).
 *
 * - Dvojklik / klik na poslední bod měření ukončí; další klik začne nové.
 * - Backspace vrátí poslední bod, Esc nástroj zavře.
 * - Body se přichytávají k vrcholům viditelných JVF vrstev (Snap).
 * - Během měření klik do mapy nevybírá prvky a dvojklik nepřibližuje.
 *
 * Délka a plocha jsou rovinné v S-JTSK (metry) — viz measureMath.ts.
 * Ovládací prvky jsou OL Controls uvnitř mapy, takže ve 3D zmizí s ní.
 */
import Control from 'ol/control/Control.js';
import Draw, { type DrawEvent } from 'ol/interaction/Draw.js';
import Snap from 'ol/interaction/Snap.js';
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
  formatArea,
  formatLength,
  polygonArea,
  polylineLength,
  segmentLength,
  type Coord,
} from './measureMath.js';

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
  if (geom.getType() === 'Point') return [pointerStyle]; // kurzor kreslení
  if (geom.getType() !== 'LineString') return [];

  const coords = dedupeConsecutive((geom as LineString).getCoordinates());
  if (coords.length === 0) return [];
  const styles: Style[] = [];

  if (coords.length >= 3) {
    const ring = [...coords, coords[0]!] as number[][];
    const polygon = new Polygon([ring]);
    styles.push(new Style({ geometry: polygon, fill: areaFill }));
    styles.push(new Style({
      geometry: new LineString([coords[coords.length - 1]! as number[], coords[0]! as number[]]),
      stroke: closingStroke,
    }));
    styles.push(new Style({
      geometry: polygon.getInteriorPoint(),
      text: label(formatArea(polygonArea(coords)), { bold: true }),
    }));
  }

  styles.push(new Style({ stroke: haloStroke }), new Style({ stroke: lineStroke }));
  styles.push(new Style({ geometry: new MultiPoint(coords as number[][]), image: vertexImage }));

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
let getSnapSources: () => VectorSource[] = () => [];
const source = new VectorSource();
const layer = new VectorLayer({ source, style: measureStyle, zIndex: 1000 });
let draw: Draw | null = null;
let snaps: Snap[] = [];
let sketchKey: EventsKey | null = null;
let sketchCoords: Coord[] | null = null; // během kreslení (vč. pozice myši)
let active = false;

let button: HTMLButtonElement;
let card: HTMLElement;
let lengthEl: HTMLElement;
let areaEl: HTMLElement;
let pointsEl: HTMLElement;

export function isMeasureActive(): boolean {
  return active;
}

/** Aktuální měřené body: rozkreslená čára, jinak dokončené měření. */
function currentCoords(): { coords: Coord[]; drawing: boolean } {
  if (sketchCoords) return { coords: sketchCoords, drawing: true };
  const f = source.getFeatures()[0];
  const g = f?.getGeometry() as LineString | undefined;
  return { coords: g ? g.getCoordinates() : [], drawing: false };
}

function updateCard(): void {
  const { coords, drawing } = currentCoords();
  // Při kreslení je poslední souřadnice pozice myši — není to pevný bod.
  const fixed = drawing ? Math.max(0, coords.length - 1) : coords.length;
  const pts = dedupeConsecutive(coords);
  lengthEl.textContent = pts.length >= 2 ? formatLength(polylineLength(pts)) : '—';
  areaEl.textContent = pts.length >= 3 ? formatArea(polygonArea(pts)) : 'od 3 bodů';
  pointsEl.textContent = String(fixed);
}

function refreshSnaps(): void {
  if (!map) return;
  for (const s of snaps) map.removeInteraction(s);
  snaps = [];
  if (!active) return;
  // Snap musí být přidán až po Draw (zpracuje události dřív).
  for (const src of getSnapSources()) {
    const snap = new Snap({ source: src, vertex: true, edge: false, pixelTolerance: 10 });
    map.addInteraction(snap);
    snaps.push(snap);
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
  sketchKey = geom.on('change', () => {
    sketchCoords = geom.getCoordinates();
    updateCard();
  });
  updateCard();
}

function endSketch(): void {
  if (sketchKey) unByKey(sketchKey);
  sketchKey = null;
  sketchCoords = null;
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
  draw?.abortDrawing();
  endSketch();
  source.clear();
  updateCard();
}

export function setMeasureActive(on: boolean): void {
  if (!map || on === active) return;
  active = on;
  button.classList.toggle('active', on);
  button.setAttribute('aria-pressed', String(on));
  button.title = on ? 'Ukončit měření (Esc)' : 'Měřit vzdálenost a plochu';
  card.hidden = !on;
  map.getTargetElement()?.classList.toggle('measure-active', on);
  if (on) {
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
  } else {
    if (draw) {
      draw.abortDrawing();
      map.removeInteraction(draw);
    }
    draw = null;
    endSketch();
    refreshSnaps(); // odebere snapy
    source.clear();
    setDoubleClickZoom(true);
  }
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
 * Přidá do mapy tlačítko měření a kartu s výsledky.
 * @param getSources zdroje viditelných JVF vrstev pro přichytávání bodů.
 */
export function setupMeasure(olMap: OlMap, getSources: () => VectorSource[]): void {
  map = olMap;
  getSnapSources = getSources;
  map.addLayer(layer);

  const btnWrap = document.createElement('div');
  btnWrap.className = 'measure-control ol-unselectable ol-control';
  button = document.createElement('button');
  button.type = 'button';
  button.id = 'btn-measure';
  button.className = 'measure-btn';
  button.title = 'Měřit vzdálenost a plochu';
  button.setAttribute('aria-label', 'Měření vzdálenosti a plochy');
  button.setAttribute('aria-pressed', 'false');
  button.innerHTML = '<span class="material-symbols-outlined">straighten</span>';
  button.addEventListener('click', () => setMeasureActive(!active));
  btnWrap.appendChild(button);
  map.addControl(new Control({ element: btnWrap }));

  card = document.createElement('div');
  card.className = 'measure-card ol-unselectable';
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
      <dt>Vzdálenost</dt><dd data-measure="length">—</dd>
      <dt>Plocha</dt><dd data-measure="area">od 3 bodů</dd>
      <dt>Body</dt><dd data-measure="points">0</dd>
    </dl>
    <p class="measure-hint">Klikáním přidávejte body (přichytí se k bodům dat).
      Dvojklik nebo klik na poslední bod měření ukončí, Backspace vrátí bod, Esc zavře.</p>
    <div class="measure-actions">
      <button type="button" class="measure-text-btn" data-measure-action="undo">
        <span class="material-symbols-outlined">undo</span>Zpět
      </button>
      <button type="button" class="measure-text-btn" data-measure-action="restart">
        <span class="material-symbols-outlined">restart_alt</span>Nové měření
      </button>
    </div>`;
  lengthEl = card.querySelector('[data-measure="length"]')!;
  areaEl = card.querySelector('[data-measure="area"]')!;
  pointsEl = card.querySelector('[data-measure="points"]')!;
  card.addEventListener('click', (ev) => {
    const action = (ev.target as HTMLElement).closest<HTMLElement>('[data-measure-action]')?.dataset['measureAction'];
    if (action === 'close') setMeasureActive(false);
    else if (action === 'undo') undoMeasurePoint();
    else if (action === 'restart') restartMeasure();
  });
  map.addControl(new Control({ element: card }));

  window.addEventListener('keydown', onKeyDown, { capture: true });
}
