/**
 * Řešení vzhledu objektu z tabulky stylů dialektu (UDM, ŽXML) a registr
 * tabulek podle verze datového modelu.
 */
import { dialectOf } from 'jvf-dtm-types';
import { UDM_STYLES } from '../udm-2.1.1/generated/styles.js';
import { ZXML_STYLES } from '../zxml-1.5.1.6/generated/styles.js';
/**
 * Tabulky stylů podle dialektu. Kódy objektů ŽXML jsou v 1.4.2.1 i 1.5.1.6
 * stejné, sdílí se tedy jedna tabulka (katalog MOZeK je k 1.4.2.1).
 */
const STYLES_BY_DIALECT = {
    udm: UDM_STYLES,
    zxml: ZXML_STYLES,
};
/** Tabulka stylů pro verzi datového modelu, nebo `undefined` (čisté JVF DTM). */
export function getStyleTable(version) {
    const d = dialectOf(version);
    return d ? STYLES_BY_DIALECT[d.id] : undefined;
}
/** Styl objektového typu (klíč `<code_base>-<suffix>`), nebo `undefined`. */
export function getObjectStyle(styles, ot) {
    return styles[`${ot.codeBase}-${ot.codeSuffix}`];
}
/** Má styl vlastní vzhled (značka, čárkování, pravidla) — ne jen barvu obsahové části? */
function hasOwnLook(style) {
    return Boolean(style.base.symbol || style.base.dashMm || style.rules?.length);
}
/**
 * Kreslí se objektový typ souboru dané verze vzhledem dialektu (jinak
 * Katalogem DTM ČR)? Jediné rozhodnutí pro viewer i export do CAD.
 *
 * UDM pokrývá všechny objekty. ŽXML (fotokatalog MOZeK) má vlastní vzhled
 * hlavně u objektů SŽ (`999…`); objekty JVF bez vlastní značky / čárkování
 * (jen barva obsahové části) se kreslí oficiálním vzhledem Katalogu ČÚZK.
 */
export function usesDialectStyle(version, ot) {
    const d = dialectOf(version);
    const styles = d ? STYLES_BY_DIALECT[d.id] : undefined;
    const style = styles ? getObjectStyle(styles, ot) : undefined;
    if (!style)
        return false;
    return !(d.id === 'zxml' && !ot.codeBase.startsWith('999') && !hasOwnLook(style));
}
/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce není.
 */
export function resolveAppearance(styles, ot, zaznam) {
    const style = getObjectStyle(styles, ot);
    if (!style)
        return undefined;
    const app = { ...style.base };
    if (zaznam && style.rules) {
        for (const rule of style.rules) {
            const raw = zaznam.attributes?.[rule.attr];
            if (raw === undefined || raw === null)
                continue;
            Object.assign(app, rule.values[String(raw)]);
        }
    }
    return app;
}
/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): složky,
 * které objekt přebírá z číselníku, se vezmou z první položky, která je má.
 */
export function resolveRepresentativeAppearance(styles, ot) {
    const style = getObjectStyle(styles, ot);
    if (!style)
        return undefined;
    const app = { ...style.base };
    for (const rule of style.rules ?? []) {
        for (const value of Object.values(rule.values)) {
            for (const [k, v] of Object.entries(value)) {
                if (app[k] === undefined)
                    app[k] = v;
            }
        }
    }
    return app;
}
/**
 * Natočení symbolu záznamu ve stupních podle `rotationAttr` vzhledu,
 * nebo `undefined`.
 */
export function resolveRotationDeg(app, zaznam) {
    if (!app?.rotationAttr || !zaznam)
        return undefined;
    const raw = Number(zaznam.attributes?.[app.rotationAttr]);
    return Number.isFinite(raw) ? raw : undefined;
}
//# sourceMappingURL=resolve.js.map