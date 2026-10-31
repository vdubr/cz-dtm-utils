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
export const SUPPORTED_VERSIONS = ['1.4.3', '1.5.0.1'] as const;

/**
 * Podporované verze **UDM** (Univerzální datový model ČKZ) — nadmnožina
 * JVF DTM (objekty `94…`, rozšířené atributy a číselníky `ckz_*`).
 *
 * Drženo **odděleně** od `SUPPORTED_VERSIONS`: ta popisuje verze JVF DTM
 * a viewer bere její poslední prvek jako výchozí aktivní verzi. Id má tvar
 * `udm-<verze UDM>` (např. `udm-2.1.1` ↔ `<cmn:VerzeJVFUDM>2.1.1`).
 */
export const UDM_VERSIONS = ['udm-2.1.1'] as const;

export type UdmVersion = (typeof UDM_VERSIONS)[number];

/** Id datového modelu, se kterým umí monorepo pracovat (JVF DTM nebo UDM). */
export type JvfVersion = (typeof SUPPORTED_VERSIONS)[number] | UdmVersion;

export const DEFAULT_VERSION: JvfVersion = '1.4.3';

/** Nejnovější podporovaná verze UDM (fallback pro neznámou `VerzeJVFUDM`). */
export const LATEST_UDM_VERSION: UdmVersion = 'udm-2.1.1';

/**
 * Type guard — ověří, že daný řetězec je jedna z podporovaných verzí
 * (JVF DTM i UDM). Používá se při čtení `verze` z parsovaného souboru.
 */
export function isSupportedVersion(v: string): v is JvfVersion {
  return (
    (SUPPORTED_VERSIONS as readonly string[]).includes(v) ||
    (UDM_VERSIONS as readonly string[]).includes(v)
  );
}

/** Je id verze UDM (`udm-…`)? */
export function isUdmVersion(v: string): v is UdmVersion {
  return (UDM_VERSIONS as readonly string[]).includes(v);
}

/** Id verze UDM z hodnoty `<VerzeJVFUDM>` (např. `2.1.1` → `udm-2.1.1`). */
export function udmVersionId(verzeJvfUdm: string): string {
  return `udm-${verzeJvfUdm.trim()}`;
}

/**
 * Čitelný popisek verze pro UI: `1.5.0.1` → `JVF 1.5.0.1`,
 * `udm-2.1.1` → `UDM 2.1.1`.
 */
export function formatVersionLabel(v: string): string {
  return v.startsWith('udm-') ? `UDM ${v.slice(4)}` : `JVF ${v}`;
}
