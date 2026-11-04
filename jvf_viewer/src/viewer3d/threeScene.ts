import * as THREE from 'three';
import type { ObjektovyTyp, Geometry } from 'jvf-parser';
import { resolveStyle } from '../map/jvfLayers.js';
import {
  isShowZapis,
  shouldHighlightZapis,
  isChangesetZapis,
  type ChangesetZapisType,
} from '../state/changesetToggle.js';
import { dtmIdOf, resolveZaznamId } from '../state/zaznamId.js';
import {
  isContentPartVisible,
  isLevelVisible,
  isProjectVisible,
  resolveLevelKey,
  type LevelKey,
} from '../state/featureFilter.js';
import { resolveLayerKey, resolveProjectKey, getProjects } from '../state/projects.js';
import {
  loadTerrainMesh,
  updateTerrainZExaggeration,
  disposeTerrainMesh,
  clearTerrainCache,
  getTerrainRealBbox,
  applyBasemapToTerrain,
  removeBasemapFromTerrain,
  setTerrainDetail,
  setBasemapOpacityOnTerrain,
  type BBox,
} from './terrain.js';
import {
  loadTerrainTexture,
  clearBasemapTextureCache,
  configureTerrainTextures,
  getMaxTexturePx,
  type BasemapKind,
  type OverlayTextureLayer,
} from './basemapTexture.js';
import { themedLayerNames } from '../map/overlayCatalog.js';
import { getOverlayStates } from '../state/overlays.js';

// Tag for scene objects that can be rebuilt/toggled (excludes lights, grid, etc.)
const DATA_TAG = 'jvfData';
// Klíč vrstvy pro viditelnost (`hiddenLayers`) — elementName kvalifikovaný
// projektem při více načtených projektech (viz resolveLayerKey). DATA_TAG
// zůstává čistý elementName kvůli identifikaci prvků (highlight, pick).
const LAYER_KEY_TAG = 'jvfLayerKey';
// Tag for highlight objects (exclude from clearSceneObjects — they live in a parallel group)
const HIGHLIGHT_TAG = 'jvfHighlight';
/** Tag pro terén — zůstává ve scéně i při rebuildSceneGeometry. */
const TERRAIN_TAG = 'terrain';
const HIGHLIGHT_COLOR = 0x39ff14;

/**
 * Barvy pro vizualizaci changeset záznamů (`ZapisObjektu` ∈ {i, u, d})
 * ve 3D scéně: 'i' — nové zeleně, 'u' — editované oranžově, 'd' — mazané
 * sytě červeně. Záměrně shodné s 2D variantou v `map/jvfLayers.ts`, aby
 * uživatel poznal stejné objekty napříč režimy.
 */
const ZAPIS_HIGHLIGHT_HEX: Record<ChangesetZapisType, number> = {
  i: 0x2da44e,
  u: 0xbf8700,
  d: 0xe02020,
};

/**
 * Nastavit barvu materiálu(ů) objektu na `colorHex`. Sdílená implementace pro
 * `applyZapisColorToObject` (changeset barva) i `restoreOriginalColor`
 * (návrat na původní ČÚZK barvu) — obě jen zapisují hex do `material.color`.
 * Three.js Sprite (SVG ikona) má `SpriteMaterial` bez viditelného efektu, pokud
 * `color` chybí — proto `apply` bezpečně no-opuje, pokud materiál barvu nemá;
 * Line / LineLoop / Points mají `*BasicMaterial.color`.
 */
function setObjectMaterialColor(obj: THREE.Object3D, colorHex: number): void {
  const withMat = obj as THREE.Object3D & { material?: unknown };
  const mat = withMat.material as
    | THREE.Material
    | THREE.Material[]
    | undefined;
  if (!mat) return;
  const apply = (m: THREE.Material): void => {
    const colored = m as THREE.Material & { color?: THREE.Color };
    if (colored.color) colored.color.setHex(colorHex);
  };
  if (Array.isArray(mat)) mat.forEach(apply);
  else apply(mat);
}

/** Aplikovat barvu changeset záznamu na materiál objektu. */
function applyZapisColorToObject(obj: THREE.Object3D, colorHex: number): void {
  setObjectMaterialColor(obj, colorHex);
}

/**
 * Vrátit objektu jeho původní barvu uloženou v `userData['jvfOrigColorHex']`
 * při buildu. Volá se, když uživatel odškrtne changeset checkbox
 * a `applyChangesetHighlight` chce vrátit obarvené objekty zpět na ČÚZK barvy.
 */
function restoreOriginalColor(obj: THREE.Object3D): void {
  const orig = obj.userData['jvfOrigColorHex'];
  if (typeof orig !== 'number') return;
  setObjectMaterialColor(obj, orig);
}

/** Buffer kolem JVF dat pro stahovaný terén (m) — režim jednoho projektu. */
const TERRAIN_BUFFER_M = 300;
/**
 * Buffer kolem JVF dat pro stahovaný terén (m) — režim více projektů.
 * Při ≥2 projektech se terén stahuje pro KAŽDÝ projekt zvlášť (jeho bbox +
 * tohle okolí), nikoli pro společný bbox všech projektů. Dva projekty
 * napříč republikou by jinak vytvořily obří společný bbox a stáhly by se
 * megabajty rasteru přes prázdnou plochu mezi nimi.
 */
const TERRAIN_BUFFER_MULTI_M = 800;
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
  /**
   * Bboxy (S-JTSK), pro které se stahuje terén. Jeden projekt → `[dataBbox]`.
   * Více projektů → jeden bbox PER projekt (viz `TERRAIN_BUFFER_MULTI_M`),
   * takže se nestahuje prázdná plocha mezi vzdálenými projekty.
   */
  terrainBboxes: BBox[];
  /** Buffer (okolí v m) přidaný ke každému `terrainBboxes` při stahování. */
  terrainBuffer: number;
  objekty: ObjektovyTyp[];
  orbit: OrbitState;
  pivotMarker: THREE.Object3D;
  /** Pomocná mřížka — vyměňuje se při změně pozadí (jiné barvy pro světlé/tmavé). */
  grid: THREE.GridHelper;
  /**
   * Terénní skupiny (mesh + vrstevnice) — jedna per `terrainBboxes`. Žijí
   * napříč rebuildSceneGeometry. Prázdné pole = terén ještě nenačten / vypnut.
   */
  terrainMeshes: THREE.Group[];
  /** AbortController pro odstranění všech DOM event listenerů při dispose */
  controlsAbort: AbortController;
  /**
   * Seznam SVG sprite objektů (Point features s `useSvgSymbols`) aktuálně
   * ve scéně. Udržuje se explicitně (naplňuje `buildSceneObjects`, maže
   * `clearSceneObjects`), aby `updateSpriteVisibility` — volaná při KAŽDÉM
   * pohybu kamery (orbit/pan/zoom) — nemusela dělat `scene.traverse` přes
   * celou scénu, jen iterovat tuto malou podmnožinu.
   */
  spriteObjects: THREE.Object3D[];
}

let state: SceneState | null = null;

/**
 * Přetrvávající stav viditelnosti vrstev napříč inicializacemi 3D scény.
 * Uživatel může skrýt vrstvu v 2D, přepnout na 3D a očekává, že vrstva
 * zůstane skrytá. `state` je `null` mimo 3D režim, takže stav viditelnosti
 * musíme držet mimo něj.
 */
const hiddenLayers = new Set<string>();

