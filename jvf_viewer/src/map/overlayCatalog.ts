/**
 * Překryvné vrstvy z mapových služeb ČÚZK (rastr nad podkladem, pod daty
 * JVF): DTM ČR a katastr nemovitostí. Každý překryv má služby (skupiny)
 * s podvrstvami; panel, 2D vrstvy, stav i 3D přehoz jsou společné
 * (state/overlays.ts, map/overlayLayers.ts, ui/overlayPanel.ts).
 */
import { DTM_ATTRIBUTION, DTM_SERVICES, DTM_WMS_BASE, DTM_WMTS_BASE } from './dtmCatalog.js';

export interface OverlaySublayer {
  /** Název vrstvy ve službě (parametr LAYERS). */
  name: string;
  title: string;
  /** Největší měřítkové číslo, při kterém služba vrstvu kreslí. */
  maxScale: number;
  /**
   * Varianta pro tmavý motiv (např. bílá „inverzní" vrstva katastru).
   * Bez ní se v obou motivech kreslí `name`.
   */
  darkName?: string;
}

export interface OverlayService {
  id: string;
  title: string;
  /** WMS 1.3.0 endpoint (GetMap s LAYERS = výběr). */
  wmsUrl: string;
  /**
   * Šablona WMTS dlaždic (REST, grid_5514) pro výběr CELÉ služby — rychlé
   * cachované dlaždice. Bez ní se vždy kreslí přes WMS.
   */
  wmtsUrl?: string;
  sublayers: OverlaySublayer[];
}

export interface OverlayDef {
  /** Identifikátor překryvu (prefix id v DOM: `toggle-{id}`, `{id}-body`, …). */
  id: 'dtm' | 'kn';
  title: string;
  /** Tooltip hlavního přepínače. */
  description: string;
  /** Poznámka pod seznamem (měřítka). */
  note: string;
  attribution: string;
  /** Pořadí vrstev v mapě: první služba = zIndexBase, další +1. */
  zIndexBase: number;
  services: OverlayService[];
}

export const DTM_OVERLAY: OverlayDef = {
  id: 'dtm',
  title: 'DTM ČR (překryv)',
  description: 'Zobrazit Digitální technickou mapu ČR jako překryv nad podkladem (2D i 3D)',
  note: 'Kreslí se až při přiblížení (ZPS od ~1 : 37 000, sítě od ~1 : 150 000, přípojky a drobné prvky od 1 : 800).',
  attribution: DTM_ATTRIBUTION,
  zIndexBase: 1,
  services: DTM_SERVICES.map((s) => ({
    id: s.id,
    title: s.title,
    wmsUrl: `${DTM_WMS_BASE}${s.id}`,
    ...(s.wmts
      ? { wmtsUrl: `${DTM_WMTS_BASE}${s.id}/rest/${s.id}/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png` }
      : {}),
    sublayers: s.sublayers,
  })),
};

/**
 * Katastr nemovitostí — WMS ČÚZK (https://services.cuzk.gov.cz/wms/wms.asp,
 * veřejné, EPSG:5514, CORS `*`). Skupina „Katastr nemovitostí" (KN) s
 * inverzními (bílými) variantami `*_i` / `*_I` pro tmavý motiv — ve světlém
 * motivu je katastr černý, v tmavém bílý. Názvy a měřítka z GetCapabilities
 * (staženo 2026-11-04).
 */
export const KN_OVERLAY: OverlayDef = {
  id: 'kn',
  title: 'Katastr nemovitostí',
  description: 'Zobrazit katastrální mapu ČÚZK jako překryv (2D i 3D) — ve světlém motivu černá, v tmavém bílá',
  note: 'Kreslí se až při přiblížení (od 1 : 5 000, parcelní čísla a obrazy parcel od 1 : 2 000).',
  attribution: '© ČÚZK – katastr nemovitostí',
  zIndexBase: 6,
  services: [
    {
      id: 'kn',
      title: 'Katastrální mapa',
      wmsUrl: 'https://services.cuzk.gov.cz/wms/wms.asp',
      sublayers: [
        { name: 'hranice_parcel', darkName: 'hranice_parcel_i', title: 'Hranice parcel', maxScale: 5000 },
        { name: 'parcelni_cisla', darkName: 'parcelni_cisla_i', title: 'Parcelní čísla', maxScale: 2000 },
        { name: 'obrazy_parcel', darkName: 'obrazy_parcel_i', title: 'Obrazy parcel', maxScale: 2000 },
        { name: 'dalsi_p_mapy', darkName: 'dalsi_p_mapy_i', title: 'Další prvky mapy', maxScale: 3000 },
        { name: 'RST_KMD', darkName: 'RST_KMD_I', title: 'KM-D (rastr)', maxScale: 5000 },
        { name: 'RST_KN', darkName: 'RST_KN_I', title: 'Analogové mapy (rastr)', maxScale: 5000 },
        { name: 'omp', darkName: 'omp_i', title: 'Orientační mapa parcel', maxScale: 5000 },
      ],
    },
  ],
};

/** Všechny překryvy v pořadí vykreslování (DTM dole, katastr nad ním). */
export const OVERLAYS: readonly OverlayDef[] = [DTM_OVERLAY, KN_OVERLAY];

/** Je zapnutý tmavý motiv aplikace? (data-theme na <html>) */
export function isDarkTheme(): boolean {
  return document.documentElement.dataset['theme'] === 'dark';
}

/** Názvy podvrstev pro LAYERS podle motivu (tmavý → `darkName`). */
export function themedLayerNames(service: OverlayService, names: readonly string[]): string[] {
  const dark = isDarkTheme();
  return names.map((n) => {
    const l = service.sublayers.find((s) => s.name === n);
    return dark && l?.darkName ? l.darkName : n;
  });
}
