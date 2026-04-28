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
  setThreeBackground,
  setUseSvgSymbols,
  getUseSvgSymbols,
  setTerrainVisible,
  isTerrainVisible,
  invalidateTerrainCache,
} from '../viewer3d/threeScene.js';
import { clearHighlight } from '../map/highlight.js';
import { reapplyActiveHighlight } from './errorPanel.js';

let is3dActive = false;
let currentZExaggeration = 1;
let currentObjekty: ObjektovyTyp[] = [];

export function getIs3dActive(): boolean {
  return is3dActive;
}
let resizeObserver: ResizeObserver | null = null;

/**
 * Vynutí resize 3D canvasu na aktuální velikost `#map-area`.
 *
 * Volá se z míst, kde se layout změní v synchronní cestě (např. otevření /
 * zavření postranního error panelu), protože `ResizeObserver` u některých
 * prohlížečů nestřílí spolehlivě, když se sourozenecký flex element
 * skryje/zobrazí přes `display: none`. No-op když 3D není aktivní.
 *
 * Double-rAF: první rAF nás dostane za style/layout fázi, druhý za paint —
 * teprve potom má `clientWidth` opravdu nové rozměry. Single rAF občas
 * vrací staré hodnoty (Chrome batchuje reflow).
 *
 * Canvas má v CSS `width/height: 100%` a `renderer.setSize(.., .., false)`
 * (ne-style mode), takže prohlížeč mu po reflowu sám přidělí cílovou
 * velikost. Atribut canvas.width/.height jen synchronizuje framebuffer
 * s display velikostí.
 */
export function notifyMapAreaResized(): void {
  if (!is3dActive) return;
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
  const mapArea = document.getElementById('map-area');
  if (!canvas || !mapArea) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!is3dActive) return;
      const w = mapArea.clientWidth;
      const h = mapArea.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
      resizeThreeScene(canvas);
    });
  });
}

/**
 * Reload 3D scene with new data. Called after JVF upload while the user is
 * already in 3D mode — without this, the scene keeps the empty state.
 * No-op when 3D is inactive.
 *
 * Terén: cache rasteru se invaliduje (jiný bbox = jiný terén). Pokud byl
 * checkbox zapnutý, po re-init scény se terén načte znovu pro nový bbox
 * (ensureTerrainLoaded v initThreeScene).
 */
