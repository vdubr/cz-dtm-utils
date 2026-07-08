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
 * Výkon: zoom level se volí tak, aby delší strana textury nepřesáhla
 * `MAX_TEXTURE_PX` (2048 px) — pro typický JVF výřez to znamená jednotky
 * až nízké desítky dlaždic. Hotové textury se cachují per bbox+vrstva.
 */
import * as THREE from 'three';
import { CUZK_TILE_ORIGIN, CUZK_RESOLUTIONS } from '../map/cuzk.js';
import type { BBox } from './terrain.js';

/** Dostupné podkladové vrstvy — shodné s 2D (`map/cuzk.ts`). */
export type BasemapKind = 'zm' | 'ortofoto';

const TILE_PX = 256;
/** Maximální delší strana složené textury (px). */
const MAX_TEXTURE_PX = 2048;
/** Pojistka proti nesmyslně velkému fetchi (např. chybný bbox). */
const MAX_TILE_COUNT = 128;

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
 * `MAX_TEXTURE_PX` na delší straně. Vrací index do `CUZK_RESOLUTIONS`.
 */
function pickZoomLevel(bbox: BBox): number {
  const spanX = bbox.maxX - bbox.minX;
  const spanY = bbox.maxY - bbox.minY;
  let best = 0;
  for (let z = 0; z < CUZK_RESOLUTIONS.length; z++) {
    const res = CUZK_RESOLUTIONS[z]!;
    const px = Math.max(spanX, spanY) / res;
    if (px <= MAX_TEXTURE_PX) best = z;
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

function cacheKey(bbox: BBox, kind: BasemapKind): string {
  const r = (n: number): string => Math.round(n).toString();
  return `${kind}_${r(bbox.minX)}_${r(bbox.minY)}_${r(bbox.maxX)}_${r(bbox.maxY)}`;
}

/**
 * Stáhne a složí výřez podkladové mapy pro daný bbox (EPSG:5514) do
 * `THREE.CanvasTexture`. Jednotlivé chybějící dlaždice toleruje (zůstane
 * průhledné místo); pokud selžou všechny, vyhodí Error.
 */
export async function loadBasemapTexture(
  bbox: BBox,
  kind: BasemapKind
): Promise<THREE.CanvasTexture> {
  const key = cacheKey(bbox, kind);
  const cached = textureCache.get(key);
  if (cached) return cached;
  const pending = inflight.get(key);
  if (pending) return pending;

  const promise = composeBasemapTexture(bbox, kind)
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
  kind: BasemapKind
): Promise<THREE.CanvasTexture> {
  const [originX, originY] = CUZK_TILE_ORIGIN;
  const z = pickZoomLevel(bbox);
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
  tex.needsUpdate = true;
  return tex;
}

/** Vymaže cache textur a uvolní GPU prostředky (volat při novém JVF souboru). */
export function clearBasemapTextureCache(): void {
  for (const tex of textureCache.values()) tex.dispose();
  textureCache.clear();
  inflight.clear();
}
