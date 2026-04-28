import * as THREE from 'three';
import type { ObjektovyTyp, Geometry } from 'jvf-parser';
import { resolveStyle } from '../map/jvfLayers.js';
import {
  loadTerrainMesh,
  updateTerrainZExaggeration,
  disposeTerrainMesh,
  clearTerrainCache,
  type BBox,
} from './terrain.js';

// Tag for scene objects that can be rebuilt/toggled (excludes lights, grid, etc.)
const DATA_TAG = 'jvfData';
// Tag for highlight objects (exclude from clearSceneObjects — they live in a parallel group)
const HIGHLIGHT_TAG = 'jvfHighlight';
/** Tag pro terén — zůstává ve scéně i při rebuildSceneGeometry. */
const TERRAIN_TAG = 'terrain';
const HIGHLIGHT_COLOR = 0x39ff14;

/** Buffer kolem JVF dat pro stahovaný terén (m). */
const TERRAIN_BUFFER_M = 300;
/** Rozlišení terénního meshe (vertexů na hranu). */
const TERRAIN_RESOLUTION = 256;

type DragMode = 'none' | 'orbit' | 'pan';

interface OrbitState {
  dragMode: DragMode;
  prevMouse: { x: number; y: number };
  spherical: { theta: number; phi: number; radius: number };
  center: THREE.Vector3;
}

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  animFrameId: number | null;
  initialRadius: number;
  cx: number;
  cy: number;
  cz: number;
  /** Bbox JVF dat v S-JTSK (před aplikací centroidu). Null pokud scéna nemá data. */
  dataBbox: BBox | null;
  objekty: ObjektovyTyp[];
  orbit: OrbitState;
  pivotMarker: THREE.Object3D;
  /** Aktuální terénní skupina (mesh + vrstevnice) nebo null. Žije napříč rebuildSceneGeometry. */
  terrainMesh: THREE.Group | null;
  /** AbortController pro odstranění všech DOM event listenerů při dispose */
  controlsAbort: AbortController;
}

let state: SceneState | null = null;

/**
 * Přetrvávající stav viditelnosti vrstev napříč inicializacemi 3D scény.
 * Uživatel může skrýt vrstvu v 2D, přepnout na 3D a očekává, že vrstva
 * zůstane skrytá. `state` je `null` mimo 3D režim, takže stav viditelnosti
 * musíme držet mimo něj.
 */
const hiddenLayers = new Set<string>();

/** Aktuální barva pozadí 3D scény. Uchovává se mimo `state`, aby volba
 *  přežila re-init při přepnutí 2D ↔ 3D a při rebuildu geometrie. */
let currentBackground = '#0a0a0f';

/** Přepínač: renderovat Point features jako SVG sprity (true) nebo jako
 *  `THREE.Points` (false, původní chování). Platí jen pro 3D. */
let useSvgSymbols = false;

/** Přepínač zobrazení terénu (ČÚZK DMR5G). Persistuje přes re-init scény. */
let terrainVisible = false;

/** Cache SVG textur: klíč = název SVG souboru. Sdíleno napříč scénami. */
const svgTextureCache = new Map<string, THREE.Texture>();

/** Base path pro SVG symboly (stejný jako v 2D). */
const SVG_BASE = './symboly/';

/** Načte SVG jako THREE.Texture. Vrací cachovanou instanci pro opakované volání. */
function getSvgTexture(svgFile: string): THREE.Texture {
  const cached = svgTextureCache.get(svgFile);
  if (cached) return cached;

  const loader = new THREE.TextureLoader();
  const tex = loader.load(SVG_BASE + svgFile, () => {
    // SVG načteno — vynuť re-render (pokud běží aktivní scéna)
    if (state) state.renderer.render(state.scene, state.camera);
  });
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  svgTextureCache.set(svgFile, tex);
  return tex;
}

export function setThreeBackground(color: string): void {
  currentBackground = color;
  if (state) state.scene.background = new THREE.Color(color);
}

export function getUseSvgSymbols(): boolean {
  return useSvgSymbols;
}

export function setUseSvgSymbols(value: boolean): void {
  if (useSvgSymbols === value) return;
  useSvgSymbols = value;
  // Při běžící scéně znovu postav objekty (kamera zůstane).
  if (state) rebuildSceneGeometry(lastZExaggeration);
}

/** Naposledy použitá hodnota zExaggeration — potřebujeme ji, když
 *  rebuildujeme scénu mimo UI (např. při přepnutí SVG toggle). */
let lastZExaggeration = 1;

