# Projektový kontext pro Claude

## Struktura projektu

```
cz-dtm-utils/
├── jvf_parser/          # TypeScript parser JVF DTM souborů
│   ├── src/1.4.3/       # Implementace pro verzi 1.4.3
│   │   ├── types.ts             # Typy: JvfDtm, ObjektovyTyp, ZaznamObjektu, Geometry, ...
│   │   ├── geometry-primitives.ts  # parsePoint, parseLineString, parsePolygon, parseMultiCurve
│   │   ├── geometry.ts          # parseGeometrieObjektu, parseOblastObjektuKI
│   │   ├── parser.ts            # Hlavní parser
│   │   ├── attributes.ts        # Parsování atributů
│   │   ├── xml-helpers.ts       # Pomocné funkce pro XML
│   │   └── index.ts
│   ├── docs/1.4.3/xsd/  # XSD schémata DTM specifikace
│   │   ├── common/              # Společné typy (atributy, common, extenze, servis)
│   │   ├── objekty/             # XSD pro každý typ objektu (358 souborů)
│   │   │   # Konvence názvů: {nazev_objektu}-{typ_geometrie}.xsd
│   │   │   # Typy geometrie v názvu: -bod, -linie, -plocha, -defbod
│   │   └── ext/gml/             # GML 3.2 schémata
│   └── samples/1.4.3/   # Ukázkové JVF soubory
│       ├── ukazka_ZPS.xml       # Základní prostorová situace (body)
│       ├── ukazka_DI.xml        # Dopravní infrastruktura
│       ├── ukazka_GAD.xml
│       ├── ukazka_KI.xml
│       └── ukazka_OPL.xml
└── jvf_viewer/          # Vite/OpenLayers viewer
    └── src/map/jvfLayers.ts  # Renderování geometrií do OL vrstev
```

## DTM geometrie — jak to funguje

Parser podporuje všechny 4 typy GML geometrie z DTM:

| GML element v `GeometrieObjektu` | Typ v parseru | Příklady objektů |
|---|---|---|
| `pointProperty` | `Point` | PodrobnyBodZPS, defbody |
| `curveProperty` | `LineString` | HraniceStavby, OsaPozemniKomunikace, trasy TI |
| `multiCurveProperty` | `MultiCurve` | trasy TI (více segmentů) |
| `surfaceProperty` | `Polygon` | BudovaPlocha, LesPlocha, JezeroPlocha, ... |

**Plochy mají dvojí geometrii**: XSD pro `-plocha` objekty definuje vždy obě:
- `surfaceProperty` → 2D Polygon (půdorys)
- `multiCurveProperty` → 3D MultiCurve (obvod se Z-souřadnicemi)

Jeden `ZaznamObjektu` tak má v `geometrie[]` dvě položky.

## Topologie — plánované checkování

### Co řešíme

Po parsování spustit sadu topologických checků a vrátit seznam chyb.
DTM **nepoužívá GML topologii** (žádné `gml:Node`, `gml:Edge`), pracuje s prostými geometriemi — topologie je implicitní a ověřuje se algoritmicky.

### Plánovaná architektura

```typescript
interface TopologyError {
  severity: 'error' | 'warning';
  code: string;          // např. "POLYGON_NOT_CLOSED"
  message: string;
  objektovyTyp: string;
  objectId?: string;
  geometryIndex?: number;
}

type TopologyCheck = (dtm: JvfDtm) => TopologyError[];

function runTopologyChecks(dtm: JvfDtm, checks: TopologyCheck[]): TopologyError[];
```

### Tři vrstvy checků (pořadí implementace)

**1. Geometrická validita** (jednoduchá, bez závislostí mezi objekty)
- Polygon uzavřenost: první bod == poslední bod v LinearRing
- Polygon min. počet bodů: exterior ≥ 4 body (3 unikátní + uzavírací)
- LineString min. počet bodů: ≥ 2 body
- Souřadnice validity: žádné NaN ani Infinity
- srsDimension shoda: počet souřadnic dělitelný srsDimension
- Polygon self-intersection: exterior se sám nekříží

