/**
 * Vzhled objektů čistého JVF DTM podle Katalogu kartografických symbolů
 * DTM ČR (ČÚZK) — sdílí ho viewer (2D/3D/legenda) i export do CAD.
 *
 * Katalog je klíčovaný jen kódem objektu (`codeBase`), ale objekt může mít
 * bod, linii, plochu i definiční bod. Vzhled se proto skládá podle typu
 * geometrie (přípona kódu `-01` bod, `-02` linie, `-03` plocha, `-04`
 * definiční bod):
 *
 * 1. základ objektu,
 * 2. varianta podle geometrie (`attrKey` null / „geometrie", hodnota
 *    „bod" / „linie" / „plocha"),
 * 3. varianta podle hodnoty atributu (`VARIANT_ATTR`). Katalog má u jedné
 *    hodnoty často dvě varianty — plošnou (obrys + výplň) a bodovou (značka);
 *    vybere se ta, která odpovídá geometrii.
 *
 * Konvence Katalogu: barva linie a bodu bývá ve `fillColor`; u ploch bez
 * `strokeColor`, ale s tloušťkou a sytou barvou (ochranná pásma, záměry) je
 * `fillColor` barva obrysu — taková plocha se nevyplňuje.
 */
import { type ObjectSymbology } from './symbology.js';
export type KatalogGeom = 'bod' | 'linie' | 'plocha' | 'defbod';
/** Vzhled záznamu podle Katalogu. */
export interface KatalogLook {
    /** Barva linie, obrysu plochy nebo bodu (`#rrggbb`). */
    color?: string;
    /** Výplň plochy (`#rrggbb`); chybí = plocha jen obrysem. */
    fill?: string;
    /** Tloušťka čáry v mm (papír, 1:500). */
    widthMm?: number;
    /** Čárkování v mm (papír, 1:500). */
    dashMm?: number[];
    /** Soubor SVG značky (kartografický balíček ČÚZK) — jen body a definiční body. */
    svg?: string;
    /**
     * Značka vložená do linie (`*_l_*.svg` — blesk elektrického vedení, třída
     * silnice „D I", …); kreslí se do mezer čárkování. Jen linie.
     */
    lineSvg?: string;
}
interface CodeKey {
    codeBase: string;
    codeSuffix: string;
}
interface AttrSource {
    attributes?: Readonly<Record<string, unknown>>;
}
/** Typ geometrie z přípony kódu objektu (`-01` … `-04`). */
export declare function katalogGeomOf(codeSuffix: string): KatalogGeom;
/** Symbologie objektu z Katalogu, nebo `undefined`. */
export declare function getKatalogSymbology(codeBase: string): ObjectSymbology | undefined;
/**
 * Čárkování z popisu typu čáry Katalogu (mm papíru).
 *
 *   'plná'                        → undefined
 *   'čárkovaná 60,0 6,0 [68]'     → [60, 6]
 *   'čárkovaná 2,0 1,5 /\n3,5 7,0' → [2, 1.5, 3.5, 7]
 *
 * Desetinná čárka → tečka, `[NN]` (číslo vzoru) se ignoruje, lichý počet
 * hodnot se doplní na sudý (čárka, mezera, …).
 */
export declare function parseKatalogLineStyle(lineStyle: string | undefined): number[] | undefined;
/**
 * Vzhled záznamu podle Katalogu (bez záznamu vzhled objektu a geometrie).
 * `undefined` pokud objekt v Katalogu není.
 *
 * Když vzhled nemá barvu (základ objektu barvu nenese a varianta hodnoty
 * atributu ji v Katalogu nemá vyplněnou — sloučené buňky tabulky, nebo
 * hodnota chybí), doplní se barva z reprezentativního vzhledu — téže
 * definice, kterou kreslí legenda a panel vrstev. Mapa, legenda i export
 * tak nikdy nemají pro stejný objekt jinou barvu.
 */
export declare function resolveKatalogLook(ot: CodeKey, zaznam?: AttrSource): KatalogLook | undefined;
/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): když objekt
 * nemá barvu v základu ani ve variantě geometrie, vezme se z první varianty
 * atributu vhodné pro geometrii (typicky trasy sítí podle druhu).
 */
export declare function resolveKatalogRepresentativeLook(ot: CodeKey): KatalogLook | undefined;
/**
 * Hodnota atributu, podle které má záznam v Katalogu vlastní vzhled
 * (např. „nástěnná konzola" u podpěrného zařízení), nebo `undefined`, když
 * vzhled objektu na atributu nezávisí nebo záznam hodnotu nemá. Panel vrstev
 * podle ní volí značku podle skutečných dat.
 */
export declare function resolveKatalogVariantValue(ot: CodeKey, zaznam: AttrSource): string | undefined;
/** Vzhled jedné hodnoty atributu (dlaždice legendy). */
export interface KatalogVariantLook {
    /** Hodnota atributu z Katalogu („stožár příhradový", „NN", …). */
    value: string;
    look: KatalogLook;
}
/**
 * Vzhledy objektu podle hodnoty atributu pro jeho geometrii — jedna položka
 * na hodnotu, v pořadí Katalogu. Jen hodnoty, které mapa umí rozlišit
 * (`VARIANT_ATTR`), a jen když se vzhledy liší; jinak prázdné pole
 * (objekt má jeden vzhled — legenda ukáže reprezentativní).
 */
export declare function resolveKatalogVariantLooks(ot: CodeKey): KatalogVariantLook[];
export {};
//# sourceMappingURL=resolve.d.ts.map