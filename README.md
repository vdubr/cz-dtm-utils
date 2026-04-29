# cz-dtm-utils

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://cz-dtm-utils.vercel.app/jvf_viewer/)

TypeScript monorepo for working with **JVF DTM** — the Czech *Jednotný Výměnný
Formát Digitální Technické Mapy* (Unified Exchange Format for the Digital
Technical Map). It provides a parser, a topological validator, and a browser-based
viewer/validator UI for JVF DTM 1.4.3 files.

> **Live demo:** https://cz-dtm-utils.vercel.app/jvf_viewer/
>
> Files are processed entirely in the browser — nothing is uploaded to a server.

---

## Table of contents

- [About JVF DTM](#about-jvf-dtm)
- [Packages](#packages)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Development workflow](#development-workflow)
- [Releases & versioning](#releases--versioning)
- [Project character](#project-character)
- [License](#license)

---

## About JVF DTM

The Czech Digital Technical Map (DTM) is a unified register of technical and
basic spatial information about the territory of the Czech Republic, mandated
by Act No. 200/1994 Coll. and operated by regional authorities (DMVS). The
**JVF DTM** is the official XML-based exchange format used to submit, update
and query DTM data.

The format defines hundreds of typed object classes grouped into five content
parts:

| Code | Czech name | English meaning |
|---|---|---|
| **ZPS** | Základní prostorová situace | Basic spatial situation (buildings, vegetation, terrain) |
| **TI**  | Technická infrastruktura | Technical infrastructure (utility networks) |
| **DI**  | Dopravní infrastruktura | Transport infrastructure (roads, railways) |
| **GAD** | Geodetické a administrativní údaje | Geodetic and administrative data |
| **OPL** | Ostatní prvky a linie | Other elements and lines |

Each object carries typed attributes (level of placement, accuracy class,
content part, …) and one or more GML 3.2 geometries (`Point`, `LineString`,
`Polygon`, `MultiCurve`).

For the official specification see the
[Czech State Administration of Land Surveying and Cadastre (ČÚZK) DMVS portal](https://www.cuzk.cz/dmvs/).

---

## Packages

The repository is an npm workspaces monorepo with four published-style packages.
None of them are currently published to npm — they are consumed via local
workspace links. They are nevertheless designed as independent libraries with
clean public APIs.

| Package | Path | Purpose |
|---|---|---|
| **[`jvf-dtm-types`](./jvf_dtm_types/)** | `jvf_dtm_types/` | Shared TypeScript domain types — pure types, zero runtime dependencies. Single source of truth for `JvfDtm`, `ObjektovyTyp`, `ZaznamObjektu`, `Geometry`, GML primitives, enums. |
| **[`jvf-parser`](./jvf_parser/)** | `jvf_parser/` | XML → typed object parser for JVF DTM 1.4.3. Auto-generated entity catalog (~358 object types) and shared attribute groups from the official XSD schemas. |
| **[`jvf-topology`](./jvf_topology/)** | `jvf_topology/` | Topological validation of parsed JVF data — three layers of checks (geometric validity, intra-record consistency, inter-object topology). 185 fixture-based tests. |
| **[`jvf-viewer`](./jvf_viewer/)** | `jvf_viewer/` | Browser application — Vite + OpenLayers (2D) + Three.js (3D with ČÚZK DMR5G terrain). Loads JVF files locally, renders all geometries, runs topology checks and lists errors with click-to-zoom. |

### Dependency graph

```
jvf-dtm-types  (no deps)
     ▲
     ├── jvf-parser
     │       ▲
     ├── jvf-topology  (dev-only dep on jvf-parser for fixture tests)
     │       ▲
     └── jvf-viewer
```

---

## Getting started

### Prerequisites

- Node.js **≥ 20** (tested on 20 LTS and 22)
- npm **≥ 10** (workspaces support)

### Install

```bash
git clone https://github.com/vdubr/cz-dtm-utils.git
cd cz-dtm-utils
npm install
```

Workspace dependencies are linked automatically.

### Common scripts (root)

```bash
npm run build       # build all four workspaces in dependency order
npm run typecheck   # type-check all workspaces
npm test            # run jvf-parser + jvf-topology test suites (Vitest)
```

### Run the viewer locally

```bash
cd jvf_viewer
npm run dev         # starts Vite dev server on http://localhost:5173/
```

Sample JVF files are provided under `jvf_viewer/public/fixtures/` and via the
*"Sample files"* dropdown in the UI.

### Use the parser programmatically

```typescript
import { parseJvfDtm } from 'jvf-parser'
import { runAllChecks } from 'jvf-topology'
import { readFileSync } from 'node:fs'

const xml = readFileSync('example.jvf.xml', 'utf-8')
const dtm = parseJvfDtm(xml)

console.log(dtm.verze)        // '1.4.3'
console.log(dtm.typZapisu)    // 'kompletní zápis' | 'změnové věty'

const errors = runAllChecks(dtm)  // mode is auto-detected from typZapisu
for (const err of errors) {
  console.log(`[${err.severity}] ${err.code} — ${err.message}`)
}
```

See each package's README for a full API reference.

---

## Project structure

```
cz-dtm-utils/
├── jvf_dtm_types/        # Shared domain types (zero runtime)
├── jvf_parser/           # XML → typed objects
│   ├── docs/1.4.3/xsd/   # Official XSD schemas (source of truth)
│   ├── samples/1.4.3/    # Reference JVF files (also used as test fixtures)
│   └── scripts/          # Codegen for entity catalog + shared attributes
├── jvf_topology/         # Topological validation (3 layers, 13 checks)
│   └── tests/1.4.3/      # Vitest fixture-based suites
├── jvf_viewer/           # Vite + OL + Three.js browser app
│   ├── public/fixtures/  # Sample JVF files served by the viewer
│   └── src/
│       ├── map/          # OpenLayers 2D (CUZK basemaps, JVF layers, symbology)
│       ├── viewer3d/     # Three.js 3D scene + DMR5G terrain
│       └── ui/           # Modal dialogs, panels, file upload, legend
├── CHANGELOG.md          # Keep a Changelog (Czech), CalVer YYYY.M.D
├── CLAUDE.md             # Internal contributor / agent guidelines
└── LICENSE               # MIT
```

---

## Development workflow

The repository uses two long-lived branches:

- **`main`** — production. Vercel auto-deploys every push.
- **`develop`** — integration. All work happens here or in feature branches.

`develop → main` merges happen **only at release time**, never continuously.
This keeps every production deploy a deliberate, versioned event.

Routine commits go to `develop` (or feature branches into `develop`).

### Naming conventions

The codebase is bilingual by deliberate design:

- **Verbs in English**: `parse*`, `check*`, `extract*`, `run*`, `build*`, `render*`
- **Domain names in Czech** (matching XSD): `ZaznamObjektu`, `ObjektovyTyp`,
  `BudovaDefBod`, `Plocha`, `Osa`, `Obvod`, `GeometrieObjektu` — these mirror
  the official specification and renaming would break the link to the schema
- **Generic GIS / programming terms in English**: `Point`, `LineString`,
  `Polygon`, `MultiCurve`, `Error`, `Severity`, `Bounds`, `Tolerance`
- **Comments in Czech** (Czech-speaking team, Czech-domain project)
- **UI strings and error messages in Czech** (Czech end-users)

A function such as `checkOsaInObvod` is intentionally bilingual:
`check` is the verb, `OsaInObvod` is the domain.

---

## Releases & versioning

The project uses **CalVer** in the form `YYYY.M.D` (no leading zeros — required
for npm semver compatibility, e.g. `2026.4.29`, `2026.11.3`). Multiple releases
on the same day get a `.N` suffix: `2026.4.29.2`. Git tags are prefixed with
`v` (e.g. `v2026.4.29`).

[`CHANGELOG.md`](./CHANGELOG.md) follows the
[Keep a Changelog](https://keepachangelog.com/) convention (in Czech) and is
the single source of truth — it is:

1. Imported at build time into the viewer's *About* dialog (no runtime fetch,
   always in sync with the deployed bundle).
2. Used verbatim as the body of the corresponding GitHub Release.

See [`CLAUDE.md`](./CLAUDE.md) for the full release procedure.

---

## Project character

This is a **personal recreational project**, not an officially endorsed tool.
It does **not** replace the official *Přejímka* utility used to submit data to
the IS DMVS. Some validation checks performed by the official tooling cannot
be reproduced here because they require access to the live IS DMVS reference
database (which only sees changeset deltas against an existing dataset);
this is documented in detail in [`CLAUDE.md`](./CLAUDE.md).

Style colours used in the legend and on the map are the author's choice based
on Material Design palettes for the high-level content parts (ZPS / TI / DI /
GAD / OPL); per-object-type colours come from the official ČÚZK Symbol Catalog
but have not been verified value-by-value against the reference rendering.

Pull requests, bug reports and feedback are welcome.

---

## License

[MIT](./LICENSE) © 2026 Vojtěch Dubrovský

The JVF DTM specification, XSD schemas, sample data and the symbol catalog
(ČÚZK Katalog DTM 1.4.3) are property of the Czech Office for Surveying,
Mapping and Cadastre (ČÚZK) and the regional DMVS authorities; they are
included here under the assumption of their public-information status for the
purpose of interoperability tooling.
