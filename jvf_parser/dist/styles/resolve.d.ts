import type { ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import type { Appearance, ObjectStyle, StyleTable } from './types.js';
type CodeKey = Pick<ObjektovyTyp, 'codeBase' | 'codeSuffix'>;
/** Tabulka stylů pro verzi datového modelu, nebo `undefined` (čisté JVF DTM). */
export declare function getStyleTable(version: string): StyleTable | undefined;
/** Styl objektového typu (klíč `<code_base>-<suffix>`), nebo `undefined`. */
export declare function getObjectStyle(styles: StyleTable, ot: CodeKey): ObjectStyle | undefined;
/**
 * Kreslí se objektový typ souboru dané verze vzhledem dialektu (jinak
 * Katalogem DTM ČR)? Jediné rozhodnutí pro viewer i export do CAD.
 *
 * UDM pokrývá všechny objekty. ŽXML (styly SLD SŽ) jen objekty SŽ (`999…`)
 * — objekty JVF kreslí ISTEM stejně jako Katalog ČÚZK.
 */
export declare function usesDialectStyle(version: string, ot: CodeKey): boolean;
/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce není.
 */
export declare function resolveAppearance(styles: StyleTable, ot: CodeKey, zaznam?: ZaznamObjektu): Appearance | undefined;
/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): složky,
 * které objekt přebírá z číselníku, se vezmou z první položky, která je má.
 */
export declare function resolveRepresentativeAppearance(styles: StyleTable, ot: CodeKey): Appearance | undefined;
/**
 * Natočení symbolu záznamu ve stupních podle `rotationAttr` vzhledu,
 * nebo `undefined`.
 */
export declare function resolveRotationDeg(app: Appearance | undefined, zaznam?: ZaznamObjektu): number | undefined;
export {};
//# sourceMappingURL=resolve.d.ts.map