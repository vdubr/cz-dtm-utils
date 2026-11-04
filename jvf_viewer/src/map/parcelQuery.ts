/**
 * Dotaz na parcelu a jejího vlastníka (při zapnutém překryvu katastru).
 *
 * Tlačítko vedle měření zapne dotazovací režim; klik do mapy (2D i 3D)
 * zjistí parcelu přes WMS GetFeatureInfo katastru ČÚZK (vrstva
 * `polygony_parcel`, veřejná, CORS `*`) — katastrální území, parcelní číslo,
 * výměru a odkaz do VDP. Hranici parcely (polygon s otvory) dočte z WFS
 * katastrálních parcel INSPIRE ČÚZK podle identifikátoru parcely a zvýrazní
 * ji v 2D mapě. Vlastníka ČÚZK strojově veřejně neposkytuje; karta
 * proto nabídne odkaz do veřejného **Nahlížení do katastru nemovitostí**
 * (identifikace parcely podle souřadnic S-JTSK), kde jsou vlastníci uvedení.
 * Stránky Nahlížení aplikace sama nestahuje.
 */
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Polygon from 'ol/geom/Polygon.js';
import MultiPolygon from 'ol/geom/MultiPolygon.js';
import type { FeatureLike } from 'ol/Feature.js';
import Style from 'ol/style/Style.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import CircleStyle from 'ol/style/Circle.js';
import type OlMap from 'ol/Map.js';
import { KN_OVERLAY } from './overlayCatalog.js';
import { getOverlayState } from '../state/overlays.js';
import { isMeasureActive, onMeasureActiveChange, setMeasureActive } from './measure.js';
import { getIs3dActive, onViewModeChange } from '../ui/toggle3d.js';
import { isQuickClick } from '../viewer3d/quickClick.js';
import { raycastForMeasure, rayPlaneFromClient, sceneToSjtsk } from '../viewer3d/threeScene.js';
import { clearParcel3d, showParcel3d } from '../viewer3d/parcel3d.js';

export interface ParcelInfo {
  ku: string;
  kuUrl: string | null;
  parcelNumber: string;
  areaM2: number | null;
  vdpUrl: string | null;
  /** Identifikátor parcely (z odkazu do VDP) — pro dotaz na geometrii. */
  parcelId: string | null;
}

/** Ikona tlačítka: polygon parcely se špendlíkem (vlastní SVG, currentColor). */
export const PARCEL_ICON_SVG = `<svg class="parcel-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
  <path d="M3 13 7.5 8.8 11.5 10 13.5 17.5 6.5 21 3 17Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path fill="currentColor" fill-rule="evenodd" d="M16.5 2a4.7 4.7 0 0 0-4.7 4.7c0 3.4 4.7 8.6 4.7 8.6s4.7-5.2 4.7-8.6A4.7 4.7 0 0 0 16.5 2Zm0 2.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z"/>
</svg>`;

const KN_WMS = KN_OVERLAY.services[0]!.wmsUrl;
/** WFS katastrálních parcel INSPIRE ČÚZK (veřejné, EPSG:5514, CORS `*`). */
const CP_WFS = 'https://services.cuzk.gov.cz/wfs/inspire-cp-wfs.asp';

/** WFS GetFeature hranice parcely podle identifikátoru (featureID `CZ.{id}`). */
export function parcelGeometryUrl(parcelId: string): string {
  const params = new URLSearchParams({
    service: 'WFS',
    version: '2.0.0',
    request: 'GetFeature',
    typeNames: 'CP:CadastralParcel',
    featureID: `CZ.${parcelId}`,
    srsName: 'urn:ogc:def:crs:EPSG::5514',
  });
  return `${CP_WFS}?${params.toString()}`;
}

/**
 * Polygony parcely z GML 3.2 (`cp:geometry` → gml:Polygon, i MultiSurface):
 * pole polygonů, každý = [vnější hranice, …otvory], body [x, y] v S-JTSK.
 */