/**
 * Vypočítá cílovou viditelnost datového objektu scény jako průnik (AND)
 * všech nezávislých přepínačů:
 *
 *   1. viditelnost vrstvy (`hiddenLayers`, layer panel; klíč vrstvy je při
 *      více projektech kvalifikovaný projektem — viz `resolveLayerKey`
 *      ve `state/projects.ts`),
 *   2. changeset přepínače (`isShowZapis` pro `ZapisObjektu` ∈ {i, u, d}),
 *   3. filtr prvků — úroveň umístění (`isLevelVisible`), projekt
 *      (`isProjectVisible`) a obsahová část (`isContentPartVisible`).
 *
 * Jediné místo, kde se viditelnost skládá — používají ho build scény,
 * `setThreeLayerVisible`, `applyChangesetHighlight` i `applyFeatureFilter`,
 * takže žádný přepínač nemůže omylem „od-skrýt" objekt skrytý jiným.
 * Pozn.: SVG sprity mají navíc pravidlo vzdálenosti kamery
 * (`updateSpriteVisibility`), které se s tímto výsledkem také kombinuje AND.
 */
function computeObjectVisibility(obj: THREE.Object3D): boolean {
  const layerKey = obj.userData[LAYER_KEY_TAG] as string | undefined;
  if (layerKey !== undefined && hiddenLayers.has(layerKey)) return false;
  const zapis = obj.userData['jvfZapisObjektu'];
  if (isChangesetZapis(zapis) && !isShowZapis(zapis)) return false;
  const levelKey = obj.userData['jvfLevel'] as LevelKey | undefined;
  if (!isLevelVisible(levelKey)) return false;
  const projectKey = obj.userData['jvfProjectId'] as string | null | undefined;
  if (!isProjectVisible(projectKey)) return false;
  if (!isContentPartVisible(obj.userData['jvfPart'] as string | undefined)) return false;
  return true;
}

/** Aktuální barva pozadí 3D scény. Uchovává se mimo `state`, aby volba
 *  přežila re-init při přepnutí 2D ↔ 3D a při rebuildu geometrie.
 *  Výchozí je světlé pozadí — barvy prvků z Katalogu ČÚZK počítají se
 *  světlým podkladem (stejně jako 2D mapa). */
let currentBackground = '#ffffff';

/** Přepínač: renderovat Point features jako SVG sprity (true) nebo jako
 *  `THREE.Points` (false, původní chování). Platí jen pro 3D. */
let useSvgSymbols = false;

/** Přepínač zobrazení terénu (ČÚZK DMR5G). Persistuje přes re-init scény. */
let terrainVisible = false;

/** Zvolený podklad na terénu ('none' = hypsometrie). Persistuje přes re-init. */
let currentBasemap: BasemapKind | 'none' = 'none';

/** Průhlednost podkladové textury (0–1). Persistuje přes re-init. */
let basemapOpacity = 0.85;

/** Čítač requestů podkladu — zahazuje zastaralé asynchronní výsledky
 *  při rychlém přepínání vrstev. */
let basemapRequestId = 0;

/** Cache SVG textur: klíč = název SVG souboru. Sdíleno napříč scénami. */
const svgTextureCache = new Map<string, THREE.Texture>();

/** Base path pro SVG symboly (stejný jako v 2D). */
const SVG_BASE = './symboly/';

/**
 * Konverze nativní pixelové velikosti SVG na metry v terénu.
 * Stejná konvence jako ve 2D (`SVG_PX_TO_METERS` v jvfLayers.ts):
 * 1 SVG-px = 0,01 mm na papíře × měřítko 1:500 = 0,005 m v terénu.
 *
 * Sprite.scale ve three.js je v world units (metrech, díky `sizeAttenuation`).
 */
const SVG_PX_TO_METERS = 0.005;

/** Načte SVG jako THREE.Texture. Vrací cachovanou instanci pro opakované volání. */
function getSvgTexture(svgFile: string): THREE.Texture {
  const cached = svgTextureCache.get(svgFile);
  if (cached) return cached;

  const loader = new THREE.TextureLoader();
  const tex = loader.load(SVG_BASE + svgFile, (loaded) => {
    // SVG načteno — projdi všechny sprity používající tuto texturu a nastav
    // jim správnou fyzickou velikost podle nativních rozměrů SVG. Texture
    // loader je asynchronní, takže při vytvoření spritu jsme ještě neznali
    // image.width/height. Po načtení je textura sdílená přes cache, můžeme
    // sprity v aktivní scéně dohledat přes `userData.jvfSpriteTexKey`.
    if (state) {
      const w = (loaded.image as HTMLImageElement | undefined)?.width ?? 0;
      const h = (loaded.image as HTMLImageElement | undefined)?.height ?? 0;
      if (w > 0 && h > 0) {
        const sx = w * SVG_PX_TO_METERS;
        const sy = h * SVG_PX_TO_METERS;
        state.scene.traverse((obj) => {
          if (obj.userData['jvfSpriteTexKey'] === svgFile) {
            obj.scale.set(sx, sy, 1);
          }
        });
      }
      state.renderer.render(state.scene, state.camera);
    }
  });
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  svgTextureCache.set(svgFile, tex);
  return tex;
}

/** Je barva vnímaná jako světlá? (relativní luminance přes práh 0,5) */
function isLightColor(color: string): boolean {
  const c = new THREE.Color(color);
  return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b > 0.5;
}

/**
 * Barvy mřížky (centerLine, grid) podle jasu pozadí. Mřížka má být jemná —
 * tmavě modrá varianta na tmavém pozadí by na světlém působila jako výrazné
 * černé čáry, proto na světlém pozadí používáme světle šedou.
 */
function gridColorsFor(background: string): [number, number] {
  return isLightColor(background)
    ? [0xb8b8c0, 0xd6d6dd]
    : [0x222244, 0x1a1a2e];
}

function createGrid(background: string): THREE.GridHelper {
  const [center, grid] = gridColorsFor(background);
  return new THREE.GridHelper(200000, 20, center, grid);
}

export function setThreeBackground(color: string): void {
  currentBackground = color;
  if (state) {
    state.scene.background = new THREE.Color(color);
    // Vyměnit mřížku za variantu čitelnou na novém pozadí (GridHelper má
    // barvy zapečené ve vertex colors — nelze je změnit na existující instanci).
    state.scene.remove(state.grid);
    state.grid.geometry.dispose();
    (state.grid.material as THREE.Material).dispose();
    state.grid = createGrid(color);
    state.scene.add(state.grid);
    // Překryvy: pozadí motivu pod nimi (bez podkladu) a varianty vrstev
    // pro tmavý motiv (bílý katastr) → přeskládat texturu.
    if (overlayTextureLayers().length > 0) {
      void applyCurrentBasemap().catch((err) => console.error('[překryv] přehoz na terén selhal', err));
    }
  }
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

/**
 * Hranice, nad kterou se SVG sprity skrývají (ekvivalent 2D
 * `HIDE_ICON_RESOLUTION`). Při velkém oddálení kamery od pivotu by
 * sprity pokrývaly scénu jako kobercová mozaika. Hodnota je v metrech
 * (jednotkách scény) — sprite je velký 2 m, takže nad ~150 m vzdálenosti
 * jsou ikony stejně skoro neviditelné.
 */
const SPRITE_HIDE_RADIUS = 150;

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
    // Skrýt SVG sprity při velkém oddálení (čitelnost scény).
    updateSpriteVisibility(state.spriteObjects, spherical.radius);
    // Při přiblížení podrobnější textura okolí pohledu (po zastavení kamery).
    scheduleTerrainDetail();
  }
}

