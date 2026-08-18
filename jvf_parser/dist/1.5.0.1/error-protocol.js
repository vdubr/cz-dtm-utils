/**
 * Parser integrovaného protokolu chyb JVF DTM 1.5.0.1 (R5).
 *
 * Struktura: `JVFDTM > ServisJVFDTM > ProtokolChyb >
 * {ProtokolChybDTI, ProtokolChybZPS} > Kontroly > Kontrola > SeznamChyb >
 * Chyba`. Protokol je samostatný artefakt oddělený od `JvfDtm` — viewer ho
 * zobrazí jako report, ne mapovou vrstvu.
 *
 * XSD: `docs/1.5.0.1/xsd/common/servis.xsd`.
 */
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';
function createParser() {
    return new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        removeNSPrefix: true,
        isArray: (name) => ['Kontrola', 'Chyba'].includes(name),
        parseTagValue: true,
        parseAttributeValue: true,
        trimValues: true,
    });
}
/** Posbírá skalární potomky do attributes, s výjimkou `skip` klíčů. */
function collectScalarAttrs(el, skip) {
    const out = {};
    for (const [key, val] of Object.entries(el)) {
        if (key.startsWith('@_') || skip.has(key))
            continue;
        const scalar = extractAttributeValue(val);
        if (scalar !== null)
            out[key] = scalar;
    }
    return out;
}
const CHYBA_SKIP = new Set(['PopisChyby', 'IDObjekt', 'LokalizaceChyby']);
const KONTROLA_SKIP = new Set(['SeznamChyb', 'KodKontroly']);
function parseChyba(el) {
    const chyba = {
        attributes: collectScalarAttrs(el, CHYBA_SKIP),
    };
    const popis = extractText(el['PopisChyby']);
    if (popis != null)
        chyba.popis = popis;
    const objektId = extractText(el['IDObjekt']);
    if (objektId != null)
        chyba.objektId = objektId;
    return chyba;
}
function parseKontrola(el) {
    const chyby = [];
    const seznam = el['SeznamChyb'];
    if (seznam != null && typeof seznam === 'object') {
        const raw = seznam['Chyba'];
        const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
        for (const item of items) {
            if (typeof item === 'object' && item !== null) {
                chyby.push(parseChyba(item));
            }
        }
    }
    const kontrola = {
        chyby,
        attributes: collectScalarAttrs(el, KONTROLA_SKIP),
    };
    const kod = extractText(el['KodKontroly']);
    if (kod != null)
        kontrola.kod = kod;
    return kontrola;
}
function parseKontroly(sekce) {
    if (sekce == null || typeof sekce !== 'object')
        return [];
    const kontrolyEl = sekce['Kontroly'];
    if (kontrolyEl == null || typeof kontrolyEl !== 'object')
        return [];
    const raw = kontrolyEl['Kontrola'];
    const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
    const out = [];
    for (const item of items) {
        if (typeof item === 'object' && item !== null) {
            out.push(parseKontrola(item));
        }
    }
    return out;
}
/**
 * Naparsuje protokol chyb (`ServisJVFDTM/ProtokolChyb`) na model
 * `ErrorProtocol` s oddělenými seznamy kontrol DTI a ZPS.
 */
export function parseErrorProtocol(xml) {
    const validation = XMLValidator.validate(xml);
    if (validation !== true) {
        const { msg, line, col } = validation.err;
        throw new Error(`Neplatný XML soubor: ${msg} (řádek ${line}, sloupec ${col})`);
    }
    const parsed = createParser().parse(xml);
    // Kořen může být přímo ServisJVFDTM, nebo obalený v JVFDTM.
    let servis = parsed['ServisJVFDTM'];
    if (servis == null) {
        const jvf = parsed['JVFDTM'];
        if (jvf != null && typeof jvf === 'object') {
            servis = jvf['ServisJVFDTM'];
        }
    }
    if (servis == null || typeof servis !== 'object') {
        throw new Error('Neplatný protokol chyb: chybí element <ServisJVFDTM>.');
    }
    const protokol = servis['ProtokolChyb'];
    const verze = extractText(servis['VerzeJVFDTM']) ?? undefined;
    const dti = parseKontroly(protokol?.['ProtokolChybDTI']);
    const zps = parseKontroly(protokol?.['ProtokolChybZPS']);
    return {
        ...(verze !== undefined ? { verze } : {}),
        dti,
        zps,
    };
}
//# sourceMappingURL=error-protocol.js.map