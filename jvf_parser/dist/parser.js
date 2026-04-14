import { XMLParser } from 'fast-xml-parser';
import { parseGeometrieObjektu, parseOblastObjektuKI } from './geometry.js';
// ---------------------------------------------------------------------------
// XML Parser setup
// ---------------------------------------------------------------------------
function createParser() {
    return new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        isArray: (name) => ['ZaznamObjektu', 'curveMember'].includes(name),
        // Preserve text content of elements that may be pure numbers
        parseTagValue: true,
        parseAttributeValue: true,
        trimValues: true,
    });
}
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
/**
 * Extract text content from a parsed element value.
 *
 * fast-xml-parser represents elements like `<Foo xmlns="bar">text</Foo>` as:
 *   { "#text": "text", "@_xmlns": "bar" }
 *
 * But elements without xmlns are represented as plain primitives.
 * This helper handles both cases.
 */
function extractText(val) {
    if (val == null)
        return null;
    if (typeof val === 'string')
        return val;
    if (typeof val === 'number')
        return String(val);
    if (typeof val === 'boolean')
        return String(val);
    if (typeof val === 'object') {
        const obj = val;
        const textNode = obj['#text'];
        if (textNode != null) {
            if (typeof textNode === 'string')
                return textNode;
            if (typeof textNode === 'number')
                return String(textNode);
            if (typeof textNode === 'boolean')
                return String(textNode);
        }
        // empty object (empty element)
        return null;
    }
    return null;
}
/**
 * Extract a primitive attribute value from a parsed element value.
 * Handles the `{#text: ..., @_xmlns: ...}` wrapper form.
 */
function extractAttributeValue(val) {
    if (val == null)
        return null;
    if (typeof val === 'string')
        return val;
    if (typeof val === 'number')
        return val;
    if (typeof val === 'boolean')
        return val;
    if (typeof val === 'object') {
        const obj = val;
        const textNode = obj['#text'];
        if (textNode != null) {
            if (typeof textNode === 'string')
                return textNode;
            if (typeof textNode === 'number')
                return textNode;
            if (typeof textNode === 'boolean')
                return textNode;
        }
        return null;
    }
    return null;
}
// ---------------------------------------------------------------------------
// Attribute parsing
// ---------------------------------------------------------------------------
/**
 * Extract CommonAttributes from `SpolecneAtributyVsechObjektu`.
 */
function parseCommonAttributes(savoEl) {
    const common = {};
    if (savoEl == null || typeof savoEl !== 'object')
        return common;
    const obj = savoEl;
    const id = extractText(obj['ID']);
    if (id != null)
        common.id = id;
    const idZmeny = extractText(obj['IDZmeny']);
    if (idZmeny != null)
        common.idZmeny = idZmeny;
    const idEditora = extractText(obj['IDEditora']);
    if (idEditora != null)
        common.idEditora = idEditora;
    const popis = extractText(obj['PopisObjektu']);
    if (popis != null)
        common.popisObjektu = popis;
    const datumVkladu = extractText(obj['DatumVkladu']);
    if (datumVkladu != null)
        common.datumVkladu = datumVkladu;
    const vkladOsoba = extractText(obj['VkladOsoba']);
    if (vkladOsoba != null)
        common.vkladOsoba = vkladOsoba;
    const datumZmeny = extractText(obj['DatumZmeny']);
    if (datumZmeny != null)
        common.datumZmeny = datumZmeny;
    const zmenaOsoba = extractText(obj['ZmenaOsoba']);
    if (zmenaOsoba != null)
        common.zmenaOsoba = zmenaOsoba;
    return common;
}
/**
 * Flatten a shared attributes block (SpolecneAtributyObjektuTI/DI/ZPS) into the target.
 * Elements in these blocks are plain key-value pairs without xmlns wrappers on them individually.
 */
function flattenSharedBlock(block, target) {
    for (const [key, val] of Object.entries(block)) {
        if (key.startsWith('@_'))
            continue;
        const extracted = extractAttributeValue(val);
        if (extracted !== null) {
            target[key] = extracted;
        }
        else if (val != null && typeof val === 'object') {
            // Could be an empty element
            target[key] = null;
        }
    }
}
/**
 * Parse an `AtributyObjektu` element:
 *   - Extract `commonAttributes` from SpolecneAtributyVsechObjektu
 *   - Flatten shared sub-blocks and direct children into `attributes`
 */
