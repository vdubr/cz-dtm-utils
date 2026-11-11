/**
 * Rozhraní dialektu JVF DTM na straně parseru. Definice dialektu (id, verze,
 * základní verze JVF) je v `jvf-dtm-types` (`DIALECTS`); parser k ní přidává
 * detekci z raw XML a parsovací funkci.
 */
import type { DialectDef, DialectVersion, JvfDtm } from 'jvf-dtm-types';

export interface ParserDialect {
  def: DialectDef;
  /** Surová verze dialektu z hlavičky souboru, nebo `null` (soubor není tento dialekt). */
  detect(xml: string): string | null;
  /**
   * Naparsuje soubor dané (podporované) verze dialektu. Výsledek má vyplněné
   * `verze` (= `version`), `verzeJvfDtm` a `dialect`.
   */
  parse(xml: string, version: DialectVersion): JvfDtm;
}

/** Přečte textový obsah elementu hlavičky (bez plného parsování XML). */
export function detectHeaderElement(xml: string, element: string): string | null {
  const re = new RegExp(`<(?:[A-Za-z0-9_]+:)?${element}>\\s*([^<\\s]+)`);
  const m = xml.match(re);
  return m?.[1]?.trim() ?? null;
}
