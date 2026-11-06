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
import { SYMBOLOGY } from './symbology.js';
import { VARIANT_ATTR } from './variantAttrMap.js';
/** Typ geometrie z přípony kódu objektu (`-01` … `-04`). */
export function katalogGeomOf(codeSuffix) {
    switch (codeSuffix) {
        case '01':
            return 'bod';
        case '02':
            return 'linie';
        case '04':
            return 'defbod';
        default:
            return 'plocha';
    }
}
/** Symbologie objektu z Katalogu, nebo `undefined`. */
export function getKatalogSymbology(codeBase) {
    return SYMBOLOGY[codeBase];
}
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
export function parseKatalogLineStyle(lineStyle) {
    if (!lineStyle)
        return undefined;
    const trimmed = lineStyle.trim();
    if (trimmed === 'plná' || trimmed === '')
        return undefined;
    const body = trimmed.replace(/^čárkovaná\s+/i, '').replace(/\s*\[\d+\]\s*$/, '');
    const nums = [];
    for (const t of body.split(/[\s/\n]+/).filter(Boolean)) {
        const n = parseFloat(t.replace(',', '.'));
        if (Number.isFinite(n) && n > 0)
            nums.push(n);
    }
    if (nums.length === 0)
        return undefined;
    if (nums.length % 2 === 1)
        nums.push(nums[nums.length - 1]);
    return nums;
}
const norm = (s) => s.normalize('NFC').replace(/\s+/g, ' ').trim().toLowerCase();
/** Druh značky podle názvu souboru: `b` bod, `l` linie, `p` plošná značka. */
function svgKind(file) {
    const m = file?.match(/^[A-Z]+_([blp])_/);
    return m ? m[1] : undefined;
}
/** Varianta podle geometrie („bod", „linie", „plocha (koridor záměru)"…). */
function isGeometryVariant(v) {
    return (v.attrKey === null || v.attrKey === 'geometrie') && /^(bod|linie|plocha)\b/.test(norm(v.attrValue));
}
/** Bodová varianta = značka bez obrysu (barva značky ve `fillColor`). */
function isPointVariant(v) {
    if (v.lineStyle || v.strokeColor)
        return false;
    const kind = svgKind(v.lineSvg);
    return kind === 'b' || (kind === undefined && (v.strokeWidth ?? 0) >= 1);
}
function wantsPoint(geom) {
    return geom === 'bod' || geom === 'defbod';
}
/** Z kandidátů (stejná hodnota atributu) vybere variantu pro geometrii. */
function pickVariant(cands, geom) {
    // Definiční bod plochy nese plošnou značku (`*_p_*_lab.svg`), je-li.
    const area = geom === 'defbod' ? cands.find((v) => svgKind(v.lineSvg) === 'p') : undefined;
    const fits = area ?? cands.find((v) => isPointVariant(v) === wantsPoint(geom));
    return fits ?? cands[0];
}
function geometryVariant(sym, geom) {
    const word = wantsPoint(geom) ? 'bod' : geom;
    return sym.variants?.find((v) => isGeometryVariant(v) && norm(v.attrValue).startsWith(word));
}
/** Varianta Katalogu pro hodnotu atributu záznamu (`VARIANT_ATTR`), nebo `undefined`. */
function attrHit(sym, zaznam) {
    const map = VARIANT_ATTR[sym.code];
    if (!map || !sym.variants?.length || !zaznam?.attributes)
        return undefined;
    const raw = zaznam.attributes[map.attrName];
    if (raw === undefined || raw === null)
        return undefined;
    const idx = map.valueToVariantIndex[String(raw)];
    return idx !== undefined ? sym.variants[idx] : undefined;
}
/** Varianty se stejnou hodnotou atributu jako varianta z `VARIANT_ATTR`. */
function attrCandidates(sym, zaznam) {
    const hit = attrHit(sym, zaznam);
    if (!hit)
        return [];
    const label = norm(hit.attrValue);
    return sym.variants.filter((v) => v.attrKey === hit.attrKey && norm(v.attrValue) === label);
}
function merge(...layers) {
    const out = {};
    for (const l of layers) {
        if (!l)
            continue;
        if (l.fillColor !== undefined)
            out.fillColor = l.fillColor;
        if (l.strokeColor !== undefined)
            out.strokeColor = l.strokeColor;
        if (l.strokeWidth !== undefined)
            out.strokeWidth = l.strokeWidth;
        if (l.lineStyle !== undefined)
            out.lineStyle = l.lineStyle;
    }
    return out;
}
/** Světlá barva (výplň), ne barva obrysu. */
function isLight(hex) {
    const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(hex);
    if (!m)
        return false;
    const [r, g, b] = [m[1], m[2], m[3]].map((h) => parseInt(h, 16) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.8;
}
function pointSvgOf(file) {
    return file && svgKind(file) !== 'l' ? file : undefined;
}
function compose(sym, geom, geomVar, attrVar) {
    const m = merge(sym, geomVar, attrVar);
    const look = {};
    const dash = parseKatalogLineStyle(m.lineStyle);
    if (wantsPoint(geom)) {
        look.color = m.fillColor ?? m.strokeColor;
        const fromAttr = pointSvgOf(attrVar?.lineSvg);
        look.svg =
            geom === 'defbod'
                ? ((svgKind(fromAttr) === 'p' ? fromAttr : undefined) ?? sym.areaSvg ?? fromAttr ?? pointSvgOf(geomVar?.lineSvg) ?? sym.pointSvg)
                : (fromAttr ?? pointSvgOf(geomVar?.lineSvg) ?? sym.pointSvg);
    }
    else if (geom === 'linie') {
        look.color = m.strokeColor ?? m.fillColor;
        look.widthMm = m.strokeWidth;
        look.dashMm = dash;
    }
    else if (m.strokeColor) {
        look.color = m.strokeColor;
        look.fill = m.fillColor;
        look.widthMm = m.strokeWidth;
        look.dashMm = dash;
    }
    else if (m.fillColor && m.strokeWidth !== undefined && !isLight(m.fillColor)) {
        look.color = m.fillColor;
        look.widthMm = m.strokeWidth;
        look.dashMm = dash;
    }
    else {
        look.fill = m.fillColor;
        look.dashMm = dash;
    }
    for (const k of Object.keys(look))
        if (look[k] === undefined)
            delete look[k];
    return look;
}
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
export function resolveKatalogLook(ot, zaznam) {
    const sym = SYMBOLOGY[ot.codeBase];
    if (!sym)
        return undefined;
    const geom = katalogGeomOf(ot.codeSuffix);
    const look = compose(sym, geom, geometryVariant(sym, geom), pickVariant(attrCandidates(sym, zaznam), geom));
    if (look.color || look.fill)
        return look;
    const rep = resolveKatalogRepresentativeLook(ot);
    return rep ? { ...rep, ...look } : look;
}
/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): když objekt
 * nemá barvu v základu ani ve variantě geometrie, vezme se z první varianty
 * atributu vhodné pro geometrii (typicky trasy sítí podle druhu).
 */
