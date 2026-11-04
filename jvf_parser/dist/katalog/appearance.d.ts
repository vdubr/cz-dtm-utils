/**
 * Vzhled Katalogu DTM ČR v obecném modelu `Appearance` (export do CAD).
 * Id symbolu = `dtm-` + název SVG bez přípony (blok `DTM_…` v CAD).
 */
import type { Appearance } from '../styles/types.js';
interface CodeKey {
    codeBase: string;
    codeSuffix: string;
}
/** Id symbolu pro soubor SVG Katalogu (`ZPS_db.svg` → `dtm-ZPS_db`). */
export declare function katalogSymbolId(svg: string): string;
/** Vzhled záznamu čistého JVF DTM podle Katalogu, nebo `undefined`. */
export declare function resolveKatalogAppearance(ot: CodeKey, zaznam?: {
    attributes?: Readonly<Record<string, unknown>>;
}): Appearance | undefined;
/** Reprezentativní vzhled objektu podle Katalogu (hladina v CAD, legenda). */
export declare function resolveKatalogRepresentativeAppearance(ot: CodeKey): Appearance | undefined;
export {};
//# sourceMappingURL=appearance.d.ts.map