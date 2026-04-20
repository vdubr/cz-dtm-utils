/**
 * Terén z ČÚZK DMR5G (Digitální model reliéfu 5. generace).
 *
 * Stahuje výškový raster (TIFF F32) přes serverless proxy `/api/dmr5g`
 * a skládá z něj `THREE.Mesh` s hypsometricky obarvenými vertexy.
 *
 * Souřadnicový systém vstupu: **S-JTSK EastNorth (EPSG:5514)** — stejný
 * jako JVF DTM data, žádná reprojekce není potřeba.
 *
 * Rendering:
 *   - 256×256 vertexů (adaptivní na bbox, ~4 m/pixel pro typický JVF)
 *   - `MeshBasicMaterial` s `vertexColors` (bez shadingu — hypsometrie sama
 *     nese vjem výšky)
 *   - `opacity: 0.5`, `depthWrite: false` — vidíš skrz na data pod terénem
 *
 * Y-osa scény:
 *   - `y = (výška_m_n_m - cz) * zExag`  (stejně jako JVF geometrie v `threeScene.ts`)
 *
 * Cache:
 *   - Modulová `Map<bboxKey, { heights, width, height, realBbox }>` přežije
 *     přepnutí checkboxu; invaliduje se při změně JVF souboru voláním
 *     `clearTerrainCache()`.
 */
import * as THREE from 'three';

/**
 * Lazy dynamic import geotiff — kvůli jeho internímu lazy-loadingu decoderů
 * (raw, deflate, jpeg, lzw, zstd, packbits, webimage) je stabilnější řešit
 * celý import dynamicky. Vite optimizer pak pre-bundlí jen na první použití.
 */
let geotiffModulePromise: Promise<typeof import('geotiff')> | null = null;
function loadGeotiff(): Promise<typeof import('geotiff')> {
  if (!geotiffModulePromise) {
    geotiffModulePromise = import('geotiff');
  }
  return geotiffModulePromise;
}

/** Boundingbox v EPSG:5514 (S-JTSK EastNorth). */
export interface BBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface TerrainOptions {
  /** Buffer kolem JVF bboxu v metrech. */
  buffer: number;
  /** Rozlišení meshe (W = H). Default 256. */
  resolution: number;
  /** Centroid scény [cx, cy, cz] — stejný jako v `threeScene.ts`. */
  centroid: [number, number, number];
  /** Aktuální převýšení (z-exag). */
  zExaggeration: number;
}

interface CachedRaster {
  heights: Float32Array;
  width: number;
  height: number;
  /** Skutečný bbox po zaokrouhlení (co proxy vrátila). */
  realBbox: BBox;
  minH: number;
  maxH: number;
}

/** Hodnota NoData v rasteru (ČÚZK vrací tam, kde není DMR5G pokrytí). */
const NODATA = -9999;

/** Práh pro detekci "bbox mimo ČR" — pokud > 90 % pixelů je NoData. */
const NODATA_THRESHOLD = 0.9;

const rasterCache = new Map<string, CachedRaster>();

function bboxKey(bbox: BBox, resolution: number): string {
  const r = (n: number): string => Math.round(n).toString();
  return `${r(bbox.minX)}_${r(bbox.minY)}_${r(bbox.maxX)}_${r(bbox.maxY)}_${resolution}`;
}

/**
 * Hypsometrická rampa (normalizované t ∈ [0,1] → RGB).
 *
 * Inspirace: standardní topografické mapy ČR.
 *   0.00  tmavě zelená   (údolí)
 *   0.20  světle zelená
 *   0.40  žlutá
 *   0.60  okrová
 *   0.80  hnědá
 *   1.00  bílá           (vrcholy)
 */
const HYPSO_STOPS: Array<[number, [number, number, number]]> = [
  [0.00, [0x2d / 255, 0x50 / 255, 0x16 / 255]],
  [0.20, [0x7a / 255, 0xa2 / 255, 0x3f / 255]],
  [0.40, [0xe8 / 255, 0xd6 / 255, 0x7a / 255]],
  [0.60, [0xc1 / 255, 0x9a / 255, 0x5b / 255]],
  [0.80, [0x8b / 255, 0x5a / 255, 0x3c / 255]],
  [1.00, [1, 1, 1]],
];