/**
 * Skryje / zobrazí SVG sprity podle vzdálenosti kamery (resp. radiusu
 * orbitu). Volá se z `updateCamera` při KAŽDÉ změně kamery (tedy i při
 * každém mousemove během orbit/pan) — proto iterujeme jen přes
 * `state.spriteObjects` (udržovaný seznam sprite objektů), NIKOLI
 * `scene.traverse` přes celou scénu, které by bylo výrazně dražší na
 * velkých souborech. Při větším oddálení než `SPRITE_HIDE_RADIUS` se
 * sprity skryjí, body zůstanou reprezentovány barevnými puntíky, které
 * renderujeme zvlášť (vždy).
 *
 * V současné implementaci nemáme paralelní vrstvu puntíků — sprite je
 * jediná reprezentace bodu při zapnutém SVG toggle. Skrytí spritu = bod
 * není vidět vůbec. To je akceptovatelný kompromis: uživatel chce při
 * silném oddálení vidět hlavně linie a plochy, body znovu uvidí po
 * přiblížení.
 */
function updateSpriteVisibility(spriteObjects: THREE.Object3D[], radius: number): void {
  const radiusOk = radius < SPRITE_HIDE_RADIUS;
  for (const obj of spriteObjects) {
    // AND s ostatními přepínači (vrstvy / changeset / filtr prvků) —
    // oddálení a přiblížení kamery nesmí od-skrýt jinak skrytý sprite.
    obj.visible = radiusOk && computeObjectVisibility(obj);
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

/**
 * Materiálová cache pro jeden běh `buildSceneObjects` — klíč je kombinace
 * druhu materiálu a barvy (resp. souboru textury u sprite). Objekty se
 * stejnou barvou a stylem (typicky stovky záznamů stejného ObjektovyTyp) tak
 * sdílejí JEDNU instanci materiálu místo `new *Material()` na každý záznam.
 *
 * Sdílet lze pouze materiály záznamů, jejichž barva se po vytvoření nikdy
 * nemění (`!isChangesetZapis(zapisObjektu)`) — changeset záznamy (i/u/d)
 * mají barvu měněnou za běhu (`applyZapisColorToObject`/`restoreOriginalColor`
 * přes checkbox v panelu), takže dostávají vždy vlastní instanci, aby
 * mutace barvy jednoho záznamu neovlivnila ostatní se stejnou původní barvou.
 */
function getOrCreateMaterial<T extends THREE.Material>(
  cache: Map<string, THREE.Material>,
  key: string,
  factory: () => T
): T {
  const cached = cache.get(key);
  if (cached) return cached as T;
  const mat = factory();
  cache.set(key, mat);
  return mat;
}

// Add all data objects to the scene for given objekty, cx/cy/cz centroid, zExaggeration.
// `spriteObjects` je výstupní pole — každý vytvořený SVG sprite se do něj přidá,
// aby `updateSpriteVisibility` nemusela procházet celou scénu (viz jeho komentář).
function buildSceneObjects(
  scene: THREE.Scene,
  objekty: ObjektovyTyp[],
  cx: number,
  cy: number,
  cz: number,
  zExaggeration: number,
  spriteObjects: THREE.Object3D[]
): void {
  // Fresh cache per build — sdílené materiály se zahodí spolu se starou scénou
  // v `clearSceneObjects` (dispose je idempotentní i při vícenásobném volání
  // na tutéž instanci) a znovu se založí zde.
  const materialCache = new Map<string, THREE.Material>();
  for (const ot of objekty) {
    const s = resolveStyle(ot);
    const color = new THREE.Color(s.strokeColor);
    // fillColor may have 2-digit alpha suffix (e.g. '#ebe9e855') — strip it for Three.js
    const fillHex = s.fillColor === 'none' ? s.strokeColor
      : s.fillColor.length === 9 ? s.fillColor.slice(0, 7) : s.fillColor;
    const fillColor = new THREE.Color(fillHex);
    const key = layerKey(ot);
    // Klíč viditelnosti vrstvy (kvalifikovaný projektem při ≥2 projektech)
    // + provenience projektu pro filtr prvků.
    const layerVisKey = resolveLayerKey(ot);
    const projectKey = resolveProjectKey(ot);
    // Obsahová část — dimenze filtru prvků (tlačítka v Přehledu prvků).
    const part = String(ot.obsahovaCast);

    for (const zaz of ot.zaznamy) {
      // Identifikace záznamu: DTM ID, nebo interní UUID pro záznamy bez ID
      // (nové prvky `ZapisObjektu='i'` — bez něj by nešly pickovat/zvýraznit).
      const objectId = resolveZaznamId(zaz, ot.zaznamy);
      // Holé DTM ID — podle něj hledá prvek panel chyb (viz findSceneObjects).
      const dtmId = dtmIdOf(zaz);
      const zapisObjektu = zaz.zapisObjektu;
      // Changeset záznamy (i/u/d) mění barvu materiálu za běhu (viz komentář
      // u `getOrCreateMaterial`) — pro ně vždy vytváříme vlastní instanci
      // materiálu, aby přebarvení jednoho záznamu neovlivnilo ostatní.
      const shareableMaterial = !isChangesetZapis(zapisObjektu);
      // Úroveň umístění (LEVEL) — klíč pro filtr prvků (state/featureFilter.ts).
      const levelKey = resolveLevelKey(zaz);
      // Při buildu uložíme původní barvu vrstvy do userData — `applyChangesetHighlight`
      // ji potřebuje pro vrácení changeset objektů zpět na původní vzhled,
      // když uživatel checkbox odškrtne. Bez toho bychom po flipu znali jen
      // aktuální (případně přebarvenou) barvu materiálu.
      const origLineColor = color;
      const origFillColor = fillColor;
      for (const geom of zaz.geometrie) {
        let obj: THREE.Object3D | null = null;

        switch (geom.type) {
          case 'Point': {
            const c = geom.data.coordinates;
            const x = (c[0] ?? 0) - cx;
            // Sever-jih invertujeme: Three.js kamera při pohledu shora má +Z
            // směrem dolů na obrazovce. JVF Y (Northing) roste na sever, takže
            // bez inverze by sever vyšel dole. `cy - Y` srovná orientaci s 2D mapou.
            const z3 = cy - (c[1] ?? 0);
            const y3 = ((c[2] ?? 0) - cz) * zExaggeration;

            if (useSvgSymbols && s.pointSvg) {
              // Sprite s SVG texturou — fyzická velikost v metrech podle
              // nativních rozměrů SVG (konvence ČÚZK Katalog: 1 SVG-px =
              // 0,01 mm na papíře × 1:500 = 0,005 m v terénu).
              //
              // Texture loader je asynchronní; při prvním vytvoření spritu
              // textura ještě nemá rozměry. Použijeme proto fallback scale
              // (0.5 m) a po načtení texturu callback v `getSvgTexture`
              // přepočítá sprity se shodným `jvfSpriteTexKey`.
              //
              // depthTest=true: sprite respektuje hloubku scény (nepřekrývá
              // všechno jako dřív s depthTest=false).
              const tex = getSvgTexture(s.pointSvg);
              const makeSpriteMaterial = (): THREE.SpriteMaterial => new THREE.SpriteMaterial({
                map: tex,
                transparent: true,
                depthTest: true,
                sizeAttenuation: true,
              });
              const mat = shareableMaterial
                ? getOrCreateMaterial(materialCache, `sprite:${s.pointSvg}`, makeSpriteMaterial)
                : makeSpriteMaterial();
              const sprite = new THREE.Sprite(mat);
              sprite.position.set(x, y3, z3);
              const img = (tex.image as HTMLImageElement | undefined);
              if (img && img.width > 0 && img.height > 0) {
                sprite.scale.set(img.width * SVG_PX_TO_METERS, img.height * SVG_PX_TO_METERS, 1);
              } else {
                sprite.scale.set(0.5, 0.5, 1); // placeholder, přepíše se po načtení
              }
              sprite.userData['jvfSprite'] = true;
              sprite.userData['jvfSpriteTexKey'] = s.pointSvg;
              obj = sprite;
            } else {
              const geomPt = new THREE.BufferGeometry();
              geomPt.setAttribute(
                'position',
                new THREE.Float32BufferAttribute([x, y3, z3], 3)
              );
              const makePointsMaterial = (): THREE.PointsMaterial =>
                new THREE.PointsMaterial({ color, size: 5, sizeAttenuation: false });
              const mat = shareableMaterial
                ? getOrCreateMaterial(materialCache, `points:${color.getHex()}`, makePointsMaterial)
                : makePointsMaterial();
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
                cy - (geom.data.coordinates[i + 1] ?? 0)
              );
            }
            if (pts.length >= 6) {
              const g = new THREE.BufferGeometry();
              g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
              const mat = shareableMaterial
                ? getOrCreateMaterial(materialCache, `line:${color.getHex()}`, () => new THREE.LineBasicMaterial({ color }))
                : new THREE.LineBasicMaterial({ color });
              obj = new THREE.Line(g, mat);
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
                cy - (geom.data.exterior[i + 1] ?? 0)
              );
            }
            if (pts.length >= 9) {
              const g = new THREE.BufferGeometry();
              g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
              const mat = shareableMaterial
                ? getOrCreateMaterial(materialCache, `line:${fillColor.getHex()}`, () => new THREE.LineBasicMaterial({ color: fillColor }))
                : new THREE.LineBasicMaterial({ color: fillColor });
              obj = new THREE.LineLoop(g, mat);
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
                  cy - (curve.coordinates[i + 1] ?? 0)
                );
              }
              if (pts.length >= 6) {
                const g = new THREE.BufferGeometry();
                g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
                const curveMat = shareableMaterial
                  ? getOrCreateMaterial(materialCache, `line:${color.getHex()}`, () => new THREE.LineBasicMaterial({ color }))
                  : new THREE.LineBasicMaterial({ color });
                const lineObj = new THREE.Line(g, curveMat);
                lineObj.userData[DATA_TAG] = key;
                lineObj.userData[LAYER_KEY_TAG] = layerVisKey;
                lineObj.userData['jvfObjectId'] = objectId;
                lineObj.userData['jvfDtmId'] = dtmId;
                lineObj.userData['jvfZapisObjektu'] = zapisObjektu;
                lineObj.userData['jvfLevel'] = levelKey;
                lineObj.userData['jvfProjectId'] = projectKey;
                lineObj.userData['jvfPart'] = part;
                lineObj.userData['jvfOrigColorHex'] = origLineColor.getHex();
                lineObj.visible = computeObjectVisibility(lineObj);
                if (isChangesetZapis(zapisObjektu) && shouldHighlightZapis(zapisObjektu)) {
                  lineObj.material.color.setHex(ZAPIS_HIGHLIGHT_HEX[zapisObjektu]);
                }
                scene.add(lineObj);
              }
            }
            break;
          }
        }

        if (obj) {
          obj.userData[DATA_TAG] = key;
          obj.userData[LAYER_KEY_TAG] = layerVisKey;
          obj.userData['jvfObjectId'] = objectId;
          obj.userData['jvfDtmId'] = dtmId;
          obj.userData['jvfZapisObjektu'] = zapisObjektu;
          obj.userData['jvfLevel'] = levelKey;
          obj.userData['jvfProjectId'] = projectKey;
          obj.userData['jvfPart'] = part;
          // Polygon používá fillColor, ostatní geometrie používají strokeColor —
          // pro restoraci po toggle off potřebujeme znát ten správný.
          const origColor = geom.type === 'Polygon' ? origFillColor : origLineColor;
          obj.userData['jvfOrigColorHex'] = origColor.getHex();
          obj.visible = computeObjectVisibility(obj);
          if (isChangesetZapis(zapisObjektu) && shouldHighlightZapis(zapisObjektu)) {
            applyZapisColorToObject(obj, ZAPIS_HIGHLIGHT_HEX[zapisObjektu]);
          }
          scene.add(obj);
          if (obj.userData['jvfSprite'] === true) spriteObjects.push(obj);
        }
      }
    }
  }
}

