import { LAYER_COLORS } from '../map/jvfLayers.js';

/**
 * Název obsahové části (ZPS, TI, DI, ZDT, …) tlustě podtržený barvou části —
 * stejně v čipech legendy, Přehledu prvků i v panelu vrstev.
 */
export function buildPartLabel(part: string, text = part): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = 'part-underline';
  span.style.setProperty('--part-color', LAYER_COLORS[part] ?? '#90a4ae');
  span.textContent = text;
  return span;
}
