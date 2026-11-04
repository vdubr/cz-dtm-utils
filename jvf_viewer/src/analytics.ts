/**
 * Měření používání aplikace (PostHog Cloud EU) — které funkce se používají
 * a jak dlouho se s aplikací pracuje.
 *
 * Soukromí:
 * - bez cookies a bez úložiště prohlížeče (`persistence: 'memory'` — každé
 *   načtení stránky je nový anonymní návštěvník), proto bez souhlasové lišty,
 * - bez autocapture, záznamu relací, heatmap a průzkumů — odesílají se jen
 *   události z katalogu níže s agregovanými vlastnostmi; nikdy názvy
 *   vlastních souborů, souřadnice, ID prvků, atributy ani údaje o parcelách.
 *
 * Aktivní jen v produkčním buildu s klíčem projektu `VITE_POSTHOG_KEY`
 * (`.env.production`; klíč projektu je veřejný) a jen na produkčním hostu
 * z `VITE_POSTHOG_HOSTS` (ne Vercel preview, localhost ani e2e). Jinak je vše
 * no-op. PostHog se načítá líně, chyba měření aplikaci nikdy neovlivní.
 */
import type { PostHog } from 'posthog-js';

const POSTHOG_HOST = 'https://eu.i.posthog.com';

export type View = '2d' | '3d';

/** Katalog událostí a jejich vlastností. */
export interface AnalyticsEvents {
  /** Aktivní čas (viditelná stránka) od posledního odeslání, v sekundách. */
  active_time: { seconds: number };
  /** Načtení vlastního souboru (bez názvu). */
  file_load: { mode: string; version: string; size: string };
  /** Načtení ukázky z nabídky (název ukázky je veřejný). */
  sample_load: { sample: string; mode: string };
  mode_change: { mode: string };
  topology_check: { mode: string; result: 'ok' | 'warnings' | 'errors' };
  features_panel: { via: 'button' | 'map_click' };
  /** Klik na prvek v mapě — typ objektu z katalogu (např. `BudovaPlocha`), ne ID ani atributy. */
  map_feature_click: { view: View; type: string };
  measure: { view: View };
  basemap_change: { basemap: string };
  overlay_toggle: { overlay: string };
  kn_query: { view: View };
  /** Zapnutí SVG symbolů pro body ve 3D. */
  svg_symbols: Record<string, never>;
  /** Načtení terénu ČÚZK (DMR5G) ve 3D — přepínačem, nebo automaticky kvůli podkladu / překryvu. */
  terrain_load: { via: 'toggle' | 'basemap' | 'overlay' };
  /** Doba strávená ve 3D (od vstupu po odchod), v sekundách. */
  view_3d: { seconds: number };
  theme_change: { theme: 'light' | 'dark' };
  export_dxf: { mode: string; format: string; fill: boolean };
}

type EventName = keyof AnalyticsEvents;
type Pending = [EventName, Record<string, unknown>, boolean];

let client: PostHog | null = null;
let enabled = false;
const pending: Pending[] = [];

/** Velikost souboru jako hrubé pásmo (ne přesná hodnota). */
export function sizeBucket(bytes: number): string {
  const mb = bytes / 1_048_576;
  if (mb < 1) return '<1 MB';
  if (mb < 10) return '1–10 MB';
  if (mb < 50) return '10–50 MB';
  return '50+ MB';
}

/** Má se v tomto prostředí měřit? */
export function shouldEnableAnalytics(env: {
  prod: boolean;
  key: string | undefined;
  /** Povolené hosty oddělené čárkou (produkce). */
  hosts: string | undefined;
  hostname: string;
  webdriver: boolean;
}): boolean {
  if (!env.prod || !env.key || env.webdriver) return false;
  const hosts = (env.hosts ?? '').split(',').map((h) => h.trim()).filter(Boolean);
  return hosts.includes(env.hostname);
}

/** Zaznamená událost z katalogu (no-op, když se neměří). */
export function track<E extends EventName>(event: E, props: AnalyticsEvents[E], beacon = false): void {
  if (!enabled) return;
  try {
    if (client) client.capture(event, { ...props }, beacon ? { transport: 'sendBeacon' } : undefined);
    else pending.push([event, { ...props }, beacon]);
  } catch {
    // měření nesmí rozbít aplikaci
  }
}

// ── Aktivní čas a doba ve 3D ────────────────────────────────────────────────

let activeSince: number | null = null;
let activeMs = 0;
let view3dSince: number | null = null;
let view3dMs = 0;

function now(): number {
  return performance.now();
}

/** Odešle nashromážděný aktivní čas (a rozpracovanou dobu ve 3D). */
function flushTime(): void {
  if (activeSince !== null) {
    activeMs += now() - activeSince;
    activeSince = null;
  }
  if (view3dSince !== null) {
    view3dMs += now() - view3dSince;
    view3dSince = null;
  }
  if (activeMs >= 1000) track('active_time', { seconds: Math.round(activeMs / 1000) }, true);
  if (view3dMs >= 1000) track('view_3d', { seconds: Math.round(view3dMs / 1000) }, true);
  activeMs = 0;
  view3dMs = 0;
}

let in3d = false;

/** Přepnutí 2D ↔ 3D — doba ve 3D se odešle při odchodu ze 3D. */
export function trackViewMode(is3d: boolean): void {
  if (is3d === in3d) return;
  in3d = is3d;
  if (is3d) {
    view3dSince = document.visibilityState === 'visible' ? now() : null;
    return;
  }
  if (view3dSince !== null) view3dMs += now() - view3dSince;
  view3dSince = null;
  if (view3dMs >= 1000) track('view_3d', { seconds: Math.round(view3dMs / 1000) });
  view3dMs = 0;
}

function onVisibility(): void {
  if (document.visibilityState === 'visible') {
    activeSince = now();
    if (in3d) view3dSince = now();
  } else {
    flushTime();
  }
}

/** Spustí měření (volá se jednou při startu aplikace). */
export function initAnalytics(): void {
  // Vite dosazuje jen zápis s tečkou (ne `env['…']`).
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (
    !shouldEnableAnalytics({
      prod: import.meta.env.PROD,
      key,
      hosts: import.meta.env.VITE_POSTHOG_HOSTS,
      hostname: location.hostname,
      webdriver: navigator.webdriver === true,
    })
  ) {
    return;
  }
  enabled = true;
  if (document.visibilityState === 'visible') activeSince = now();
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', flushTime);

  import('posthog-js')
    .then(({ default: posthog }) => {
      posthog.init(key!, {
        api_host: POSTHOG_HOST,
        // Bez cookies a localStorage — žádná souhlasová lišta.
        persistence: 'memory',
        person_profiles: 'never',
        // Jen vlastní události z katalogu (+ zobrazení stránky).
        autocapture: false,
        capture_pageview: true,
        capture_pageleave: false,
        rageclick: false,
        capture_dead_clicks: false,
        capture_heatmaps: false,
        capture_exceptions: false,
        capture_performance: false,
        disable_session_recording: true,
        disable_surveys: true,
        disable_product_tours: true,
        disable_conversations: true,
        disable_web_experiments: true,
        disable_external_dependency_loading: true,
        advanced_disable_flags: true,
        mask_personal_data_properties: true,
      });
      client = posthog;
      for (const [event, props, beacon] of pending.splice(0)) {
        posthog.capture(event, props, beacon ? { transport: 'sendBeacon' } : undefined);
      }
    })
    .catch(() => {
      enabled = false;
      pending.length = 0;
    });
}
