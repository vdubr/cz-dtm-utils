import type Map from 'ol/Map.js';
import type { ObjektovyTyp } from 'jvf-parser';
import {
  initThreeScene,
  disposeThreeScene,
  resizeThreeScene,
  rebuildSceneGeometry,
  walk3d,
  zoom3d,
  rotate3d,
  resetThreeCamera,
  setPivot,
  pickPointFromClient,
} from '../viewer3d/threeScene.js';
import { clearHighlight } from '../map/highlight.js';

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

  // 3D navigation buttons (walk / zoom / rotate / set-pivot / reset)
  const navBtns = document.querySelectorAll<HTMLButtonElement>('.btn-nav3d');
  const setPivotBtn = document.querySelector<HTMLButtonElement>('[data-nav="set-pivot"]');
  const threeCanvasEl = document.getElementById('three-canvas') as HTMLCanvasElement;

  navBtns.forEach((navBtn) => {
    navBtn.addEventListener('click', () => {
      if (!is3dActive) return;
      const action = navBtn.dataset['nav'] ?? '';
      switch (action) {
        case 'walk-forward': walk3d('forward'); break;
        case 'walk-back':    walk3d('back'); break;
        case 'walk-left':    walk3d('left'); break;
        case 'walk-right':   walk3d('right'); break;
        case 'walk-up':      walk3d('up'); break;
        case 'walk-down':    walk3d('down'); break;
        case 'zoom-in':      zoom3d('in'); break;
        case 'zoom-out':     zoom3d('out'); break;
        case 'rot-left':     rotate3d('yaw-left'); break;
        case 'rot-right':    rotate3d('yaw-right'); break;
        case 'tilt-up':      rotate3d('tilt-up'); break;
        case 'tilt-down':    rotate3d('tilt-down'); break;
        case 'reset':        resetThreeCamera(); break;
        case 'set-pivot':    togglePivotMode(); break;
      }
    });
  });

  // Pivot mode — jednorázový click na scénu nastaví nový střed otáčení.
  let pivotMode = false;
  function togglePivotMode(): void {
    pivotMode = !pivotMode;
    setPivotBtn?.classList.toggle('active', pivotMode);
    if (threeCanvasEl) threeCanvasEl.style.cursor = pivotMode ? 'crosshair' : 'grab';
  }

  threeCanvasEl?.addEventListener('click', (e) => {
    if (!is3dActive || !pivotMode) return;
    const pt = pickPointFromClient(e.clientX, e.clientY);
    if (pt) setPivot(pt.x, pt.y, pt.z);
    togglePivotMode(); // vypni režim
  });

  // Mapa klávesa → data-nav akce (pro vizuální feedback + akci)
  const keyToNav: Record<string, string> = {
    'w': 'walk-forward', 'arrowup': 'walk-forward',
    's': 'walk-back',    'arrowdown': 'walk-back',
    'a': 'walk-left',    'arrowleft': 'walk-left',
    'd': 'walk-right',   'arrowright': 'walk-right',
    'q': 'walk-up',
    'e': 'walk-down',
    '+': 'zoom-in',      '=': 'zoom-in',
    '-': 'zoom-out',     '_': 'zoom-out',
    'r': 'reset',
  };

  function runAction(action: string): void {
    switch (action) {
      case 'walk-forward': walk3d('forward'); break;
      case 'walk-back':    walk3d('back'); break;
      case 'walk-left':    walk3d('left'); break;
      case 'walk-right':   walk3d('right'); break;
      case 'walk-up':      walk3d('up'); break;
      case 'walk-down':    walk3d('down'); break;
      case 'zoom-in':      zoom3d('in'); break;
      case 'zoom-out':     zoom3d('out'); break;
      case 'reset':        resetThreeCamera(); break;
    }
  }

  const heldKeys = new Set<string>();

  window.addEventListener('keydown', (e) => {
    if (!is3dActive) return;
    const tag = (e.target as HTMLElement | null)?.tagName ?? '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    const key = e.key.toLowerCase();
    const action = keyToNav[key];
    if (!action) return;
    e.preventDefault();
    runAction(action);
    if (!heldKeys.has(key)) {
      heldKeys.add(key);
      document.querySelector<HTMLButtonElement>(`[data-nav="${action}"]`)?.classList.add('key-pressed');
    }
  });

  window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (!heldKeys.has(key)) return;
    heldKeys.delete(key);
    const action = keyToNav[key];
    if (!action) return;
    // Pokud je ještě držena jiná klávesa pro stejnou akci, nech highlight
    const stillHeld = Object.entries(keyToNav).some(([k, a]) => a === action && heldKeys.has(k));
    if (!stillHeld) {
      document.querySelector<HTMLButtonElement>(`[data-nav="${action}"]`)?.classList.remove('key-pressed');
    }
  });

  // Když ztratíme focus (Alt+Tab apod.), uvolni všechny highlighty
  window.addEventListener('blur', () => {
    heldKeys.clear();
    document.querySelectorAll('.btn-nav3d.key-pressed').forEach((b) => b.classList.remove('key-pressed'));
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

  // Přepínáme režim — zrušit 2D highlight, aby nezůstal viset
  clearHighlight();

  mapContainer.style.display = 'none';
  canvas.style.display = 'block';

  // Show bottom toolbars (3D nav + z-exaggeration)
  const toolbar = document.getElementById('bottom-toolbars');
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

  // Hide bottom toolbars
  const toolbar = document.getElementById('bottom-toolbars');
  if (toolbar) toolbar.style.display = 'none';

  canvas.style.display = 'none';
  mapContainer.style.display = 'block';

  // Trigger OL map to update its size
  setTimeout(() => olMap.updateSize(), 50);
}
