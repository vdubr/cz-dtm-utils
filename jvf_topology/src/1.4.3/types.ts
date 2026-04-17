/**
 * Veřejné i interní typy pro topologickou validaci.
 */

import type { JvfDtm } from 'jvf-dtm-types';

// ---------------------------------------------------------------------------
// Veřejné typy
// ---------------------------------------------------------------------------

export type TopologyErrorSeverity = 'error' | 'warning';

export interface TopologyError {
  severity: TopologyErrorSeverity;
  /** Kód chyby, např. "POLYGON_NOT_CLOSED" */
  code: string;
  message: string;
  /** Název elementu objektového typu, např. "BudovaPlocha" */
  objektovyTyp: string;
  /** gml:id záznamu (pokud existuje) */
  objectId?: string;
  /** Index geometrie v poli ZaznamObjektu.geometrie (0-based), -1 pro oblastObjektuKI */
  geometryIndex?: number;
}

export type TopologyCheck = (dtm: JvfDtm) => TopologyError[];

// ---------------------------------------------------------------------------
// Interní typy sdílené mezi moduly topology/
// ---------------------------------------------------------------------------

export interface ErrorCtx {
  objektovyTyp: string;
  objectId?: string;
  geometryIndex: number;
}

export interface Point2D {
  x: number;
  y: number;
}

export interface CoordSet {
  coords: number[];
  dim: number;
}

export interface ExtractedPolygon {
  exterior: number[];
  dim: number;
}