export function parseParcelGeometry(xml: string): number[][][][] {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const GML = 'http://www.opengis.net/gml/3.2';
  const ring = (lr: Element): number[][] => {
    const nums = (lr.getElementsByTagNameNS(GML, 'posList')[0]?.textContent ?? '')
      .trim().split(/\s+/).map(Number).filter(Number.isFinite);
    const pts: number[][] = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i]!, nums[i + 1]!]);
    return pts;
  };
  const out: number[][][][] = [];
  for (const geom of Array.from(doc.getElementsByTagName('cp:geometry'))) {
    for (const poly of Array.from(geom.getElementsByTagNameNS(GML, 'Polygon'))) {
      const rings: number[][][] = [];
      for (const ext of Array.from(poly.getElementsByTagNameNS(GML, 'exterior'))) {
        const lr = ext.getElementsByTagNameNS(GML, 'LinearRing')[0];
        if (lr) rings.push(ring(lr));
      }
      for (const int of Array.from(poly.getElementsByTagNameNS(GML, 'interior'))) {
        const lr = int.getElementsByTagNameNS(GML, 'LinearRing')[0];
        if (lr) rings.push(ring(lr));
      }
      if (rings.length > 0 && rings[0]!.length >= 4) out.push(rings);
    }
  }
  return out;
}

/** WMS GetFeatureInfo parcely v bodě (S-JTSK). */
export function parcelInfoUrl(x: number, y: number): string {
  const d = 1; // okno ±1 m, dotaz na prostřední pixel
  const params = new URLSearchParams({
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetFeatureInfo',
    LAYERS: 'polygony_parcel',
    QUERY_LAYERS: 'polygony_parcel',
    STYLES: '',
    CRS: 'EPSG:5514',
    BBOX: `${x - d},${y - d},${x + d},${y + d}`,
    WIDTH: '3',
    HEIGHT: '3',
    I: '1',
    J: '1',
    INFO_FORMAT: 'text/html',
    FEATURE_COUNT: '1',
  });
  return `${KN_WMS}?${params.toString()}`;
}

/** Odkaz do Nahlížení do KN: identifikace parcely podle souřadnic S-JTSK (celé metry). */
export function nahlizeniUrl(x: number, y: number): string {
  return `https://nahlizenidokn.cuzk.gov.cz/MapaIdentifikace.aspx?l=KN&x=${Math.round(x)}&y=${Math.round(y)}`;
}

/** Přečte HTML odpovědi GetFeatureInfo (tabulka popisek → hodnota). */
export function parseParcelInfo(html: string): ParcelInfo | null {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const rows = new Map<string, HTMLTableCellElement>();
  doc.querySelectorAll('tr').forEach((tr) => {
    const cells = tr.querySelectorAll(':scope > td');
    if (cells.length === 2) rows.set((cells[0]!.textContent ?? '').trim(), cells[1] as HTMLTableCellElement);
  });
  const find = (prefix: string) => [...rows.entries()].find(([k]) => k.startsWith(prefix))?.[1];
  const kuCell = find('Katastrální území');
  const numCell = find('Parcelní číslo');
  if (!kuCell || !numCell) return null;
  const areaText = (find('Výměra')?.textContent ?? '').replace(/\s/g, '');
  const area = Number(areaText);
  return {
    ku: (kuCell.textContent ?? '').trim(),
    kuUrl: kuCell.querySelector('a')?.getAttribute('href') ?? null,
    parcelNumber: (numCell.textContent ?? '').trim(),
    areaM2: areaText && Number.isFinite(area) ? area : null,
    vdpUrl: find('Odkaz do VDP')?.querySelector('a')?.getAttribute('href') ?? null,
    parcelId: /\/parcely\/(\d+)/.exec(find('Odkaz do VDP')?.querySelector('a')?.getAttribute('href') ?? '')?.[1] ?? null,
  };
}