function updateCamera(camera: THREE.PerspectiveCamera, orbit: OrbitState): void {
  const { spherical, center } = orbit;
  const x =
    center.x +
    spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
  const y = center.y + spherical.radius * Math.cos(spherical.phi);
  const z =
    center.z +
    spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
  camera.position.set(x, y, z);
  camera.lookAt(center);
  // Sync pivot marker
  if (state) {
    state.pivotMarker.position.copy(center);
    // Marker mění velikost se vzdáleností kamery, aby byl vždy viditelný
    const s = spherical.radius * 0.015;
    state.pivotMarker.scale.setScalar(s);
  }
}

function createPivotMarker(): THREE.Object3D {
  const group = new THREE.Group();
  // 3 barevné osy (Red=X, Green=Y, Blue=Z) — orientace
  const axes = new THREE.AxesHelper(1);
  (axes.material as THREE.Material).depthTest = false;
  axes.renderOrder = 999;
  group.add(axes);
  // Malá koule uprostřed, aby bod byl vidět i zdálky
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffdd33, depthTest: false })
  );
  sphere.renderOrder = 1000;
  group.add(sphere);
  return group;
}

// Posune orbit.center o zadaný vektor v obrazové rovině kamery.
// dxScreen, dyScreen: pixely kurzorem; převedou se na světové jednotky podle radius.
function panSceneByScreen(
  camera: THREE.PerspectiveCamera,
  orbit: OrbitState,
  dxScreen: number,
  dyScreen: number
): void {
  // Right a up vektor kamery (sloupce matrixe)
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1);
  // Scale: pan se měřítkem podle vzdálenosti od scény (aby se v dálce hýbalo víc)
  const scale = orbit.spherical.radius * 0.0015;
  orbit.center.addScaledVector(right, -dxScreen * scale);
  orbit.center.addScaledVector(up, dyScreen * scale);
  updateCamera(camera, orbit);
}

function attachOrbitControls(
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera,
  orbit: OrbitState,
  signal: AbortSignal
): void {
  const opts = { signal };

  // Blokuj kontextové menu na pravém tlačítku — používáme ho pro panning
  canvas.addEventListener('contextmenu', (e) => e.preventDefault(), opts);

  canvas.addEventListener('mousedown', (e) => {
    // button 0 = levé (orbit), 2 = pravé (pan), shift+levé = pan
    if (e.button === 2 || (e.button === 0 && e.shiftKey)) {
      orbit.dragMode = 'pan';
    } else if (e.button === 0) {
      orbit.dragMode = 'orbit';
    } else {
      return;
    }
    orbit.prevMouse = { x: e.clientX, y: e.clientY };
  }, opts);

  canvas.addEventListener('mousemove', (e) => {
    if (orbit.dragMode === 'none') return;
    const dx = e.clientX - orbit.prevMouse.x;
    const dy = e.clientY - orbit.prevMouse.y;
    if (orbit.dragMode === 'orbit') {
      orbit.spherical.theta -= dx * 0.005;
      orbit.spherical.phi -= dy * 0.005;
      orbit.spherical.phi = Math.max(0.05, Math.min(Math.PI / 2 - 0.05, orbit.spherical.phi));
      updateCamera(camera, orbit);
    } else if (orbit.dragMode === 'pan') {
      panSceneByScreen(camera, orbit, dx, dy);
    }
    orbit.prevMouse = { x: e.clientX, y: e.clientY };
  }, opts);

  canvas.addEventListener('mouseup', () => { orbit.dragMode = 'none'; }, opts);
  canvas.addEventListener('mouseleave', () => { orbit.dragMode = 'none'; }, opts);

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    orbit.spherical.radius *= 1 + e.deltaY * 0.001;
    orbit.spherical.radius = Math.max(1, orbit.spherical.radius);
    updateCamera(camera, orbit);
  }, { ...opts, passive: false });
}

// Build layerKey — unique identifier per ObjektovyTyp
function layerKey(ot: ObjektovyTyp): string {
  return ot.elementName;
}

