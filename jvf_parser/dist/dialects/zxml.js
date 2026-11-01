/**
 * Dialekt ŽXML — výměnný formát dat DTMŽ Správy železnic.
 *
 * ŽXML je JVF DTM rozšířené o objekty SŽ (`objekty_sz`, `code_base 999…`,
 * obsahové části ZDT/ZDD/H3D/ODSZ/SKLEP), atributy SŽ (`atributy_sz.xsd`)
 * a hlavičku `<cmn:VerzeZXML>`. Objekty SŽ jsou v instanci přímo pod `Data`
 * (substituční skupina `ObjektSZ`), takže je zpracují jádra parserů JVF:
 *
 * - ŽXML 1.4.2.1 → jádro 1.4.3 (atributy `atrsz:*` jsou přímé potomky
 *   `AtributyObjektu` a zploští se),
 * - ŽXML 1.5.1.6 → jádro 1.5.0.1 (bloky `SpolecneAtributyObjektu…SZ` se
 *   zploští, `cmn:StaniceniData` → `ext.staniceni`).
 */
import { baseJvfVersionOf, getDialect, rawDialectVersion, } from 'jvf-dtm-types';
import { parseJvfDtm as parseJvfDtm143 } from '../1.4.3/parser.js';
import { parseJvfDtm1501 } from '../1.5.0.1/parser.js';
import { parseGeometrieObjektu1501 } from '../1.5.0.1/geometry.js';
import { extractText } from '../1.4.3/xml-helpers.js';
import { detectHeaderElement } from './types.js';
const DEF = getDialect('zxml');
function asArray(v) {
    const list = Array.isArray(v) ? v : v != null ? [v] : [];
    return list.filter((x) => typeof x === 'object' && x !== null);
}
/** Objekt jen s vyplněnými textovými poli (`exactOptionalPropertyTypes`). */
function texts(el, map) {
    const out = {};
    for (const [key, xmlName] of Object.entries(map)) {
        const v = extractText(el[xmlName]);
        if (v != null)
            out[key] = v;
    }
    return out;
}
/** `cmn:StaniceniData` (ŽXML 1.5.x) → seznam staničení objektů. */
export function parseStaniceniData(dataJvfDtm) {
    const data = dataJvfDtm['StaniceniData'];
    if (data == null || typeof data !== 'object')
        return undefined;
    const result = [];
    for (const info of asArray(data['StaniceniInfo'])) {
        const staniceni = asArray(info['Staniceni']).map((s) => {
            const geom = parseGeometrieObjektu1501(s['GeometrieObjektu']);
            const point = geom.find((g) => g.type === 'Point');
            const hodnota = Number(extractText(s['Staniceni']));
            return {
                ...texts(s, {
                    typStaniceni: 'TypStaniceni',
                    zpusobVypoctu: 'ZpusobVypoctu',
                    tudu: 'TUDU',
                    datumVypoctu: 'DatumVypoctu',
                    datumPlatnostiOd: 'DatumPlatnostiOd',
                    datumPlatnostiDo: 'DatumPlatnostiDo',
                }),
                ...(Number.isFinite(hodnota) ? { staniceni: hodnota } : {}),
                ...(point?.type === 'Point' ? { bod: point.data } : {}),
            };
        });
        result.push({ id: extractText(info['ID']) ?? '', staniceni });
    }
    return result;
}
export const ZXML_DIALECT = {
    def: DEF,
    detect: (xml) => detectHeaderElement(xml, DEF.headerElement),
    parse(xml, version) {
        const base = baseJvfVersionOf(version);
        const dtm = base === '1.4.3'
            ? parseJvfDtm143(xml, { warnUnsupportedVersion: false })
            : parseJvfDtm1501(xml, {
                warnUnsupportedVersion: false,
                parseDocumentExtras: (data) => {
                    const staniceni = parseStaniceniData(data);
                    return staniceni ? { staniceni } : undefined;
                },
            });
        return { ...dtm, verze: version, dialect: { id: 'zxml', version: rawDialectVersion(version) } };
    },
};
//# sourceMappingURL=zxml.js.map