// Remove all data objects from scene (leaves lights, grid, terrain) and release GPU resources.
// `spriteObjects` je udržovaný seznam sprite objektů (viz `SceneState.spriteObjects`)
// — je potřeba ho vyprázdnit současně s odstraněním objektů ze scény, jinak by
// `updateSpriteVisibility` po rebuildu operovala nad odpojenými (dispose'd) objekty.
// Pozn.: materiály mohou být sdílené mezi více objekty (viz materialCache
// v `buildSceneObjects`) — `Material.dispose()` je idempotentní, takže
// vícenásobné volání na tutéž instanci je neškodné.
function clearSceneObjects(scene: THREE.Scene, spriteObjects: THREE.Object3D[]): void {
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
  spriteObjects.length = 0;
}

/**
 * Projde všechny souřadnice geometrie a zavolá `add(x, y, z)` pro každý bod.
 * Sdíleno výpočtem centroidu/bboxu scény i per-projekt bboxem terénu
 * (`computeObjektyBbox`).
 */
function collectGeomCoords(geom: Geometry, add: (x: number, y: number, z: number) => void): void {
  switch (geom.type) {
    case 'Point': {
      const c = geom.data.coordinates;
      add(c[0] ?? 0, c[1] ?? 0, c[2] ?? 0);
      break;
    }
    case 'LineString': {
      const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
      for (let i = 0; i < geom.data.coordinates.length; i += dim) {
        add(geom.data.coordinates[i] ?? 0, geom.data.coordinates[i + 1] ?? 0, dim >= 3 ? (geom.data.coordinates[i + 2] ?? 0) : 0);
      }
      break;
    }
    case 'Polygon': {
      const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
      for (let i = 0; i < geom.data.exterior.length; i += dim) {
        add(geom.data.exterior[i] ?? 0, geom.data.exterior[i + 1] ?? 0, dim >= 3 ? (geom.data.exterior[i + 2] ?? 0) : 0);
      }
      break;
    }
    case 'MultiCurve': {
      for (const curve of geom.data.curves) {
        const dim = curve.srsDimension > 0 ? curve.srsDimension : 2;
        for (let i = 0; i < curve.coordinates.length; i += dim) {
          add(curve.coordinates[i] ?? 0, curve.coordinates[i + 1] ?? 0, dim >= 3 ? (curve.coordinates[i + 2] ?? 0) : 0);
        }
      }
      break;
    }
  }
}

