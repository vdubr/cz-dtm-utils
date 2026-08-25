/**
 * Parser JVF DTM 1.5.0.1.
 *
 * Fork parserové vrstvy 1.4.3 pro breaking-change strukturu 1.5.0.1
 * (viz `records.ts`, `geometry.ts`). Sdílené doménové typy i GML primitivy
 * se reusují, 1.4.3 větev zůstává beze změny (R1).
 *
 * `DoprovodneInformace{GAD,KAD,DTI,VydejZPS,VydejDTI}` a `TypDatoveSady`
 * doplňuje T4 (`doprovodne-informace.ts`).
 */
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { isSupportedVersion } from 'jvf-dtm-types';
import { parseGeometrieObjektu1501 } from './geometry.js';
import { parseAtributyObjektu1501 } from './attributes.js';
import { isRecordElementName, resolveRecordKind } from './records.js';
import { parseDoprovodneInformace1501 } from './doprovodne-informace.js';
import { extractText } from '../1.4.3/xml-helpers.js';
const VALID_TYP_ZAPISU = ['kompletní zápis', 'změnové věty'];
function createParser() {
    return new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        removeNSPrefix: true,
        // Záznamové věty (klíč = druh záznamu) i vícenásobné členy vždy jako pole.
        isArray: (name) => isRecordElementName(name) || ['curveMember', 'ZaznamZmeny'].includes(name),
        parseTagValue: true,
        parseAttributeValue: true,
        trimValues: true,
    });
}
function parseZaznamObjektu1501(kindKey, zaznamEl) {
    const kind = resolveRecordKind(kindKey);
    const { commonAttributes, attributes } = parseAtributyObjektu1501(zaznamEl['AtributyObjektu']);
    const geometrie = parseGeometrieObjektu1501(zaznamEl['GeometrieObjektu']);
    const result = {
        zapisObjektu: kind.zapisObjektu,
        recordKind: kind.recordKind,
        context: kind.context,
        commonAttributes,
        attributes,
        geometrie,
    };
    if (kind.visibility)
        result.visibility = kind.visibility;
    return result;
}
function parseObjektovyTyp1501(elementName, typEl) {
    const nazevEl = typEl['ObjektovyTypNazev'];
    let nazev = '';
    let codeBase = '';
    let codeSuffix = '';
    if (nazevEl != null && typeof nazevEl === 'object') {
        const nazevObj = nazevEl;
        const textContent = nazevObj['#text'];
        if (textContent != null)
            nazev = String(textContent);
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
    const kategorieObjektu = extractText(typEl['KategorieObjektu']) ?? '';
    const skupinaObjektu = extractText(typEl['SkupinaObjektu']) ?? '';
    const obsahovaCast = extractText(typEl['ObsahovaCast']) ?? '';
    const zaznamy = [];
    const zaznamyEl = typEl['ZaznamyObjektu'];
    if (zaznamyEl != null && typeof zaznamyEl === 'object') {
        const zaznamyObj = zaznamyEl;
        // Druh záznamu je KLÍČ elementu (ZaznamObjektuIns/RefV/…); iterujeme klíče.
        for (const [key, val] of Object.entries(zaznamyObj)) {
            if (key.startsWith('@_') || !isRecordElementName(key))
                continue;
            const list = Array.isArray(val) ? val : [val];
            for (const zaznam of list) {
                if (typeof zaznam === 'object' && zaznam !== null) {
                    zaznamy.push(parseZaznamObjektu1501(key, zaznam));
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
export function parseJvfDtm1501(xml) {
    const validation = XMLValidator.validate(xml);
    if (validation !== true) {
        const { msg, line, col } = validation.err;
        throw new Error(`Neplatný XML soubor: ${msg} (řádek ${line}, sloupec ${col})`);
    }
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
    if (verze !== '' && !isSupportedVersion(verze)) {
        console.warn(`jvf-parser: nepodporovaná verze JVF DTM specifikace "${verze}". Parsování pokračuje, ale výsledek nemusí odpovídat schématu.`);
    }
    const datumZapisu = extractText(dataJvfDtm['DatumZapisu']) ?? '';
    const typZapisuRaw = extractText(dataJvfDtm['TypZapisu']) ?? '';
    if (typZapisuRaw !== '' && !VALID_TYP_ZAPISU.includes(typZapisuRaw)) {
        console.warn(`jvf-parser: neočekávaná hodnota TypZapisu "${typZapisuRaw}" — očekáváno "kompletní zápis" nebo "změnové věty".`);
    }
    const typZapisu = typZapisuRaw;
    const dataEl = dataJvfDtm['Data'];
    const objekty = [];
    if (dataEl != null && typeof dataEl === 'object') {
        for (const [key, val] of Object.entries(dataEl)) {
            if (key.startsWith('@_'))
                continue;
            if (typeof val !== 'object' || val === null)
                continue;
            if (Array.isArray(val)) {
                for (const item of val) {
                    if (typeof item === 'object' && item !== null) {
                        objekty.push(parseObjektovyTyp1501(key, item));
                    }
                }
            }
            else {
                objekty.push(parseObjektovyTyp1501(key, val));
            }
        }
    }
    const { doprovodneInformace, typDatoveSady } = parseDoprovodneInformace1501(dataJvfDtm);
    return {
        verze,
        datumZapisu,
        typZapisu,
        ...(typDatoveSady !== undefined ? { typDatoveSady } : {}),
        objekty,
        ...(doprovodneInformace !== undefined ? { doprovodneInformace } : {}),
    };
}
//# sourceMappingURL=parser.js.map