import { parseAtributyObjektu1501 } from '../1.5.0.1/attributes.js';
import { extractText } from '../1.4.3/xml-helpers.js';
/** Systémové atributy UDM → klíč v `CommonAttributes`. */
const COMMON_ATTR_KEYS = {
    ID: 'id',
    IDZmeny: 'idZmeny',
    IDEditora: 'idEditora',
    PopisObjektu: 'popisObjektu',
    DatumVkladu: 'datumVkladu',
    VkladOsoba: 'vkladOsoba',
    DatumZmeny: 'datumZmeny',
    ZmenaOsoba: 'zmenaOsoba',
};
export function parseAtributyObjektuUdm(atributyEl) {
    const { commonAttributes, attributes } = parseAtributyObjektu1501(atributyEl);
    if (atributyEl == null || typeof atributyEl !== 'object') {
        return { commonAttributes, attributes };
    }
    const obj = atributyEl;
    for (const [xmlName, key] of Object.entries(COMMON_ATTR_KEYS)) {
        if (!(xmlName in attributes))
            continue;
        delete attributes[xmlName];
        // Prázdný element (`<ID></ID>`) = nevyplněno → do commonAttributes nepatří.
        const v = extractText(obj[xmlName]);
        if (v != null && v !== '' && commonAttributes[key] == null)
            commonAttributes[key] = v;
    }
    return { commonAttributes, attributes };
}
//# sourceMappingURL=attributes.js.map