// Add all data objects to the scene for given objekty, cx/cy/cz centroid, zExaggeration
function buildSceneObjects(
  scene: THREE.Scene,
  objekty: ObjektovyTyp[],
  cx: number,
  cy: number,
  cz: number,
  zExaggeration: number
): void {
  for (const ot of objekty) {
    const s = resolveStyle(ot);
    const color = new THREE.Color(s.strokeColor);
    // fillColor may have 2-digit alpha suffix (e.g. '#ebe9e855') — strip it for Three.js
    const fillHex = s.fillColor === 'none' ? s.strokeColor
      : s.fillColor.length === 9 ? s.fillColor.slice(0, 7) : s.fillColor;
    const fillColor = new THREE.Color(fillHex);
    const key = layerKey(ot);
    const layerVisible = !hiddenLayers.has(key);

    for (const zaz of ot.zaznamy) {
      const objectId = zaz.commonAttributes?.id ?? null;
      for (const geom of zaz.geometrie) {
        let obj: THREE.Object3D | null = null;

        switch (geom.type) {
          case 'Point': {
            const c = geom.data.coordinates;
            const x = (c[0] ?? 0) - cx;
            const z3 = (c[1] ?? 0) - cy;
            const y3 = ((c[2] ?? 0) - cz) * zExaggeration;

            if (useSvgSymbols && s.pointSvg) {
              // Sprite s SVG texturou — vždy čelem ke kameře, velikost v world
              // jednotkách (metrech). sizeAttenuation=true (default) = sprite
              // se zmenšuje s vzdáleností, což odpovídá chování 3D objektu.
              const tex = getSvgTexture(s.pointSvg);
              const mat = new THREE.SpriteMaterial({
                map: tex,
                transparent: true,
                depthTest: false,
                sizeAttenuation: true,
              });
              const sprite = new THREE.Sprite(mat);
              sprite.position.set(x, y3, z3);
              // Velikost ~ 2 m (SVG ikony reprezentují šachty/sloupy ~ 1–3 m).
              sprite.scale.set(2, 2, 1);
              obj = sprite;
            } else {
              const geomPt = new THREE.BufferGeometry();
              geomPt.setAttribute(
                'position',
                new THREE.Float32BufferAttribute([x, y3, z3], 3)
              );
              const mat = new THREE.PointsMaterial({ color, size: 5, sizeAttenuation: false });
              obj = new THREE.Points(geomPt, mat);
            }
            break;
          }
          case 'LineString': {
            const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
            const pts: number[] = [];
            for (let i = 0; i < geom.data.coordinates.length; i += dim) {
              pts.push(
                (geom.data.coordinates[i] ?? 0) - cx,
                dim >= 3 ? ((geom.data.coordinates[i + 2] ?? 0) - cz) * zExaggeration : 0,
                (geom.data.coordinates[i + 1] ?? 0) - cy
              );
            }
            if (pts.length >= 6) {
              const g = new THREE.BufferGeometry();
              g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
              obj = new THREE.Line(g, new THREE.LineBasicMaterial({ color }));
            }
            break;
          }
          case 'Polygon': {
            const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
            const pts: number[] = [];
            for (let i = 0; i < geom.data.exterior.length; i += dim) {
              pts.push(
                (geom.data.exterior[i] ?? 0) - cx,
                dim >= 3 ? ((geom.data.exterior[i + 2] ?? 0) - cz) * zExaggeration : 0,
                (geom.data.exterior[i + 1] ?? 0) - cy
              );
            }
            if (pts.length >= 9) {
              const g = new THREE.BufferGeometry();
              g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
              obj = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color: fillColor }));
            }
            break;
          }
          case 'MultiCurve': {
            for (const curve of geom.data.curves) {
              const dim = curve.srsDimension > 0 ? curve.srsDimension : 2;
              const pts: number[] = [];
              for (let i = 0; i < curve.coordinates.length; i += dim) {
                pts.push(
                  (curve.coordinates[i] ?? 0) - cx,
                  dim >= 3 ? ((curve.coordinates[i + 2] ?? 0) - cz) * zExaggeration : 0,
                  (curve.coordinates[i + 1] ?? 0) - cy
                );
              }
              if (pts.length >= 6) {
                const g = new THREE.BufferGeometry();
                g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
                const lineObj = new THREE.Line(g, new THREE.LineBasicMaterial({ color }));
                lineObj.userData[DATA_TAG] = key;
                lineObj.userData['jvfObjectId'] = objectId;
                lineObj.visible = layerVisible;
                scene.add(lineObj);
              }
            }
            break;
          }
        }

        if (obj) {
          obj.userData[DATA_TAG] = key;
          obj.userData['jvfObjectId'] = objectId;
          obj.visible = layerVisible;
          scene.add(obj);
        }
      }
    }
  }
}

// Remove all data objects from scene (leaves lights, grid, terrain) and release GPU resources.
function clearSceneObjects(scene: THREE.Scene): void {
  const toRemove: THREE.Object3D[] = [];
  scene.traverse((obj) => {
    // Terén má vlastní TERRAIN_TAG a NEMÁ DATA_TAG — nepromazat ho.
    if (obj.userData[DATA_TAG] !== undefined && obj.userData[TERRAIN_TAG] !== true) {
      toRemove.push(obj);
    }
  });
  for (const obj of toRemove) {
    scene.remove(obj);
    const withGeom = obj as Partial<THREE.Line & THREE.Points>;
    withGeom.geometry?.dispose();
    const mat = withGeom.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat?.dispose();
  }
}

