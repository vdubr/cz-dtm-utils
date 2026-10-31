/**
 * Vzhled objektů dle UDM 2.1.1 (Univerzální datový model ČKZ, kap. 15).
 *
 * Data `UDM_STYLES` generuje `scripts/udm/build-udm-styles.py` z tabulky
 * „Struktura UDM 2.1.1.xlsx". Sdílí je viewer (2D/3D/legenda) i export do CAD.
 * Pokrývá všechny objekty UDM — DTM (01…/02…) i nad rámec DTM (94…).
 */
import type { ObjektovyTyp, ZaznamObjektu } from './types.js';
import { UDM_STYLES, type UdmAppearance, type UdmObjectStyle } from './generated/styles.js';

export { UDM_STYLES };
export type { UdmAppearance, UdmAttrRule, UdmObjectStyle } from './generated/styles.js';

/** Styl objektového typu dle UDM (klíč `<code_base>-<suffix>`), nebo `undefined`. */
export function getUdmStyle(ot: Pick<ObjektovyTyp, 'codeBase' | 'codeSuffix'>): UdmObjectStyle | undefined {
  return UDM_STYLES[`${ot.codeBase}-${ot.codeSuffix}`];
}

/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce UDM není.
 */
export function resolveUdmAppearance(
  ot: Pick<ObjektovyTyp, 'codeBase' | 'codeSuffix'>,
  zaznam?: ZaznamObjektu,
): UdmAppearance | undefined {
  const style = getUdmStyle(ot);
  if (!style) return undefined;
  const app: UdmAppearance = { ...style.base };
  if (zaznam && style.rules) {
    for (const rule of style.rules) {
      const raw = zaznam.attributes?.[rule.attr];
      if (raw === undefined || raw === null) continue;
      Object.assign(app, rule.values[String(raw)]);
    }
  }
  return app;
}

/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): složky,
 * které objekt přebírá z číselníku, se vezmou z první položky, která je má.
 */
export function resolveUdmRepresentativeAppearance(
  ot: Pick<ObjektovyTyp, 'codeBase' | 'codeSuffix'>,
): UdmAppearance | undefined {
  const style = getUdmStyle(ot);
  if (!style) return undefined;
  const app: UdmAppearance = { ...style.base };
  for (const rule of style.rules ?? []) {
    for (const value of Object.values(rule.values)) {
      for (const [k, v] of Object.entries(value) as [keyof UdmAppearance, never][]) {
        if (app[k] === undefined) app[k] = v;
      }
    }
  }
  return app;
}
