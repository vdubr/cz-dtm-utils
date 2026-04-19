/**
 * Parser pro `DoprovodneInformace` — metadatová sekce sourozenec `Data`
 * uvnitř `DataJVFDTM`. Aktuálně extrahuje jen `OblastiKompletniZPS`, protože
 * jen tu potřebují topologické kontroly.
 *
 * XSD: `jvf_parser/docs/1.4.3/xsd/common/doprovodne_informace.xsd`.
 */

import type {
  DoprovodneInformace,
  GmlMultiCurve,
  GmlPoint,
  GmlPolygon,
  OblastKompletniZPSTyp,
  OblastKompletniZPSZaznam,
} from './types.js';
import { parseAtributyObjektu } from './attributes.js';
import {
  parseMultiCurve,
  parsePoint,
  parsePolygon,
} from './geometry-primitives.js';

function parseGeometriePlocha(
  geomEl: Record<string, unknown> | undefined
): { plocha?: GmlPolygon; obvod?: GmlMultiCurve; defBod?: GmlPoint } {
  if (geomEl == null || typeof geomEl !== 'object') return {};

  const result: { plocha?: GmlPolygon; obvod?: GmlMultiCurve; defBod?: GmlPoint } = {};

  // PlochaZPS → surfaceProperty/Polygon
  const plochaZPS = geomEl['PlochaZPS'];
  if (plochaZPS != null && typeof plochaZPS === 'object') {
    const sp = (plochaZPS as Record<string, unknown>)['surfaceProperty'];
    if (sp != null && typeof sp === 'object') {
      const spObj = sp as Record<string, unknown>;
      for (const key of ['Polygon', 'gml:Polygon']) {
        const polyEl = spObj[key];
        if (polyEl != null && typeof polyEl === 'object') {
          result.plocha = parsePolygon(polyEl as Record<string, unknown>);
          break;
        }
      }
    }
  }

  // ObvodZPS → MultiCurve
  const obvodZPS = geomEl['ObvodZPS'];
  if (obvodZPS != null && typeof obvodZPS === 'object') {
    const obvodObj = obvodZPS as Record<string, unknown>;
    for (const key of ['MultiCurve', 'gml:MultiCurve']) {
      const mcEl = obvodObj[key];
      if (mcEl != null && typeof mcEl === 'object') {
        result.obvod = parseMultiCurve(mcEl as Record<string, unknown>);
        break;
      }
    }
  }

  // DefBodZPS → pointProperty/Point
  const defBodZPS = geomEl['DefBodZPS'];
  if (defBodZPS != null && typeof defBodZPS === 'object') {
    const pp = (defBodZPS as Record<string, unknown>)['pointProperty'];
    if (pp != null && typeof pp === 'object') {
      const ppObj = pp as Record<string, unknown>;
      for (const key of ['Point', 'gml:Point']) {
        const ptEl = ppObj[key];
        if (ptEl != null && typeof ptEl === 'object') {
          result.defBod = parsePoint(ptEl as Record<string, unknown>);
          break;
        }
      }
    }
  }

  return result;
}

/**
 * Rozhodne typ NEW/DEL z `PopisObjektu` (case-insensitive).
 */
function resolveTyp(popis: string | undefined): OblastKompletniZPSTyp {
  if (popis == null) return 'unknown';
  const upper = popis.trim().toUpperCase();
  if (upper === 'NEW') return 'NEW';
  if (upper === 'DEL') return 'DEL';
  return 'unknown';
}

function parseZaznamZPS(zaznamEl: Record<string, unknown>): OblastKompletniZPSZaznam {
  const { commonAttributes, attributes } = parseAtributyObjektu(zaznamEl['AtributyObjektu']);
  const geom = parseGeometriePlocha(
    zaznamEl['GeometrieObjektu'] as Record<string, unknown> | undefined
  );

  const typ = resolveTyp(commonAttributes.popisObjektu);

  const result: OblastKompletniZPSZaznam = {
    typ,
    commonAttributes,
    attributes,
  };
  if (geom.plocha !== undefined) result.plocha = geom.plocha;
  if (geom.obvod !== undefined) result.obvod = geom.obvod;
  if (geom.defBod !== undefined) result.defBod = geom.defBod;

  return result;
}

/**
 * Parse `DoprovodneInformace` element. Returns `undefined`, když element chybí
 * nebo je prázdný (nic smysluplného neextrahováno).
 */
export function parseDoprovodneInformace(
  el: Record<string, unknown> | undefined
): DoprovodneInformace | undefined {
  if (el == null || typeof el !== 'object') return undefined;

  const oblastiKompletniZPS: OblastKompletniZPSZaznam[] = [];

  const oblastiEl = el['OblastiKompletniZPS'];
  if (oblastiEl != null && typeof oblastiEl === 'object') {
    const zaznamList = (oblastiEl as Record<string, unknown>)['ZaznamZPS'];
    const items = Array.isArray(zaznamList)
      ? zaznamList
      : zaznamList != null
        ? [zaznamList]
        : [];
    for (const item of items) {
      if (typeof item === 'object' && item !== null) {
        oblastiKompletniZPS.push(parseZaznamZPS(item as Record<string, unknown>));
      }
    }
  }

  if (oblastiKompletniZPS.length === 0) return undefined;

  return { oblastiKompletniZPS };
}
