/**
 * Doprovodné informace + `TypDatoveSady` pro JVF DTM 1.5.0.1.
 *
 * 1.5.0.1 rozděluje `DoprovodneInformace` na varianty
 * `…{GAD,KAD,DTI,VydejZPS,VydejDTI,VydejPSPI}` (a bázi `DoprovodneInformace`).
 * Všechny jsou sourozenci `Data` uvnitř `DataJVFDTM`. Extrahujeme z nich:
 *   - `OblastiKompletniZPS > ZaznamOKZPS[]` → `OblastKompletniZPSZaznam`
 *     (typ z `TypZaznamuOKZPS`, plocha z `PlochaZPS > surfaceProperty`),
 *   - `UdajeOVydeji > TypDatoveSady` → `typDatoveSady`.
 *
 * KI (`OblastObjektuKI`) je v 1.5.0.1 zrušeno — neparsuje se (změna #8).
 *
 * XSD: `docs/1.5.0.1/xsd/common/doprovodne_informace.xsd`.
 */
import type {
  DoprovodneInformace,
  GmlMultiCurve,
  GmlPoint,
  GmlPolygon,
  OblastKompletniZPSTyp,
  OblastKompletniZPSZaznam,
  TypDatoveSady,
} from './types.js';
import { parseMultiCurve, parsePoint, parsePolygon } from '../1.4.3/geometry-primitives.js';
import { pickChild, extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';

export interface DoprovodneResult {
  doprovodneInformace?: DoprovodneInformace;
  typDatoveSady?: TypDatoveSady;
}

/** Prefix názvů variant doprovodných informací. */
const DOPROVODNE_PREFIX = 'DoprovodneInformace';

function resolveTyp(raw: string | null): OblastKompletniZPSTyp {
  if (raw == null) return 'unknown';
  const upper = raw.trim().toUpperCase();
  if (upper === 'NEW') return 'NEW';
  if (upper === 'DEL') return 'DEL';
  if (upper === 'REF') return 'REF';
  return 'unknown';
}

/** Geometrie záznamu OKZPS: PlochaZPS (surfaceProperty) / ObvodZPS / DefBodZPS. */
function parseOKGeometrie(geomEl: Record<string, unknown> | undefined): {
  plocha?: GmlPolygon;
  obvod?: GmlMultiCurve;
  defBod?: GmlPoint;
} {
  if (geomEl == null || typeof geomEl !== 'object') return {};
  const result: { plocha?: GmlPolygon; obvod?: GmlMultiCurve; defBod?: GmlPoint } = {};

  const plochaZPS = geomEl['PlochaZPS'];
  if (plochaZPS != null && typeof plochaZPS === 'object') {
    const wrapper = plochaZPS as Record<string, unknown>;
    // Polygon přes surfaceProperty i přímo (obranně, R6).
    const sp = wrapper['surfaceProperty'];
    let polyEl: Record<string, unknown> | undefined;
    if (sp != null && typeof sp === 'object') {
      polyEl = pickChild(sp as Record<string, unknown>, ['Polygon', 'gml:Polygon']);
    }
    if (!polyEl) polyEl = pickChild(wrapper, ['Polygon', 'gml:Polygon']);
    if (polyEl) result.plocha = parsePolygon(polyEl);
  }

  const obvodZPS = geomEl['ObvodZPS'];
  if (obvodZPS != null && typeof obvodZPS === 'object') {
    const mcEl = pickChild(obvodZPS as Record<string, unknown>, ['MultiCurve', 'gml:MultiCurve']);
    if (mcEl != null) result.obvod = parseMultiCurve(mcEl);
  }

  const defBodZPS = geomEl['DefBodZPS'];
  if (defBodZPS != null && typeof defBodZPS === 'object') {
    const wrapper = defBodZPS as Record<string, unknown>;
    const pp = wrapper['pointProperty'];
    let ptEl: Record<string, unknown> | undefined;
    if (pp != null && typeof pp === 'object') {
      ptEl = pickChild(pp as Record<string, unknown>, ['Point', 'gml:Point']);
    }
    if (!ptEl) ptEl = pickChild(wrapper, ['Point', 'gml:Point']);
    if (ptEl) result.defBod = parsePoint(ptEl);
  }

  return result;
}

function parseZaznamOKZPS(zaznamEl: Record<string, unknown>): OblastKompletniZPSZaznam {
  const typ = resolveTyp(extractText(zaznamEl['TypZaznamuOKZPS']));
  const geom = parseOKGeometrie(zaznamEl['GeometrieObjektu'] as Record<string, unknown> | undefined);

  const attributes: Record<string, string | number | boolean | null> = {};
  const uroven = extractAttributeValue(zaznamEl['UrovenUmisteniObjektuZPS']);
  if (uroven !== null) attributes.UrovenUmisteniObjektuZPS = uroven;

  const result: OblastKompletniZPSZaznam = {
    typ,
    commonAttributes: {},
    attributes,
  };
  if (geom.plocha !== undefined) result.plocha = geom.plocha;
  if (geom.obvod !== undefined) result.obvod = geom.obvod;
  if (geom.defBod !== undefined) result.defBod = geom.defBod;
  return result;
}

function collectOblasti(
  dopEl: Record<string, unknown>,
  out: OblastKompletniZPSZaznam[]
): void {
  const oblastiEl = dopEl['OblastiKompletniZPS'];
  if (oblastiEl == null || typeof oblastiEl !== 'object') return;
  const raw = (oblastiEl as Record<string, unknown>)['ZaznamOKZPS'];
  const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
  for (const item of items) {
    if (typeof item === 'object' && item !== null) {
      out.push(parseZaznamOKZPS(item as Record<string, unknown>));
    }
  }
}

function extractTypDatoveSady(dopEl: Record<string, unknown>): number | undefined {
  const udaje = dopEl['UdajeOVydeji'];
  if (udaje == null || typeof udaje !== 'object') return undefined;
  const raw = extractText((udaje as Record<string, unknown>)['TypDatoveSady']);
  if (raw == null || raw === '') return undefined;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * Projde všechny sourozence `DoprovodneInformace*` v `DataJVFDTM` a sesbírá
 * oblasti kompletní ZPS + typ datové sady.
 */
export function parseDoprovodneInformace1501(
  dataJvfDtm: Record<string, unknown>
): DoprovodneResult {
  const oblastiKompletniZPS: OblastKompletniZPSZaznam[] = [];
  let typDatoveSady: number | undefined;

  for (const [key, val] of Object.entries(dataJvfDtm)) {
    if (!key.startsWith(DOPROVODNE_PREFIX)) continue;
    if (val == null || typeof val !== 'object') continue;
    const list = Array.isArray(val) ? val : [val];
    for (const dop of list) {
      if (dop == null || typeof dop !== 'object') continue;
      const dopEl = dop as Record<string, unknown>;
      collectOblasti(dopEl, oblastiKompletniZPS);
      if (typDatoveSady === undefined) {
        typDatoveSady = extractTypDatoveSady(dopEl);
      }
    }
  }

  const result: DoprovodneResult = {};
  if (oblastiKompletniZPS.length > 0) {
    result.doprovodneInformace = { oblastiKompletniZPS };
  }
  if (typDatoveSady !== undefined) result.typDatoveSady = typDatoveSady;
  return result;
}