function hypsometricColor(t: number): [number, number, number] {
  if (!Number.isFinite(t)) return [0.5, 0.5, 0.5];
  const tc = Math.max(0, Math.min(1, t));
  for (let i = 0; i < HYPSO_STOPS.length - 1; i++) {
    const [t0, c0] = HYPSO_STOPS[i]!;
    const [t1, c1] = HYPSO_STOPS[i + 1]!;
    if (tc >= t0 && tc <= t1) {
      const u = (tc - t0) / (t1 - t0);
      return [
        c0[0] + (c1[0] - c0[0]) * u,
        c0[1] + (c1[1] - c0[1]) * u,
        c0[2] + (c1[2] - c0[2]) * u,
      ];
    }
  }
  return HYPSO_STOPS[HYPSO_STOPS.length - 1]![1];
}

/**
 * Stáhne raster DMR5G pro daný bbox přes proxy `/api/dmr5g`.
 * Výsledek cachuje podle bboxKey.
 */
async function fetchRaster(bbox: BBox, resolution: number): Promise<CachedRaster> {
  const key = bboxKey(bbox, resolution);
  const cached = rasterCache.get(key);
  if (cached) return cached;

  const bboxStr = `${bbox.minX},${bbox.minY},${bbox.maxX},${bbox.maxY}`;
  const sizeStr = `${resolution},${resolution}`;
  const url = `/api/dmr5g?bbox=${encodeURIComponent(bboxStr)}&size=${encodeURIComponent(sizeStr)}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`HTTP ${resp.status} při stahování DMR5G`);
  }
  const buf = await resp.arrayBuffer();

  const { fromArrayBuffer } = await loadGeotiff();
  const tiff = await fromArrayBuffer(buf);
  const image = await tiff.getImage();
  const width = image.getWidth();
  const height = image.getHeight();
  const rasters = await image.readRasters();

  // readRasters vrací TypedArray | Array<TypedArray>; pro single-band očekáváme první prvek.
  const band = Array.isArray(rasters) ? rasters[0] : rasters;
  if (!band || typeof (band as Float32Array).length !== 'number') {
    throw new Error('Neplatný raster z DMR5G (prázdná data)');
  }

  // Konvertuj na Float32Array, pokud už není
  const heights = band instanceof Float32Array
    ? band
    : Float32Array.from(band as ArrayLike<number>);

  // Detekce NoData — pokud > 90 % pixelů, bbox je pravděpodobně mimo ČR
  let minH = +Infinity;
  let maxH = -Infinity;
  let nodataCount = 0;
  for (const h of heights) {
    if (h === NODATA || !Number.isFinite(h)) {
      nodataCount++;
      continue;
    }
    if (h < minH) minH = h;
    if (h > maxH) maxH = h;
  }
  if (nodataCount / heights.length > NODATA_THRESHOLD) {
    throw new Error('Bbox je mimo pokrytí DMR5G (mimo ČR nebo nad hranicí)');
  }
  if (!Number.isFinite(minH) || !Number.isFinite(maxH)) {
    throw new Error('Raster neobsahuje žádné platné výšky');
  }

  const result: CachedRaster = {
    heights,
    width,
    height,
    realBbox: { ...bbox },
    minH,
    maxH,
  };
  rasterCache.set(key, result);
  return result;
}

/**
 * Načte a sestaví terénní `THREE.Group` pro daný JVF bbox.
 *
 * Skupina obsahuje:
 *   1. Hypsometrický mesh (solid, opacity 0.5)
 *   2. Minor vrstevnice po 1 m (tenké, poloprůhledné)
 *   3. Major vrstevnice po 10 m (silnější, tmavší)
 *
 * Každou vrstvu lze vypnout individuálně přes `setTerrainLayerVisible`.
 */
export async function loadTerrainMesh(
  jvfBbox: BBox,
  opts: TerrainOptions
): Promise<THREE.Group> {
  const bufBbox: BBox = {
    minX: jvfBbox.minX - opts.buffer,
    minY: jvfBbox.minY - opts.buffer,
    maxX: jvfBbox.maxX + opts.buffer,
    maxY: jvfBbox.maxY + opts.buffer,
  };
  const raster = await fetchRaster(bufBbox, opts.resolution);
  return buildTerrainGroup(raster, opts);
}

/** Typy sub-vrstev v terénní skupině (pro toggle viditelnosti). */
export type TerrainLayerKind = 'surface' | 'contours-minor' | 'contours-major';

function buildTerrainGroup(raster: CachedRaster, opts: TerrainOptions): THREE.Group {
  const [cx, cy, cz] = opts.centroid;
  const zExag = opts.zExaggeration;
  const { minH, maxH } = raster;

  const group = new THREE.Group();
  group.userData['isTerrainGroup'] = true;

  // 1) Hypsometrický povrch
  const surface = buildMeshFromRaster(raster, opts);
  surface.userData['terrainLayer'] = 'surface';
  group.add(surface);

  // 2) Minor vrstevnice po 1 m (přeskočí násobky 10 — ty budou major)
  const minorLevels: number[] = [];
  const startMinor = Math.ceil(minH);
  const endMinor = Math.floor(maxH);
  for (let lvl = startMinor; lvl <= endMinor; lvl++) {
    if (lvl % 10 !== 0) minorLevels.push(lvl);
  }
  // yOffset 0.05 m → vrstevnice těsně nad povrchem (zabrání z-fighting,
  // neviditelné oku i při zExag=1)
  const minor = buildContourLayer(
    raster, minorLevels, cx, cy, cz, zExag,
    0x4a3828,    // tmavě hnědá
    0.35,
    0.05
  );
  if (minor) {
    minor.userData['terrainLayer'] = 'contours-minor';
    group.add(minor);
  }

  // 3) Major vrstevnice po 10 m
  const majorLevels: number[] = [];
  const startMajor = Math.ceil(minH / 10) * 10;
  const endMajor = Math.floor(maxH / 10) * 10;
  for (let lvl = startMajor; lvl <= endMajor; lvl += 10) {
    majorLevels.push(lvl);
  }
  const major = buildContourLayer(
    raster, majorLevels, cx, cy, cz, zExag,
    0x1a1208,    // téměř černo-hnědá, silnější kontrast
    0.8,
    0.08
  );
  if (major) {
    major.userData['terrainLayer'] = 'contours-major';
    group.add(major);
  }

  // Metadata pro updateTerrainZExaggeration
  group.userData['minH'] = minH;
  group.userData['maxH'] = maxH;
  return group;
}

function buildMeshFromRaster(raster: CachedRaster, opts: TerrainOptions): THREE.Mesh {
  const { heights, width, height, realBbox, minH, maxH } = raster;
  const [cx, cy, cz] = opts.centroid;
  const zExag = opts.zExaggeration;

  // PlaneGeometry je v rovině XY; my potřebujeme vertexy v [x=X-cx, y=výška, z=Y-cy].
  // Ruční build je jednodušší a rychlejší než rotace PlaneGeometry.
  const vertexCount = width * height;
  const positions = new Float32Array(vertexCount * 3);
  const colors = new Float32Array(vertexCount * 3);

  const dx = (realBbox.maxX - realBbox.minX) / (width - 1);
  const dy = (realBbox.maxY - realBbox.minY) / (height - 1);
  const range = maxH - minH;
  const invRange = range > 1e-6 ? 1 / range : 0;

  for (let row = 0; row < height; row++) {
    // Raster řádek 0 = horní (= maxY), řádek height-1 = dolní (= minY)
    const worldY = realBbox.maxY - row * dy;
    for (let col = 0; col < width; col++) {
      const idx = row * width + col;
      const h = heights[idx]!;
      const worldX = realBbox.minX + col * dx;
      const elev = (h === NODATA || !Number.isFinite(h)) ? minH : h;

      // Scene coords: x = X-cx, z = Y-cy (pozor na mapping — threeScene používá
      // y-up a z-depth; pro shodu s JVF geometrií je tedy (worldX-cx, (elev-cz)*zExag, worldY-cy))
      positions[idx * 3] = worldX - cx;
      positions[idx * 3 + 1] = (elev - cz) * zExag;
      positions[idx * 3 + 2] = worldY - cy;

      const t = invRange > 0 ? (elev - minH) * invRange : 0;
      const [r, g, b] = hypsometricColor(t);
      colors[idx * 3] = r;
      colors[idx * 3 + 1] = g;
      colors[idx * 3 + 2] = b;
    }
  }

  // Indices pro trojúhelníky (2 triangles per quad)
  const indices = new Uint32Array((width - 1) * (height - 1) * 6);
  let ii = 0;
  for (let row = 0; row < height - 1; row++) {
    for (let col = 0; col < width - 1; col++) {
      const a = row * width + col;
      const b = a + 1;
      const c = a + width;
      const d = c + 1;
      // triangle 1: a, c, b
      indices[ii++] = a;
      indices[ii++] = c;
      indices[ii++] = b;
      // triangle 2: b, c, d
      indices[ii++] = b;
      indices[ii++] = c;
      indices[ii++] = d;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();

  const material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(geometry, material);
  // Uložíme si metadata pro updateTerrainZExaggeration a ladění
  mesh.userData['isTerrainMesh'] = true;
  mesh.userData['heightsRaw'] = heights;
  mesh.userData['rasterWidth'] = width;
  mesh.userData['rasterHeight'] = height;
  mesh.userData['realBbox'] = realBbox;
  mesh.userData['cz'] = cz;
  mesh.userData['minH'] = minH;
  mesh.userData['maxH'] = maxH;
  // Nezávisle na hloubkovém bufferu — aby terén nezakrýval JVF objekty
  mesh.renderOrder = -1;
  return mesh;
}

/**
 * Vygeneruje segmenty vrstevnic pro jednu výškovou hladinu pomocí
 * Marching Squares na regulérní mřížce rasteru. NoData buňky přeskočí.
 *
 * Vrací pole čísel `[x1,y1,z1, x2,y2,z2, x1,y1,z1, x2,y2,z2, …]`
 * ve scéně-lokálních souřadnicích (po odečtení centroidu a aplikaci zExag).
 */
function extractContourSegments(
  raster: CachedRaster,
  level: number,
  cx: number,
  cy: number,
  cz: number,
  zExag: number,
  yOffset: number
): number[] {
  const { heights, width, height, realBbox } = raster;
  const dxM = (realBbox.maxX - realBbox.minX) / (width - 1);
  const dyM = (realBbox.maxY - realBbox.minY) / (height - 1);
  const segs: number[] = [];
  const yLevel = (level - cz) * zExag + yOffset;

  // Převede (col, row) na (sceneX, sceneZ)
  function sx(col: number): number {
    return (realBbox.minX + col * dxM) - cx;
  }
  function sz(row: number): number {
    return (realBbox.maxY - row * dyM) - cy;
  }

  for (let row = 0; row < height - 1; row++) {
    for (let col = 0; col < width - 1; col++) {
      const h0 = heights[row * width + col]!;          // top-left
      const h1 = heights[row * width + col + 1]!;      // top-right
      const h2 = heights[(row + 1) * width + col + 1]!;// bottom-right
      const h3 = heights[(row + 1) * width + col]!;    // bottom-left

      // Skip cells touching NoData
      if (h0 === NODATA || h1 === NODATA || h2 === NODATA || h3 === NODATA) continue;
      if (!Number.isFinite(h0) || !Number.isFinite(h1) || !Number.isFinite(h2) || !Number.isFinite(h3)) continue;

      // Bitmask: bit 0 = TL, 1 = TR, 2 = BR, 3 = BL (value >= level)
      let mask = 0;
      if (h0 >= level) mask |= 1;
      if (h1 >= level) mask |= 2;
      if (h2 >= level) mask |= 4;
      if (h3 >= level) mask |= 8;

      if (mask === 0 || mask === 15) continue; // celá buňka pod nebo nad

      // Interpolace přechodu hladiny na hraně buňky.
      // Hrana top:    TL ↔ TR
      // Hrana right:  TR ↔ BR
      // Hrana bottom: BR ↔ BL  (směr BR→BL = reverse, ale pro segment je to jedno)
      // Hrana left:   BL ↔ TL
      function interp(ha: number, hb: number): number {
        const d = hb - ha;
        return Math.abs(d) < 1e-9 ? 0.5 : (level - ha) / d;
      }

      // Souřadnice křížení na každé hraně (pokud existuje)
      // top:    (col + t, row)
      // right:  (col + 1, row + t)
      // bottom: (col + t, row + 1)
      // left:   (col,     row + t)
      const eTop: [number, number] | null = ((mask & 1) !== (mask & 2) >> 1)
        ? [col + interp(h0, h1), row]
        : null;
      const eRight: [number, number] | null = ((mask & 2) >> 1 !== (mask & 4) >> 2)
        ? [col + 1, row + interp(h1, h2)]
        : null;
      const eBottom: [number, number] | null = ((mask & 8) >> 3 !== (mask & 4) >> 2)
        ? [col + interp(h3, h2), row + 1]
        : null;
      const eLeft: [number, number] | null = ((mask & 1) !== (mask & 8) >> 3)
        ? [col, row + interp(h0, h3)]
        : null;

      // Dvojice hran pro daný mask — Marching Squares case table.
      // Tvorba segmentů dle masky (viz standard MS; sedlové případy 5 a 10
      // rozdělíme dle průměru 4 rohů).
      const edges: Array<[[number, number], [number, number]]> = [];
      const pushSeg = (a: [number, number] | null, b: [number, number] | null): void => {
        if (a && b) edges.push([a, b]);
      };

      switch (mask) {
        case 1:  case 14: pushSeg(eLeft, eTop); break;
        case 2:  case 13: pushSeg(eTop, eRight); break;
        case 4:  case 11: pushSeg(eRight, eBottom); break;
        case 8:  case 7:  pushSeg(eBottom, eLeft); break;
        case 3:  case 12: pushSeg(eLeft, eRight); break;
        case 6:  case 9:  pushSeg(eTop, eBottom); break;
        case 5: {
          // Sedlo: TL + BR nad, TR + BL pod (nebo naopak). Rozlišit dle průměru.
          const avg = (h0 + h1 + h2 + h3) / 4;
          if (avg >= level) {
            pushSeg(eLeft, eTop); pushSeg(eRight, eBottom);
          } else {
            pushSeg(eLeft, eBottom); pushSeg(eTop, eRight);
          }
          break;
        }
        case 10: {
          const avg = (h0 + h1 + h2 + h3) / 4;
          if (avg >= level) {
            pushSeg(eTop, eRight); pushSeg(eBottom, eLeft);
          } else {
            pushSeg(eLeft, eTop); pushSeg(eRight, eBottom);
          }
          break;
        }
      }

      for (const [a, b] of edges) {
        segs.push(
          sx(a[0]), yLevel, sz(a[1]),
          sx(b[0]), yLevel, sz(b[1])
        );
      }
    }
  }
  return segs;
}

/**
 * Sestaví jednu `THREE.LineSegments` vrstvu vrstevnic pro dané hladiny.
 * Hladiny jsou v metrech nad mořem; segmenty se vykreslí vodorovně ve
 * správné výšce dle zExag.
 */
function buildContourLayer(
  raster: CachedRaster,
  levels: number[],
  cx: number,
  cy: number,
  cz: number,
  zExag: number,
  color: number,
  opacity: number,
  yOffset: number
): THREE.LineSegments | null {
  const all: number[] = [];
  // Per-level metadata pro update zExag (uložíme offset + počet do userData)
  const levelOffsets: number[] = [];   // začátek každé hladiny v `all` (index do positions * 3-float)
  const levelCounts: number[] = [];    // počet floatů (= 3×vertex) pro danou hladinu
  const usedLevels: number[] = [];

  for (const lvl of levels) {
    const start = all.length;
    const segs = extractContourSegments(raster, lvl, cx, cy, cz, zExag, yOffset);
    if (segs.length === 0) continue;
    all.push(...segs);
    levelOffsets.push(start);
    levelCounts.push(segs.length);
    usedLevels.push(lvl);
  }

  if (all.length === 0) return null;

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(all, 3));
  geom.computeBoundingSphere();

  const mat = new THREE.LineBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: false,
  });

  const lines = new THREE.LineSegments(geom, mat);
  lines.userData['isContourLayer'] = true;
  lines.userData['levels'] = usedLevels;
  lines.userData['levelOffsets'] = levelOffsets;
  lines.userData['levelCounts'] = levelCounts;
  lines.userData['cz'] = cz;
  lines.userData['yOffset'] = yOffset;
  lines.renderOrder = 1; // nad terénem
  return lines;
}

/**
 * Aktualizuje Y-složku vrstevnic pro nové zExag (bez re-generace segmentů).
 * Každá hladina má konstantní Y → stačí přepsat Y složku všech vertexů
 * v rozsahu `[offset, offset+count)`.
 */
function updateContourLayerZExag(layer: THREE.LineSegments, zExag: number): void {
  const levels = layer.userData['levels'] as number[] | undefined;
  const offsets = layer.userData['levelOffsets'] as number[] | undefined;
  const counts = layer.userData['levelCounts'] as number[] | undefined;
  const cz = layer.userData['cz'] as number | undefined;
  const yOffset = layer.userData['yOffset'] as number | undefined;
  if (!levels || !offsets || !counts || cz === undefined || yOffset === undefined) return;

  const posAttr = layer.geometry.attributes['position'] as THREE.BufferAttribute | undefined;
  if (!posAttr) return;
  const arr = posAttr.array as Float32Array;

  for (let li = 0; li < levels.length; li++) {
    const yLevel = (levels[li]! - cz) * zExag + yOffset;
    const start = offsets[li]!;
    const count = counts[li]!;
    // Floats: [x, y, z, x, y, z, ...] → přepsat index 1, 4, 7, ...
    for (let i = start + 1; i < start + count; i += 3) {
      arr[i] = yLevel;
    }
  }
  posAttr.needsUpdate = true;
  layer.geometry.computeBoundingSphere();
}

/**
 * Přestaví Y-souřadnici vertexů podle nového zExaggeration pro celou
 * terénní skupinu (hypsometrický povrch + vrstevnice). Barvy a XZ se
 * nemění — ušetří re-fetch a rebuild.
 */
export function updateTerrainZExaggeration(group: THREE.Group, zExag: number): void {
  group.traverse((obj) => {
    if (obj.userData['isTerrainMesh'] === true) {
      updateSurfaceZExag(obj as THREE.Mesh, zExag);
    } else if (obj.userData['isContourLayer'] === true) {
      updateContourLayerZExag(obj as THREE.LineSegments, zExag);
    }
  });
}

/** Přepočet Y vertexů hypsometrického povrchu (bez barev). */
function updateSurfaceZExag(mesh: THREE.Mesh, zExag: number): void {
  const heights = mesh.userData['heightsRaw'] as Float32Array | undefined;
  const cz = mesh.userData['cz'] as number | undefined;
  const minH = mesh.userData['minH'] as number | undefined;
  if (!heights || cz === undefined || minH === undefined) return;

  const positionsAttr = mesh.geometry.attributes['position'] as THREE.BufferAttribute | undefined;
  if (!positionsAttr) return;
  const positions = positionsAttr.array as Float32Array;

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i]!;
    const elev = (h === NODATA || !Number.isFinite(h)) ? minH : h;
    positions[i * 3 + 1] = (elev - cz) * zExag;
  }
  positionsAttr.needsUpdate = true;
  mesh.geometry.computeBoundingSphere();
}

/** Uvolní GPU prostředky celé terénní skupiny. */
export function disposeTerrainMesh(group: THREE.Group): void {
  group.traverse((obj) => {
    const withGeom = obj as Partial<THREE.Mesh & THREE.LineSegments>;
    withGeom.geometry?.dispose();
    const mat = withGeom.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else if (mat) mat.dispose();
  });
}

/** Zapne/vypne konkrétní vrstvu terénu (surface / minor / major vrstevnice). */
export function setTerrainLayerVisible(
  group: THREE.Group,
  kind: TerrainLayerKind,
  visible: boolean
): void {
  group.traverse((obj) => {
    if (obj.userData['terrainLayer'] === kind) {
      obj.visible = visible;
    }
  });
}

/** Vymaže cache rasterů (volat při nahrání nového JVF souboru). */
export function clearTerrainCache(): void {
  rasterCache.clear();
}