**2. Konzistence uvnitř záznamu** (Polygon ↔ MultiCurve u ploch)
- Souřadnice XY exterior Polygonu odpovídají XY souřadnicím MultiCurve
- Počet bodů obvodu Polygonu == počet bodů MultiCurve (po dedup.)

**3. Meziobjektová topologie** (náročné, potřeba snap tolerance)
- Linie tvoří uzavřený polygon: `HraniceStavby` → `BudovaPlocha` (linie společně = obvod budovy)
- Sdílené body sousedních linií: konec jedné == začátek druhé (v rámci snap tolerance)
- Definiční bod leží v ploše: `BudovaDefBod` bod musí ležet uvnitř `BudovaPlocha` polygonu
- Osa leží uvnitř obvodu: `OsaPozemniKomunikace` leží uvnitř `ObvodPozemniKomunikace`

### Stav implementace
- [x] Vrstva 1: Geometrická validita
- [x] Vrstva 2: Konzistence Polygon/MultiCurve
- [x] Vrstva 3: Meziobjektová topologie

Implementováno v `jvf_parser/src/1.4.3/topology.ts`. Testy: `tests/1.4.3/topology/` (84 testů, vše zelené).

### Implementované kontroly (`topology.ts`)

**Vrstva 1 — Geometrická validita** (`checkGeometricValidity`)
- `INVALID_COORDINATE` — NaN nebo Infinity v souřadnicích
- `SRS_DIMENSION_MISMATCH` — počet souřadnic % srsDimension ≠ 0
- `LINESTRING_TOO_FEW_POINTS` — méně než 2 body
- `RING_TOO_FEW_POINTS` — ring s méně než 4 body
- `RING_NOT_CLOSED` — první ≠ poslední bod (XY)
- `RING_SELF_INTERSECTION` — self-intersection exterioru

**Vrstva 2 — Konzistence Polygon ↔ MultiCurve** (`checkPolygonMultiCurveConsistency`)
- `POLYGON_MULTICURVE_POINT_COUNT_MISMATCH`
- `POLYGON_MULTICURVE_COORDS_MISMATCH`

**IS DTM kontroly** (dle `docs/1.4.3/kontroly-dat-dtm.md`, sekce 1.5, 1.6, 3.4–3.10)
- `COORD_OUT_OF_BOUNDS_XY` / `COORD_OUT_OF_BOUNDS_Z` — S-JTSK rozsahy
- `COORD_PRECISION_EXCEEDED` — max 3 desetinná místa
- `LINE_SELF_INTERSECTION` — průnik linie se sebou samou
- `SEGMENT_ZERO_LENGTH` — nulový segment
- `DUPLICATE_LINE_ERROR` / `DUPLICATE_LINE_WARNING` — duplicitní linie
- `DUPLICATE_POINT` — duplicitní bod
- `POINTS_TOO_CLOSE` — body bližší než MIN_DISTANCE_TOLERANCE (0,05 m)
- `SEGMENT_TOO_SHORT` — segment kratší než MIN_DISTANCE_TOLERANCE (0,05 m)

**Vrstva 3 — Meziobjektová topologie**
- `DEFBOD_OUTSIDE_PLOCHA` / `DEFBOD_NO_PLOCHA` — ray-casting pro 63 párů DefBod↔Plocha (`DEFBOD_PLOCHA_PAIRS`)
- `OSA_OUTSIDE_OBVOD` / `OSA_NO_OBVOD` — vrcholy Osy PK musí ležet v Obvodu PK
- `LINE_DANGLING_END` — volné konce linií stejného typu (snap tolerance `SNAP_TOLERANCE` = 0,05 m)

### Exportované konstanty (z `index.ts`)
- `SJTSK_BOUNDS`, `Z_BOUNDS_ZPS`, `Z_BOUNDS_DEFBOD`
- `DUPLICATE_Z_TOLERANCE` = 0.12 m
- `MIN_DISTANCE_TOLERANCE` = 0.05 m
- `SNAP_TOLERANCE` = 0.05 m
- `DEFBOD_PLOCHA_PAIRS` — 63 párů objektových typů DefBod↔Plocha
- `OSA_OBVOD_PAIRS`