// ── Stav a UI ─────────────────────────────────────────────────────────────────
let map: OlMap | null = null;
let active = false;
let button: HTMLButtonElement;
let card: HTMLElement;
let body: HTMLElement;
let requestId = 0;
const markerSource = new VectorSource();
const pointStyle = new Style({
  image: new CircleStyle({
    radius: 6,
    fill: new Fill({ color: 'rgba(216,27,96,0.35)' }),
    stroke: new Stroke({ color: '#d81b60', width: 2 }),
  }),
});
const parcelStyles = [
  new Style({ stroke: new Stroke({ color: 'rgba(255,255,255,0.9)', width: 5 }) }),
  new Style({ stroke: new Stroke({ color: '#d81b60', width: 2.5 }), fill: new Fill({ color: 'rgba(216,27,96,0.14)' }) }),
];
const markerLayer = new VectorLayer({
  source: markerSource,
  zIndex: 1001,
  properties: { name: 'parcel' },
  style: (f: FeatureLike) => (f.getGeometry()?.getType() === 'Point' ? pointStyle : parcelStyles),
});
/** Hranice zobrazené parcely (pro přiblížení). */
let parcelGeom: Polygon | MultiPolygon | null = null;
/** Skutečná výška kliknutého místa ve 3D (pro obrys mimo terén). */
let lastClickZ = 0;

