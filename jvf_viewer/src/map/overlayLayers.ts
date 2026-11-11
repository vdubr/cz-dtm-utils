/**
 * Překryvné vrstvy ve 2D mapě (rastr ze služeb ČÚZK, viz overlayCatalog.ts).
 *
 * Na službu dvě vrstvy, viditelná je nejvýš jedna:
 *   - vybraná CELÁ služba se šablonou WMTS → WMTS (cachované dlaždice),
 *   - jinak (část podvrstev, služba bez WMTS) → ImageWMS s `LAYERS=<výběr>`,
 *   - nic / překryv vypnutý → obě skryté.
 * Podvrstvy s variantou pro tmavý motiv (`darkName`, např. bílý katastr)
 * se přepnou při změně motivu (atribut data-theme na <html>).
 * `maxResolution` podle měřítkového limitu vybraných podvrstev — nad ním
 * služba vrací prázdný obrázek, takže se nic zbytečně nestahuje.
 * Vrstvy jsou nad podkladem a pod daty JVF (zIndex 10).
 */
import TileLayer from 'ol/layer/Tile.js';
import ImageLayer from 'ol/layer/Image.js';
import WMTS from 'ol/source/WMTS.js';
import ImageWMS from 'ol/source/ImageWMS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import type OlMap from 'ol/Map.js';
import { CUZK_TILE_ORIGIN } from './cuzk.js';
import { OGC_PIXEL_M } from './dtmCatalog.js';
import { themedLayerNames, type OverlayService } from './overlayCatalog.js';
import type { OverlayState } from '../state/overlays.js';

/** grid_5514 služeb ČÚZK: úroveň 0 = 1:7 315 200, 18 úrovní, dlaždice 256 px. */
const WMTS_RESOLUTIONS = Array.from({ length: 18 }, (_, z) => (7315200 * OGC_PIXEL_M) / 2 ** z);
const WMTS_EXTENT = [-925000, -1230000, -430000, -920000];

interface ServiceLayers {
  svc: OverlayService;
  wmts: TileLayer<WMTS> | null;
  wms: ImageLayer<ImageWMS>;
}

function maxResolutionFor(svc: OverlayService, names: readonly string[]): number {
  const scales = svc.sublayers.filter((l) => names.includes(l.name)).map((l) => l.maxScale);
  return Math.max(0, ...scales) * OGC_PIXEL_M;
}

/**
 * Přidá vrstvy jednoho překryvu do mapy a napojí je na jeho stav.
 * @param loadingChanged zavolá se při začátku / konci stahování (spinner).
 */
export function setupOverlayLayers(
  map: OlMap,
  state: OverlayState,
  loadingChanged: (loading: boolean) => void = () => {},
): void {
  const def = state.def;
  let pending = 0;
  const track = (delta: number): void => {
    const was = pending > 0;
    pending = Math.max(0, pending + delta);
    if (was !== pending > 0) loadingChanged(pending > 0);
  };

  const layers: ServiceLayers[] = def.services.map((svc, index) => {
    const zIndex = def.zIndexBase + index;
    const props = { name: `${def.id}:${svc.id}` };
    let wmts: TileLayer<WMTS> | null = null;
    if (svc.wmtsUrl) {
      const source = new WMTS({
        url: svc.wmtsUrl,
        layer: svc.id,
        matrixSet: 'grid_5514',
        format: 'image/png',
        style: 'default',
        requestEncoding: 'REST',
        tileGrid: new WMTSTileGrid({
          origin: CUZK_TILE_ORIGIN,
          resolutions: WMTS_RESOLUTIONS,
          matrixIds: WMTS_RESOLUTIONS.map((_, z) => String(z)),
          tileSize: 256,
          extent: WMTS_EXTENT,
        }),
        projection: 'EPSG:5514',
        crossOrigin: 'anonymous',
        transition: 200,
      });
      source.on('tileloadstart', () => track(1));
      source.on(['tileloadend', 'tileloaderror'], () => track(-1));
      wmts = new TileLayer({ source, zIndex, visible: false, properties: { ...props, overlayMode: 'wmts' } });
      map.addLayer(wmts);
    }
    const wmsSource = new ImageWMS({
      url: svc.wmsUrl,
      params: { LAYERS: '', VERSION: '1.3.0', FORMAT: 'image/png', TRANSPARENT: true, STYLES: '' },
      projection: 'EPSG:5514',
      ratio: 1,
      crossOrigin: 'anonymous',
    });
    wmsSource.on('imageloadstart', () => track(1));
    wmsSource.on(['imageloadend', 'imageloaderror'], () => track(-1));
    const wms = new ImageLayer({ source: wmsSource, zIndex, visible: false, properties: { ...props, overlayMode: 'wms' } });
    map.addLayer(wms);
    return { svc, wmts, wms };
  });

  /** Promítne stav (zapnutí, výběr, sytost, motiv) do vrstev. */
  const sync = (): void => {
    const on = state.isEnabled();
    const opacity = state.getOpacity();
    for (const { svc, wmts, wms } of layers) {
      const names = on ? state.getSelection(svc.id) : [];
      const all = names.length === svc.sublayers.length;
      const useWmts = all && wmts !== null;
      const useWms = names.length > 0 && !useWmts;
      wmts?.setVisible(useWmts);
      wms.setVisible(useWms);
      const maxRes = maxResolutionFor(svc, names.length > 0 ? names : svc.sublayers.map((l) => l.name));
      for (const l of [wmts, wms]) {
        if (!l) continue;
        l.setOpacity(opacity);
        l.setMaxResolution(maxRes);
      }
      if (useWms) {
        const src = wms.getSource()!;
        const layersParam = themedLayerNames(svc, names).join(',');
        if (src.getParams()['LAYERS'] !== layersParam) src.updateParams({ LAYERS: layersParam });
      }
    }
  };

  state.subscribe(sync);
  // Změna motivu → varianty podvrstev pro tmavý / světlý motiv.
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  sync();
}
