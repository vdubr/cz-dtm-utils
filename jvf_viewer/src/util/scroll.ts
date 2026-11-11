/**
 * Rychlé plynulé nascrollování prvku do středu scrollovacího kontejneru.
 *
 * Náhrada za `scrollIntoView({ behavior: 'smooth' })`, jehož délku určuje
 * prohlížeč — u dlouhého Přehledu prvků trvala animace přes sekundu.
 * Tady je délka shora omezená (`maxMs`, výchozí 300 ms), kratší vzdálenost
 * se posune rychleji. Při `prefers-reduced-motion` se skočí bez animace.
 * Nová animace téhož kontejneru přeruší předchozí.
 */
const running = new WeakMap<HTMLElement, number>();

/** Délka animace pro danou vzdálenost v px (120–maxMs ms). */
export function scrollDurationMs(distancePx: number, maxMs = 300): number {
  return Math.min(maxMs, Math.max(120, Math.abs(distancePx) / 4));
}

export function scrollIntoViewFast(container: HTMLElement, el: HTMLElement, maxMs = 300): void {
  const prev = running.get(container);
  if (prev !== undefined) cancelAnimationFrame(prev);

  const cRect = container.getBoundingClientRect();
  const eRect = el.getBoundingClientRect();
  const maxTop = container.scrollHeight - container.clientHeight;
  const start = container.scrollTop;
  const target = Math.max(0, Math.min(maxTop,
    start + (eRect.top - cRect.top) - (container.clientHeight - eRect.height) / 2));
  const distance = target - start;
  if (Math.abs(distance) < 1) return;

  const reduced = typeof matchMedia === 'function'
    && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    container.scrollTop = target;
    return;
  }

  const duration = scrollDurationMs(distance, maxMs);
  const t0 = performance.now();
  const step = (now: number): void => {
    const t = Math.min(1, (now - t0) / duration);
    const eased = 1 - (1 - t) ** 3; // ease-out cubic
    container.scrollTop = start + distance * eased;
    if (t < 1) running.set(container, requestAnimationFrame(step));
    else running.delete(container);
  };
  running.set(container, requestAnimationFrame(step));
}
