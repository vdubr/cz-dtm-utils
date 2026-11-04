/**
 * Vzhled Katalogu DTM ČR v obecném modelu `Appearance` (export do CAD).
 * Id symbolu = `dtm-` + název SVG bez přípony (blok `DTM_…` v CAD).
 */
import type { Appearance } from '../styles/types.js';
import { resolveKatalogLook, resolveKatalogRepresentativeLook, type KatalogLook } from './resolve.js';

interface CodeKey {
  codeBase: string;
  codeSuffix: string;
}

/** Id symbolu pro soubor SVG Katalogu (`ZPS_db.svg` → `dtm-ZPS_db`). */
export function katalogSymbolId(svg: string): string {
  return 'dtm-' + svg.replace(/\.svg$/i, '');
}

function toAppearance(look: KatalogLook | undefined): Appearance | undefined {
  if (!look) return undefined;
  const app: Appearance = {};
  const color = look.color ?? look.fill;
  if (color) app.color = color;
  if (look.fill) app.fill = look.fill;
  if (look.widthMm !== undefined) app.widthMm = look.widthMm;
  if (look.dashMm) app.dashMm = look.dashMm;
  if (look.svg) app.symbol = katalogSymbolId(look.svg);
  return app;
}

/** Vzhled záznamu čistého JVF DTM podle Katalogu, nebo `undefined`. */
export function resolveKatalogAppearance(
  ot: CodeKey,
  zaznam?: { attributes?: Readonly<Record<string, unknown>> },
): Appearance | undefined {
  return toAppearance(resolveKatalogLook(ot, zaznam));
}

/** Reprezentativní vzhled objektu podle Katalogu (hladina v CAD, legenda). */
export function resolveKatalogRepresentativeAppearance(ot: CodeKey): Appearance | undefined {
  return toAppearance(resolveKatalogRepresentativeLook(ot));
}
