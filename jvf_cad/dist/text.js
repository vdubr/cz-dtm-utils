const BASE_HEIGHT = 3;
/** Objekty UDM, jejichž obsahem je text (`PopisObjektu`) v bodě. */
const TEXT_OBJECTS = {
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
const NAZVY_HEIGHT = {
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
export function isTextObject(elementName) {
    return elementName in TEXT_OBJECTS;
}
export function textHeightFor(elementName, zaznam) {
    if (elementName === 'Nazvy') {
        const typ = zaznam.attributes['TypNazvu'];
        return NAZVY_HEIGHT[String(typ)] ?? BASE_HEIGHT;
    }
    return TEXT_OBJECTS[elementName] ?? BASE_HEIGHT;
}
//# sourceMappingURL=text.js.map