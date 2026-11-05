# Projektový kontext pro Claude

## Důležitá pravidla pro Claude

- **Informace v README modalu vieweru (`jvf_viewer/src/ui/infoModal.ts`) je
  nutné udržovat aktuální.** Při každé změně funkcionality aplikace
  (nová kontrola, nový ovládací prvek, změna chování 3D, apod.) zkontrolovat
  a případně upravit obsah `INFO_CONTENT_HTML` v `infoModal.ts` tak, aby
  popis aplikace odpovídal skutečnému stavu.

## Nasazení

**Produkční větev: `main`. Vývojová větev: `develop`.**

Vercel auto-deployuje pouze `main`. Vývoj probíhá v `develop` (a feature
větvích z něj). Merge `develop → main` se dělá **pouze řízeně** v okamžiku
nasazení nové verze — nikdy ne průběžně.

### Workflow nasazení nové verze

1. Práce probíhá v `develop` (commity, PR z feature větví do `develop`).
2. Když je nová verze připravená:
   a. Z `develop` vyčerpat plánované změny (smoke test, build, tests).
   b. Aktualizovat `CHANGELOG.md` v rootu — přidat sekci pro novou verzi.
      Formát: viz níže (Keep a Changelog, česky).
   c. Bumpnout `version` ve všech `package.json` (root + 5 workspace
      balíčky) na novou verzi (viz Verzování).
   d. Commit `chore(release): vYYYY.M.D` v `develop`.
   e. Merge `develop → main` (`git checkout main && git merge --no-ff develop`).
   f. Vytvořit tag `git tag vYYYY.M.D` na `main`.
   g. `git push origin main --tags`.
   h. **GitHub release**: `gh release create vYYYY.M.D --notes-file <(...)`
      — notes vyplnit z odpovídající sekce `CHANGELOG.md` (česky).
   i. Vercel auto-deployne `main`.

- Produkční URL: **https://cz-dtm-utils.vercel.app/** (JVF), nástroje
  **/udm** a **/jzm** (přepisy ve `vercel.json`, Vite `base: '/'`; staré
  `/jvf_viewer/` a `?mode=…` se trvale přesměrují)

### Verzování — CalVer (semver-kompatibilní)

Formát **`YYYY.M.D`** (bez leading zeros, např. `2026.4.29`, `2026.11.3`).
Důvod: npm/semver leading zeros nedovoluje. Pokud v jednom dni vyjde víc
verzí, suffix `.N`: `2026.4.29.2`. Git tagy s prefixem `v`: `v2026.4.29`.

Verze se synchronizuje napříč všemi 5 workspace `package.json` (root nemá
`version` field, jen `private: true`).

### Changelog — formát a propagace do UI

