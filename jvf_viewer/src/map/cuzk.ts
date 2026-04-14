import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import Map from 'ol/Map.js';

// AGS REST tile cache for ČÚZK maps — EPSG:5514 (wkid 102067)
// Tile origin: (-925000, -920000), 256×256 tiles, resolutions are powers of 2048
export const CUZK_TILE_ORIGIN: [number, number] = [-925000, -920000];
export const CUZK_RESOLUTIONS = [
  2048.2549, 1024.1274, 512.0637, 256.0319, 128.0159,
  64.0080, 32.0040, 16.0020, 8.0010, 4.0005,
  2.0002, 1.0001, 0.5001, 0.2500,
];

function makeCuzkTileGrid(): TileGrid {
  return new TileGrid({
    origin: CUZK_TILE_ORIGIN,
    resolutions: CUZK_RESOLUTIONS,
    tileSize: 256,
  });
}

// ArcGIS REST tile URL pattern: /tile/{z}/{y}/{x}  (y,x order!)
function makeZtmUrl(z: number, x: number, y: number): string {
  return `https://ags.cuzk.cz/arcgis1/rest/services/ZTM/MapServer/tile/${z}/${y}/${x}`;
}

function makeOrtofotoUrl(z: number, x: number, y: number): string {
  return `https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO/MapServer/tile/${z}/${y}/${x}`;
}

export function createZmLayer(): TileLayer {
  return new TileLayer({
    source: new XYZ({
      tileGrid: makeCuzkTileGrid(),
      tileUrlFunction: ([z, x, y]) => makeZtmUrl(z, x, y),
      crossOrigin: 'anonymous',
      projection: 'EPSG:5514',
      transition: 250,
    }),
    visible: true,
    properties: { name: 'zm' },
  });
}

export function createOrtofotoLayer(): TileLayer {
  return new TileLayer({
    source: new XYZ({
      tileGrid: makeCuzkTileGrid(),
      tileUrlFunction: ([z, x, y]) => makeOrtofotoUrl(z, x, y),
      crossOrigin: 'anonymous',
      projection: 'EPSG:5514',
      transition: 250,
    }),
    visible: false,
    properties: { name: 'ortofoto' },
  });
}

export function setupBaseLayerSwitcher(
  map: Map,
  zmLayer: TileLayer,
  ortofotoLayer: TileLayer
): void {
  map.addLayer(zmLayer);
  map.addLayer(ortofotoLayer);

  const btns = document.querySelectorAll<HTMLButtonElement>('#base-layer-btns .base-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const layer = btn.dataset['layer'];
      zmLayer.setVisible(layer === 'zm');
      ortofotoLayer.setVisible(layer === 'ortofoto');
    });
  });
}
