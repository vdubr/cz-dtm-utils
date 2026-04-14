import type Map from 'ol/Map.js';
import type { ObjektovyTyp } from 'jvf-parser';
import { initThreeScene, disposeThreeScene, resizeThreeScene, rebuildSceneGeometry } from '../viewer3d/threeScene.js';

let is3dActive = false;
let currentZExaggeration = 1;
let currentObjekty: ObjektovyTyp[] = [];

export function getIs3dActive(): boolean {
  return is3dActive;
}
let resizeObserver: ResizeObserver | null = null;

export function setup3dToggle(
  olMap: Map,
  getObjekty: () => ObjektovyTyp[]
): void {
  const btn = document.getElementById('btn-3d') as HTMLButtonElement;
  const mapContainer = document.getElementById('map-container') as HTMLDivElement;
  const threeCanvas = document.getElementById('three-canvas') as HTMLCanvasElement;

  btn.addEventListener('click', () => {
    if (is3dActive) {
      switchTo2d(olMap, mapContainer, threeCanvas, btn);
    } else {
      currentObjekty = getObjekty();
      switchTo3d(mapContainer, threeCanvas, btn, currentObjekty);
    }
  });

  // Z exaggeration buttons
  const exaggerationBtns = document.querySelectorAll<HTMLButtonElement>('.btn-z-exag');
  exaggerationBtns.forEach((exBtn) => {
    exBtn.addEventListener('click', () => {
      const value = Number(exBtn.dataset['exag'] ?? 1);
      currentZExaggeration = value;

      exaggerationBtns.forEach((b) => b.classList.remove('active'));
      exBtn.classList.add('active');

      // Rebuild geometry with new exaggeration — camera stays
      if (is3dActive) {
        rebuildSceneGeometry(currentZExaggeration);
      }
    });
  });
}

function switchTo3d(
  mapContainer: HTMLDivElement,
  canvas: HTMLCanvasElement,
  btn: HTMLButtonElement,
  objekty: ObjektovyTyp[]
): void {
  is3dActive = true;
  btn.textContent = '2D';
  btn.classList.add('active');

  mapContainer.style.display = 'none';
  canvas.style.display = 'block';

  // Show z-exaggeration toolbar
  const toolbar = document.getElementById('z-exag-toolbar');
  if (toolbar) toolbar.style.display = 'flex';

  // Ensure canvas fills the map-area
  const mapArea = document.getElementById('map-area')!;
  canvas.width = mapArea.clientWidth;
  canvas.height = mapArea.clientHeight;

  initThreeScene(canvas, objekty, currentZExaggeration);

  resizeObserver = new ResizeObserver(() => {
    canvas.width = mapArea.clientWidth;
    canvas.height = mapArea.clientHeight;
    resizeThreeScene(canvas);
  });
  resizeObserver.observe(mapArea);
}

function switchTo2d(
  olMap: Map,
  mapContainer: HTMLDivElement,
  canvas: HTMLCanvasElement,
  btn: HTMLButtonElement
): void {
  is3dActive = false;
  btn.textContent = '3D';
  btn.classList.remove('active');

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  disposeThreeScene();

  // Hide z-exaggeration toolbar
  const toolbar = document.getElementById('z-exag-toolbar');
  if (toolbar) toolbar.style.display = 'none';

  canvas.style.display = 'none';
  mapContainer.style.display = 'block';

  // Trigger OL map to update its size
  setTimeout(() => olMap.updateSize(), 50);
}
