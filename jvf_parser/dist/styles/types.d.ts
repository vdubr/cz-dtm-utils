/**
 * Obecný model vzhledu objektů dialektu (UDM, ŽXML) — sdílí ho viewer
 * (2D/3D/legenda) i export do CAD. Data generují skripty
 * `scripts/udm/build-udm-styles.py` a `scripts/zxml/build-zxml-styles.py`.
 * Čisté JVF DTM (Katalog DTM ČR) převádí do stejného modelu
 * `katalog/appearance.ts`.
 */
/** Vzhled objektu nebo položky číselníku. */
export interface Appearance {
    color?: string;
    /** Tloušťka čáry v mm (papír, 1:500). */
    widthMm?: number;
    /** Čárkování v mm (papír, 1:500), bez vložených značek. */
    dashMm?: number[];
    /** Id symbolu (SVG v `public/symboly/<dialekt>/`, blok v CAD). */
    symbol?: string;
    /** Atribut s natočením symbolu ve stupních (např. `Natoceni`). */
    rotationAttr?: string;
    /** Výplň plochy (`#rrggbb`) — Katalog DTM ČR a ŽXML (SLD); UDM plochy nevyplňuje. */
    fill?: string;
    /** Příčky na plné čáře [tloušťka, rozestup, …] v mm papíru (plot, úhelník). */
    ticksMm?: number[];
}
/** Vzhled podle hodnoty atributu (číselníku): `values[kód] → vzhled`. */
export interface AttrRule {
    attr: string;
    values: Record<string, Appearance>;
}
/**
 * Vzhled podle kombinace hodnot více atributů (složený filtr SLD ŽXML):
 * platí, když záznam má všechny hodnoty `when` a žádnou z `unless`.
 */
export interface CaseRule {
    when: Record<string, string>;
    unless?: Record<string, string>;
    app: Appearance;
}
export interface ObjectStyle {
    base: Appearance;
    rules?: AttrRule[];
    /** Složená pravidla — použije se první vyhovující (po `rules`). */
    cases?: CaseRule[];
}
/** Styly objektů dialektu, klíč `<code_base>-<code_suffix>`. */
export type StyleTable = Readonly<Record<string, ObjectStyle>>;
//# sourceMappingURL=types.d.ts.map