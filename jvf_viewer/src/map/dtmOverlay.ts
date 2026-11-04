/**
 * Překryvná vrstva DTM ČR ve 2D mapě (rastr ze služeb ČÚZK, viz dtmCatalog.ts).
 *
 * Na službu dvě vrstvy, viditelná je nejvýš jedna:
 *   - vybraná CELÁ služba → WMTS (cachované dlaždice, rychlé),
 *   - vybraná ČÁST podvrstev (nebo služba bez WMTS — přípojky)
 *     → ImageWMS s `LAYERS=<výběr>`,
 *   - nic / překryv vypnutý → obě skryté.
 * `maxResolution` podle měřítkového limitu vybraných podvrstev — nad ním
 * služba vrací prázdný obrázek, takže se nic zbytečně nestahuje.
 * Vrstvy jsou nad podkladem (zIndex 1–5) a pod daty JVF (zIndex 10).
 */
import TileLayer from 'ol/layer/Tile.js';
import ImageLayer from 'ol/layer/Image.js';
import WMTS from 'ol/source/WMTS.js';
import ImageWMS from 'ol/source/ImageWMS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import type OlMap from 'ol/Map.js';
import { CUZK_TILE_ORIGIN } from './cuzk.js';
import {
  DTM_SERVICES,
  DTM_WMS_BASE,
  DTM_WMTS_BASE,
  OGC_PIXEL_M,
  type DtmService,
} from './dtmCatalog.js';
import {
  getDtmOpacity,
  getDtmSelection,
  isDtmEnabled,
  subscribeDtmOverlay,
} from '../state/dtmOverlay.js';

/** grid_5514 služeb DMVS: úroveň 0 = 1:7 315 200, 18 úrovní, dlaždice 256 px. */
const WMTS_RESOLUTIONS = Array.from({ length: 18 }, (_, z) => (7315200 * OGC_PIXEL_M) / 2 ** z);
const WMTS_EXTENT = [-925000, -1230000, -430000, -920000];

interface ServiceLayers {
  svc: DtmService;
  wmts: TileLayer<WMTS>;
  wms: ImageLayer<ImageWMS>;
}

let layers: ServiceLayers[] = [];
let pending = 0;
let onLoading: (loading: boolean) => void = () => {};

function trackLoading(delta: number): void {
  const was = pending > 0;
  pending = Math.max(0, pending + delta);
  if (was !== pending > 0) onLoading(pending > 0);
}

function maxResolutionFor(svc: DtmService, names: readonly string[]): number {
  const scales = svc.sublayers.filter((l) => names.includes(l.name)).map((l) => l.maxScale);
  return Math.max(0, ...scales) * OGC_PIXEL_M;
}

function createServiceLayers(svc: DtmService, index: number): ServiceLayers {
  const tileGrid = new WMTSTileGrid({
    origin: CUZK_TILE_ORIGIN,
    resolutions: WMTS_RESOLUTIONS,
    matrixIds: WMTS_RESOLUTIONS.map((_, z) => String(z)),
    tileSize: 256,
    extent: WMTS_EXTENT,
  });
  const wmtsSource = new WMTS({
    url: `${DTM_WMTS_BASE}${svc.id}/rest/${svc.id}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png`,
    layer: svc.id,
    matrixSet: 'grid_5514',
    format: 'image/png',
    style: 'default',
    requestEncoding: 'REST',
    tileGrid,
    projection: 'EPSG:5514',
    crossOrigin: 'anonymous',
    transition: 200,
  });
  wmtsSource.on('tileloadstart', () => trackLoading(1));
  wmtsSource.on(['tileloadend', 'tileloaderror'], () => trackLoading(-1));

  const wmsSource = new ImageWMS({
    url: `${DTM_WMS_BASE}${svc.id}`,
    params: { LAYERS: '', VERSION: '1.3.0', FORMAT: 'image/png', TRANSPARENT: true, STYLES: '' },
    projection: 'EPSG:5514',
    ratio: 1,
    crossOrigin: 'anonymous',
  });
  wmsSource.on('imageloadstart', () => trackLoading(1));
  wmsSource.on(['imageloadend', 'imageloaderror'], () => trackLoading(-1));

  const zIndex = 1 + index;
  const props = { name: `dtm:${svc.id}` };
  return {
    svc,
    wmts: new TileLayer({ source: wmtsSource, zIndex, visible: false, properties: { ...props, dtmMode: 'wmts' } }),
    wms: new ImageLayer({ source: wmsSource, zIndex, visible: false, properties: { ...props, dtmMode: 'wms' } }),
  };
}

/** Promítne stav (zapnutí, výběr, sytost) do vrstev. */
function sync(): void {
  const on = isDtmEnabled();
  const opacity = getDtmOpacity();
  for (const { svc, wmts, wms } of layers) {
    const names = on ? getDtmSelection(svc.id) : [];
    const all = names.length === svc.sublayers.length;
    const useWmts = all && svc.wmts;
    const some = names.length > 0 && !useWmts;
    wmts.setVisible(useWmts);
    wms.setVisible(some);
    wmts.setOpacity(opacity);
    wms.setOpacity(opacity);
    const maxRes = maxResolutionFor(svc, names.length > 0 ? names : svc.sublayers.map((l) => l.name));
    wmts.setMaxResolution(maxRes);
    wms.setMaxResolution(maxRes);
    if (some) {
      const src = wms.getSource()!;
      const layersParam = names.join(',');
      if (src.getParams()['LAYERS'] !== layersParam) src.updateParams({ LAYERS: layersParam });
    }
  }
}

/**
 * Přidá vrstvy DTM do mapy a napojí je na stav překryvu.
 * @param loadingChanged zavolá se při začátku / konci stahování (spinner).
 */
export function setupDtmOverlay(map: OlMap, loadingChanged: (loading: boolean) => void = () => {}): void {
  onLoading = loadingChanged;
  layers = DTM_SERVICES.map((svc, i) => createServiceLayers(svc, i));
  for (const l of layers) {
    map.addLayer(l.wmts);
    map.addLayer(l.wms);
  }
  subscribeDtmOverlay(sync);
  sync();
}
