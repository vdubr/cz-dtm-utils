/**
 * Posuvník Material 3 (`input.m3-slider`): aktivní část dráhy v barvě
 * primary vlevo od palce, neaktivní vpravo s tečkou na konci (stop
 * indicator). Firefox kreslí aktivní část sám (`::-moz-range-progress`),
 * Chrome / Safari z CSS proměnné `--m3-slider-fill` (podíl 0–1, viz m3.css).
 */

/** Přepočítá výplň posuvníku podle hodnoty. */
function syncSliderFill(input: HTMLInputElement): void {
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const ratio = max > min ? (Number(input.value) - min) / (max - min) : 0;
  input.style.setProperty('--m3-slider-fill', String(Math.min(1, Math.max(0, ratio))));
}

/** Nastaví hodnotu posuvníku z kódu i s výplní dráhy (programové `value =` událost `input` nevyvolá). */
export function setSliderValue(input: HTMLInputElement, value: number): void {
  input.value = String(value);
  syncSliderFill(input);
}

/** Výplň všech posuvníků — při posunu (delegovaně, i u dynamicky vložených) a hned u stávajících. */
export function setupM3Sliders(): void {
  document.addEventListener('input', (e) => {
    const t = e.target;
    if (t instanceof HTMLInputElement && t.classList.contains('m3-slider')) syncSliderFill(t);
  });
  document.querySelectorAll<HTMLInputElement>('input.m3-slider').forEach(syncSliderFill);
}
