/**
 * Centrální definice podporovaných verzí JVF DTM.
 *
 * `SUPPORTED_VERSIONS` je seznam všech verzí specifikace, pro které má
 * monorepo (parser, topologie, viewer) implementaci. Po přidání další verze
 * stačí rozšířit toto pole — UI version selector ve vieweru se generuje
 * z této konstanty.
 *
 * `DEFAULT_VERSION` je výchozí volba (fallback pro neznámou/nedetekovanou
 * verzi) — používá se jako default routeru parseru a jako "active version"
 * pro validaci, jestli vstupní JVF soubor odpovídá aktuálně aktivnímu režimu
 * aplikace. Záměrně zůstává `1.4.3` (auto-detekce podle `<VerzeJVFDTM>`
 * v souboru řeší reálné 1.5.0.1 soubory sama — viz router R4).
 */
export declare const SUPPORTED_VERSIONS: readonly ["1.4.3", "1.5.0.1"];
export type JvfVersion = (typeof SUPPORTED_VERSIONS)[number];
export declare const DEFAULT_VERSION: JvfVersion;
/**
 * Type guard — ověří, že daný řetězec je jedna z podporovaných verzí.
 * Používá se při čtení `verze` z parsovaného JVF souboru.
 */
export declare function isSupportedVersion(v: string): v is JvfVersion;
//# sourceMappingURL=versions.d.ts.map