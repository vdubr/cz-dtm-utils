/**
 * Textové objekty UDM („Bod (text)") a výška písma dle doporučení UDM
 * (Popis struktury UDM 2.1.1, kap. 15.2; velikosti pro tisk 1:500):
 *   3 m základní, 4 m čísla a názvy objektů / kóty vrcholů,
 *   6 m ulice, silnice, vodní plochy a toky a všechny směry,
 *   8 m osady, oblasti, místní a pomístní názvy, obecné poznámky,
 *   12 m čtvrti, města, obce, katastrální území.
 * Text objektu je v atributu `PopisObjektu`.
 */
import type { ZaznamObjektu } from 'jvf-dtm-types';

const BASE_HEIGHT = 3;

/** Objekty UDM, jejichž obsahem je text (`PopisObjektu`) v bodě. */
const TEXT_OBJECTS: Readonly<Record<string, number>> = {
  PopisyZPS: BASE_HEIGHT,
  PopisyDI: BASE_HEIGHT,
  PopisyTI: BASE_HEIGHT,
  PodrobnyBodCislo: BASE_HEIGHT,
  PodrobnyBodKod: BASE_HEIGHT,
  PodrobnyBodVyska: BASE_HEIGHT,
  VrstevnicePopis: 4,
  PopisySmeru: 6,
  ObecnePoznamky: 8,
  Nazvy: 4, // upřesní TypNazvu
};

/** Výška podle číselníku CKZTypNazvu (atribut TypNazvu objektu Nazvy). */
const NAZVY_HEIGHT: Readonly<Record<string, number>> = {
  '500': 4, // číslo evidenční
  '501': 4, // číslo orientační
  '502': 4, // číslo popisné
  '503': 4, // číslo popisné/orientační
  '504': 12, // město, obec, čtvrť
  '505': 8, // místní název
  '506': 12, // název katastrálního území
  '507': 4, // název objektu
  '508': 8, // název přírodního objektu
  '509': 6, // název ulice, silnice
  '510': 6, // název vodní plochy, toku
  '511': 4, // název vrcholu
  '512': 8, // oblast
  '513': 8, // osada
  '517': 8, // pomístní název
  '518': 4, // popis objektu
};

export function isTextObject(elementName: string): boolean {
  return elementName in TEXT_OBJECTS;
}

export function textHeightFor(elementName: string, zaznam: ZaznamObjektu): number {
  if (elementName === 'Nazvy') {
    const typ = zaznam.attributes['TypNazvu'];
    return NAZVY_HEIGHT[String(typ)] ?? BASE_HEIGHT;
  }
  return TEXT_OBJECTS[elementName] ?? BASE_HEIGHT;
}
