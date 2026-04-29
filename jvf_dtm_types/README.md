# jvf-dtm-types

Shared TypeScript domain types for **JVF DTM** (*Jednotný Výměnný Formát
Digitální Technické Mapy* — Czech Digital Technical Map exchange format).

This package contains **pure types only** — no runtime code, no dependencies.
It is the single source of truth for the type shape that flows between the
parser, the topological validator and the viewer.

> Part of the [`cz-dtm-utils`](https://github.com/vdubr/cz-dtm-utils) monorepo.

---

## Why a separate package?

`jvf-parser` produces these types, `jvf-topology` consumes them, and
`jvf-viewer` re-exports a subset for its UI. Keeping them in their own
zero-dependency workspace:

- avoids a runtime dependency from `jvf-topology` on `jvf-parser`,
- keeps the parser free to evolve its internals without breaking validators,
- makes it possible to add support for a new JVF DTM version (1.5.x, 1.6.x …)
  by adding a sibling folder `src/1.5.x/types.ts` without touching the parser.

---

## Public API

### Domain types

```typescript
import type {
  JvfDtm,                // root document
  ObjektovyTyp,          // group of records of one object type
  ZaznamObjektu,         // a single record (geometry + attributes)
  Geometry,              // discriminated union of GML geometries
  GmlPoint,
  GmlLineString,
  GmlPolygon,
  GmlMultiCurve,
  CommonAttributes,      // shared attribute groups (level, accuracy, …)
  TypZapisu,             // 'kompletní zápis' | 'změnové věty'
  ZapisObjektuType,      // 'i' | 'u' | 'd' (insert / update / delete)
  ObsahovaCast,          // 'ZPS' | 'TI' | 'DI' | 'GAD' | 'OPL'
} from 'jvf-dtm-types';
```

### Version registry

```typescript
import {
  SUPPORTED_VERSIONS,    // readonly tuple of all implemented versions
  DEFAULT_VERSION,       // the latest / default one
  isSupportedVersion,    // type guard for runtime checks
  type JvfVersion,
} from 'jvf-dtm-types';

if (isSupportedVersion(input)) {
  // input is narrowed to JvfVersion
}
```

When a new JVF DTM version is added, this list is the only place a runtime
needs to know about it — the viewer's version-selector dropdown is generated
from it, and parsers/validators dispatch by it.

---

## Package layout

```
src/
├── index.ts        — barrel export
├── versions.ts     — SUPPORTED_VERSIONS, DEFAULT_VERSION, isSupportedVersion
└── 1.4.3/
    └── types.ts    — domain types for JVF DTM 1.4.3
```

Future versions live next to `1.4.3/` as `1.5.x/`, `1.6.x/`, etc., each
re-exported from `index.ts` under a versioned namespace if/when a breaking
change requires it.

---

## Build / typecheck

```bash
npm run build       # tsc --build
npm run typecheck   # tsc --noEmit
```

There is no test suite — types are validated through the consumers
(`jvf-parser`, `jvf-topology`, `jvf-viewer`).

---

## License

[MIT](../LICENSE) © 2026 Vojtěch Dubrovský
