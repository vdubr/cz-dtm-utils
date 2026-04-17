import { XMLParser } from 'fast-xml-parser';
import { parseGeometrieObjektu, parseOblastObjektuKI } from './geometry.js';
import { parseAtributyObjektu } from './attributes.js';
import { extractText } from './xml-helpers.js';
function createParser() {
    return new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        removeNSPrefix: true,
        isArray: (name) => ['ZaznamObjektu', 'curveMember'].includes(name),
        // Preserve text content of elements that may be pure numbers
        parseTagValue: true,
        parseAttributeValue: true,
        trimValues: true,
    });
}
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
            // When the same element name appears multiple times, fast-xml-parser
            // produces an array instead of a single object.
            if (Array.isArray(val)) {
                for (const item of val) {
                    if (typeof item === 'object' && item !== null) {
                        objekty.push(parseObjektovyTyp(key, item));
                    }
                }
            }
            else {
                objekty.push(parseObjektovyTyp(key, val));
            }
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