/** Dialekt UDM (Univerzální datový model ČKZ) — parser v `udm-2.1.1/`. */
import { getDialect, rawDialectVersion } from 'jvf-dtm-types';
import { detectUdmVersionString, parseUdm } from '../udm-2.1.1/parser.js';
export const UDM_DIALECT = {
    def: getDialect('udm'),
    detect: detectUdmVersionString,
    parse(xml, version) {
        const dtm = parseUdm(xml);
        return { ...dtm, verze: version, dialect: { id: 'udm', version: rawDialectVersion(version) } };
    },
};
//# sourceMappingURL=udm.js.map