/**
 * Spočítá bbox (S-JTSK) ze všech geometrií daných objektových typů, nebo
 * `null`, pokud neobsahují žádný bod. Používá se pro per-projekt terén při
 * více načtených projektech.
 */
function computeObjektyBbox(objekty: ObjektovyTyp[]): BBox | null {
  let minX = +Infinity, minY = +Infinity, maxX = -Infinity, maxY = -Infinity, n = 0;
  for (const ot of objekty) {
    for (const zaz of ot.zaznamy) {
      for (const geom of zaz.geometrie) {
        collectGeomCoords(geom, (x, y) => {
          n++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        });
      }
    }
  }
  return n > 0 ? { minX, minY, maxX, maxY } : null;
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
  // Textury terénu (podklad + překryvy) v co nejlepší kvalitě, kterou GPU zvládne.
  configureTerrainTextures({
    maxTextureSize: renderer.capabilities.maxTextureSize,
    maxAnisotropy: renderer.capabilities.getMaxAnisotropy(),
  });

  // Ambient + directional light
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(1, 2, 1);
  scene.add(dirLight);

  // Grid helper — barvy podle aktuálního pozadí (světlé/tmavé)
  const grid = createGrid(currentBackground);
  scene.add(grid);

  // Compute centroid AND bbox from all points
  let sumX = 0, sumY = 0, sumZ = 0, count = 0;
  let minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;

  function addCoord(x: number, y: number, z: number): void {
    sumX += x; sumY += y; sumZ += z; count++;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }

  for (const ot of objekty) {
    for (const zaz of ot.zaznamy) {
      for (const geom of zaz.geometrie) {
        collectGeomCoords(geom, addCoord);
      }
    }
  }

  const cx = count > 0 ? sumX / count : 0;
  const cy = count > 0 ? sumY / count : 0;
  const cz = count > 0 ? sumZ / count : 0;

  lastZExaggeration = zExaggeration;
  const spriteObjects: THREE.Object3D[] = [];
  buildSceneObjects(scene, objekty, cx, cy, cz, zExaggeration, spriteObjects);

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

  // Terén: při ≥2 projektech stahuj zvlášť kolem KAŽDÉHO projektu (jeho bbox +
  // TERRAIN_BUFFER_MULTI_M), ne přes společný bbox — dva projekty napříč
  // republikou by jinak stáhly obří raster přes prázdnou plochu mezi nimi.
  const projects = getProjects();
  const terrainMulti = projects.length >= 2;
  const terrainBboxes: BBox[] = terrainMulti
    ? projects
        .map((p) => computeObjektyBbox(p.dtm.objekty))
        .filter((b): b is BBox => b !== null)
    : dataBbox
      ? [dataBbox]
      : [];
  const terrainBuffer = terrainMulti ? TERRAIN_BUFFER_MULTI_M : TERRAIN_BUFFER_M;

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
    terrainBboxes,
    terrainBuffer,
    objekty,
    orbit,
    pivotMarker,
    grid,
    terrainMeshes: [],
    controlsAbort,
    spriteObjects,
  };
  Object.defineProperty(state, 'animFrameId', {
    get() { return animFrameId; },
    set(v) { animFrameId = v; },
  });
  // Počáteční synchronizace kamery + markeru
  updateCamera(camera, orbit);

  // Pokud byl terén zapnutý z předchozí relace, načti ho pro aktuální bboxy.
  // Fire-and-forget — pokud selže, ukáže se error v konzoli, ale scéna zůstává funkční.
  if (terrainVisible && terrainBboxes.length > 0) {
    void ensureTerrainLoaded();
  }
}

// Rebuild only geometry (preserves camera). Terén zůstává ve scéně, jen
// přepočítáme Y souřadnice jeho vertexů dle nového zExaggeration.
export function rebuildSceneGeometry(zExaggeration: number): void {
  if (!state) return;
  lastZExaggeration = zExaggeration;
  clearThreeHighlight();
  clearSceneObjects(state.scene, state.spriteObjects);
  buildSceneObjects(state.scene, state.objekty, state.cx, state.cy, state.cz, zExaggeration, state.spriteObjects);
  for (const mesh of state.terrainMeshes) {
    updateTerrainZExaggeration(mesh, zExaggeration);
  }
}

