import type Map from 'ol/Map.js';
import type { ObjektovyTyp } from 'jvf-parser';
import { initThreeScene, disposeThreeScene, resizeThreeScene } from '../viewer3d/threeScene.js';

let is3dActive = false;

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
      switchTo3d(mapContainer, threeCanvas, btn, getObjekty());
    }
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

  // Ensure canvas fills the map-area
  const mapArea = document.getElementById('map-area')!;
  canvas.width = mapArea.clientWidth;
  canvas.height = mapArea.clientHeight;

  initThreeScene(canvas, objekty);

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

  canvas.style.display = 'none';
  mapContainer.style.display = 'block';

  // Trigger OL map to update its size
  setTimeout(() => olMap.updateSize(), 50);
}
