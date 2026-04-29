# jvf-parser

TypeScript parser for **JVF DTM 1.4.3** — the Czech *Jednotný Výměnný Formát
Digitální Technické Mapy* exchange format.

Reads a JVF DTM XML document and returns a fully typed in-memory tree of
content parts (ZPS / TI / DI / GAD / OPL), object types and records, with all
attributes and GML 3.2 geometries (`Point`, `LineString`, `Polygon`,
`MultiCurve`).

> Part of the [`cz-dtm-utils`](https://github.com/vdubr/cz-dtm-utils) monorepo.

---

## Highlights

- **Pure TypeScript**, runs in Node ≥ 20 and modern browsers.
- **Generated entity catalog** of ~358 object types with their typed
  attributes — produced by an XSD-driven codegen, not hand-written.
- **All four GML geometries supported** including dual `surfaceProperty` /
  `multiCurveProperty` for plane objects.
- **`zapisObjektu` semantics** preserved (`i` / `u` / `d` for inserts,
  updates, deletes in changeset files).
- **Lightweight** — uses [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser).

---

## Installation

```bash
npm install
```

Inside the monorepo, dependencies are linked automatically via npm workspaces.

## Build / test / typecheck

```bash
npm run build       # tsc → dist/
npm run typecheck   # tsc --noEmit
npm test            # Vitest fixture suite
```

---

## Usage

```typescript
import { parseJvfDtm } from 'jvf-parser';
import { readFileSync } from 'node:fs';

const xml = readFileSync('example.jvf.xml', 'utf-8');
const dtm = parseJvfDtm(xml);

console.log(dtm.verze);        // '1.4.3'
console.log(dtm.typZapisu);    // 'kompletní zápis' | 'změnové věty'

for (const objTyp of dtm.objekty) {
  console.log(objTyp.elementName, objTyp.zaznamy.length);

  for (const zaznam of objTyp.zaznamy) {
    for (const geom of zaznam.geometrie) {
      // geom.type: 'Point' | 'LineString' | 'Polygon' | 'MultiCurve'
      console.log(geom.type, geom.data);
    }
  }
}
```

### Object metadata catalog

For every object type defined in JVF DTM 1.4.3 the package exposes a typed
catalog entry — group, content part, allowed geometry kinds, attribute
schema, etc.:

```typescript
import { ENTITY_CATALOG } from 'jvf-parser';

const meta = ENTITY_CATALOG['BudovaPlocha'];
// meta.kod, meta.obsahovaCast, meta.kategorieObjektu,
// meta.skupinaObjektu, meta.geomTypes, meta.attributes
```

The viewer uses this catalog to render the legend of all ~358 object types
without needing any sample data.

### Key types

| Type | Purpose |
|---|---|
| `JvfDtm` | Root document (header + content parts). |
| `ObjektovyTyp` | Group of records sharing a single object type (e.g. `BudovaPlocha`). |
| `ZaznamObjektu` | A single record — attributes + one or more geometries. |
| `Geometry` | Discriminated union: `Point` \| `LineString` \| `Polygon` \| `MultiCurve`. |
| `GmlPoint` / `GmlLineString` / `GmlPolygon` / `GmlMultiCurve` | GML 3.2 primitives. |
| `CommonAttributes` | Shared attribute groups (`UrovenUmisteniObjektuZPS/TI/DI`, accuracy class, …). |
| `TypZapisu` | `'kompletní zápis'` (full snapshot) or `'změnové věty'` (changeset). |
| `ZapisObjektuType` | `'i'` / `'u'` / `'d'` — only meaningful in changeset mode. |

> **Naming note.** Verbs are in English (`parseJvfDtm`), domain types are in
> Czech to mirror the official XSD. See the
> [root README](../README.md#naming-conventions) for the rationale.

---

## Architecture

```
src/
└── 1.4.3/
    ├── index.ts                 — public barrel export
    ├── parser.ts                — entry point: parseJvfDtm()
    ├── types.ts                 — re-export from jvf-dtm-types
    ├── geometry.ts              — dispatcher for GeometrieObjektu / OblastObjektuKI
    ├── geometry-primitives.ts   — parsePoint / parseLineString / parsePolygon / parseMultiCurve
    ├── attributes.ts            — typed attribute parser
    ├── xml-helpers.ts           — small fast-xml-parser utilities
    └── generated/               — AUTO-GENERATED — do not edit
        ├── enums.ts             — ~80 enums extracted from atributy.xsd
        ├── shared-attrs.ts      — 8 shared attribute groups
        └── entities.ts          — catalog of 358 object types + typed attributes
```

### How geometry is modelled

GML elements in the JVF DTM `GeometrieObjektu` block map to the parser's
`Geometry` union as follows:

| GML element | Parser type | Typical objects |
|---|---|---|
| `pointProperty` | `Point` | `PodrobnyBodZPS`, `*DefBod` |
| `curveProperty` | `LineString` | `HraniceStavby`, `OsaPozemniKomunikace`, simple TI routes |
| `multiCurveProperty` | `MultiCurve` | TI utility routes (multi-segment, with Z) |
| `surfaceProperty` | `Polygon` | `BudovaPlocha`, `LesPlocha`, `JezeroPlocha`, … |

Plane (`-plocha`) objects always carry **both** a 2D `Polygon` footprint
(`surfaceProperty`) and a 3D `MultiCurve` outline (`multiCurveProperty`).
A single `ZaznamObjektu` therefore has two entries in `geometrie[]`. The
[`jvf-topology`](../jvf_topology/README.md) package contains a check that
verifies the two are consistent (`POLYGON_MULTICURVE_*`).

---

## Code generation

Files under `src/1.4.3/generated/` are produced from the official XSD schemas
in `docs/1.4.3/xsd/` (358 object schemas + common types + GML 3.2). Run the
generator only when the schemas change:

```bash
npx tsx scripts/generate-types.ts
```

The generated catalog mirrors the XSD filename convention
`{nazev_objektu}-{typ_geometrie}.xsd` to populate `geomTypes`.

---

## Documentation

| Document | Description |
|---|---|
| [`docs/1.4.3/kontroly-dat-dtm.md`](docs/1.4.3/kontroly-dat-dtm.md) | All 33 official IS DTM data checks with implementation status (Czech). |
| [`docs/1.4.3/xsd/`](docs/1.4.3/xsd/) | Authoritative JVF DTM XSD schemas. |
| [`samples/1.4.3/`](samples/1.4.3/) | Reference JVF files for each content part — also used as test fixtures. |

---

## License

[MIT](../LICENSE) © 2026 Vojtěch Dubrovský
