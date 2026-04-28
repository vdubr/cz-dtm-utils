/**
 * Centrální definice podporovaných verzí JVF DTM.
 *
 * `SUPPORTED_VERSIONS` je seznam všech verzí specifikace, pro které má
 * monorepo (parser, topologie, viewer) implementaci. Aktuálně jediná verze
 * je `1.4.3`. Po přidání další verze stačí rozšířit toto pole — UI
 * version selector ve vieweru se generuje z této konstanty.
 *
 * `DEFAULT_VERSION` je výchozí volba (poslední / nejnovější) — používá se
 * jako default v UI selectoru a jako "active version" pro validaci, jestli
 * vstupní JVF soubor odpovídá aktuálně aktivnímu režimu aplikace.
 */
export const SUPPORTED_VERSIONS = ['1.4.3'] as const;

export type JvfVersion = (typeof SUPPORTED_VERSIONS)[number];

export const DEFAULT_VERSION: JvfVersion = '1.4.3';

/**
 * Type guard — ověří, že daný řetězec je jedna z podporovaných verzí.
 * Používá se při čtení `verze` z parsovaného JVF souboru.
 */
export function isSupportedVersion(v: string): v is JvfVersion {
  return (SUPPORTED_VERSIONS as readonly string[]).includes(v);
}
