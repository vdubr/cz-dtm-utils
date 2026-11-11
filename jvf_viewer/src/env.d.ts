/// <reference types="vite/client" />

declare const __COMMIT_HASH__: string;
declare const __BUILD_TIME__: string;
/** Nástroje zapnuté v buildu (`vite.config.ts`, produkce zatím jen `jvf`). */
declare const __APP_MODES__: string[];
/** Produkční build (vydaná verze) — viz vite.config.ts. */
declare const __RELEASE_BUILD__: boolean;

interface ImportMetaEnv {
  /** Klíč projektu PostHog (veřejný) — bez něj se neměří, viz analytics.ts. */
  readonly VITE_POSTHOG_KEY?: string;
  /** Hosty, na kterých se měří (čárkou) — jen produkce, viz analytics.ts. */
  readonly VITE_POSTHOG_HOSTS?: string;
  /** Nástroje zapnuté v buildu (čárkou, např. `jvf,udm`) — viz vite.config.ts. */
  readonly VITE_APP_MODES?: string;
  /** `1` = lokálně sestavit jako produkci (jen vydané nástroje), viz vite.config.ts. */
  readonly VITE_RELEASE_BUILD?: string;
}
