import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import Map from 'ol/Map.js';
import { track } from '../analytics.js';
import { setupMapCard } from '../ui/mapCard.js';
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

  /** Poslední podklad mimo leteckou mapu — kam vrací rychlé tlačítko. */
  let lastNonAerial: BasemapChoice = getBasemapChoice() === 'ortofoto' ? 'zm' : getBasemapChoice();

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
      const active = b.dataset['layer'] === kind;
      b.classList.toggle('active', active);
      b.setAttribute('aria-checked', String(active));
      b.closest('.basemap-item')?.classList.toggle('active', active);
    });
    // Posuvník sytosti pod vybranou mapou; bez podkladu („Prázdná") nemá smysl.
    const opacityRow = document.getElementById('basemap-opacity-row');
    const activeItem = document.querySelector<HTMLElement>(`#base-layer-btns .basemap-item[data-layer="${kind}"]`);
    if (opacityRow) {
      if (kind !== 'none' && activeItem) activeItem.appendChild(opacityRow);
      opacityRow.hidden = kind === 'none';
    }
    if (opacitySlider) opacitySlider.disabled = kind === 'none';
    // Rychlé tlačítko: na letecké mapě nabízí návrat na předchozí podklad.
    if (kind !== 'ortofoto') lastNonAerial = kind;
    const quick = document.getElementById('btn-basemap-quick');
    if (quick) {
      const toAerial = kind !== 'ortofoto';
      const label = toAerial ? 'Letecká' : lastNonAerial === 'none' ? 'Prázdná' : 'Základní';
      quick.querySelector('[data-quick-label]')!.textContent = label;
      quick.querySelector('[data-quick-icon]')!.textContent = toAerial ? 'flight' : 'map';
      quick.title = toAerial ? 'Přepnout na leteckou mapu (ortofoto)' : `Zpět na podklad ${label}`;
    }
  }
  subscribeBasemapChoice(applyChoiceTo2d);
  applyChoiceTo2d();

  // Seznam podkladů s náhledy: Základní mapa / Letecká (ortofoto) / Prázdná.
  // „Prázdná" (`none`) = bez podkladu, pod vrstvami je pozadí mapy podle
  // motivu (bílé / černé, viz toggle3d.ts).
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setBasemapChoice((btn.dataset['layer'] ?? 'none') as BasemapChoice);
      track('basemap_change', { basemap: btn.dataset['layer'] ?? 'none' });
    });
  });

  setupBasemapCard();

  if (opacitySlider) {
    opacitySlider.value = String(Math.round(getBasemapChoiceOpacity() * 100));
    opacitySlider.addEventListener('input', () => {
      setBasemapChoiceOpacity(Number(opacitySlider.value) / 100);
    });
  }
}

/**
 * Plovoucí výběr podkladu nad mapou (jako mapy.cz): „Podkladová mapa" otevře /
 * zavře kartu se seznamem náhledů (zavře ji i klik mimo nebo Esc), „Letecká"
 * přepne rychle na ortofoto a zpět na předchozí podklad.
 */
function setupBasemapCard(): void {
  setupMapCard('btn-basemap-menu', 'basemap-card');
  const quick = document.getElementById('btn-basemap-quick') as HTMLButtonElement | null;
  quick?.addEventListener('click', () => {
    const target = getBasemapChoice() === 'ortofoto' ? quickReturn() : 'ortofoto';
    setBasemapChoice(target);
    track('basemap_change', { basemap: target });
  });
}

/** Kam se vrátí rychlé tlačítko z letecké mapy (podle popisku tlačítka). */
function quickReturn(): BasemapChoice {
  const label = document.querySelector('#btn-basemap-quick [data-quick-label]')?.textContent;
  return label === 'Prázdná' ? 'none' : 'zm';
}
