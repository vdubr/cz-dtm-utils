# jvf-parser

TypeScript parser pro **Jednotný výměnný formát DTM** (JVF DTM) verze 1.4.3.

Parsuje XML soubory ve formátu JVF DTM a vrací typovanou strukturu objektů ZPS, DI, TI, GAD a OPL
včetně jejich geometrií (bod, linie, polygon, MultiCurve) a atributů.

---

## Instalace

```bash
npm install
```

## Build

```bash
npm run build
```

Výstup je v `dist/`.

## Testy

```bash
npm test
```

## Typová kontrola

```bash
npm run typecheck
```

---

## Použití

```typescript
import { parseJvfDtm } from 'jvf-parser'
import { readFileSync } from 'fs'

const xml = readFileSync('soubor.xml', 'utf-8')
const dtm = parseJvfDtm(xml)

console.log(dtm.verze)        // '1.4.3'
console.log(dtm.typZapisu)    // 'kompletní zápis' | 'změnové věty'

for (const objTyp of dtm.objekty) {
  console.log(objTyp.elementName, objTyp.zaznamy.length)

  for (const zaznam of objTyp.zaznamy) {
    for (const geom of zaznam.geometrie) {
      // geom.type: 'Point' | 'LineString' | 'Polygon' | 'MultiCurve'
      console.log(geom.type, geom.data)
    }
  }
}
```

### Klíčové typy

| Typ | Popis |
|---|---|
| `JvfDtm` | Kořenový objekt celého dokumentu |
| `ObjektovyTyp` | Skupina záznamů jednoho typu objektu (např. `BudovaPlocha`) |
| `ZaznamObjektu` | Jeden prvek s atributy a geometriemi |
| `Geometry` | Diskriminovaná unie: `Point`, `LineString`, `Polygon`, `MultiCurve` |
| `GmlPoint` | Bod se souřadnicemi (X, Y, Z) |
| `GmlLineString` | Linie jako pole souřadnic |
| `GmlPolygon` | Polygon s exteriorním a interiorními ringy |
| `GmlMultiCurve` | Více linií (trasy TI se Z-souřadnicemi) |

---

## Architektura

```
src/
└── 1.4.3/
    ├── index.ts               — veřejné API (barrel export)
    ├── parser.ts              — hlavní vstupní bod: parseJvfDtm()
    ├── types.ts               — doménové typy
    ├── geometry.ts            — dispatcher geometrií dle GML elementu
    ├── geometry-primitives.ts — parsery GML primitiv (Point, LineString, Polygon, MultiCurve)
    ├── attributes.ts          — parsování atributových bloků
    ├── xml-helpers.ts         — pomocné funkce pro fast-xml-parser
    └── generated/             — AUTOMATICKY GENEROVÁNO — needitovat
        ├── enums.ts           — ~80 enum objektů z atributy.xsd
        ├── shared-attrs.ts    — 8 sdílených atributových skupin
        └── entities.ts        — katalog 358 typů objektů + typované atributy
```

### Generovaný kód

Soubory v `src/1.4.3/generated/` jsou generovány automaticky ze XSD schémat:

```bash
npx tsx scripts/generate-types.ts
```

Spouštět pouze při změně XSD schémat v `docs/1.4.3/xsd/`.

---

## Dokumentace

| Dokument | Popis |
|---|---|
| [`docs/1.4.3/kontroly-dat-dtm.md`](docs/1.4.3/kontroly-dat-dtm.md) | Kontroly dat DTM dle IS DTM krajů — přehled všech 33 kontrol (skupiny 1–4), reference na DTMwiki, relevance pro jvf-parser a plán implementace |
| [`docs/1.4.3/xsd/`](docs/1.4.3/xsd/) | XSD schémata JVF DTM 1.4.3 (zdrojová pravda pro generátor) |

---

## Plánované funkce

Implementace validační vrstvy je plánována ve třech vrstvách:

1. **Geometrická validita** — uzavřenost polygonů, min. počty bodů, souřadnice bez NaN/Infinity, self-intersection
2. **Konzistence uvnitř záznamu** — shoda Polygon ↔ MultiCurve u plošných objektů ZPS
3. **Meziobjektová topologie** — volné konce linií, definiční body uvnitř ploch, sdílené uzly

Viz [`docs/1.4.3/kontroly-dat-dtm.md`](docs/1.4.3/kontroly-dat-dtm.md) a [`CLAUDE.md`](../CLAUDE.md).