**Soubor:** `CHANGELOG.md` v rootu repozitáře. Formát [Keep a Changelog](https://keepachangelog.com/cs/),
česky, sekce `Přidáno / Změněno / Opraveno / Odstraněno`:

```md
## [2026.04.30] - 2026-04-30
### Přidáno
- Legenda všech ~360 typů DTM z Katalogu

### Opraveno
- Nesmyslná `strokeWidth` u cyklostezky
```

**Build-time propagace do `infoModal.ts`:**
- `CHANGELOG.md` se importuje raw přes `?raw` Vite suffix:
  `import changelogRaw from '../../../CHANGELOG.md?raw'`.
- Parser v `ui/changelog.ts` převede markdown na HTML (jednoduchý regex
  parser pro headings, lists, bold/code) a vloží do nové sekce „Historie
  verzí" v info modalu — typicky jen několik posledních verzí, starší
  pod expand toggle.
- Žádný runtime fetch, žádné CORS, vždy v sync s deployem.

**`CHANGELOG.md` je single source of truth** — z něj se generuje:
1. Sekce v info modalu aplikace.
2. Release notes pro `gh release create` (kopírovat odpovídající sekci).

### Pravidla pro Claude při releasu

- Nikdy nemergovat `develop → main` bez explicitního pokynu uživatele.
- Při každé změně funkcionality přidávat řádek do **„[Unreleased]"** sekce
  `CHANGELOG.md` (na začátku souboru, nad poslední vydanou verzí).
- Při releasu uživatel potvrdí číslo verze; `[Unreleased]` se přejmenuje
  na `[YYYY.M.D] - YYYY-MM-DD` (verze bez leading zeros, datum dle ISO 8601)
  a vznikne nová prázdná `[Unreleased]`.

## Struktura projektu

```
cz-dtm-utils/              # npm workspaces monorepo
├── jvf_dtm_types/       # Sdílené doménové typy (jvf-dtm-types)
│   └── src/
│       ├── index.ts             # re-export
│       ├── versions.ts          # JVF_VERSIONS, JvfVersion, formatVersionLabel, baseJvfVersionOf
│       ├── dialects.ts          # registr dialektů DIALECTS (UDM, ŽXML), dialectOf, *_VERSIONS
│       └── 1.4.3/types.ts       # JvfDtm, ObjektovyTyp, ZaznamObjektu, Geometry, GmlPoint/LineString/Polygon/MultiCurve, …
├── jvf_parser/          # TypeScript parser JVF DTM souborů (jvf-parser)
│   ├── src/router.ts    # verzní router: dialekty → JVF → strukturní sniff; katalogy/číselníky per verze
│   ├── src/catalog.ts   # obecný EntityMeta (origin, objektovyKod, dialectAttrGroup)
│   ├── src/dialects/    # PARSER_DIALECTS: udm.ts, zxml.ts (detekce + parse nad jádrem JVF)
│   ├── src/styles/      # obecný model vzhledu dialektu (Appearance, resolveAppearance, getStyleTable)
│   ├── src/katalog/     # Katalog kartografických symbolů DTM ČR (vzhled čistého JVF):
│   │                    #   symbology.ts + variantAttrMap.ts (data), resolve.ts (vzhled podle
│   │                    #   geometrie a atributu), appearance.ts (→ Appearance pro CAD);
│   │                    #   SVG značek v jvf_viewer/public/symboly/
│   ├── src/1.5.0.1/     # jádro parseru JVF 1.5.x (records, geometry, attributes, doprovodné info)
│   ├── src/1.5.0.2/     # jen generated/ (parser sdílený s 1.5.0.1)
│   ├── src/udm-2.1.1/   # UDM ČKZ: parser atributů, styly, generated/
│   ├── src/zxml-1.4.2.1/, src/zxml-1.5.1.6/   # ŽXML SŽ: generated/ (katalog, číselníky, styles.ts)
│   ├── src/1.4.3/       # Implementace pro verzi 1.4.3
│   │   ├── types.ts             # re-export z jvf-dtm-types (pro interní ../types.js importy)
│   │   ├── geometry-primitives.ts  # parsePoint, parseLineString, parsePolygon, parseMultiCurve
│   │   ├── geometry.ts          # parseGeometrieObjektu, parseOblastObjektuKI
│   │   ├── parser.ts            # Hlavní parser
│   │   ├── attributes.ts        # Parsování atributů
│   │   ├── xml-helpers.ts       # Pomocné funkce pro XML
│   │   └── index.ts             # veřejné API parseru (bez topologie)
│   ├── docs/1.4.3/xsd/  # XSD schémata DTM specifikace
│   │   ├── common/              # Společné typy (atributy, common, extenze, servis)
│   │   ├── objekty/             # XSD pro každý typ objektu (358 souborů)
│   │   │   # Konvence názvů: {nazev_objektu}-{typ_geometrie}.xsd
│   │   │   # Typy geometrie v názvu: -bod, -linie, -plocha, -defbod
│   │   └── ext/gml/             # GML 3.2 schémata
│   └── samples/1.4.3/   # Ukázkové JVF soubory (sdíleno i pro testy topologie)
│       ├── ukazka_ZPS.xml       # Základní prostorová situace (body)
│       ├── ukazka_DI.xml        # Dopravní infrastruktura
│       ├── ukazka_GAD.xml
│       ├── ukazka_KI.xml
│       └── ukazka_OPL.xml
├── jvf_topology/        # Topologická validace (jvf-topology)
│   ├── src/1.4.3/
│   │   ├── index.ts           # runAllChecks, runTopologyChecks, re-exporty
│   │   ├── types.ts           # TopologyError, TopologyCheck, interní typy
│   │   ├── constants.ts       # SJTSK_BOUNDS, tolerance, DEFBOD/OSA páry
│   │   ├── geometry-math.ts   # mkError, toPoints, dist3D, pointInPolygon, ...
│   │   ├── validity.ts        # Vrstva 1: checkGeometricValidity
│   │   ├── consistency.ts     # Vrstva 2: checkPolygonMultiCurveConsistency
│   │   ├── bounds.ts          # 1.5 + 1.6: rozsah a přesnost souřadnic
│   │   ├── segments.ts        # 3.4 + 3.5 + 3.10: self-intersection, segmenty
│   │   ├── duplicates.ts      # 3.6 + 3.8 + 3.9: duplicity a blízkost
│   │   └── relations.ts       # Vrstva 3: DefBod/Plocha, Osa/Obvod, volné konce
│   └── tests/1.4.3/topology/  # 160 testů (Vitest)
├── jvf_cad/             # Export JVF/UDM/ŽXML → AutoCAD DXF (jvf-cad)
│   └── src/
│       ├── export.ts            # exportDxf: hladiny, bloky symbolů, texty, XDATA
│       ├── dxf/document.ts      # zápis DXF nad šablonou (handly, tabulky, bloky)
│       └── generated/           # templates.ts (ezdxf), symbols.ts (knihovna ČKZ)
└── jvf_viewer/          # Vite/OpenLayers viewer (jvf-viewer)
    └── src/map/jvfLayers.ts   # Renderování geometrií do OL vrstev
```

UDM (Univerzální datový model ČKZ) 2.1.1: XSD, specifikace a knihovna
symbolů v `jvf_parser/docs/udm-2.1.1/`; generátory v `scripts/udm/`
(styly + symboly) a `scripts/cad/` (šablony DXF, vyžaduje ezdxf;
`build-cad-symbols.py --profile udm|zxml|jvf` = bloky symbolů; `jvf` =
značky Katalogu DTM ČR z `jvf_viewer/public/symboly`).

ŽXML (data DTMŽ Správy železnic) 1.4.2.1 a 1.5.1.6: XSD v
`jvf_parser/docs/zxml-*/`, znaky SŽ vektorizované z fotokatalogu MOZeK v
`jvf_parser/docs/zxml-1.5.1.6/{mozek,knihovny}/`; skripty v `scripts/zxml/`
(vektorizace, styly, generátor ukázek `samplegen.py`).

## Dialekty JVF DTM (UDM, ŽXML) a režimy aplikace

Dialekt = datový model nad některou verzí JVF DTM s vlastním číslem verze
v hlavičce (`VerzeJVFUDM`, `VerzeZXML`). Id verze má tvar `<dialekt>-<verze>`
(`udm-2.1.1`, `zxml-1.5.1.6`) a `JvfDtm.verze` je **vždy vyřešené id**
(surová hlavička je v `verzeJvfDtm`, dialekt v `dialect`).

Přidání dalšího dialektu / verze:
1. `jvf_dtm_types/src/dialects.ts` — `*_VERSIONS` + položka `DIALECTS`
   (`headerElement`, `baseJvfVersion`).
2. XSD do `jvf_parser/docs/<id>/xsd`, profil v `scripts/generate-types.ts`
   (`profileFor`), skript `generate:<id>`, `src/<id>/types.ts` (re-export).
3. Parser dialektu v `src/dialects/<id>.ts` (+ registrace v `registry.ts`),
   katalog/číselníky do map v `src/router.ts`.
4. Styly (`src/<id>/generated/styles.ts`) → `STYLES_BY_DIALECT` v
   `src/styles/resolve.ts`; SVG do `jvf_viewer/public/symboly/<dialekt>/`.
5. Topologie: `crossObjectChecksForVersion` (`jvf_topology/src/1.4.3/index.ts`).
6. Viewer: režim v `APP_MODES` (`state/appMode.ts` — název, cesta, titulek),
   přepis cesty ve `vercel.json`, barevné schéma v
   `scripts/viewer/build-app-themes.ts` (→ `src/app-themes.css`), barva
   odznaku v `app-m3.css`, ukázky s `data-mode` v `index.html`, info modal,
   CHANGELOG.

### Aktualizace verze datového modelu

`npm run check:upstream` porovná verze zveřejněné ČÚZK / SŽ / ČKZ s registrem
(týdně i GitHub Action `upstream-versions.yml`). Při nové verzi: stáhnout
balík XSD → `jvf_parser/docs/<verze>/` → `generate` → testy katalogu →
verze do registru → fixture → CHANGELOG. `npm run check:generated` (i v CI)
hlídá, že generované typy odpovídají XSD.

**Závislosti mezi workspaces:**
- `jvf-dtm-types` — bez závislostí (čisté typy)
- `jvf-parser` → `jvf-dtm-types`
- `jvf-topology` → `jvf-dtm-types` (prod), `jvf-parser` (dev — jen pro fixture testy)
- `jvf-cad` → `jvf-parser`, `jvf-dtm-types`
- `jvf-viewer` → `jvf-parser`, `jvf-topology`, `jvf-cad` (líně načítaný export)

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

Implementováno v samostatném workspace balíčku **`jvf-topology`**
(`jvf_topology/src/1.4.3/`, 10 souborů dle vrstev). Závislost na typech
přes `jvf-dtm-types`, žádná z. na parseru (runtime).
Testy: `jvf_topology/tests/1.4.3/topology/` (160 testů, vše zelené).

### Implementované kontroly (`jvf-topology`)

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
- `COORD_PRECISION_EXCEEDED` — max 2 desetinná místa (přesnost na cm)
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

**DEL oblasti (DoprovodneInformace)** — `checkDelAreaContainsDefBodPlocha`
- `DEL_AREA_CONTAINS_DEFBOD_PLOCHA` — warning, pokud definiční bod některé ZPS
  plochy (z `DEFBOD_PLOCHA_PAIRS`) leží uvnitř polygonu DEL oblasti v
  `DoprovodneInformace/OblastiKompletniZPS`. Po přijetí takového souboru dojde
  ke zmenšení oblasti kompletní ZPS. Insert záznamy (`zapisObjektu='i'`) se
  přeskakují — IS DMVS je nehlásí, protože ještě nemají přidělené ID.
  Kontrola běží v obou režimech (`complete` i `changeset`).

### Kontroly vyžadující referenční databázi IS DMVS (neimplementovatelné)

Při porovnání s výstupem oficiálního nástroje **Přejímka 3.20.4.1** (soubor
`test-files/SUBJ-00007989_CZ052_10796_JVF.jvf.xml` vs `test-files/report_chyby.xml`)
bylo ověřeno, že parser produkuje **100% shodné statistiky** (i/u/d per ObjektovyTyp)
a **detekuje všech 14 unikátních DEL upozornění** bez false positives. Přejímka
však navíc hlásí 4 chyby, jejichž ID se v JVF souboru vůbec nevyskytují:

- **"Volný podrobný bod ID: …"** — PB existující v referenční databázi ZPS,
  který by po aplikaci změnových vět zůstal bez vazby na žádný prvek. JVF
  věty tyto PB nezmiňují, kontrola vyžaduje znalost současného stavu DB.
- **"Definiční bod bez plochy ID: …"** — def.bod v DB, jehož nadřazená plocha
  je JVF souborem mazána (`d`), ale def.bod sám není součástí changesetu.

Obě kontroly jsou **server-side v IS DMVS** a porovnávají changeset proti
aktuálnímu stavu databáze ZPS. Bez přístupu k referenční DB je
`jvf-topology` nemůže provést. Toto omezení je stejného charakteru jako
přeskakování Vrstvy 3 v režimu `changeset` — knihovna vidí jen JVF soubor,
nikoli okolní kontext.

Rozdíl v granularitě DEL upozornění (ref: 28×, naše: 14×) je dán tím, že
Přejímka reportuje každý pár (def.bod, DEL polygon) samostatně, zatímco naše
kontrola hlásí 1× per def.bod nezávisle na počtu překryvů. Obě varianty jsou
ekvivalentní z pohledu pokrytí — volba je čistě prezenční.

### Veřejné API

**`jvf-dtm-types`** — sdílené doménové typy (bez runtime kódu):
- `JvfDtm`, `ObjektovyTyp`, `ZaznamObjektu`, `Geometry`, `CommonAttributes`
- GML: `GmlPoint`, `GmlLineString`, `GmlPolygon`, `GmlMultiCurve`
- Enumy: `TypZapisu`, `ZapisObjektuType`, `ObsahovaCast`

**`jvf-parser`** — XML → typované objekty:
- `parseJvfDtm`
- Re-export typů z `jvf-dtm-types` (zpětná kompatibilita)
- `ENTITY_CATALOG` + sdílené atributy z generovaných modulů

**`jvf-topology`** — validace:
- `runAllChecks(dtm, mode?)` — hlavní vstupní bod.
  - `mode: 'complete' | 'changeset' | 'auto'` (default `'auto'`).
  - `'auto'` detekuje režim z `dtm.typZapisu`: `'změnové věty'` → `changeset`, jinak `complete`.
  - V režimu `'changeset'` se přeskakuje Vrstva 3 (meziobjektová topologie),
    protože sousední plochy / obvody / linie mohou existovat v referenční
    databázi ZPS, kterou JVF soubor nevidí — jinak by vznikaly false positives.
- `runTopologyChecks(dtm, checks)` — vlastní sestavení sady kontrol.
- `TopologyError`, `TopologyErrorSeverity`, `TopologyCheck` — typy
- Všechny jednotlivé `check*` funkce (13 funkcí) pro custom sestavy
- Tolerance a rozsahy (`SJTSK_BOUNDS`, `Z_BOUNDS_ZPS`, `Z_BOUNDS_DEFBOD`,
  `DUPLICATE_Z_TOLERANCE` = 0.12 m, `MIN_DISTANCE_TOLERANCE` = 0.05 m,
  `SNAP_TOLERANCE` = 0.05 m)
- Páry objektových typů: `DEFBOD_PLOCHA_PAIRS` (63 párů), `OSA_OBVOD_PAIRS`

**Chování duplicitních kontrol v changeset souborech:**
Dvojice `ZapisObjektu='d' + 'i'/'u'` se stejnou geometrií se **nepovažuje
za duplicitu** (je to legitimní vzor změny atributů). Kontroly
`checkDuplicateLines`, `checkDuplicatePoints` a `checkPointProximity`
takové páry přeskakují vždy, nezávisle na režimu.

**LEVEL-awareness (úroveň umístění):**
Duplicitní a blízkostní kontroly (3.6, 3.8, 3.9) a `checkDanglingEnds`
porovnávají prvky **per LEVEL** — dva geometricky identické prvky v různých
úrovních (např. povrch vs. podzemí, −3 až +3) nejsou duplicita ani kolize.
Hodnota se čte ze specifických atributů `UrovenUmisteniObjektuZPS/TI/DI`
pomocí `getLevel(zaznam)`. Záznamy bez atributu se považují za stejnou
skupinu (`null`).

## Naming conventions

Kódová báze je česky-doménově, ale dodržuje jednotné pravidlo pro rozpoznání,
co je „DTM jazyk" a co „programátorská infrastruktura":

- **Slovesa vždy anglicky**: `parse*`, `check*`, `extract*`, `run*`, `build*`,
  `render*`, `resolve*`
- **Doménové názvy z DTM XSD zůstávají česky**: `ZaznamObjektu`,
  `ObjektovyTyp`, `BudovaDefBod`, `Plocha`, `Osa`, `Obvod`, `GeometrieObjektu`
  — tyto termíny přesně odpovídají XML schématu a změna by rozbila vazbu
  na specifikaci
- **Obecné GIS / programátorské pojmy anglicky**: `Point`, `LineString`,
  `Polygon`, `MultiCurve`, `Error`, `Severity`, `Bounds`, `Tolerance`
- **Komentáře česky** (tým je CZ, doména je CZ)
- **UI stringy a error messages česky** (koncový uživatel je CZ)
- Funkce typu `checkOsaInObvod` jsou záměrně bilingvní:
  `check` = sloveso (EN), `OsaInObvod` = DTM doména (CZ).
  Nepřejmenovávat.

## Home Assistant (MCP)

> **Bezpečnost:** Do tohoto souboru (je v gitu) **nikdy nepatří token ani
> heslo.** Long-Lived Access Token se předává až v příkazu `claude mcp add`
> v terminálu a ukládá se mimo repozitář. Zde jsou jen ne-tajné údaje.

Fakta o instanci Home Assistant:

- **URL instance:** `http://192.168.1.164:8123/`
- **Přístup:** pouze lokální síť (žádná Nabu Casa / proxy / VPN). Claude Code
  se musí připojovat ze stejné LAN.
- **MCP Server endpoint:** `http://192.168.1.164:8123/mcp_server/sse`
  ⚠️ **Integrace „Model Context Protocol Server" zatím NENÍ nainstalovaná** —
  nutno přidat v HA: Nastavení → Zařízení a služby → Přidat integraci →
  „Model Context Protocol Server". Bez ní endpoint neexistuje.
- **Token:** Long-Lived Access Token z Profil → Bezpečnost → dole
  „Tokeny s dlouhou platností". **Netiskni ho sem** — jen do `claude mcp add`.

### Připojení HA MCP do Claude Code

V interaktivním terminálu (ne v této session), token dosadit ručně:

```bash
claude mcp add --transport sse home-assistant http://192.168.1.164:8123/mcp_server/sse \
  --header "Authorization: Bearer <TOKEN>"
```

Po připojení jsou nástroje dostupné jako `mcp__home-assistant__*`.