// Show/hide all 3D objects belonging to a layer. Vždy aktualizuje persistentní
// `hiddenLayers` — tak zůstane viditelnost konzistentní i přes re-init scény
// (přepnutí 2D ↔ 3D).
//
// `layerKey` = klíč vrstvy z `resolveLayerKey` (elementName, při více
// projektech kvalifikovaný `{projectId}:`) — skrytí vrstvy jednoho projektu
// neskryje stejný objektový typ v ostatních projektech.
export function setThreeLayerVisible(layerKey: string, visible: boolean): void {
  if (visible) hiddenLayers.delete(layerKey);
  else hiddenLayers.add(layerKey);
  if (!state) return;
  const radiusOk = state.orbit.spherical.radius < SPRITE_HIDE_RADIUS;
  state.scene.traverse((obj) => {
    if (obj.userData[LAYER_KEY_TAG] === layerKey) {
      // AND s changeset přepínači a filtrem prvků — zobrazení vrstvy nesmí
      // od-skrýt objekt skrytý jiným přepínačem.
      obj.visible =
        computeObjectVisibility(obj) &&
        (obj.userData['jvfSprite'] !== true || radiusOk);
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

/**
 * Aplikovat na 3D scénu aktuální stav changeset přepínačů (nové / editované /
 * mazané). Pro každý objekt s `userData['jvfZapisObjektu']` ∈ {i, u, d}
 * nastaví viditelnost a barvu podle `isShowZapis(typ)`:
 *
 *   flag = true  → obj.visible = layerVisible, materiál v barvě typu změny
 *   flag = false → obj.visible = false (skryje), barva se vrací na původní
 *
 * Funkce respektuje per-vrstvu skrytí (`hiddenLayers`) — když uživatel
 * skrývá celou vrstvu, changeset objekt z ní zůstává skrytý i když je
 * jeho flag zapnutý.
 *
 * No-op když 3D scéna není inicializovaná.
 */
export function applyChangesetHighlight(): void {
  if (!state) return;
  const radiusOk = state.orbit.spherical.radius < SPRITE_HIDE_RADIUS;
  state.scene.traverse((obj) => {
    const zapis = obj.userData['jvfZapisObjektu'];
    if (!isChangesetZapis(zapis)) return;
    const show = shouldHighlightZapis(zapis);
    // Viditelnost = AND všech přepínačů (vrstvy / changeset / filtr prvků)
    obj.visible =
      computeObjectVisibility(obj) &&
      (obj.userData['jvfSprite'] !== true || radiusOk);
    if (show) {
      applyZapisColorToObject(obj, ZAPIS_HIGHLIGHT_HEX[zapis]);
    } else {
      restoreOriginalColor(obj);
    }
  });
}

/**
 * Aplikovat na 3D scénu aktuální stav filtru prvků (`state/featureFilter.ts`,
 * dimenze úroveň umístění). Pro každý datový objekt přepočítá viditelnost
 * jako AND všech přepínačů (`computeObjectVisibility`) — filtr tedy
 * respektuje skryté vrstvy i changeset flagy a naopak.
 *
 * No-op když 3D scéna není inicializovaná (stav filtru je globální —
 * uplatní se při příštím buildu scény).
 */
export function applyFeatureFilter(): void {
  if (!state) return;
  const radiusOk = state.orbit.spherical.radius < SPRITE_HIDE_RADIUS;
  state.scene.traverse((obj) => {
    if (obj.userData[DATA_TAG] === undefined) return;
    obj.visible =
      computeObjectVisibility(obj) &&
      (obj.userData['jvfSprite'] !== true || radiusOk);
  });
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
  clearSceneObjects(state.scene, state.spriteObjects);
  // Uvolnit terénní meshe (cache rasteru zůstává — znovupoužitelné při re-initu)
  for (const mesh of state.terrainMeshes) {
    state.scene.remove(mesh);
    disposeTerrainMesh(mesh);
  }
  state.terrainMeshes = [];
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
  } else {
    for (const mesh of state.terrainMeshes) mesh.visible = false;
  }
}

/**
 * Načte terén, pokud ještě není ve scéně. Idempotentní. Při více projektech
 * načítá jednu terénní dlaždici PER projekt (viz `terrainBboxes`), jinak jednu
 * pro celý bbox dat. Jednotlivé dlaždice se stahují paralelně a nezávisle —
 * selhání jedné (např. jeden projekt mimo pokrytí DMR5G) neshodí ostatní.
 */
async function ensureTerrainLoaded(): Promise<void> {
  if (!state || state.terrainBboxes.length === 0) return;
  if (state.terrainMeshes.length > 0) {
    for (const mesh of state.terrainMeshes) mesh.visible = true;
    return;
  }
  const centroid: [number, number, number] = [state.cx, state.cy, state.cz];
  const buffer = state.terrainBuffer;
  const results = await Promise.allSettled(
    state.terrainBboxes.map((bbox) =>
      loadTerrainMesh(bbox, {
        buffer,
        resolution: TERRAIN_RESOLUTION,
        centroid,
        zExaggeration: lastZExaggeration,
      })
    )
  );
  // Scéna mohla mezitím zaniknout (přepnutí 2D/3D, nový soubor) — zahodit výsledky.
  if (!state) {
    for (const r of results) if (r.status === 'fulfilled') disposeTerrainMesh(r.value);
    return;
  }
  const meshes: THREE.Group[] = [];
  const failures: unknown[] = [];
  for (const r of results) {
    if (r.status === 'fulfilled') {
      const mesh = r.value;
      mesh.userData[TERRAIN_TAG] = true;
      // Terén záměrně nedostává DATA_TAG — pro pick (pickPointFromClient) není
      // cílem (nemá jvfObjectId), `clearSceneObjects` ho vynechá dle TERRAIN_TAG.
      state.scene.add(mesh);
      meshes.push(mesh);
    } else {
      failures.push(r.reason);
    }
  }
  state.terrainMeshes = meshes;
  // Selhaly-li VŠECHNY dlaždice, propaguj chybu — toggle3d ukáže alert a
  // odškrtne checkbox. Uspěla-li aspoň jedna, jen zaloguj ty neúspěšné.
  if (meshes.length === 0) {
    throw failures[0] instanceof Error ? failures[0] : new Error('Terén se nepodařilo načíst.');
  }
  if (failures.length > 0) {
    console.warn(`[terén] ${failures.length} z ${results.length} dlaždic terénu se nepodařilo načíst`, failures);
  }
  // Byl-li zvolen podklad, aplikuj ho na nové meshe. Fire-and-forget:
  // selhání podkladu nesmí rozbít terén ani scénu.
  if (currentBasemap !== 'none' || overlayTextureLayers().length > 0) {
    void applyCurrentBasemap().catch((err) => {
      console.error('[basemap] načtení podkladu selhalo', err);
    });
  }
}

// ── Podkladová mapa na terénu (ČÚZK ZM / Ortofoto) ──────────────────────────

export function getBasemap(): BasemapKind | 'none' {
  return currentBasemap;
}

export function getBasemapOpacity(): number {
  return basemapOpacity;
}

/**
 * Zvolí podkladovou mapu texturovanou na terén DMR. `'none'` vrátí
 * hypsometrické obarvení. Volba persistuje přes re-init scény; texturu
 * aplikuje, jakmile je terén načtený (viz `ensureTerrainLoaded`).
 *
 * @throws při síťové chybě (žádná dlaždice) — volající handluje UI stav.
 */
export async function setBasemap(kind: BasemapKind | 'none'): Promise<void> {
  currentBasemap = kind;
  await applyCurrentBasemap();
}

/**
 * Aplikuje aktuálně zvolený podklad na existující terénní meshe. Každá dlaždice
 * má vlastní bbox → skládá se pro ni vlastní textura (viz `getTerrainRealBbox`).
 * Dlaždice se zpracují paralelně; zastaralý výsledek zahodí `reqId`.
 */
async function applyCurrentBasemap(): Promise<void> {
  const reqId = ++basemapRequestId;
  if (!state || state.terrainMeshes.length === 0) return;
  const overlays = overlayTextureLayers();
  if (currentBasemap === 'none' && overlays.length === 0) {
    for (const mesh of state.terrainMeshes) {
      removeBasemapFromTerrain(mesh); // odebere i podrobný výřez
      detailKeys.delete(mesh);
    }
    return;
  }
  const request = {
    basemap: currentBasemap,
    overlays,
    background: currentBackground,
  };
  // Bez podkladu (jen překryvy přes pozadí) plná sytost textury.
  const opacity = currentBasemap === 'none' ? 1 : basemapOpacity;
  await Promise.all(
    state.terrainMeshes.map(async (mesh) => {
      const bbox = getTerrainRealBbox(mesh);
      if (!bbox) return;
      const texture = await loadTerrainTexture(bbox, request);
      // Mezitím mohl uživatel přepnout podklad nebo scéna zanikla — zahodit.
      if (reqId !== basemapRequestId || !state) {
        if (texture.userData['ownedComposite'] === true) texture.dispose();
        return;
      }
      applyBasemapToTerrain(mesh, texture, opacity);
    })
  );
  // Podrobný výřez kolem pohledu podle nového podkladu / překryvů.
  scheduleTerrainDetail();
}

/**
 * Vybrané služby zapnutých překryvů (DTM ČR, katastr) pro přehoz na terén,
 * v pořadí vykreslování; vrstvy už podle motivu (bílý katastr v tmavém).
 */
function overlayTextureLayers(): OverlayTextureLayer[] {
  const out: OverlayTextureLayer[] = [];
  for (const state of getOverlayStates()) {
    if (!state.isEnabled()) continue;
    for (const svc of state.def.services) {
      const names = state.getSelection(svc.id);
      if (names.length === 0) continue;
      out.push({ url: svc.wmsUrl, layers: themedLayerNames(svc, names), opacity: state.getOpacity() });
    }
  }
  return out;
}

// ── Podrobný výřez textury terénu kolem pohledu ───────────────────────────────
// Celková textura terénu (až 4096 px na celý výřez dat) je hrubé pozadí.
// Při přiblížení se kolem středu pohledu (orbit.center) stáhne podrobnější
// výřez — podklad i překryvy v rozlišení podle vzdálenosti kamery — a nanese
// se přes terén. Stahuje se jen „rozumné okolí pohledu": velikost podle
// radiusu orbitu, zaokrouhlená na mocninu 2 a střed na mřížku (drobné posuny
// nic nestahují), jen když je výrazně jemnější než celková textura,
// a až po zastavení kamery.

/** Delší strana textury podrobného výřezu (px). */
const DETAIL_PX = 2048;
/** Polovina strany výřezu = radius orbitu × tento koeficient (pokryje pohled). */
const DETAIL_HALF_PER_RADIUS = 1.2;
const DETAIL_MIN_HALF_M = 32;
let detailTimer: ReturnType<typeof setTimeout> | null = null;
let detailRequestId = 0;
/** Klíč aktuálního výřezu per terénní mesh (bez změny se nic nestahuje). */
const detailKeys = new WeakMap<THREE.Group, string>();

function scheduleTerrainDetail(): void {
  if (detailTimer) clearTimeout(detailTimer);
  detailTimer = setTimeout(() => {
    detailTimer = null;
    void updateTerrainDetail().catch((err) => console.error('[terén] podrobný výřez selhal', err));
  }, 400);
}

function clearTerrainDetail(mesh: THREE.Group): void {
  if (detailKeys.has(mesh)) {
    setTerrainDetail(mesh, null, null, 1);
    detailKeys.delete(mesh);
  }
}

async function updateTerrainDetail(): Promise<void> {
  if (!state || state.terrainMeshes.length === 0) return;
  const reqId = ++detailRequestId;
  const overlays = overlayTextureLayers();
  if (currentBasemap === 'none' && overlays.length === 0) {
    for (const mesh of state.terrainMeshes) clearTerrainDetail(mesh);
    return;
  }
  const center = sceneToSjtsk(state.orbit.center);
  if (!center) return;
  const half = 2 ** Math.ceil(Math.log2(Math.max(DETAIL_MIN_HALF_M, state.orbit.spherical.radius * DETAIL_HALF_PER_RADIUS)));
  const grid = half / 2;
  const cx = Math.round(center[0] / grid) * grid;
  const cy = Math.round(center[1] / grid) * grid;
  const opacity = currentBasemap === 'none' ? 1 : basemapOpacity;
  const signature = JSON.stringify([currentBasemap, overlays, currentBackground]);

  await Promise.all(state.terrainMeshes.map(async (mesh) => {
    const real = getTerrainRealBbox(mesh);
    if (!real) return;
    const span = Math.max(real.maxX - real.minX, real.maxY - real.minY);
    const baseRes = span / getMaxTexturePx();
    const patch = {
      minX: Math.max(real.minX, cx - half),
      minY: Math.max(real.minY, cy - half),
      maxX: Math.min(real.maxX, cx + half),
      maxY: Math.min(real.maxY, cy + half),
    };
    const patchRes = Math.max(patch.maxX - patch.minX, patch.maxY - patch.minY) / DETAIL_PX;
    // Mimo terén, nebo výřez není výrazně jemnější než celková textura → bez výřezu.
    if (patch.maxX <= patch.minX || patch.maxY <= patch.minY || patchRes > baseRes * 0.6) {
      clearTerrainDetail(mesh);
      return;
    }
    const key = `${signature}|${patch.minX},${patch.minY},${patch.maxX},${patch.maxY}`;
    if (detailKeys.get(mesh) === key) return;
    const texture = await loadTerrainTexture(patch, {
      basemap: currentBasemap,
      overlays,
      background: currentBackground,
      maxPx: DETAIL_PX,
      transparentBorder: true,
    });
    if (reqId !== detailRequestId || !state || !state.terrainMeshes.includes(mesh)) {
      texture.dispose();
      return;
    }
    setTerrainDetail(mesh, texture, patch, opacity);
    detailKeys.set(mesh, key);
  }));
}

/**
 * Přeskládá texturu terénu po změně překryvu (zapnutí, výběr, sytost).
 * Bez načteného terénu nic nedělá — překryvy se nanesou po jeho načtení.
 */
export async function refreshTerrainTexture(): Promise<void> {
  await applyCurrentBasemap();
}

/** Nastaví průhlednost podkladové textury (0–1). */
export function setBasemapOpacity(value: number): void {
  basemapOpacity = Math.max(0, Math.min(1, value));
  if (!state) return;
  for (const mesh of state.terrainMeshes) {
    setBasemapOpacityOnTerrain(mesh, basemapOpacity);
  }
}

/**
 * Zahodí cache rasterů (volat při nahrání nového JVF souboru).
 * Terénní meshe jsou v disposeThreeScene uvolněny automaticky při re-init scény.
 */
export function invalidateTerrainCache(): void {
  clearTerrainCache();
  clearBasemapTextureCache();
  if (!state) return;
  for (const mesh of state.terrainMeshes) {
    state.scene.remove(mesh);
    disposeTerrainMesh(mesh);
  }
  state.terrainMeshes = [];
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

/**
 * Sdílený setup pro raycasting z klientských (obrazovkových) souřadnic myši
 * do scény — používá ho `pickPointFromClient` i `pickFeatureFromClient`,
 * které se lišily jen v tom, co dělají s výsledným seznamem zásahů. Vrací
 * seřazené zásahy (nejbližší první) proti datovým objektům (`DATA_TAG` —
 * grid/lights/terén jsou vyloučené), nebo `null`, pokud scéna není
 * inicializovaná.
 */
function raycastDataObjectsFromClient(
  clientX: number,
  clientY: number
): THREE.Intersection[] | null {
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
  return raycaster.intersectObjects(targets, false);
}

// Raycast z klienta obrazovky do scény, vrátí první zásah nebo null.
export function pickPointFromClient(clientX: number, clientY: number): THREE.Vector3 | null {
  const hits = raycastDataObjectsFromClient(clientX, clientY);
  return hits?.[0]?.point.clone() ?? null;
}

/**
 * Raycast z klienta obrazovky do scény a vrátí JVF feature (elementName + objectId)
 * prvního zasaženého objektu, nebo null. Hledá se po předkovi (line/sprite jsou
 * leaf objekty bez `jvfObjectId` — ten je na rodiči).
 */
export function pickFeatureFromClient(
  clientX: number,
  clientY: number,
): { elementName: string; objectId: string } | null {
  const hits = raycastDataObjectsFromClient(clientX, clientY);
  if (!hits) return null;
  for (const hit of hits) {
    // Prošplhej po předcích, dokud nenajdeš jvfObjectId (sprity/podelementy ho nemusí mít)
    let cur: THREE.Object3D | null = hit.object;
    while (cur) {
      const objectId = cur.userData['jvfObjectId'];
      const elementName = cur.userData[DATA_TAG];
      if (typeof objectId === 'string' && objectId && typeof elementName === 'string') {
        return { elementName, objectId };
      }
      cur = cur.parent;
    }
  }
  return null;
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

/**
 * Najde všechny scene objekty odpovídající dvojici elementName + objectId.
 * Nejdřív přesná shoda klíče vieweru, jinak holé DTM ID (panel chyb zná jen
 * to — bez prefixu projektu a bez rozlišení duplicitních ID).
 */
function findSceneObjects(elementName: string, objectId: string): THREE.Object3D[] {
  if (!state) return [];
  const scene = state.scene;
  for (const key of ['jvfObjectId', 'jvfDtmId'] as const) {
    const found: THREE.Object3D[] = [];
    scene.traverse((obj) => {
      if (
        obj.userData[DATA_TAG] === elementName &&
        obj.userData[key] === objectId &&
        obj.userData[HIGHLIGHT_TAG] !== true
      ) {
        found.push(obj);
      }
    });
    if (found.length > 0) return found;
  }
  return [];
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
 * Animovaný zoom 3D kamery na extent v S-JTSK (minX/minY/maxX/maxY).
 * Používá se pro zoom na projekt — extent se převede do scene souřadnic
 * stejnou konvencí jako geometrie (x = X−cx, z = cy−Y, tedy osa Z
 * převrací min/max Northingu).
 */
export function zoomToThreeExtent(
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
): void {
  if (!state) return;
  const box = new THREE.Box3(
    new THREE.Vector3(minX - state.cx, 0, state.cy - maxY),
    new THREE.Vector3(maxX - state.cx, 0, state.cy - minY)
  );

  const center = new THREE.Vector3();
  box.getCenter(center);
  const size = new THREE.Vector3();
  box.getSize(size);

  const maxDim = Math.max(size.x, size.z);
  const fov = (state.camera.fov * Math.PI) / 180;
  const fitRadius = Math.max(10, (maxDim * 0.6) / Math.tan(fov / 2) + maxDim * 0.5);

  animateCameraTo(center, fitRadius);
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

// ── Podpora měření ve 3D (viewer3d/measure3d.ts) ─────────────────────────────
// Scéna: x = X − cx, z = cy − Y, y = (Z − cz) · převýšení. Měření drží body
// v S-JTSK se skutečnou výškou, scénu jen kreslí.

/** Je 3D scéna inicializovaná? */
export function isThreeSceneReady(): boolean {
  return state !== null;
}

/** Aktuální převýšení Z ve scéně. */
export function getZExaggeration(): number {
  return lastZExaggeration;
}

/** Souřadnice scény → S-JTSK [X, Y, skutečné Z]. */
export function sceneToSjtsk(v: THREE.Vector3): [number, number, number] | null {
  if (!state) return null;
  const ex = lastZExaggeration || 1;
  return [v.x + state.cx, state.cy - v.z, v.y / ex + state.cz];
}

/** S-JTSK [X, Y, Z] → souřadnice scény (s aktuálním převýšením). */
export function sjtskToScene(x: number, y: number, z: number): THREE.Vector3 | null {
  if (!state) return null;
  return new THREE.Vector3(x - state.cx, (z - state.cz) * lastZExaggeration, state.cy - y);
}

/** Promítne bod scény na souřadnice klienta (px); null, je-li za kamerou. */
export function projectSceneToClient(v: THREE.Vector3): { x: number; y: number } | null {
  if (!state) return null;
  const p = v.clone().project(state.camera);
  if (p.z > 1 || p.z < -1) return null;
  const rect = state.renderer.domElement.getBoundingClientRect();
  return { x: rect.left + ((p.x + 1) / 2) * rect.width, y: rect.top + ((1 - p.y) / 2) * rect.height };
}

/** Je objekt i všichni jeho předci viditelný? */
function isShown(obj: THREE.Object3D): boolean {
  for (let o: THREE.Object3D | null = obj; o; o = o.parent) if (!o.visible) return false;
  return true;
}

export interface MeasureHit {
  point: THREE.Vector3;
  object: THREE.Object3D;
  /** Datový objekt JVF (název elementu), nebo terén. */
  elementName: string | null;
  isTerrain: boolean;
}

/**
 * Paprsek pod kurzorem pro měření: zásahy VIDITELNÝCH datových objektů
 * a terénu, seřazené podle vzdálenosti. U linie je `point` přímo na úsečce
 * (Three.js), takže slouží jako přichycení k hraně.
 */
export function raycastForMeasure(clientX: number, clientY: number): MeasureHit[] {
  if (!state) return [];
  const { scene, camera, renderer, orbit } = state;
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -(((clientY - rect.top) / rect.height) * 2 - 1),
  );
  const raycaster = new THREE.Raycaster();
  raycaster.params.Line = { threshold: orbit.spherical.radius * 0.01 };
  raycaster.params.Points = { threshold: orbit.spherical.radius * 0.01 };
  raycaster.setFromCamera(ndc, camera);
  const targets: THREE.Object3D[] = [];
  scene.traverse((o) => {
    if (o.userData[DATA_TAG] !== undefined && o.userData[HIGHLIGHT_TAG] !== true) targets.push(o);
  });
  const terrain = state.terrainMeshes.filter((m) => m.visible);
  const hits = raycaster.intersectObjects([...targets, ...terrain], true);
  const out: MeasureHit[] = [];
  for (const h of hits) {
    if (!isShown(h.object)) continue;
    let isTerrain = false;
    let elementName: string | null = null;
    for (let o: THREE.Object3D | null = h.object; o; o = o.parent) {
      if (o.userData[TERRAIN_TAG] === true) { isTerrain = true; break; }
      const tag = o.userData[DATA_TAG];
      if (typeof tag === 'string') { elementName = tag; break; }
    }
    if (!isTerrain && elementName === null) continue;
    out.push({ point: h.point.clone(), object: h.object, elementName, isTerrain });
  }
  return out;
}

/** Bod na vodorovné rovině (výška scény `sceneY`) pod kurzorem. */
export function rayPlaneFromClient(clientX: number, clientY: number, sceneY: number): THREE.Vector3 | null {
  if (!state) return null;
  const { camera, renderer } = state;
  const rect = renderer.domElement.getBoundingClientRect();
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -(((clientY - rect.top) / rect.height) * 2 - 1),
  ), camera);
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -sceneY);
  return raycaster.ray.intersectPlane(plane, new THREE.Vector3());
}

/** Přidá / odebere pomocný objekt (měření) do aktuální scény. */
export function addSceneOverlay(obj: THREE.Object3D): void {
  if (state && obj.parent !== state.scene) state.scene.add(obj);
}
export function removeSceneOverlay(obj: THREE.Object3D): void {
  obj.parent?.remove(obj);
}

/**
 * Položí body (S-JTSK [x, y]) na povrch viditelného terénu: výška ze
 * svislého paprsku na povrch DMR; bez terénu (nebo mimo něj) skutečná výška
 * `fallbackZ`. Vrací body scény (s aktuálním převýšením).
 */
export function drapeOnTerrain(points: ReadonlyArray<readonly number[]>, fallbackZ: number): THREE.Vector3[] {
  if (!state) return [];
  const surfaces: THREE.Object3D[] = [];
  for (const g of state.terrainMeshes) {
    if (!g.visible) continue;
    g.traverse((o) => { if (o.userData['isTerrainMesh'] === true && o.visible) surfaces.push(o); });
  }
  const raycaster = new THREE.Raycaster();
  const down = new THREE.Vector3(0, -1, 0);
  const out: THREE.Vector3[] = [];
  for (const p of points) {
    const v = sjtskToScene(p[0] ?? 0, p[1] ?? 0, fallbackZ);
    if (!v) continue;
    if (surfaces.length > 0) {
      raycaster.set(new THREE.Vector3(v.x, 1e6, v.z), down);
      const hit = raycaster.intersectObjects(surfaces, false)[0];
      if (hit) v.y = hit.point.y;
    }
    out.push(v);
  }
  return out;
}

/** Počet viditelných načtených dílů terénu (změna = přepočítat výšky přehozů). */
export function getVisibleTerrainCount(): number {
  return state ? state.terrainMeshes.filter((g) => g.visible).length : 0;
}

/** Velikost vykreslovací plochy v px (pro tloušťku čar LineMaterial). */
export function getThreeCanvasSize(): { width: number; height: number } | null {
  if (!state) return null;
  const c = state.renderer.domElement;
  return { width: c.clientWidth, height: c.clientHeight };
}
