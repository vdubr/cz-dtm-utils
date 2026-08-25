import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import Map from 'ol/Map.js';
import {
  getBasemapChoice,
  setBasemapChoice,
  getBasemapChoiceOpacity,
  setBasemapChoiceOpacity,
  subscribeBasemapChoice,
  type BasemapChoice,
} from '../state/basemapChoice.js';

// AGS REST tile cache for ČÚZK maps — EPSG:5514 (wkid 102067)
// Tile origin: (-925000, -920000), 256×256 tiles, resolutions are powers of 2048
export const CUZK_TILE_ORIGIN: [number, number] = [-925000, -920000];
// Přesné hodnoty z AGS REST API: https://ags.cuzk.cz/arcgis1/rest/services/ZTM/MapServer?f=json
export const CUZK_RESOLUTIONS = [
  2048.260096520193,
  1024.1300482600966,
  512.0650241300483,
  256.03251206502415,
  128.01625603251208,
  64.00812801625604,
  32.00406400812802,
  16.00203200406401,
  8.001016002032005,
  4.000508001016002,
  2.000254000508001,
  1.0001270002540006,
  0.5000635001270003,
  0.25003175006350015,
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
  const opacitySlider = document.getElementById('basemap-opacity') as HTMLInputElement | null;

  // Jediný zdroj pravdy je sdílený stav basemapChoice — 2D vrstvy jsou jen
  // jeho konzument (3D texturu na terénu konzumuje toggle3d).
  function applyChoiceTo2d(): void {
    const kind = getBasemapChoice();
    const opacity = getBasemapChoiceOpacity();
    zmLayer.setVisible(kind === 'zm');
    ortofotoLayer.setVisible(kind === 'ortofoto');
    zmLayer.setOpacity(opacity);
    ortofotoLayer.setOpacity(opacity);
    btns.forEach((b) => {
      b.classList.toggle('active', b.dataset['layer'] === kind);
    });
  }
  subscribeBasemapChoice(applyChoiceTo2d);
  applyChoiceTo2d();

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const layer = (btn.dataset['layer'] ?? 'none') as BasemapChoice;
      // Toggle: kliknutí na aktivní tlačítko podkladovou vrstvu vypne
      // (žádný podklad — vidíme jen JVF vrstvy nad pozadím mapy). Druhým
      // klikem se vrstva opět zapne.
      const wasActive = btn.classList.contains('active');
      setBasemapChoice(wasActive ? 'none' : layer);
    });
  });

  if (opacitySlider) {
    opacitySlider.value = String(Math.round(getBasemapChoiceOpacity() * 100));
    opacitySlider.addEventListener('input', () => {
      setBasemapChoiceOpacity(Number(opacitySlider.value) / 100);
    });
  }
}