export function initThreeScene(
  canvas: HTMLCanvasElement,
  objekty: ObjektovyTyp[],
  zExaggeration = 1
): void {
  disposeThreeScene();

  // Fresh orbit state per session (žádné module-level globals, aby HMR a reinit
  // neskládali starou a novou scénu dohromady).
  const orbit: OrbitState = {
    dragMode: 'none',
    prevMouse: { x: 0, y: 0 },
    spherical: { theta: 0, phi: Math.PI / 3, radius: 50000 },
    center: new THREE.Vector3(0, 0, 0),
  };

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(currentBackground);

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  // updateStyle = false: nech CSS (`width/height: 100%`) řídit display rozměr
  // canvasu. setSize jinak přepíše inline style a canvas se přestane chovat
  // responzivně — drží si první velikost a po zúžení rodiče vyčuhuje pod
  // sousedy. Synchronizujeme jen framebuffer (atributy width/height).
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Ambient + directional light
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(1, 2, 1);
  scene.add(dirLight);

  // Grid helper
  const grid = new THREE.GridHelper(200000, 20, 0x222244, 0x1a1a2e);
  scene.add(grid);

  // Compute centroid AND bbox from all points
  let sumX = 0, sumY = 0, sumZ = 0, count = 0;
  let minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;

  function addCoord(x: number, y: number, z: number): void {
    sumX += x; sumY += y; sumZ += z; count++;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }

  function collectCoords(geom: Geometry): void {
    switch (geom.type) {
      case 'Point': {
        const c = geom.data.coordinates;
        addCoord(c[0] ?? 0, c[1] ?? 0, c[2] ?? 0);
        break;
      }
      case 'LineString': {
        const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
        for (let i = 0; i < geom.data.coordinates.length; i += dim) {
          addCoord(geom.data.coordinates[i] ?? 0, geom.data.coordinates[i + 1] ?? 0, dim >= 3 ? (geom.data.coordinates[i + 2] ?? 0) : 0);
        }
        break;
      }
      case 'Polygon': {
        const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
        for (let i = 0; i < geom.data.exterior.length; i += dim) {
          addCoord(geom.data.exterior[i] ?? 0, geom.data.exterior[i + 1] ?? 0, dim >= 3 ? (geom.data.exterior[i + 2] ?? 0) : 0);
        }
        break;
      }
      case 'MultiCurve': {
        for (const curve of geom.data.curves) {
          const dim = curve.srsDimension > 0 ? curve.srsDimension : 2;
          for (let i = 0; i < curve.coordinates.length; i += dim) {
            addCoord(curve.coordinates[i] ?? 0, curve.coordinates[i + 1] ?? 0, dim >= 3 ? (curve.coordinates[i + 2] ?? 0) : 0);
          }
        }
        break;
      }
    }
  }

  for (const ot of objekty) {
    for (const zaz of ot.zaznamy) {
      for (const geom of zaz.geometrie) {
        collectCoords(geom);
      }
    }
  }

  const cx = count > 0 ? sumX / count : 0;
  const cy = count > 0 ? sumY / count : 0;
  const cz = count > 0 ? sumZ / count : 0;

  lastZExaggeration = zExaggeration;
  buildSceneObjects(scene, objekty, cx, cy, cz, zExaggeration);

  // Set initial camera radius from bounding box
  if (count > 0) {
    let maxSpread = 0;

    function measureCoords(coords: number[], dim: number): void {
      for (let i = 0; i < coords.length; i += dim) {
        const dx = (coords[i] ?? 0) - cx;
        const dz = (coords[i + 1] ?? 0) - cy;
        maxSpread = Math.max(maxSpread, Math.sqrt(dx * dx + dz * dz));
      }
    }

    for (const ot of objekty) {
      for (const zaz of ot.zaznamy) {
        for (const geom of zaz.geometrie) {
          if (geom.type === 'Point') {
            const dx = (geom.data.coordinates[0] ?? 0) - cx;
            const dz = (geom.data.coordinates[1] ?? 0) - cy;
            maxSpread = Math.max(maxSpread, Math.sqrt(dx * dx + dz * dz));
          } else if (geom.type === 'LineString') {
            measureCoords(geom.data.coordinates, geom.data.srsDimension > 0 ? geom.data.srsDimension : 2);
          } else if (geom.type === 'Polygon') {
            measureCoords(geom.data.exterior, geom.data.srsDimension > 0 ? geom.data.srsDimension : 2);
          } else if (geom.type === 'MultiCurve') {
            for (const curve of geom.data.curves) {
              measureCoords(curve.coordinates, curve.srsDimension > 0 ? curve.srsDimension : 2);
            }
          }
        }
      }
    }

    orbit.spherical.radius = maxSpread > 0 ? maxSpread * 2 : 5000;
  }

  const controlsAbort = new AbortController();
  attachOrbitControls(canvas, camera, orbit, controlsAbort.signal);

  let animFrameId: number | null = null;

  function animate(): void {
    animFrameId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

  const pivotMarker = createPivotMarker();
  scene.add(pivotMarker);

  const dataBbox: BBox | null = count > 0
    ? { minX, minY, maxX, maxY }
    : null;

  state = {
    scene,
    camera,
    renderer,
    animFrameId: null,
    initialRadius: orbit.spherical.radius,
    cx,
    cy,
    cz,
    dataBbox,
    objekty,
    orbit,
    pivotMarker,
    terrainMesh: null,
    controlsAbort,
  };
  Object.defineProperty(state, 'animFrameId', {
    get() { return animFrameId; },
    set(v) { animFrameId = v; },
  });
  // Počáteční synchronizace kamery + markeru
  updateCamera(camera, orbit);

  // Pokud byl terén zapnutý z předchozí relace, načti ho pro aktuální bbox.
  // Fire-and-forget — pokud selže, ukáže se error v konzoli, ale scéna zůstává funkční.
  if (terrainVisible && dataBbox) {
    void ensureTerrainLoaded();
  }
}

// Rebuild only geometry (preserves camera). Terén zůstává ve scéně, jen
// přepočítáme Y souřadnice jeho vertexů dle nového zExaggeration.
export function rebuildSceneGeometry(zExaggeration: number): void {
  if (!state) return;
  lastZExaggeration = zExaggeration;
  clearThreeHighlight();
  clearSceneObjects(state.scene);
  buildSceneObjects(state.scene, state.objekty, state.cx, state.cy, state.cz, zExaggeration);
  if (state.terrainMesh) {
    updateTerrainZExaggeration(state.terrainMesh, zExaggeration);
  }
}

// Show/hide all 3D objects belonging to a layer. Vždy aktualizuje persistentní
// `hiddenLayers` — tak zůstane viditelnost konzistentní i přes re-init scény
// (přepnutí 2D ↔ 3D).
export function setThreeLayerVisible(elementName: string, visible: boolean): void {
  if (visible) hiddenLayers.delete(elementName);
  else hiddenLayers.add(elementName);
  if (!state) return;
  state.scene.traverse((obj) => {
    if (obj.userData[DATA_TAG] === elementName) {
      obj.visible = visible;
    }
  });
}

/**
 * Vymazat persistentní mapu skrytých vrstev. Volat při nahrání nového JVF,
 * aby se nezachovaly skrývací rozhodnutí z předchozích dat.
 */
export function resetThreeLayerVisibility(): void {
  hiddenLayers.clear();
}

export function disposeThreeScene(): void {
  if (!state) return;
  if (state.animFrameId !== null) {
    cancelAnimationFrame(state.animFrameId);
  }
  // Odpojit všechny DOM event listenery registrované v attachOrbitControls
  state.controlsAbort.abort();
  // Uvolnit highlight overlay (má vlastní klonované geometrie/materiály)
  clearThreeHighlight();
  // Uvolnit geometrie + materiály všech datových objektů
  clearSceneObjects(state.scene);
  // Uvolnit terénní mesh (cache rasteru zůstává — znovupoužitelné při re-initu)
  if (state.terrainMesh) {
    state.scene.remove(state.terrainMesh);
    disposeTerrainMesh(state.terrainMesh);
    state.terrainMesh = null;
  }
  state.renderer.dispose();
  state = null;
}

// ── Terén (ČÚZK DMR5G) ───────────────────────────────────────────────────────

export function isTerrainVisible(): boolean {
  return terrainVisible;
}

/**
 * Zapne/vypne terén. Při zapnutí (a existujících datech) asynchronně stáhne
 * raster a sestaví mesh. Při vypnutí jen skryje mesh (cache zachována).
 *
 * @throws při síťové/parsing chybě — volající (toggle3d.ts) handluje alert +
 *         uncheck checkboxu.
 */
export async function setTerrainVisible(visible: boolean): Promise<void> {
  terrainVisible = visible;
  if (!state) return;
  if (visible) {
    await ensureTerrainLoaded();
  } else if (state.terrainMesh) {
    state.terrainMesh.visible = false;
  }
}

/** Načte terén, pokud ještě není ve scéně. Idempotentní. */
async function ensureTerrainLoaded(): Promise<void> {
  if (!state || !state.dataBbox) return;
  if (state.terrainMesh) {
    state.terrainMesh.visible = true;
    return;
  }
  const mesh = await loadTerrainMesh(state.dataBbox, {
    buffer: TERRAIN_BUFFER_M,
    resolution: TERRAIN_RESOLUTION,
    centroid: [state.cx, state.cy, state.cz],
    zExaggeration: lastZExaggeration,
  });
  mesh.userData[TERRAIN_TAG] = true;
  // Mesh dostává DATA_TAG jen kvůli `findSceneObjects` filtru v pickPointFromClient —
  // ale pozor, `clearSceneObjects` testuje `TERRAIN_TAG` první a tu větu přeskočí.
  // Pro pick nechceme terén jako target (nemá jvfObjectId), takže DATA_TAG nepřidáme.
  state.scene.add(mesh);
  state.terrainMesh = mesh;
}

/**
 * Zahodí cache rasterů (volat při nahrání nového JVF souboru).
 * Terénní mesh je v disposeThreeScene uvolněn automaticky při re-init scény.
 */
export function invalidateTerrainCache(): void {
  clearTerrainCache();
  if (state?.terrainMesh) {
    state.scene.remove(state.terrainMesh);
    disposeTerrainMesh(state.terrainMesh);
    state.terrainMesh = null;
  }
}

// Walk-through: posune orbit.center (a tedy i kameru) podél horizontálního
// směru kamery. forward/back = podél pohledu promítnutého do vodorovné roviny,
// left/right = strafe kolmo na pohled, up/down = svisle.
export function walk3d(direction: 'forward' | 'back' | 'left' | 'right' | 'up' | 'down'): void {
  if (!state) return;
  const { camera, orbit } = state;
  // Kamerový forward (normalizovaný) a right vektor
  const fwd = new THREE.Vector3();
  camera.getWorldDirection(fwd);
  // Pro horizontální pohyb: vynuluj y složku (scéna má y=up)
  if (direction === 'forward' || direction === 'back' || direction === 'left' || direction === 'right') {
    fwd.y = 0;
    if (fwd.lengthSq() > 1e-9) fwd.normalize();
  }
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0);
  right.y = 0;
  if (right.lengthSq() > 1e-9) right.normalize();

  const step = orbit.spherical.radius * 0.08; // 8 % aktuální vzdálenosti kamery
  switch (direction) {
    case 'forward': orbit.center.addScaledVector(fwd, step); break;
    case 'back':    orbit.center.addScaledVector(fwd, -step); break;
    case 'right':   orbit.center.addScaledVector(right, step); break;
    case 'left':    orbit.center.addScaledVector(right, -step); break;
    case 'up':      orbit.center.y += step; break;
    case 'down':    orbit.center.y -= step; break;
  }
  updateCamera(camera, orbit);
}

