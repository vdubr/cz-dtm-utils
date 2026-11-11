/**
 * Podkladová mapa jako textura pro 3D terén (DMR).
 *
 * Stahuje dlaždice ČÚZK (Základní mapa / Ortofoto) ze stejné AGS REST
 * tile cache jako 2D mapa (`map/cuzk.ts`) — dlaždice jsou nativně
 * v **EPSG:5514 (S-JTSK EastNorth)**, tedy ve stejné projekci jako JVF data
 * i terénní raster. Žádná reprojekce není potřeba; výřez pro bbox terénu
 * se pouze poskládá z dlaždic na canvas a ořízne pixel-přesně.
 *
 * Zarovnání s terénem řeší UV souřadnice vertexů (viz `terrain.ts`) — obojí
 * se počítá ze světových souřadnic vůči témuž bboxu, takže mapa sedí na
 * terénu nezávisle na orientaci os scény (žádné riziko zrcadlení jako
 * u dřívějšího bugu se severo-jižní inverzí).
 *
 * Kvalita / výkon: celková textura terénu má delší stranu `maxTexturePx`
 * (2048 px, nastavuje `configureTerrainTextures` z threeScene) — hrubé
 * pozadí celého výřezu. Při přiblížení threeScene stáhne podrobný výřez
 * jen kolem pohledu (`loadTerrainTexture` s menším bbox a vlastním `maxPx`),
 * takže tenké čáry katastru / DTM zůstávají ostré bez obří textury.
 * Anizotropní filtrování drží ostrost i při šikmém pohledu. Hotové textury
 * podkladu se cachují per bbox+vrstva+velikost.
 */
import * as THREE from 'three';
import { CUZK_TILE_ORIGIN, CUZK_RESOLUTIONS } from '../map/cuzk.js';
import type { BBox } from './terrain.js';

/** Dostupné podkladové vrstvy — shodné s 2D (`map/cuzk.ts`). */
export type BasemapKind = 'zm' | 'ortofoto';

const TILE_PX = 256;
/** Maximální delší strana složené textury (px) — viz configureTerrainTextures. */
let maxTexturePx = 2048;
/** Anizotropní filtrování textur terénu (1 = vypnuto). */
let anisotropy = 1;
/** Pojistka proti nesmyslně velkému fetchi (např. chybný bbox). */
const MAX_TILE_COUNT = 400;

/**
 * Kvalita textur terénu podle GPU (volá threeScene po vytvoření rendereru):
 * delší strana celkové textury 2048 px (nejvýš max. velikost textury GPU)
 * a nejvyšší podporované anizotropní filtrování.
 */
export function configureTerrainTextures(opts: { maxTextureSize: number; maxAnisotropy: number }): void {
  maxTexturePx = Math.max(1024, Math.min(2048, opts.maxTextureSize));
  anisotropy = Math.max(1, opts.maxAnisotropy);
}

/** Aktuální maximální delší strana textury terénu (px). */
export function getMaxTexturePx(): number {
  return maxTexturePx;
}

const AGS_SERVICE: Record<BasemapKind, string> = {
  zm: 'ZTM',
  ortofoto: 'ORTOFOTO',
};

function tileUrl(kind: BasemapKind, z: number, col: number, row: number): string {
  // ArcGIS REST pattern: /tile/{z}/{row}/{col} (row = y, col = x)
  return `https://ags.cuzk.cz/arcgis1/rest/services/${AGS_SERVICE[kind]}/MapServer/tile/${z}/${row}/${col}`;
}

/**
 * Vybere nejjemnější zoom level, při kterém se bbox vejde do
 * `maxTexturePx` na delší straně. Vrací index do `CUZK_RESOLUTIONS`.
 */
function pickZoomLevel(bbox: BBox, maxPx: number): number {
  const spanX = bbox.maxX - bbox.minX;
  const spanY = bbox.maxY - bbox.minY;
  let best = 0;
  for (let z = 0; z < CUZK_RESOLUTIONS.length; z++) {
    const res = CUZK_RESOLUTIONS[z]!;
    const px = Math.max(spanX, spanY) / res;
    if (px <= maxPx) best = z;
    else break; // rozlišení jsou seřazená od nejhrubšího — dál už jen roste
  }
  return best;
}

/** Načte jeden obrázek dlaždice; při chybě (síť / 404) vrací null. */
function loadTileImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

/** Cache hotových textur: klíč = bbox (zaokrouhleno) + vrstva. */
const textureCache = new Map<string, THREE.CanvasTexture>();
/** In-flight requesty — deduplikace při rychlém přepínání vrstev. */
const inflight = new Map<string, Promise<THREE.CanvasTexture>>();

