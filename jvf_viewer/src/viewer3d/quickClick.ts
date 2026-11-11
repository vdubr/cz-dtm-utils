/**
 * Rozlišení kliku od ovládání kamery ve 3D. Levé tlačítko i Shift+levé
 * tažení otáčí / posouvá scénou a prohlížeč po uvolnění stejně pošle
 * `click` — ten se nesmí brát jako výběr prvku, bod měření ani nový střed
 * otáčení. Klik se proto uzná, jen když je krátký (stisknutí → uvolnění
 * do 200 ms) a myš se mezitím skoro nepohnula.
 */
const CLICK_MAX_MS = 200;
const CLICK_MAX_PX = 5;

let down: { x: number; y: number; t: number; button: number; moved: number } | null = null;
let installed = false;

/** Začne sledovat stisknutí na plátně 3D (jednou, capture — před ovládáním kamery). */
export function installQuickClick(canvas: HTMLElement): void {
  if (installed) return;
  installed = true;
  canvas.addEventListener('pointerdown', (e) => {
    down = { x: e.clientX, y: e.clientY, t: e.timeStamp, button: e.button, moved: 0 };
  }, { capture: true });
  // Největší odchylka během stisku — tažení tam a zpět není klik.
  canvas.addEventListener('pointermove', (e) => {
    if (!down || e.buttons === 0) return;
    down.moved = Math.max(down.moved, Math.hypot(e.clientX - down.x, e.clientY - down.y));
  }, { capture: true });
}

/** Je tento `click` / `dblclick` opravdový klik (krátký, levým, bez tažení)? */
export function isQuickClick(e: MouseEvent): boolean {
  if (!down || down.button !== 0 || e.shiftKey) return false;
  const moved = Math.max(down.moved, Math.hypot(e.clientX - down.x, e.clientY - down.y));
  return e.timeStamp - down.t <= CLICK_MAX_MS && moved <= CLICK_MAX_PX;
}