// Screen-space pan (kolmo na pohled) — pro myš (shift+drag / pravé tlačítko)
// Zachováno kvůli kompatibilitě; z UI již nevoláme.
export function pan3d(direction: 'up' | 'down' | 'left' | 'right'): void {
  if (!state) return;
  const step = 60;
  const dx = direction === 'left' ? -step : direction === 'right' ? step : 0;
  const dy = direction === 'up' ? -step : direction === 'down' ? step : 0;
  panSceneByScreen(state.camera, state.orbit, dx, dy);
}

// Nastav nový pivot (bod, kolem kterého se orbit toci) — zachová polohu kamery
// a jen přesměruje pohled + přepočítá sférické souřadnice.
export function setPivot(worldX: number, worldY: number, worldZ: number): void {
  if (!state) return;
  const { camera, orbit } = state;
  orbit.center.set(worldX, worldY, worldZ);
  // Dopočti novou theta/phi/radius tak, aby kamera zůstala tam, kde je
  const dx = camera.position.x - orbit.center.x;
  const dy = camera.position.y - orbit.center.y;
  const dz = camera.position.z - orbit.center.z;
  const r = Math.sqrt(dx * dx + dy * dy + dz * dz);
  if (r < 1e-6) return;
  orbit.spherical.radius = r;
  orbit.spherical.phi = Math.acos(Math.max(-1, Math.min(1, dy / r)));
  orbit.spherical.theta = Math.atan2(dx, dz);
  camera.lookAt(orbit.center);
  // Sync markeru i bez updateCamera (kamera už je na místě)
  state.pivotMarker.position.copy(orbit.center);
  const s = orbit.spherical.radius * 0.015;
  state.pivotMarker.scale.setScalar(s);
}

