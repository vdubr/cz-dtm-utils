/// <reference types="vite/client" />

declare const __COMMIT_HASH__: string;
declare const __BUILD_TIME__: string;

interface ImportMetaEnv {
  /** Klíč projektu PostHog (veřejný) — bez něj se neměří, viz analytics.ts. */
  readonly VITE_POSTHOG_KEY?: string;
  /** Hosty, na kterých se měří (čárkou) — jen produkce, viz analytics.ts. */
  readonly VITE_POSTHOG_HOSTS?: string;
}