function parseAtributyObjektu(atributyEl) {
    const commonAttributes = {};
    const attributes = {};
    if (atributyEl == null || typeof atributyEl !== 'object') {
        return { commonAttributes, attributes };
    }
    const obj = atributyEl;
    // Extract common identity attributes
    const savo = obj['SpolecneAtributyVsechObjektu'];
    Object.assign(commonAttributes, parseCommonAttributes(savo));
    // Flatten all shared attribute blocks
    const sharedBlockNames = [
        'SpolecneAtributyObjektuZPS',
        'SpolecneAtributyObjektuDefinicnichBodu',
        'SpolecneAtributyObjektuTI',
        'SpolecneAtributyObjektuPasemTI',
        'SpolecneAtributyObjektuZPS_TI',
        'SpolecneAtributyObjektuDI',
        'SpolecneAtributyObjektuPasemDI',
        'SpolecneAtributyObjektuZameru',
    ];
    for (const blockKey of sharedBlockNames) {
        const block = obj[blockKey];
        if (block != null && typeof block === 'object') {
            flattenSharedBlock(block, attributes);
        }
    }
    // Flatten direct child elements (skip structural blocks)
    const skipKeys = new Set([
        'SpolecneAtributyVsechObjektu',
        ...sharedBlockNames,
    ]);
    for (const [key, val] of Object.entries(obj)) {
        if (key.startsWith('@_'))
            continue;
        if (skipKeys.has(key))
            continue;
        // Direct child elements have xmlns wrapper: {#text: val, @_xmlns: "atr"}
        const extracted = extractAttributeValue(val);
        if (extracted !== null) {
            attributes[key] = extracted;
        }
        else if (val != null && typeof val === 'object') {
            // Empty element (e.g. <CisloBodu xmlns="atr"/>)
            attributes[key] = null;
        }
    }
    return { commonAttributes, attributes };
}
// ---------------------------------------------------------------------------
// ZaznamObjektu
// ---------------------------------------------------------------------------
function parseZaznamObjektu(zaznamEl) {
    const zapisRaw = zaznamEl['ZapisObjektu'];
    const zapisObjektu = (extractText(zapisRaw) ?? 'r');
    const { commonAttributes, attributes } = parseAtributyObjektu(zaznamEl['AtributyObjektu']);
    const geometrie = parseGeometrieObjektu(zaznamEl['GeometrieObjektu']);
    const oblastRaw = zaznamEl['OblastObjektuKI'];
    const oblastObjektuKI = oblastRaw != null && typeof oblastRaw === 'object'
        ? parseOblastObjektuKI(oblastRaw)
        : undefined;
    const result = {
        zapisObjektu,
        commonAttributes,
        attributes,
        geometrie,
    };
    if (oblastObjektuKI !== undefined) {
        result.oblastObjektuKI = oblastObjektuKI;
    }
    return result;
}
// ---------------------------------------------------------------------------
// ObjektovyTyp
// ---------------------------------------------------------------------------
function parseObjektovyTyp(elementName, typEl) {
    const nazevEl = typEl['ObjektovyTypNazev'];
    let nazev = '';
    let codeBase = '';
    let codeSuffix = '';
    if (nazevEl != null && typeof nazevEl === 'object') {
        const nazevObj = nazevEl;
        const textContent = nazevObj['#text'];
        if (textContent != null)
            nazev = String(textContent);
        // code_base and code_suffix may be parsed as numbers by fast-xml-parser
        const cb = nazevObj['@_code_base'];
        if (cb != null)
            codeBase = String(cb).padStart(10, '0');
        const cs = nazevObj['@_code_suffix'];
        if (cs != null)
            codeSuffix = String(cs).padStart(2, '0');
    }
    else {
        nazev = extractText(nazevEl) ?? '';
    }
    // These elements also have xmlns wrapper: {#text: ..., @_xmlns: ...}
    const kategorieObjektu = extractText(typEl['KategorieObjektu']) ?? '';
    const skupinaObjektu = extractText(typEl['SkupinaObjektu']) ?? '';
    const obsahovaCast = extractText(typEl['ObsahovaCast']) ?? '';
    const zaznamy = [];
    const zaznamyEl = typEl['ZaznamyObjektu'];
    if (zaznamyEl != null && typeof zaznamyEl === 'object') {
        const zaznamyObj = zaznamyEl;
        const zaznamList = zaznamyObj['ZaznamObjektu'];
        if (Array.isArray(zaznamList)) {
            for (const zaznam of zaznamList) {
                if (typeof zaznam === 'object' && zaznam !== null) {
                    zaznamy.push(parseZaznamObjektu(zaznam));
                }
            }
        }
    }
    return {
        elementName,
        nazev,
        codeBase,
        codeSuffix,
        kategorieObjektu,
        skupinaObjektu,
        obsahovaCast,
        zaznamy,
    };
}
// ---------------------------------------------------------------------------
// Main parse function
// ---------------------------------------------------------------------------
export function parseJvfDtm(xml) {
    const parser = createParser();
    const parsed = parser.parse(xml);
    const jvfDtm = parsed['JVFDTM'];
    if (jvfDtm == null) {
        throw new Error('Invalid JVF DTM XML: missing root element <JVFDTM>');
    }
    const dataJvfDtm = jvfDtm['DataJVFDTM'];
    if (dataJvfDtm == null) {
        throw new Error('Invalid JVF DTM XML: missing <DataJVFDTM> element');
    }
    const verze = extractText(dataJvfDtm['VerzeJVFDTM']) ?? '';
    const datumZapisu = extractText(dataJvfDtm['DatumZapisu']) ?? '';
    const typZapisuRaw = extractText(dataJvfDtm['TypZapisu']) ?? '';
    const typZapisu = typZapisuRaw;
    const dataEl = dataJvfDtm['Data'];
    const objekty = [];
    if (dataEl != null && typeof dataEl === 'object') {
        for (const [key, val] of Object.entries(dataEl)) {
            if (key.startsWith('@_'))
                continue;
            if (typeof val !== 'object' || val === null)
                continue;
            objekty.push(parseObjektovyTyp(key, val));
        }
    }
    return {
        verze,
        datumZapisu,
        typZapisu,
        objekty,
    };
}
//# sourceMappingURL=parser.js.map