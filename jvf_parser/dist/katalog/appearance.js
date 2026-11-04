import { resolveKatalogLook, resolveKatalogRepresentativeLook } from './resolve.js';
/** Id symbolu pro soubor SVG Katalogu (`ZPS_db.svg` → `dtm-ZPS_db`). */
export function katalogSymbolId(svg) {
    return 'dtm-' + svg.replace(/\.svg$/i, '');
}
function toAppearance(look) {
    if (!look)
        return undefined;
    const app = {};
    const color = look.color ?? look.fill;
    if (color)
        app.color = color;
    if (look.fill)
        app.fill = look.fill;
    if (look.widthMm !== undefined)
        app.widthMm = look.widthMm;
    if (look.dashMm)
        app.dashMm = look.dashMm;
    if (look.svg)
        app.symbol = katalogSymbolId(look.svg);
    return app;
}
/** Vzhled záznamu čistého JVF DTM podle Katalogu, nebo `undefined`. */
export function resolveKatalogAppearance(ot, zaznam) {
    return toAppearance(resolveKatalogLook(ot, zaznam));
}
/** Reprezentativní vzhled objektu podle Katalogu (hladina v CAD, legenda). */
export function resolveKatalogRepresentativeAppearance(ot) {
    return toAppearance(resolveKatalogRepresentativeLook(ot));
}
//# sourceMappingURL=appearance.js.map