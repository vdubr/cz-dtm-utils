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
import { parseAtributyObjektu1501 } from '../1.5.0.1/attributes.js';
import { extractText } from '../1.4.3/xml-helpers.js';

/** Systémové atributy UDM → klíč v `CommonAttributes`. */
const COMMON_ATTR_KEYS: Readonly<Record<string, keyof CommonAttributes>> = {
  ID: 'id',
  IDZmeny: 'idZmeny',
  IDEditora: 'idEditora',
  PopisObjektu: 'popisObjektu',
  DatumVkladu: 'datumVkladu',
  VkladOsoba: 'vkladOsoba',
  DatumZmeny: 'datumZmeny',
  ZmenaOsoba: 'zmenaOsoba',
};

export function parseAtributyObjektuUdm(atributyEl: unknown): {
  commonAttributes: CommonAttributes;
  attributes: Record<string, string | number | boolean | null>;
} {
  const { commonAttributes, attributes } = parseAtributyObjektu1501(atributyEl);
  if (atributyEl == null || typeof atributyEl !== 'object') {
    return { commonAttributes, attributes };
  }

  const obj = atributyEl as Record<string, unknown>;
  for (const [xmlName, key] of Object.entries(COMMON_ATTR_KEYS)) {
    if (!(xmlName in attributes)) continue;
    delete attributes[xmlName];
    // Prázdný element (`<ID></ID>`) = nevyplněno → do commonAttributes nepatří.
    const v = extractText(obj[xmlName]);
    if (v != null && v !== '' && commonAttributes[key] == null) commonAttributes[key] = v;
  }
  return { commonAttributes, attributes };
}
