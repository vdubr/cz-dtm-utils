/**
 * Symbologie UDM (Univerzální datový model ČKZ) ve vieweru.
 *
 * Objektové typy načtené ze souboru UDM se kreslí dle vzhledů UDM
 * (`UDM_STYLES` z jvf-parser) místo katalogu symbolů ČÚZK — týká se všech
 * objektů souboru (DTM i nad rámec DTM `94…`). Které typy patří do UDM
 * projektu, se eviduje přes `markUdmObjekty` (WeakSet nad `ObjektovyTyp` —
 * stejné instance tečou do 2D vrstev, 3D scény i panelů).
 */
import type { ObjektovyTyp } from 'jvf-parser';

export { resolveUdmAppearance, resolveUdmRepresentativeAppearance } from 'jvf-parser';

const udmTypes = new WeakSet<ObjektovyTyp>();

/** Označit objektové typy jako UDM (kreslit symbologií UDM). */
export function markUdmObjekty(objekty: readonly ObjektovyTyp[]): void {
  for (const ot of objekty) udmTypes.add(ot);
}

/** Kreslí se daný objektový typ symbologií UDM? */
export function isUdmStyled(ot: ObjektovyTyp): boolean {
  return udmTypes.has(ot);
}

/** Cesta k SVG symbolu UDM (relativně k `public/symboly/`) v dané barvě. */
export function udmSymbolPath(symbol: string, color: string): string {
  return `udm/${symbol}_${color.replace('#', '').toLowerCase()}.svg`;
}
