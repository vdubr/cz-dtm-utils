# jvf-viewer

Browser application for inspecting and validating **JVF DTM 1.4.3** files —
2D map, 3D scene with terrain, topological validation and an error panel
with click-to-zoom.

> **Live:** https://cz-dtm-utils.vercel.app/jvf_viewer/
>
> Files are processed entirely in the browser. Nothing is uploaded to a
> server — the only outbound requests are tiles and DEM tiles from public
> ČÚZK services.

> Part of the [`cz-dtm-utils`](https://github.com/vdubr/cz-dtm-utils) monorepo.

---

## Features

### 2D map (OpenLayers)

- ČÚZK basemaps: orthophoto and base map (ZM), switchable from the toolbar.
- Per-content-part vector layers (ZPS / TI / DI / GAD / OPL) with toggleable
  visibility.
- Per-object-type symbology generated from the official ČÚZK Symbol Catalog
  (icons + line / fill styles).
- **Geodetically correct symbol size** — 1 SVG-pixel ≈ 0.5 cm in the field
  (reference scale 1:500). Symbols zoom together with lines and polygons.
  At very low zoom (resolution > 4 m/px) the symbol is replaced with a small
  coloured dot or hidden.

### 3D scene (Three.js)

- Native Z-coordinate rendering with adjustable vertical exaggeration.
- ČÚZK **DMR5G** terrain (5 m DEM, hypsometric ramp + minor / major
  contour lines, fetched on-demand via a Vercel Edge proxy).
- Walk-through navigation (WASD + Q/E + arrows) with on-screen key feedback.
- Set-pivot picking, animated zoom-to-feature shared with the 2D map.
- Sprites with `depthTest: true` so 3D billboards integrate with terrain.

### Topology errors panel

- Runs `jvf-topology`'s full check set after every load.
- Errors and warnings grouped by code, click highlights and zooms to the
  feature in the active view (works in both 2D and 3D).
- Mode is auto-detected from the JVF header (`kompletní zápis` vs.
  `změnové věty`); inter-object checks are skipped for changesets.

### Legend modal

- All ~358 object types from the entity catalog (not just those present in
  the loaded file).
- Grouped by content part → category → group; sticky headers.
- Live full-text filter by name / code / category.
- Representative swatch per geometry type.

### Other UX

- Sample JVF files (ZPS, DI, TI, KI, OPL) loadable from a header dropdown.
- Version selector — currently only 1.4.3 is supported, but the dropdown
  is rendered from `SUPPORTED_VERSIONS` in `jvf-dtm-types`. Loading a file
  whose `verze` attribute does not match raises a confirmation dialog.
- About dialog with build-time changelog (the same `CHANGELOG.md` from the
  repository root, imported via Vite's `?raw` suffix — no runtime fetch).
- Cookieless analytics via Vercel Web Analytics + Speed Insights.

---

## Tech stack

- [Vite](https://vitejs.dev/) for the dev server and bundling.
- [OpenLayers 10](https://openlayers.org/) for 2D maps.
- [Three.js](https://threejs.org/) for 3D rendering.
- [`geotiff`](https://github.com/geotiffjs/geotiff.js) (lazy-loaded) for the
  DMR5G GeoTIFF DEM tiles.
- [`proj4`](https://github.com/proj4js/proj4js) for S-JTSK ↔ EPSG:3857
  reprojection.
- TypeScript across the entire codebase.

The viewer is built as a single static SPA. The only server-side piece is
a small Vercel Edge function (`api/dmr5g.ts` at the repo root) that proxies
the ČÚZK ImageServer to keep the DEM endpoint same-origin and avoid CORS.

---

## Development

```bash
npm install         # in the repo root, links workspaces
cd jvf_viewer
npm run dev         # http://localhost:5173/
npm run build       # tsc && vite build → dist/
npm run preview     # serve the production build locally
npm run typecheck   # tsc --noEmit
```

Production deploys are produced by Vercel on push to `main`.

---

## Project layout

```
jvf_viewer/
├── index.html
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── fixtures/                 — sample JVF files served by the UI
│   └── symboly/                  — SVG icons of the ČÚZK Symbol Catalog
└── src/
    ├── main.ts                   — entry point; wires everything together
    ├── style.css
    ├── env.d.ts
    ├── map/                      — OpenLayers 2D
    │   ├── olMap.ts              — map instance + view
    │   ├── cuzk.ts               — ČÚZK base layers (orthophoto + ZM)
    │   ├── jvfLayers.ts          — vector layers per content part
    │   ├── symbology.ts          — auto-generated styling from Katalog DTM
    │   ├── highlight.ts          — selection / zoom-to-feature
    │   └── …
    ├── viewer3d/
    │   ├── threeScene.ts         — scene, camera, controls, sprites
    │   ├── terrain.ts            — DMR5G fetch, hypsometry, contour lines
    │   └── …
    ├── ui/
    │   ├── fileUpload.ts         — file picker + sample dropdown
    │   ├── layerPanel.ts         — left panel + visibility toggles
    │   ├── toggle3d.ts           — 2D/3D switch + 3D toolbar
    │   ├── errorPanel.ts         — topology errors list
    │   ├── infoModal.ts          — About dialog with build-time changelog
    │   ├── legendModal.ts        — full DTM legend
    │   ├── versionSelect.ts      — JVF version dropdown
    │   ├── confirmModal.ts
    │   └── changelog.ts          — markdown → HTML for the About dialog
    └── state/                    — small in-memory app state helpers
```

The `api/dmr5g.ts` Edge function lives at the **repository root**, not under
`jvf_viewer/`, because Vercel's `api/` directory is project-wide.

---

## Notes for contributors

- **Naming:** verbs in English, JVF DTM domain names in Czech, GIS/programming
  primitives in English, comments and UI strings in Czech. See the
  [root README](../README.md#naming-conventions).
- **Bundle size:** the production bundle currently weighs ~1.28 MB
  (gzip ≈ 320 kB). Three.js is statically imported; switching it to a
  dynamic import is in the backlog but currently unblocked by no measured
  user pain.
- **Symbology disclaimer:** colours of individual object types come from the
  ČÚZK Symbol Catalog but have not been verified value-by-value. The
  high-level content-part palette (ZPS / TI / DI / GAD / OPL) is the
  author's Material Design choice. The viewer's About dialog states this
  explicitly to the end user.

---

## License

[MIT](../LICENSE) © 2026 Vojtěch Dubrovský

ČÚZK basemaps, the DMR5G terrain dataset and the official Symbol Catalog
are property of the Czech Office for Surveying, Mapping and Cadastre (ČÚZK).
The viewer queries their public services as documented at
[`https://www.cuzk.cz/`](https://www.cuzk.cz/).