// Raycast z klienta obrazovky do scény, vrátí první zásah nebo null.
export function pickPointFromClient(clientX: number, clientY: number): THREE.Vector3 | null {
  if (!state) return null;
  const { scene, camera, renderer, orbit } = state;
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -(((clientY - rect.top) / rect.height) * 2 - 1)
  );
  const raycaster = new THREE.Raycaster();
  // Tolerance pro Line/Points, jinak se skoro nikdy netrefíme
  raycaster.params.Line = { threshold: orbit.spherical.radius * 0.01 };
  raycaster.params.Points = { threshold: orbit.spherical.radius * 0.01 };
  raycaster.setFromCamera(ndc, camera);
  // Filtruj jen data objekty (ne grid/lights)
  const targets: THREE.Object3D[] = [];
  scene.traverse((o) => { if (o.userData[DATA_TAG] !== undefined) targets.push(o); });
  const hits = raycaster.intersectObjects(targets, false);
  return hits[0]?.point.clone() ?? null;
}

export function zoom3d(direction: 'in' | 'out'): void {
  if (!state) return;
  const factor = direction === 'in' ? 0.85 : 1.18;
  state.orbit.spherical.radius = Math.max(1, state.orbit.spherical.radius * factor);
  updateCamera(state.camera, state.orbit);
}

