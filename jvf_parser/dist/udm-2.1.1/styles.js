import { UDM_STYLES } from './generated/styles.js';
export { UDM_STYLES };
/** Styl objektového typu dle UDM (klíč `<code_base>-<suffix>`), nebo `undefined`. */
export function getUdmStyle(ot) {
    return UDM_STYLES[`${ot.codeBase}-${ot.codeSuffix}`];
}
/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce UDM není.
 */
export function resolveUdmAppearance(ot, zaznam) {
    const style = getUdmStyle(ot);
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
export function resolveUdmRepresentativeAppearance(ot) {
    const style = getUdmStyle(ot);
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
//# sourceMappingURL=styles.js.map