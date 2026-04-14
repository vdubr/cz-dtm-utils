import * as THREE from 'three';
import type { ObjektovyTyp, Geometry } from 'jvf-parser';
import { LAYER_COLORS } from '../map/jvfLayers.js';

const DEFAULT_COLOR = '#90a4ae';

function hexToThreeColor(hex: string): THREE.Color {
  return new THREE.Color(hex);
}

// Tag for scene objects that can be rebuilt/toggled (excludes lights, grid, etc.)
const DATA_TAG = 'jvfData';

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
}

let state: SceneState | null = null;

let isDragging = false;
let prevMouse = { x: 0, y: 0 };
let spherical = { theta: 0, phi: Math.PI / 3, radius: 50000 };
let sceneCenter = new THREE.Vector3(0, 0, 0);

function updateCamera(camera: THREE.PerspectiveCamera): void {
  const x =
    sceneCenter.x +
    spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
  const y = sceneCenter.y + spherical.radius * Math.cos(spherical.phi);
  const z =
    sceneCenter.z +
    spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
  camera.position.set(x, y, z);
  camera.lookAt(sceneCenter);
}

function attachOrbitControls(
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera
): void {
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    spherical.theta -= (e.clientX - prevMouse.x) * 0.005;
    spherical.phi -= (e.clientY - prevMouse.y) * 0.005;
    spherical.phi = Math.max(0.05, Math.min(Math.PI / 2 - 0.05, spherical.phi));
    prevMouse = { x: e.clientX, y: e.clientY };
    updateCamera(camera);
  });

  canvas.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    spherical.radius *= 1 + e.deltaY * 0.001;
    spherical.radius = Math.max(1, spherical.radius);
    updateCamera(camera);
  }, { passive: false });
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
    const color = hexToThreeColor(LAYER_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR);
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
              obj = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color }));
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

// Remove all data objects from scene (leaves lights, grid)
function clearSceneObjects(scene: THREE.Scene): void {
  const toRemove: THREE.Object3D[] = [];
  scene.traverse((obj) => {
    if (obj.userData[DATA_TAG] !== undefined) toRemove.push(obj);
  });
  for (const obj of toRemove) {
    scene.remove(obj);
    if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
  }
}

export function initThreeScene(
  canvas: HTMLCanvasElement,
  objekty: ObjektovyTyp[],
  zExaggeration = 1
): void {
  disposeThreeScene();

  // Reset orbit state for fresh view
  isDragging = false;
  spherical = { theta: 0, phi: Math.PI / 3, radius: 50000 };
  sceneCenter = new THREE.Vector3(0, 0, 0);

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

    spherical.radius = maxSpread > 0 ? maxSpread * 2 : 5000;
  }

  updateCamera(camera);
  attachOrbitControls(canvas, camera);

  let animFrameId: number | null = null;

  function animate(): void {
    animFrameId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

  state = { scene, camera, renderer, animFrameId: null, initialRadius: spherical.radius, cx, cy, cz, objekty };
  Object.defineProperty(state, 'animFrameId', {
    get() { return animFrameId; },
    set(v) { animFrameId = v; },
  });
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
  state.renderer.dispose();
  state = null;
}

export function resetThreeCamera(): void {
  if (!state) return;
  spherical.theta = 0;
  spherical.phi = Math.PI / 3;
  spherical.radius = state.initialRadius;
  sceneCenter = new THREE.Vector3(0, 0, 0);
  updateCamera(state.camera);
}

export function resizeThreeScene(canvas: HTMLCanvasElement): void {
  if (!state) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  state.camera.aspect = width / height;
  state.camera.updateProjectionMatrix();
  state.renderer.setSize(width, height);
}