export function resolveKatalogRepresentativeLook(ot) {
    const sym = SYMBOLOGY[ot.codeBase];
    if (!sym)
        return undefined;
    const geom = katalogGeomOf(ot.codeSuffix);
    const geomVar = geometryVariant(sym, geom);
    const look = compose(sym, geom, geomVar, undefined);
    if (look.color || look.fill)
        return look;
    const attrVars = (sym.variants ?? []).filter((v) => !isGeometryVariant(v) && (v.fillColor !== undefined || v.strokeColor !== undefined));
    const rep = attrVars.find((v) => isPointVariant(v) === wantsPoint(geom)) ?? attrVars[0];
    return rep ? compose(sym, geom, geomVar, rep) : look;
}
/**
 * Hodnota atributu, podle které má záznam v Katalogu vlastní vzhled
 * (např. „nástěnná konzola" u podpěrného zařízení), nebo `undefined`, když
 * vzhled objektu na atributu nezávisí nebo záznam hodnotu nemá. Panel vrstev
 * podle ní volí značku podle skutečných dat.
 */
export function resolveKatalogVariantValue(ot, zaznam) {
    const sym = SYMBOLOGY[ot.codeBase];
    const hit = sym && attrHit(sym, zaznam);
    return hit && !isGeometryVariant(hit) ? hit.attrValue : undefined;
}
/**
 * Vzhledy objektu podle hodnoty atributu pro jeho geometrii — jedna položka
 * na hodnotu, v pořadí Katalogu. Jen hodnoty, které mapa umí rozlišit
 * (`VARIANT_ATTR`), a jen když se vzhledy liší; jinak prázdné pole
 * (objekt má jeden vzhled — legenda ukáže reprezentativní).
 */
export function resolveKatalogVariantLooks(ot) {
    const sym = SYMBOLOGY[ot.codeBase];
    const map = VARIANT_ATTR[ot.codeBase];
    if (!sym?.variants?.length || !map)
        return [];
    // Hodnoty číselníku v pořadí variant Katalogu; vzhled stejným resolverem
    // jako záznam v mapě (resolveKatalogLook) — legenda je s mapou shodná.
    const entries = Object.entries(map.valueToVariantIndex).sort((a, b) => a[1] - b[1]);
    const out = [];
    const seen = new Set();
    for (const [raw, idx] of entries) {
        const hit = sym.variants[idx];
        if (!hit || isGeometryVariant(hit))
            continue;
        const label = norm(hit.attrValue);
        if (seen.has(label))
            continue;
        seen.add(label);
        out.push({ value: hit.attrValue, look: resolveKatalogLook(ot, { attributes: { [map.attrName]: raw } }) });
    }
    return out.some((o) => !sameLook(o.look, out[0].look)) ? out : [];
}
function sameLook(a, b) {
    return (a.color === b.color &&
        a.fill === b.fill &&
        a.widthMm === b.widthMm &&
        a.svg === b.svg &&
        a.dashMm?.join() === b.dashMm?.join());
}
//# sourceMappingURL=resolve.js.map