export function reloadThreeSceneData(objekty: ObjektovyTyp[]): void {
  if (!is3dActive) return;
  currentObjekty = objekty;
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  invalidateTerrainCache();
  disposeThreeScene();
  const mapArea = document.getElementById('map-area');
  if (mapArea) {
    canvas.width = mapArea.clientWidth;
    canvas.height = mapArea.clientHeight;
  }
  initThreeScene(canvas, objekty, currentZExaggeration);
  // Spinner: pokud je terén zapnutý, fetch běží na pozadí; zobrazíme indikátor
  const terrainCheckbox = document.getElementById('toggle-terrain') as HTMLInputElement | null;
  const terrainSpinner = document.getElementById('terrain-spinner') as HTMLElement | null;
  if (terrainCheckbox?.checked && isTerrainVisible()) {
    // initThreeScene už spustil ensureTerrainLoaded (fire-and-forget)
    // Pro UX ukážeme spinner do dalšího requestu — bohužel bez promise handle
    // nemůžeme přesně vypnout. Řešení: krátká heuristika na 3 s, nebo nechat spinner off.
    // Pro prototyp vypínáme spinner okamžitě (uživatel pozná, že terén chvíli chybí).
    terrainSpinner?.setAttribute('hidden', '');
  }
}

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

  // Collapse/expand bottom toolbars
  const toolbarsEl = document.getElementById('bottom-toolbars');
  const toggleBtn = document.getElementById('bottom-toolbars-toggle');
  toggleBtn?.addEventListener('click', () => {
    toolbarsEl?.classList.toggle('collapsed');
  });

  // Background color picker (3D only)
  const BG_COLORS: Record<string, string> = {
    dark: '#0a0a0f',
    light: '#f5f5f5',
  };
  const bgBtns = document.querySelectorAll<HTMLButtonElement>('.btn-bg');
  bgBtns.forEach((bgBtn) => {
    bgBtn.addEventListener('click', () => {
      const key = bgBtn.dataset['bg'] ?? 'dark';
      const color = BG_COLORS[key] ?? BG_COLORS['dark']!;
      setThreeBackground(color);
      bgBtns.forEach((b) => b.classList.remove('active'));
      bgBtn.classList.add('active');
    });
  });

  // SVG symboly toggle (jen 3D)
  const svgCheckbox = document.getElementById('toggle-svg-symbols') as HTMLInputElement | null;
  if (svgCheckbox) {
    svgCheckbox.checked = getUseSvgSymbols();
    svgCheckbox.addEventListener('change', () => {
      setUseSvgSymbols(svgCheckbox.checked);
    });
  }

  // Terén (ČÚZK DMR5G) toggle (jen 3D)
  const terrainCheckbox = document.getElementById('toggle-terrain') as HTMLInputElement | null;
  const terrainSpinner = document.getElementById('terrain-spinner') as HTMLElement | null;
  if (terrainCheckbox) {
    terrainCheckbox.checked = isTerrainVisible();
    terrainCheckbox.addEventListener('change', async () => {
      if (terrainCheckbox.checked) {
        terrainSpinner?.removeAttribute('hidden');
        terrainCheckbox.disabled = true;
        try {
          await setTerrainVisible(true);
        } catch (err) {
          console.error('[terrain] načtení selhalo', err);
          alert(
            'Nepodařilo se načíst terén z ČÚZK DMR5G:\n' +
            (err as Error).message
          );
          terrainCheckbox.checked = false;
          // Zachovat konzistenci stavu v threeScene
          void setTerrainVisible(false);
        } finally {
          terrainSpinner?.setAttribute('hidden', '');
          terrainCheckbox.disabled = false;
        }
      } else {
        await setTerrainVisible(false);
      }
    });
  }

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
  btn.title = 'Přepnout zpět na 2D mapu';
  btn.classList.add('active');

  // 2D highlight přestává být viditelný (mapa je skrytá); 3D highlight
  // znovu aplikujeme níže po inicializaci scény.
  clearHighlight();

  mapContainer.style.display = 'none';
  canvas.style.display = 'block';

  // Show bottom toolbars (3D nav + z-exaggeration)
  const toolbar = document.getElementById('bottom-toolbars');
  if (toolbar) toolbar.style.display = 'flex';

  // Show 3D-only options in the layer panel
  const threeOpts = document.getElementById('three-options-section');
  if (threeOpts) threeOpts.style.display = '';

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

  // Přenést výběr z 2D → 3D (highlight + zoom na objekt)
  reapplyActiveHighlight();
}

function switchTo2d(
  olMap: Map,
  mapContainer: HTMLDivElement,
  canvas: HTMLCanvasElement,
  btn: HTMLButtonElement
): void {
  is3dActive = false;
  btn.textContent = '3D';
  btn.title = 'Přepnout mezi 2D mapou a 3D pohledem';
  btn.classList.remove('active');

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  disposeThreeScene();

  // Hide bottom toolbars
  const toolbar = document.getElementById('bottom-toolbars');
  if (toolbar) toolbar.style.display = 'none';

  // Hide 3D-only options in the layer panel
  const threeOpts = document.getElementById('three-options-section');
  if (threeOpts) threeOpts.style.display = 'none';

  canvas.style.display = 'none';
  mapContainer.style.display = 'block';

  // Trigger OL map to update its size, then reapply selection (3D → 2D).
  // OL vyžaduje platnou velikost viewportu, jinak by zoom/fit selhal.
  setTimeout(() => {
    olMap.updateSize();
    reapplyActiveHighlight();
  }, 50);
}
