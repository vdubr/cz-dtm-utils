/**
 * Obecný model vzhledu objektů dialektu (UDM, ŽXML) — sdílí ho viewer
 * (2D/3D/legenda) i export do CAD. Data generují skripty
 * `scripts/udm/build-udm-styles.py` a `scripts/zxml/build-zxml-styles.py`.
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
}

/** Vzhled podle hodnoty atributu (číselníku): `values[kód] → vzhled`. */
export interface AttrRule {
  attr: string;
  values: Record<string, Appearance>;
}

export interface ObjectStyle {
  base: Appearance;
  rules?: AttrRule[];
}

/** Styly objektů dialektu, klíč `<code_base>-<code_suffix>`. */
export type StyleTable = Readonly<Record<string, ObjectStyle>>;
