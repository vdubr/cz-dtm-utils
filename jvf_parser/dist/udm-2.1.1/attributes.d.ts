/**
 * Parsování `AtributyObjektu` pro UDM (Univerzální datový model ČKZ).
 *
 * UDM má atributy **zploštělé**: systémové atributy (`ID`, `IDZmeny`,
 * `PopisObjektu`, …) i atributy sdílených skupin JVF leží přímo v
 * `AtributyObjektu`, bez obalů `SpolecneAtributyVsechObjektu` /
 * `SpolecneAtributyObjektu*`. Systémové atributy se mapují do
 * `commonAttributes` (stejně jako u JVF), ostatní do `attributes`.
 *
 * Kdyby soubor přesto obsahoval JVF obaly, deleguje se na parser 1.5.0.1
 * a ploché systémové atributy se jen doplní.
 */
import type { CommonAttributes } from '../1.5.0.1/types.js';
export declare function parseAtributyObjektuUdm(atributyEl: unknown): {
    commonAttributes: CommonAttributes;
    attributes: Record<string, string | number | boolean | null>;
};
//# sourceMappingURL=attributes.d.ts.map