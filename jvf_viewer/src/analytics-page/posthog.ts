/**
 * Čtení dat z PostHogu (Cloud EU) přímo z prohlížeče — HogQL přes Query API
 * s osobním API klíčem uživatele. API povoluje CORS (`access-control-allow-origin: *`),
 * takže není potřeba žádná proxy.
 *
 * Projekt je pevný: „Default project“ = měření JVF vieweru (`src/analytics.ts`).
 * Klíč stačí s oprávněním `query:read` omezený na tento projekt.
 */
export const POSTHOG_APP = 'https://eu.posthog.com';
export const PROJECT_ID = 335266;

/**
 * Produkční hosty vieweru — přehled bere jen jejich události. Do stejného projektu
 * měří i preview (např. větev `feat/dtmz`) a dřív localhost; ty se vynechají.
 * Musí odpovídat `VITE_POSTHOG_HOSTS` v `jvf_viewer/.env.production` (proměnnou
 * prostředí použít nejde — Vercel ji pro preview builds přepisuje).
 */
export const PRODUCTION_HOSTS = ['superjvf.cz', 'www.superjvf.cz', 'cz-dtm-utils.vercel.app'];

/** Neplatný, zrušený nebo nedostatečně oprávněný klíč (HTTP 401/403). */
export class PostHogAuthError extends Error {}

/** Odpověď Query API pro `HogQLQuery` (jen potřebná pole). */
interface HogQLResponse {
  results?: unknown[][];
  error?: string;
}

/** Spustí HogQL dotaz a vrátí řádky. */
export async function hogql(key: string, query: string): Promise<unknown[][]> {
  let res: Response;
  try {
    res = await fetch(`${POSTHOG_APP}/api/projects/${PROJECT_ID}/query/`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: { kind: 'HogQLQuery', query }, name: 'cz-dtm-utils /analytics' }),
    });
  } catch {
    throw new Error('PostHog není dostupný (chyba sítě).');
  }
  if (res.status === 401) throw new PostHogAuthError('Klíč není platný (PostHog ho odmítl).');
  if (res.status === 403) {
    // PostHog vrací 403 i pro neexistující klíč
    throw new PostHogAuthError('Klíč není platný, nemá přístup k projektu nebo mu chybí oprávnění query:read.');
  }
  let body: HogQLResponse & { detail?: string };
  try {
    body = (await res.json()) as HogQLResponse & { detail?: string };
  } catch {
    throw new Error(`PostHog vrátil neočekávanou odpověď (HTTP ${res.status}).`);
  }
  if (!res.ok || body.error) {
    throw new Error(`Dotaz do PostHogu selhal: ${body.detail ?? body.error ?? 'HTTP ' + res.status}`);
  }
  return body.results ?? [];
}