export function isParcelQueryActive(): boolean {
  return active;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function renderHint(): void {
  body.innerHTML = '<p class="measure-hint">Klikněte do mapy na parcelu. Údaje o parcele jsou z katastru ČÚZK, vlastníka ukáže Nahlížení do katastru nemovitostí.</p>';
}

function renderInfo(info: ParcelInfo, x: number, y: number): void {
  const area = info.areaM2 !== null ? `${info.areaM2.toLocaleString('cs-CZ')} m²` : '—';
  body.innerHTML = `
    <dl class="measure-values">
      <dt>Katastrální území</dt><dd data-parcel="ku">${escapeHtml(info.ku)}</dd>
      <dt>Parcelní číslo</dt><dd data-parcel="number">${escapeHtml(info.parcelNumber)}</dd>
      <dt>Výměra</dt><dd data-parcel="area">${area}</dd>
    </dl>
    <div class="parcel-links">
      <a class="parcel-owner-link" data-parcel="owner" href="${nahlizeniUrl(x, y)}" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-outlined">person_search</span>Vlastník v Nahlížení do KN
      </a>
      ${info.vdpUrl ? `<a class="measure-text-btn" href="${escapeHtml(info.vdpUrl)}" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined">open_in_new</span>Parcela ve VDP</a>` : ''}
      <button type="button" class="measure-text-btn" data-parcel-action="zoom" hidden>
        <span class="material-symbols-outlined">zoom_in_map</span>Přiblížit na parcelu
      </button>
    </div>`;
  body.querySelector('[data-parcel-action="zoom"]')?.addEventListener('click', () => {
    if (parcelGeom && map) map.getView().fit(parcelGeom.getExtent(), { padding: [60, 60, 60, 60], maxZoom: 20, duration: 400 });
  });
}

/** Dočte hranici parcely z WFS a zvýrazní ji v mapě. */
async function showParcelGeometry(parcelId: string, id: number): Promise<void> {
  try {
    const resp = await fetch(parcelGeometryUrl(parcelId));
    if (!resp.ok) return;
    const polygons = parseParcelGeometry(await resp.text());
    if (id !== requestId || polygons.length === 0) return;
    parcelGeom = polygons.length === 1 ? new Polygon(polygons[0]!) : new MultiPolygon(polygons);
    markerSource.addFeature(new Feature(parcelGeom));
    // Ve 3D obrys položený na terén.
    if (getIs3dActive()) showParcel3d(polygons, lastClickZ);
    const zoom = body.querySelector<HTMLButtonElement>('[data-parcel-action="zoom"]');
    if (zoom) zoom.hidden = getIs3dActive();
  } catch {
    // Geometrie je doplněk — údaje o parcele zůstávají i bez ní.
  }
}

/** Zjistí parcelu v bodě (S-JTSK) a ukáže ji v kartě. */
export async function queryParcelAt(x: number, y: number): Promise<void> {
  const id = ++requestId;
  markerSource.clear();
  clearParcel3d();
  parcelGeom = null;
  markerSource.addFeature(new Feature(new Point([x, y])));
  body.innerHTML = '<p class="measure-hint">Zjišťuji parcelu…</p>';
  try {
    const resp = await fetch(parcelInfoUrl(x, y));
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const info = parseParcelInfo(await resp.text());
    if (id !== requestId) return; // mezitím další klik
    if (!info) {
      body.innerHTML = '<p class="measure-hint">Na tomto místě katastr žádnou parcelu nevrátil.</p>';
      return;
    }
    renderInfo(info, x, y);
    if (info.parcelId) void showParcelGeometry(info.parcelId, id);
  } catch (err) {
    if (id !== requestId) return;
    body.innerHTML = `<p class="measure-hint">Dotaz na katastr selhal (${escapeHtml((err as Error).message)}).</p>`;
  }
}

export function setParcelQueryActive(on: boolean): void {
  if (on === active || !map) return;
  active = on;
  if (on && isMeasureActive()) setMeasureActive(false); // nástroje se vylučují
  button.classList.toggle('active', on);
  button.setAttribute('aria-pressed', String(on));
  card.hidden = !on;
  map.getTargetElement()?.classList.toggle('parcel-active', on); // kurzor křížek
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
  if (canvas) canvas.style.cursor = on ? 'crosshair' : 'grab';
  markerSource.clear();
  clearParcel3d();
  parcelGeom = null;
  requestId++;
  if (on) renderHint();
}

/** Přidá tlačítko dotazu na vlastníka parcely (viditelné jen se zapnutým katastrem). */
export function setupParcelQuery(olMap: OlMap): void {
  map = olMap;
  map.addLayer(markerLayer);
  const tools = document.querySelector('.map-tools');
  if (!tools) return;

  button = document.createElement('button');
  button.type = 'button';
  button.id = 'btn-parcel';
  button.className = 'measure-btn';
  button.title = 'Zjistit vlastníka parcely (katastr nemovitostí)';
  button.setAttribute('aria-label', 'Zjistit vlastníka parcely');
  button.setAttribute('aria-pressed', 'false');
  button.hidden = true;
  button.innerHTML = PARCEL_ICON_SVG;
  button.addEventListener('click', () => setParcelQueryActive(!active));
  tools.append(button); // vedle tlačítka měření (řádek — karta zůstane nad nimi)

  card = document.createElement('div');
  card.className = 'measure-card parcel-card';
  card.id = 'parcel-card';
  card.hidden = true;
  card.setAttribute('role', 'status');
  card.setAttribute('aria-live', 'polite');
  card.innerHTML = `
    <div class="measure-card-head">
      ${PARCEL_ICON_SVG}
      <span class="measure-card-title">Parcela a vlastník</span>
      <button type="button" class="measure-icon-btn" data-parcel-action="close" title="Zavřít (Esc)" aria-label="Zavřít">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="parcel-body"></div>`;
  body = card.querySelector('.parcel-body')!;
  card.querySelector('[data-parcel-action="close"]')!.addEventListener('click', () => setParcelQueryActive(false));
  document.getElementById('map-area')?.appendChild(card);

  // Tlačítko jen se zapnutým katastrem.
  const kn = getOverlayState('kn');
  const syncButton = (): void => {
    button.hidden = !kn.isEnabled();
    if (!kn.isEnabled()) setParcelQueryActive(false);
  };
  kn.subscribe(syncButton);
  syncButton();

  // Zapnutí měření dotaz ukončí (nástroje se vylučují).
  onMeasureActiveChange((on) => { if (on) setParcelQueryActive(false); });
  onViewModeChange(() => setParcelQueryActive(false));

  // 2D: klik do mapy.
  map.on('singleclick', (evt) => {
    if (!active || getIs3dActive()) return;
    const [x, y] = evt.coordinate;
    void queryParcelAt(x!, y!);
  });

  // 3D: krátký klik do scény → bod pod kurzorem (objekt, terén, rovina).
  document.getElementById('three-canvas')?.addEventListener('click', (e) => {
    if (!active || !getIs3dActive() || !isQuickClick(e)) return;
    const hit = raycastForMeasure(e.clientX, e.clientY)[0]?.point ?? rayPlaneFromClient(e.clientX, e.clientY, 0);
    const c = hit ? sceneToSjtsk(hit) : null;
    if (!c) return;
    lastClickZ = c[2];
    void queryParcelAt(c[0], c[1]);
  });

  window.addEventListener('keydown', (ev) => {
    if (active && ev.key === 'Escape') {
      ev.stopPropagation();
      setParcelQueryActive(false);
    }
  }, { capture: true });
}
