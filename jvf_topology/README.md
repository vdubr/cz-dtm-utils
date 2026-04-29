# jvf-topology

Topological validation for **JVF DTM 1.4.3** — three layers of checks
covering geometric validity, intra-record consistency and inter-object
topology, plus the IS DTM data-quality rules from sections 1.5, 1.6 and
3.4 – 3.10 of the official specification.

> Part of the [`cz-dtm-utils`](https://github.com/vdubr/cz-dtm-utils) monorepo.

---

## Why a separate package?

JVF DTM does not use GML topology elements (`gml:Node`, `gml:Edge`) —
topology is **implicit** and must be reconstructed and verified
algorithmically from coordinates and inter-object relations. Splitting that
algorithmic work out of the parser keeps the parser deterministic, allows
the validator to be reused outside the viewer, and prevents an unwanted
runtime dependency from validators on parser internals.

`jvf-topology` only depends on **`jvf-dtm-types`** at runtime; `jvf-parser`
is a dev-only dependency for fixture-based tests.

---

## Quick start

```typescript
import { parseJvfDtm } from 'jvf-parser';
import { runAllChecks } from 'jvf-topology';

const dtm = parseJvfDtm(xml);
const errors = runAllChecks(dtm);

for (const e of errors) {
  console.log(`[${e.severity}] ${e.code} (${e.objektovyTyp}): ${e.message}`);
}
```

`runAllChecks` returns an array of `TopologyError`. The shape is:

```typescript
interface TopologyError {
  severity: 'error' | 'warning';
  code: string;            // e.g. 'POLYGON_NOT_CLOSED'
  message: string;          // human-readable Czech message
  objektovyTyp: string;     // owning object type name
  objectId?: string;        // record ID if available
  geometryIndex?: number;   // index into ZaznamObjektu.geometrie[]
}
```

### Validation modes

```typescript
runAllChecks(dtm, 'auto');       // default: derived from dtm.typZapisu
runAllChecks(dtm, 'complete');   // run all three layers
runAllChecks(dtm, 'changeset');  // skip Layer 3 (inter-object topology)
```

Changeset files (`typZapisu === 'změnové věty'`) only carry the **delta**
against a reference dataset that lives in the IS DMVS database. Running
inter-object topology against a delta produces false positives (a polygon's
neighbouring polygon may be in the database, not in the file), so Layer 3
is skipped automatically in that mode.

### Custom check sets

`runAllChecks` is a convenience wrapper. To run only a subset:

```typescript
import {
  runTopologyChecks,
  checkGeometricValidity,
  checkCoordinateBounds,
  type TopologyCheck,
} from 'jvf-topology';

const checks: TopologyCheck[] = [checkGeometricValidity, checkCoordinateBounds];
const errors = runTopologyChecks(dtm, checks);
```

All 13 individual `check*` functions are exported.

---

## Implemented checks

### Layer 1 — Geometric validity (`checkGeometricValidity`)

Per-geometry checks that require no inter-record context.

| Code | Severity | Meaning |
|---|---|---|
| `INVALID_COORDINATE` | error | NaN or Infinity in coordinates. |
| `SRS_DIMENSION_MISMATCH` | error | Coordinate count not divisible by `srsDimension`. |
| `LINESTRING_TOO_FEW_POINTS` | error | LineString has fewer than 2 points. |
| `RING_TOO_FEW_POINTS` | error | Linear ring has fewer than 4 points. |
| `RING_NOT_CLOSED` | error | First ≠ last point (XY) of the ring. |
| `RING_SELF_INTERSECTION` | error | Polygon exterior crosses itself. |

### Layer 2 — Intra-record consistency (`checkPolygonMultiCurveConsistency`)

Plane (`-plocha`) records carry both a `Polygon` footprint and a
`MultiCurve` outline. They must agree:

| Code | Severity | Meaning |
|---|---|---|
| `POLYGON_MULTICURVE_POINT_COUNT_MISMATCH` | error | Different number of vertices after dedup. |
| `POLYGON_MULTICURVE_COORDS_MISMATCH` | error | Different XY coordinates. |

### IS DTM data checks (sections 1.5, 1.6, 3.4 – 3.10)

| Code | Severity | Meaning |
|---|---|---|
| `COORD_OUT_OF_BOUNDS_XY` | error | Outside the valid S-JTSK rectangle. |
| `COORD_OUT_OF_BOUNDS_Z` | error | Z outside the configured altitude bounds (different ranges for ZPS records and definition points). |
| `COORD_PRECISION_EXCEEDED` | error | More than 2 decimal places (i.e. precision finer than 1 cm). |
| `LINE_SELF_INTERSECTION` | error | LineString self-intersects. |
| `SEGMENT_ZERO_LENGTH` | error | Zero-length segment. |
| `DUPLICATE_LINE_ERROR` / `DUPLICATE_LINE_WARNING` | error / warning | Duplicate line of the same / different type. |
| `DUPLICATE_POINT` | error | Duplicate point. |
| `POINTS_TOO_CLOSE` | warning | Points closer than `MIN_DISTANCE_TOLERANCE` (0.05 m). |
| `SEGMENT_TOO_SHORT` | warning | Segment shorter than `MIN_DISTANCE_TOLERANCE` (0.05 m). |

### Layer 3 — Inter-object topology

Run only in `complete` mode (skipped for changesets — see above).

| Code | Severity | Meaning |
|---|---|---|
| `DEFBOD_OUTSIDE_PLOCHA` | error | Definition point lies outside its parent polygon. Uses ray-casting over 63 declared `DefBod ↔ Plocha` pairs (`DEFBOD_PLOCHA_PAIRS`). |
| `DEFBOD_NO_PLOCHA` | error | Definition point has no matching polygon at all. |
| `OSA_OUTSIDE_OBVOD` | error | Road centreline (`Osa`) vertex lies outside its perimeter polygon (`Obvod`). |
| `OSA_NO_OBVOD` | error | Road centreline has no matching perimeter. |
| `LINE_DANGLING_END` | warning | Free end of a line of the same type — vertex without a matching neighbour within `SNAP_TOLERANCE` (0.05 m). |

### DEL areas (`checkDelAreaContainsDefBodPlocha`)

| Code | Severity | Meaning |
|---|---|---|
| `DEL_AREA_CONTAINS_DEFBOD_PLOCHA` | warning | A definition point of a ZPS plane object lies inside a DEL polygon in `DoprovodneInformace/OblastiKompletniZPS` — accepting the file would shrink the area of complete ZPS coverage. Insert records (`zapisObjektu='i'`) are skipped because IS DMVS itself does not flag them either (no assigned ID yet). Runs in both `complete` and `changeset` modes. |

---

## Level-awareness (`UrovenUmisteniObjektu*`)

Duplicate / proximity checks (3.6, 3.8, 3.9) and `checkDanglingEnds`
compare records **per level**. Two geometrically identical features at
different levels (surface vs. underground, levels –3 to +3) are not a
duplicate, not a collision and do not share a snap node. The level value
is read via `getLevel(zaznam)` from
`UrovenUmisteniObjektuZPS / TI / DI`. Records without the attribute are
treated as a single group (`null`).

## Changeset duplicate semantics

A pair of records `ZapisObjektu='d'` + `ZapisObjektu='i'/'u'` with
identical geometry is **not** considered a duplicate — it is a legitimate
attribute-only update. `checkDuplicateLines`, `checkDuplicatePoints` and
`checkPointProximity` skip such pairs unconditionally.

---

## Architecture

```
src/
└── 1.4.3/
    ├── index.ts            — public API (runAllChecks, runTopologyChecks, …)
    ├── types.ts            — TopologyError, TopologyCheck, internal types
    ├── constants.ts        — SJTSK_BOUNDS, tolerances, DEFBOD/OSA pairs
    ├── geometry-math.ts    — mkError, toPoints, dist3D, pointInPolygon, …
    ├── validity.ts         — Layer 1
    ├── consistency.ts      — Layer 2
    ├── bounds.ts           — sections 1.5 + 1.6
    ├── segments.ts         — sections 3.4 + 3.5 + 3.10
    ├── duplicates.ts       — sections 3.6 + 3.8 + 3.9
    ├── relations.ts        — Layer 3 (DefBod ↔ Plocha, Osa ↔ Obvod, dangling ends)
    └── del-areas.ts        — DEL areas containing DefBod
tests/
└── 1.4.3/topology/         — 185 fixture-based tests (Vitest)
```

### Tunable constants (from `constants.ts`)

| Constant | Value | Used by |
|---|---|---|
| `SJTSK_BOUNDS` | XY rectangle of S-JTSK | `checkCoordinateBounds` |
| `Z_BOUNDS_ZPS` / `Z_BOUNDS_DEFBOD` | Altitude ranges | `checkCoordinateBounds` |
| `MIN_DISTANCE_TOLERANCE` | 0.05 m | proximity / segment-length checks |
| `SNAP_TOLERANCE` | 0.05 m | dangling-end detection |
| `DUPLICATE_Z_TOLERANCE` | 0.12 m | duplicate-point Z comparison |
| `DEFBOD_PLOCHA_PAIRS` | 63 entries | `checkDefBodInsidePlocha` |
| `OSA_OBVOD_PAIRS` | (per spec) | `checkOsaInObvod` |

---

## Limitations — checks requiring the IS DMVS database

A comparison with the official **Přejímka 3.20.4.1** tool (using the test
file `SUBJ-00007989_CZ052_10796_JVF.jvf.xml` against `report_chyby.xml`)
showed that this validator produces **identical statistics** (i/u/d per
object type) and detects all 14 unique DEL warnings without false
positives. Přejímka, however, additionally reports four classes of errors
whose IDs do not appear in the JVF file at all:

- *"Volný podrobný bod ID …"* — a detail point existing in the reference
  ZPS database that would lose its parent feature after applying the
  changeset. The JVF file does not mention these IDs.
- *"Definiční bod bez plochy ID …"* — a definition point in the database
  whose parent polygon is being deleted by the changeset (`d`), without
  the definition point itself being part of the changeset.

Both checks compare the changeset against the **live state of the ZPS
database**. Without access to that database `jvf-topology` cannot perform
them — this is the same fundamental limitation as skipping Layer 3 in
`changeset` mode: the library only sees the JVF file, not the surrounding
context.

The granularity difference in DEL warnings (Přejímka: 28 ×, here: 14 ×) is
purely presentational — Přejímka reports each (definition point, DEL
polygon) pair separately, while this validator emits one warning per
definition point regardless of how many DEL polygons it overlaps. Both
variants are equivalent in coverage.

---

## Build / test / typecheck

```bash
npm run build       # tsc → dist/
npm run typecheck   # tsc --noEmit
npm test            # Vitest (185 tests)
```

All tests run against the fixture JVF files shipped with `jvf-parser/samples`.

---

## License

[MIT](../LICENSE) © 2026 Vojtěch Dubrovský