function cacheKey(bbox: BBox, kind: BasemapKind, maxPx: number): string {
  const r = (n: number): string => Math.round(n).toString();
  return `${kind}_${maxPx}_${r(bbox.minX)}_${r(bbox.minY)}_${r(bbox.maxX)}_${r(bbox.maxY)}`;
}

/**
 * Stáhne a složí výřez podkladové mapy pro daný bbox (EPSG:5514) do
 * `THREE.CanvasTexture`. Jednotlivé chybějící dlaždice toleruje (zůstane
 * průhledné místo); pokud selžou všechny, vyhodí Error.
 */
export async function loadBasemapTexture(
  bbox: BBox,
  kind: BasemapKind,
  maxPx: number = maxTexturePx,
): Promise<THREE.CanvasTexture> {
  const key = cacheKey(bbox, kind, maxPx);
  const cached = textureCache.get(key);
  if (cached) return cached;
  const pending = inflight.get(key);
  if (pending) return pending;

  const promise = composeBasemapTexture(bbox, kind, maxPx)
    .then((tex) => {
      textureCache.set(key, tex);
      return tex;
    })
    .finally(() => {
      inflight.delete(key);
    });
  inflight.set(key, promise);
  return promise;
}

async function composeBasemapTexture(
  bbox: BBox,
  kind: BasemapKind,
  maxPx: number,
): Promise<THREE.CanvasTexture> {
  const [originX, originY] = CUZK_TILE_ORIGIN;
  const z = pickZoomLevel(bbox, maxPx);
  const res = CUZK_RESOLUTIONS[z]!;
  const tileSpan = TILE_PX * res;

  // Rozsah dlaždic pokrývající bbox. Origin tile gridu je vlevo nahoře
  // (severozápad): sloupce rostou na východ, řádky na jih.
  const col0 = Math.floor((bbox.minX - originX) / tileSpan);
  const col1 = Math.floor((bbox.maxX - originX) / tileSpan);
  const row0 = Math.floor((originY - bbox.maxY) / tileSpan);
  const row1 = Math.floor((originY - bbox.minY) / tileSpan);

  const tileCount = (col1 - col0 + 1) * (row1 - row0 + 1);
  if (tileCount > MAX_TILE_COUNT) {
    throw new Error(`Příliš velký výřez podkladu (${tileCount} dlaždic)`);
  }

  const width = Math.max(1, Math.round((bbox.maxX - bbox.minX) / res));
  const height = Math.max(1, Math.round((bbox.maxY - bbox.minY) / res));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D kontext není k dispozici');

  // Paralelní fetch všech dlaždic; jednotlivá selhání tolerujeme.
  const jobs: Array<Promise<{ img: HTMLImageElement | null; col: number; row: number }>> = [];
  for (let row = row0; row <= row1; row++) {
    for (let col = col0; col <= col1; col++) {
      jobs.push(
        loadTileImage(tileUrl(kind, z, col, row)).then((img) => ({ img, col, row }))
      );
    }
  }
  const tiles = await Promise.all(jobs);

  let okCount = 0;
  for (const { img, col, row } of tiles) {
    if (!img) continue;
    okCount++;
    // Pixelová pozice dlaždice v canvasu: canvas pixel (0,0) = (minX, maxY).
    const tileWorldMinX = originX + col * tileSpan;
    const tileWorldMaxY = originY - row * tileSpan;
    const dx = (tileWorldMinX - bbox.minX) / res;
    const dy = (bbox.maxY - tileWorldMaxY) / res;
    ctx.drawImage(img, dx, dy, TILE_PX, TILE_PX);
  }

  if (okCount === 0) {
    throw new Error('Nepodařilo se stáhnout žádnou dlaždici podkladové mapy');
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.anisotropy = anisotropy;
  tex.needsUpdate = true;
  return tex;
}

/** Vymaže cache textur a uvolní GPU prostředky (volat při novém JVF souboru). */
export function clearBasemapTextureCache(): void {
  for (const tex of textureCache.values()) tex.dispose();
  textureCache.clear();
  inflight.clear();
  overlayImageCache.clear();
}

// ── Překryvy (DTM ČR, katastr) na terénu ──────────────────────────────────────

/** Jedna služba překryvu pro texturu terénu (viz map/overlayCatalog.ts). */
export interface OverlayTextureLayer {
  /** WMS 1.3.0 endpoint služby. */
  url: string;
  /** Hodnota LAYERS (už podle motivu). */
  layers: string[];
  /** Sytost překryvu 0–1. */
  opacity: number;
}

export interface TerrainTextureRequest {
  basemap: BasemapKind | 'none';
  /** Služby překryvů v pořadí vykreslování. */
  overlays: OverlayTextureLayer[];
  /** Pozadí bez podkladu (bílá / černá podle motivu). */
  background: string;
  /** Delší strana textury (px); výchozí maxTexturePx. */
  maxPx?: number;
  /**
   * Průhledný okraj 1 px — podrobný výřez (threeScene) s ClampToEdge
   * je mimo svůj bbox průhledný, takže hrubá textura terénu prosvítá.
   */
  transparentBorder?: boolean;
}

/**
 * Obrázky WMS překryvů na bbox (cache: stejný výřez a výběr se nestahuje
 * znovu, změna sytosti jen přeskládá canvas).
 */
const overlayImageCache = new Map<string, Promise<HTMLImageElement | null>>();

function loadOverlayImage(bbox: BBox, width: number, height: number, layer: OverlayTextureLayer): Promise<HTMLImageElement | null> {
  const r = (n: number): string => n.toFixed(2);
  const key = `${layer.url}|${layer.layers.join(',')}|${r(bbox.minX)},${r(bbox.minY)},${r(bbox.maxX)},${r(bbox.maxY)}|${width}x${height}`;
  let p = overlayImageCache.get(key);
  if (!p) {
    const params = new URLSearchParams({
      SERVICE: 'WMS',
      VERSION: '1.3.0',
      REQUEST: 'GetMap',
      LAYERS: layer.layers.join(','),
      STYLES: '',
      CRS: 'EPSG:5514',
      BBOX: `${bbox.minX},${bbox.minY},${bbox.maxX},${bbox.maxY}`,
      WIDTH: String(width),
      HEIGHT: String(height),
      FORMAT: 'image/png',
      TRANSPARENT: 'true',
    });
    p = loadTileImage(`${layer.url}?${params.toString()}`);
    overlayImageCache.set(key, p);
  }
  return p;
}

/** Rozměr složené textury: delší strana maxPx. */
function sizeForBbox(bbox: BBox, maxPx: number): { width: number; height: number } {
  const spanX = Math.max(1, bbox.maxX - bbox.minX);
  const spanY = Math.max(1, bbox.maxY - bbox.minY);
  const k = maxPx / Math.max(spanX, spanY);
  return { width: Math.max(1, Math.round(spanX * k)), height: Math.max(1, Math.round(spanY * k)) };
}

/**
 * Textura terénu: podklad (nebo pozadí podle motivu) a přes něj vybrané
 * služby překryvů (jedno WMS GetMap na službu, v pořadí katalogu, každá
 * se sytostí svého překryvu). Bez překryvů vrací přímo cachovanou texturu
 * podkladu. Složená textura patří volajícímu — `userData.ownedComposite`
 * = při výměně ji uvolnit (viz terrain.ts `applyBasemapToTerrain`).
 */
export async function loadTerrainTexture(bbox: BBox, req: TerrainTextureRequest): Promise<THREE.CanvasTexture> {
  const maxPx = req.maxPx ?? maxTexturePx;
  if (req.overlays.length === 0 && !req.transparentBorder) {
    if (req.basemap === 'none') throw new Error('Není co nanést na terén');
    return loadBasemapTexture(bbox, req.basemap, maxPx);
  }
  const base = req.basemap !== 'none' ? await loadBasemapTexture(bbox, req.basemap, maxPx) : null;
  const baseImage = base?.image as HTMLCanvasElement | undefined;
  // Rozměr podle bboxu (ne podle podkladu) — překryvy jsou ostré, i když
  // jemnější dlaždice podkladu neexistují (podklad se jen roztáhne).
  const { width, height } = sizeForBbox(bbox, maxPx);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D kontext není k dispozici');
  if (baseImage) {
    ctx.drawImage(baseImage, 0, 0, width, height);
  } else {
    ctx.fillStyle = req.background;
    ctx.fillRect(0, 0, width, height);
  }
  const images = await Promise.all(req.overlays.map((l) => loadOverlayImage(bbox, width, height, l)));
  images.forEach((img, i) => {
    if (!img) return;
    ctx.globalAlpha = req.overlays[i]!.opacity;
    ctx.drawImage(img, 0, 0, width, height);
  });
  ctx.globalAlpha = 1;
  if (req.transparentBorder) {
    ctx.clearRect(0, 0, width, 1);
    ctx.clearRect(0, height - 1, width, 1);
    ctx.clearRect(0, 0, 1, height);
    ctx.clearRect(width - 1, 0, 1, height);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.anisotropy = anisotropy;
  tex.userData['ownedComposite'] = true;
  tex.needsUpdate = true;
  return tex;
}