export function rotate3d(axis: 'yaw-left' | 'yaw-right' | 'tilt-up' | 'tilt-down'): void {
  if (!state) return;
  const step = Math.PI / 24; // 7.5°
  const sph = state.orbit.spherical;
  if (axis === 'yaw-left') sph.theta += step;
  else if (axis === 'yaw-right') sph.theta -= step;
  else if (axis === 'tilt-up') sph.phi = Math.max(0.05, sph.phi - step);
  else if (axis === 'tilt-down') sph.phi = Math.min(Math.PI / 2 - 0.05, sph.phi + step);
  updateCamera(state.camera, state.orbit);
}

export function resetThreeCamera(): void {
  if (!state) return;
  state.orbit.spherical.theta = 0;
  state.orbit.spherical.phi = Math.PI / 3;
  state.orbit.spherical.radius = state.initialRadius;
  state.orbit.center.set(0, 0, 0);
  updateCamera(state.camera, state.orbit);
}

export function resizeThreeScene(canvas: HTMLCanvasElement): void {
  if (!state) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (width === 0 || height === 0) return;
  state.camera.aspect = width / height;
  state.camera.updateProjectionMatrix();
  state.renderer.setSize(width, height, false);
}

// ── Highlight & zoom ─────────────────────────────────────────────────────────

/** Najde všechny scene objekty odpovídající dvojici elementName + objectId. */
function findSceneObjects(elementName: string, objectId: string): THREE.Object3D[] {
  if (!state) return [];
  const found: THREE.Object3D[] = [];
  state.scene.traverse((obj) => {
    if (
      obj.userData[DATA_TAG] === elementName &&
      obj.userData['jvfObjectId'] === objectId &&
      obj.userData[HIGHLIGHT_TAG] !== true
    ) {
      found.push(obj);
    }
  });
  return found;
}

/** Spočte svět. bounding box pro zadané objekty. */
function computeObjectsBox(objs: THREE.Object3D[]): THREE.Box3 | null {
  if (objs.length === 0) return null;
  const box = new THREE.Box3();
  let any = false;
  for (const obj of objs) {
    const b = new THREE.Box3().setFromObject(obj);
    if (!b.isEmpty()) {
      if (any) box.union(b);
      else { box.copy(b); any = true; }
    }
  }
  return any ? box : null;
}

/** Odstraní existující zvýrazňovací objekty ze scény. */
export function clearThreeHighlight(): void {
  if (!state) return;
  const toRemove: THREE.Object3D[] = [];
  state.scene.traverse((obj) => {
    if (obj.userData[HIGHLIGHT_TAG] === true) toRemove.push(obj);
  });
  for (const obj of toRemove) {
    state.scene.remove(obj);
    const withGeom = obj as Partial<THREE.Line & THREE.Points & THREE.Mesh>;
    withGeom.geometry?.dispose();
    const mat = withGeom.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat?.dispose();
  }
}

/**
 * Vytvoří zvýrazňovací overlay pro daný objekt. WebGL ignoruje
 * `LineBasicMaterial.linewidth`, takže samotný klon linie by nebyl vidět přes
 * originál. Proto kombinujeme několik efektů:
 *   1. Klon linie/polygonu v HIGHLIGHT_COLOR (depthTest: false, renderOrder vysoký)
 *   2. Velké zelené body na všech vrcholech geometrie (spolehlivě viditelné)
 *   3. Billboard kruh kolem těžiště bboxu jako výrazný marker
 */
