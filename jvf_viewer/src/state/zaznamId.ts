import type { ZaznamObjektu } from 'jvf-parser';

/**
 * Identifikace záznamu napříč viewerem (2D vrstvy, 3D scéna, Přehled prvků).
 *
 * Záznamy už vložené v DTM mají přidělené DTM ID (`commonAttributes.id`).
 * Nově vytvořené JVF soubory (changesety DI/TI s `ZapisObjektu='i'`) ale ID
 * ještě nemají — teprve se budou do DTM vkládat. Aby byly i takové prvky
 * plnohodnotně identifikovatelné (zoom, highlight, výběr klikem do mapy),
 * generujeme pro ně **syntetický klíč** z `elementName` a pořadí záznamu
 * v `ObjektovyTyp.zaznamy`.
 *
 * Klíč je stabilní v rámci jednoho nahraného souboru — všechny části vieweru
 * iterují stejné pole `zaznamy`, takže index je konzistentní. Formát
 * `{elementName}#{N}` nekoliduje s reálnými DTM ID (ta znak `#` neobsahují).
 */

/**
 * Vrátí identifikátor záznamu: DTM ID pokud existuje, jinak syntetický
 * klíč `{elementName}#{index+1}`.
 */
export function resolveZaznamId(
  elementName: string,
  zaznam: ZaznamObjektu,
  index: number,
): string {
  const id = zaznam.commonAttributes?.id;
  if (id) return id;
  return `${elementName}#${index + 1}`;
}

/** Je identifikátor syntetický (záznam bez přiděleného DTM ID)? */
export function isSyntheticZaznamId(id: string): boolean {
  return id.includes('#');
}
