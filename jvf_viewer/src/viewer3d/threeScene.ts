import * as THREE from 'three';
import type { ObjektovyTyp, Geometry } from 'jvf-parser';
import { resolveStyle } from '../map/jvfLayers.js';

// Tag for scene objects that can be rebuilt/toggled (excludes lights, grid, etc.)
const DATA_TAG = 'jvfData';

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
  objekty: ObjektovyTyp[];
  orbit: OrbitState;
  pivotMarker: THREE.Object3D;
  /** AbortController pro odstranění všech DOM event listenerů při dispose */
  controlsAbort: AbortController;
}

let state: SceneState | null = null;

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

    for (const zaz of ot.zaznamy) {
      for (const geom of zaz.geometrie) {
        let obj: THREE.Object3D | null = null;

        switch (geom.type) {
          case 'Point': {
            const c = geom.data.coordinates;
            const x = (c[0] ?? 0) - cx;
            const z3 = (c[1] ?? 0) - cy;
            const y3 = ((c[2] ?? 0) - cz) * zExaggeration;
            const geomPt = new THREE.BufferGeometry();
            geomPt.setAttribute(
              'position',
              new THREE.Float32BufferAttribute([x, y3, z3], 3)
            );
            const mat = new THREE.PointsMaterial({ color, size: 5, sizeAttenuation: false });
            obj = new THREE.Points(geomPt, mat);
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
                scene.add(lineObj);
              }
            }
            break;
          }
        }

        if (obj) {
          obj.userData[DATA_TAG] = key;
          scene.add(obj);
        }
      }
    }
  }
}

// Remove all data objects from scene (leaves lights, grid) and release GPU resources.
function clearSceneObjects(scene: THREE.Scene): void {
  const toRemove: THREE.Object3D[] = [];
  scene.traverse((obj) => {
    if (obj.userData[DATA_TAG] !== undefined) toRemove.push(obj);
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
  scene.background = new THREE.Color('#0a0a0f');

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Ambient + directional light
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(1, 2, 1);
  scene.add(dirLight);

  // Grid helper
  const grid = new THREE.GridHelper(200000, 20, 0x222244, 0x1a1a2e);
  scene.add(grid);

  // Compute centroid from all points
  let sumX = 0, sumY = 0, sumZ = 0, count = 0;

  function addCoord(x: number, y: number, z: number): void {
    sumX += x; sumY += y; sumZ += z; count++;
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

  state = {
    scene,
    camera,
    renderer,
    animFrameId: null,
    initialRadius: orbit.spherical.radius,
    cx,
    cy,
    cz,
    objekty,
    orbit,
    pivotMarker,
    controlsAbort,
  };
  Object.defineProperty(state, 'animFrameId', {
    get() { return animFrameId; },
    set(v) { animFrameId = v; },
  });
  // Počáteční synchronizace kamery + markeru
  updateCamera(camera, orbit);
}

// Rebuild only geometry (preserves camera position)
export function rebuildSceneGeometry(zExaggeration: number): void {
  if (!state) return;
  clearSceneObjects(state.scene);
  buildSceneObjects(state.scene, state.objekty, state.cx, state.cy, state.cz, zExaggeration);
}

// Show/hide all 3D objects belonging to a layer
export function setThreeLayerVisible(elementName: string, visible: boolean): void {
  if (!state) return;
  state.scene.traverse((obj) => {
    if (obj.userData[DATA_TAG] === elementName) {
      obj.visible = visible;
    }
  });
}

export function disposeThreeScene(): void {
  if (!state) return;
  if (state.animFrameId !== null) {
    cancelAnimationFrame(state.animFrameId);
  }
  // Odpojit všechny DOM event listenery registrované v attachOrbitControls
  state.controlsAbort.abort();
  // Uvolnit geometrie + materiály všech datových objektů
  clearSceneObjects(state.scene);
  state.renderer.dispose();
  state = null;
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
  state.camera.aspect = width / height;
  state.camera.updateProjectionMatrix();
  state.renderer.setSize(width, height);
}