export function highlightThreeFeature(elementName: string, objectId: string): void {
  if (!state) return;
  clearThreeHighlight();
  const objs = findSceneObjects(elementName, objectId);
  if (objs.length === 0) return;

  // Sběrný box pro umístění marker-kroužku
  const overallBox = new THREE.Box3();
  let boxAny = false;

  for (const src of objs) {
    const srcGeom = (src as THREE.Line | THREE.Points).geometry;
    if (!srcGeom) continue;

    // Aktualizovat bounding box pro marker
    srcGeom.computeBoundingBox();
    if (srcGeom.boundingBox) {
      if (boxAny) overallBox.union(srcGeom.boundingBox);
      else { overallBox.copy(srcGeom.boundingBox); boxAny = true; }
    }

    // 1) Klon linie/polygonu — přinejhorším nebude vidět, ale nepřekáží
    if (src instanceof THREE.LineLoop || src instanceof THREE.Line) {
      const lineGeom = srcGeom.clone();
      const lineObj = src instanceof THREE.LineLoop
        ? new THREE.LineLoop(lineGeom, new THREE.LineBasicMaterial({
            color: HIGHLIGHT_COLOR, depthTest: false, transparent: true,
          }))
        : new THREE.Line(lineGeom, new THREE.LineBasicMaterial({
            color: HIGHLIGHT_COLOR, depthTest: false, transparent: true,
          }));
      lineObj.userData[HIGHLIGHT_TAG] = true;
      lineObj.renderOrder = 9998;
      state.scene.add(lineObj);
    }

    // 2) Body na vrcholech — WebGL linewidth je ignorován, ale PointsMaterial.size funguje.
    //    Tohle je hlavní viditelná stopa highlightu pro linie i polygony.
    const vertsGeom = srcGeom.clone();
    const vertsObj = new THREE.Points(
      vertsGeom,
      new THREE.PointsMaterial({
        color: HIGHLIGHT_COLOR,
        size: src instanceof THREE.Points ? 16 : 10,
        sizeAttenuation: false,
        depthTest: false,
        transparent: true,
      })
    );
    vertsObj.userData[HIGHLIGHT_TAG] = true;
    vertsObj.renderOrder = 9999;
    state.scene.add(vertsObj);
  }

  // 3) Marker kroužek (sprite) kolem středu bboxu — vždy viditelný z jakékoliv vzdálenosti
  if (boxAny) {
    const center = new THREE.Vector3();
    overallBox.getCenter(center);
    const size = new THREE.Vector3();
    overallBox.getSize(size);
    const radius = Math.max(size.x, size.y, size.z, 1);

    const marker = createRingMarker(radius * 1.3);
    marker.position.copy(center);
    marker.userData[HIGHLIGHT_TAG] = true;
    marker.renderOrder = 10000;
    state.scene.add(marker);
  }
}

/**
 * Kroužek ze `LineLoop` (mnohoúhelník aproximující kruh) ve stejné rovině XZ
 * — slouží jako výrazný marker nad terénem.
 */
function createRingMarker(radius: number): THREE.Object3D {
  const segments = 64;
  const pts: number[] = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(Math.cos(a) * radius, 0, Math.sin(a) * radius);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  return new THREE.LineLoop(
    g,
    new THREE.LineBasicMaterial({ color: HIGHLIGHT_COLOR, depthTest: false, transparent: true })
  );
}

/**
 * Animovaný zoom 3D kamery na bounding box objektu. Nastavuje orbit.center
 * do středu bboxu a upravuje radius dle velikosti.
 */
export function zoomToThreeFeature(elementName: string, objectId: string): void {
  if (!state) return;
  const objs = findSceneObjects(elementName, objectId);
  const box = computeObjectsBox(objs);
  if (!box) return;

  const center = new THREE.Vector3();
  box.getCenter(center);
  const size = new THREE.Vector3();
  box.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  // fov je v stupních; převod pomocí tan(fov/2)
  const fov = (state.camera.fov * Math.PI) / 180;
  // min radius, aby byl bod / malý objekt rozumně daleko
  const fitRadius = Math.max(10, (maxDim * 0.6) / Math.tan(fov / 2) + maxDim * 0.5);

  animateCameraTo(center, fitRadius);
}

/** Plynulá animace orbit.center a radius. */
function animateCameraTo(target: THREE.Vector3, targetRadius: number, durationMs = 500): void {
  if (!state) return;
  const startCenter = state.orbit.center.clone();
  const startRadius = state.orbit.spherical.radius;
  const startTime = performance.now();

  function step(): void {
    if (!state) return;
    const t = Math.min(1, (performance.now() - startTime) / durationMs);
    // easeInOutCubic
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    state.orbit.center.lerpVectors(startCenter, target, e);
    state.orbit.spherical.radius = startRadius + (targetRadius - startRadius) * e;
    updateCamera(state.camera, state.orbit);
    if (t < 1) requestAnimationFrame(step);
  }
  step();
}
