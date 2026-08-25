# Zadání: Podpora JVF DTM 1.5.0.1 (souběžně s 1.4.3)

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.

## Kontext

ČÚZK vydal novou verzi výměnného formátu **JVF DTM 1.5.0.1** (publikováno
16. 1. 2026, testování pro externí subjekty od 3. 8. 2026). Verze 1.4.3 se
ukončuje — nové soubory budou 1.5.0.1, ale archivní 1.4.3 soubory reálně
existují. Repo `cz-dtm-utils` (parser + topologie + viewer) dnes umí **jen
1.4.3**. Cílem je přidat 1.5.0.1 **souběžně** (router podle `<VerzeJVFDTM>`),
zachovat čtení 1.4.3, a pokrýt i topologii, plné styly a čtení nového
protokolu chyb.

**Výsledek:** plná souběžná podpora **obou verzí (1.4.3 i 1.5.0.1) ve všech
třech balíčcích** — parser, topologie i viewer. Uživatel si vždy může zvolit,
s jakou verzí pracuje (přepínač verzí ve vieweru + automatická detekce podle
`<VerzeJVFDTM>` v souboru). Stará 1.4.3 data zůstávají čitelná.

1.5.0.1 je **breaking change struktury**, ne jen nové objekty. Ověřeno proti
oficiálním dokumentům i reálným ukázkovým XML z distribuce. Zdroje:
- Přehled změn 1.5.0.1: https://cuzk.gov.cz/DMVS/JVF-DTM/Budouci-verze/JVF_DTM_1501_PrehledZmen.aspx
- Budoucí verze (XSD/model/ukázky ke stažení): https://cuzk.gov.cz/DMVS/JVF-DTM/Budouci-verze.aspx
- Srovnávací tabulka 1.5.0.1 vs 1.4.3: https://cuzk.gov.cz/DMVS/JVF-DTM/srovnavaci-tabulka-JVF-1-5-0-1-oproti-JVF-1-4-3.aspx
- Distribuce (XSD + YAML model + ukázky XML): https://cuzk.gov.cz/DMVS/JVF-DTM/Budouci-verze/JVF_DTM_1501.aspx

## Přehled změn formátu 1.5.0.1 (co má dopad na kód)

| # | Změna | Dopad |
|---|---|---|
| 1 | **Operace v názvu elementu**: `<ZaznamObjektu>`+`<ZapisObjektu>i/u/d/r` → `ZaznamObjektuIns/Upd/Del`, `RefV/RefN`, `RefVIns/Upd/Del`, `RefNIns/Upd/Del`, `PeIns/Upd/Del` (přeshraniční, jen ZPS) | Parser – čtení záznamu |
| 2 | **Nové geometrické wrappery** (ns `cmn`): `Bod2D/Bod3D`, `Linie2D/Linie3D`, `Plocha2D/Plocha3D`, `Obvod3D` obalují stále stejné GML primitivy (`Point/LineString/Polygon`), s/bez mezivrstvy `*Property` | Parser – geometrie |
| 3 | **Namespace přes prefixy** (`cmn:`, `atr:`, `pokpol:`…) místo default-ns `xmlns=` | Absorbováno `removeNSPrefix:true` |
| 4 | **Nové skupiny atributů**: `SpolecneAtributyObjektuZPS`, `SpolecneAtributyObjektuPSPI` (`UrovenUmisteniObjektuPSPI`, `IDExterni`) | Parser + codegen |
| 5 | **`DoprovodneInformace` rozděleno** na `…GAD/KAD/DTI/VydejZPS/VydejDTI` | Parser – doprovodné info |
| 6 | **Kategorie PSPI** „Plánované stavební práce infrastruktury", kódy `0200000001–0200000021`, nové ns, neveřejné, jen 2D plocha, `ObsahovaCast` DI/TI | Parser (samo), katalog, styly, topologie |
| 7 | **~20 nových/změněných DTM objektů** `0100000372–0100000388` (obvod tunelu, hydrant vodovodní sítě, horní hrana obruby, rozestavěná plocha, technologický portál, trasa trakčního trolejového vedení, OP dálnice pro reklamní zařízení…) | Katalog (regenerace), styly, topologie |
| 8 | **Odstraněno rozlišení KI** – elementy `KritickaTI`, `OblastObjektuKI` zrušeny | Parser – smazat `parseOblastObjektuKI` ve větvi 1.5 |
| 9 | **Odstraněn objekt** „průběh technologické konstrukce" `0100000185` | Katalog (regenerace) |
| 10 | **Nový typ datové sady** `TypDatoveSady=11` „Výdej PSPI" | Typy + parser + režim topologie |
| 11 | **Integrovaný protokol chyb**: kořen `ServisJVFDTM/ProtokolChyb/{ProtokolChybDTI,ProtokolChybZPS}` (servis.xsd) | Nový parser + UI panel |
| 12 | Deklaratorní atributy `gia` (bool) a `dim` (2/3) na `ObjektovyTypNazev`, `use="prohibited"` | **Ignorovat** (v XML se neuvádějí) |
| 13 | Prázdné hodnoty číselníků: zrušena hodnota „0"/„99" jako prázdno → `xsi:nil="true"` / prázdný string | Parser (tolerantní čtení) |
| 14 | Datový model nově i jako **YAML** (`model/`) + HTML `doc/`; XSD generováno z YAML | Codegen bere dál XSD (`xsd/`) |

### Ověřeno na reálných ukázkách 1.5.0.1
- `<cmn:VerzeJVFDTM>1.5.0.1</cmn:VerzeJVFDTM>` — verze čitelná ze souboru.
- Root `<objtyp:JVFDTM xmlns:cmn xmlns:atr xmlns:pokpol …>` (prefixy).
- `<ZaznamObjektuRefV xmlns="pokpol">` / `<ZaznamObjektuIns>` — operace v názvu.
- `<cmn:Plocha2D><Polygon xmlns=gml>…` (ZPS) vs `<cmn:Plocha2D><surfaceProperty><Polygon>` (PSPI) — nekonzistentní → defenzivní parser.
- `SpolecneAtributyObjektuZPS` (ICS, TridaPresnostiPoloha/Vyska, UrovenUmisteni), `SpolecneAtributyObjektuPSPI` (UrovenUmisteniObjektuPSPI, IDExterni).
- PSPI: `SilnicniDopravaPS`/`ElektrickaSitPS`, kódy `020000000X`, ns `sidops`/`elsips`, `ObsahovaCast` DI/TI.
- Protokol chyb: `<ServisJVFDTM><ProtokolChyb><ProtokolChybDTI/ZPS>` → `Kontroly>Kontrola>SeznamChyb>Chyba`.

## Architektonické rozhodnutí

Dnešní stav (z průzkumu): runtime parser **XSD nečte** (data-driven, čte
`code_base`/atributy přímo z XML); XSD je jen vstup codegenu
`jvf_parser/scripts/generate-types.ts` → `generated/{enums,shared-attrs,entities}.ts`
(`ENTITY_CATALOG`). Parser už používá `removeNSPrefix:true`. Topologie i
viewer se váží na **`elementName`**/`codeBase`, generické checky chytnou nové
objekty samy. Verze je „version-in-path" složky, ale **runtime dispatch
chybí** (`jvf_parser/src/index.ts` a `jvf_dtm_types/src/index.ts` míří natvrdo
na `1.4.3`; `package.json exports` topologie také).

**Zvolený princip: minimální fork, sdílený doménový model, verzní router.**

1. **Sdílené doménové typy** (`JvfDtm`, `ObjektovyTyp`, `ZaznamObjektu`,
   `Geometry`, `Gml*`) zůstávají jedny — parsovaný model má napříč verzemi
   stejný tvar. 1.5.0.1 se řeší **rozšířením** enumů/polí, ne forkem typů.
2. **Fork jen parserové vrstvy** `jvf_parser/src/1.5.0.1/`. Reuse
   `geometry-primitives.ts` a `xml-helpers.ts` (sdílet, ne kopírovat).
3. **Topologie: parametrizovat verzí, neforkovat strom** — `runAllChecks(dtm,
   {version})` vybere pár. tabulku.
4. **Verzní router v parseru** — `parseJvfDtm(xml)` detekuje verzi/kořen a
   nasměruje.

### Rozhodnutí pro robustnost (závazná)

- **R1 — 1.4.3 se nedotýkáme.** Větev `src/1.4.3/` a testy beze změny;
  sdílené typy jen **aditivně** → non-breaking. 1.4.3 testy musí zůstat zelené.
- **R2 — Bezztrátový model záznamu.** `ZaznamObjektu` vedle normalizovaného
  `zapisObjektu: 'i'|'u'|'d'|'r'` ponese surový
  `recordKind?: 'Ins'|'Upd'|'Del'|'RefV'|'RefN'|'RefVIns'|…|'PeDel'` +
  odvozené `visibility?: 'public'|'nonpublic'`,
  `context?: 'input'|'refState'|'refChange'|'peer'`. Downstream na `i/u/d/r`
  funguje beze změny. Mapování = čistá jednotkově testovaná tabulka.
- **R3 — Zpětně kompatibilní API.** `ENTITY_CATALOG` zůstává (=1.4.3) +
  `getEntityCatalog(version)`. `parseJvfDtm(xml)` má **stejnou signaturu**.
- **R4 — Router s fallbackem.** (1) kořen `ServisJVFDTM` → protokol chyb;
  (2) `VerzeJVFDTM` ∈ podporované → daná větev; (3) neznámá → **strukturní
  sniff** (bare `ZaznamObjektu` → 1.4.3; `ZaznamObjektu{Ins,…}` → 1.5.0.1);
  (4) jinak `DEFAULT_VERSION` + warn. Nikdy nespadne.
- **R5 — Protokol chyb je samostatný artefakt.** Model `ErrorProtocol` +
  `parseErrorProtocol(xml)`, oddělené od `JvfDtm`. Viewer ho zobrazí jako
  report, ne mapovou vrstvu.
- **R6 — Defenzivní parser geometrie.** Uvnitř wrapperu hledat GML primitiv
  přímo i přes volitelný `*Property`; dimenzi (2D/3D) určuje jméno wrapperu;
  tolerantní k `xsi:nil`/prázdným hodnotám.
- **R7 — Topologie: bezpečný default pro neznámou verzi** — jen generické
  checky, meziobjektové přeskočit (žádné false positives).
- **R8 — Integrita codegenu se testuje.** Test ověří generovaný
  `shared-attrs`/`ENTITY_CATALOG` vs. XSD (příp. YAML `model/`).

## Implementace po balíčcích

### A. `jvf_dtm_types` (sdílené typy + registr)
- `src/versions.ts`: `SUPPORTED_VERSIONS = ['1.4.3','1.5.0.1']`; `DEFAULT_VERSION`
  zůstává `'1.4.3'`.
- `src/1.4.3/types.ts` (autoritativní sdílený model, jen aditivně – R1):
  `ObsahovaCast`+=`'PSPI'`; `ZaznamObjektu` `recordKind?/visibility?/context?`
  (R2); `JvfDtm.typDatoveSady?`; nový `TypDatoveSady`; nový typ `ErrorProtocol`
  (R5). `verze` na `JvfDtm` už existuje = diskriminátor.

### B. `jvf_parser` — codegen
- Stáhnout distribuci 1.5.0.1 (`JVF_DTM_1501.aspx` ZIP) → `docs/1.5.0.1/xsd/`
  (+ `model/` YAML pro referenci). Ukázky XML → `samples/1.5.0.1/`.
- `scripts/generate-types.ts`: parametrizovat `XSD_DIR`/`OUT_DIR` verzí (dnes
  hardcoded `1.4.3` ř. 16–17). Ruční seznam sdílených skupin
  (`SHARED_ATTR_GROUPS` ř. 134–143 + `groups` ř. 431–526) — doplnit
  `SpolecneAtributyObjektuZPS`, `SpolecneAtributyObjektuPSPI`. Rozšířit
  `detectGeomType` o nové geom. elementy.
- Vygenerovat `src/1.5.0.1/generated/{enums,shared-attrs,entities}.ts`.
- R8: integritní test generátoru.

### C. `jvf_parser` — struktura parseru (`src/1.5.0.1/`)
Fork z 1.4.3 (`removeNSPrefix:true` absorbuje prefixy):
- **Záznamy** (R2): operace je **klíčem** pod `ZaznamyObjektu`. Iterovat
  `Object.entries`, filtrovat `^ZaznamObjektu`, přes `RECORD_KIND_MAP` odvodit
  `{zapisObjektu, recordKind, visibility, context}`. `isArray` rozšířit.
- **Geometrie** (R6): wrappery `Bod2D/3D`, `Linie2D/3D`, `Plocha2D/3D`,
  `Obvod3D` → uvnitř GML primitiv (přímo/přes `*Property`) → stávající
  `parsePoint/parseLineString/parsePolygon`. `Obvod3D` = obvod plochy
  (ekvivalent `multiCurveProperty`).
- **Atributy**: flatten i skupin `SpolecneAtributyObjektuZPS/PSPI`; tolerovat
  `xsi:nil`/prázdné (změna #13).
- **Doprovodné info**: `DoprovodneInformace{GAD,KAD,DTI,VydejZPS,VydejDTI}`;
  extrahovat `OblastiKompletniZPS` + `TypDatoveSady`. Odstranit
  `parseOblastObjektuKI`.
- **Protokol chyb**: `parseProtokolChyb`/`parseErrorProtocol` pro kořen
  `ServisJVFDTM/ProtokolChyb` → model `{dti[], zps[]}`.

### D. `jvf_parser` — router (R3, R4, R5)
- `src/index.ts`: dispatcher `parseJvfDtm(xml)` stejná signatura, detekce R4.
- `getEntityCatalog(version)` + zachovaný `ENTITY_CATALOG` (=1.4.3).
- `parseErrorProtocol(xml): ErrorProtocol` samostatná veřejná funkce.

### E. `jvf_topology` (parametrizace verzí)
- `src/1.4.3/constants.ts`: `DEFBOD_PLOCHA_PAIRS_1501` z konvence
  `{Kořen}DefinicniBod`+`{Kořen}Plocha` proti novému katalogu — kandidát
  `RozestavenaPlocha` (0100000381). PSPI do párů nepatří.
- `src/1.4.3/index.ts`: `runAllChecks(dtm, {mode, version})` → vybrat tabulku;
  `resolveMode` += `TypDatoveSady=11` „Výdej PSPI" (jako `complete`, ZPS
  meziobjektové checky se PSPI netýkají — `ObsahovaCast='PSPI'`).
- `del-areas.ts`, Z-kontrola: beze změny (PSPI `ObsahovaCast='PSPI'` → Z se
  vypne, `bounds.ts` ř. 31).
- `tests/1.4.3/topology/pairs-integrity.test.ts`: validace `_1501` párů.
- R7: neznámá verze → jen generické checky.

### F. `jvf_viewer`
- Verzně-vědomé volání parseru/topologie (`src/main.ts` ř. 5,157).
- Styly `src/map/symbology.ts`: ~41 nových entries (20 DTM + 21 PSPI), klíč =
  10místný `codeBase`. `FALLBACK_COLORS` += `PSPI`; `legendModal.ts`
  `CAST_ORDER` (ř. 145) += `PSPI`. Nové SVG do `public/symboly/`. Přegenerovat
  `variantAttrMap.ts` (`scripts/build-variant-map.ts`) při variantách.
- **Volba verze = auto-detekce + přepínač**: `src/ui/fileUpload.ts`
  `validateFileVersion()` místo odmítnutí **auto-přepne** `activeVersion` na
  verzi souboru (`setActiveVersion`) když je ∈ `SUPPORTED_VERSIONS`; blokující
  modal jen pro nepodporovanou verzi. Přepínač `versionSelect.ts` se aktivuje
  (2 verze) = ruční override. Fixture `public/fixtures/test_verze_1.5.0.xml` +
  `e2e/smoke.spec.ts` (ř. 51–58) předělat (1.5.0.1 se načte).
- Protokol chyb — UI: nový panel/modal pro `ErrorProtocol` (obdoba
  `errorPanel.ts`).
- Info modal `src/ui/infoModal.ts` (**CLAUDE.md pravidlo!**): opravit hardcoded
  „1.4.3" (ř. 111, 239), doplnit PSPI, výdej PSPI, protokol chyb, 1.5.0.1.

### G. Ukázky, testy, changelog
- `jvf_parser/samples/1.5.0.1/`: reálné ukázky z distribuce (ukazkaZPS, PSPI
  import/export, DI, TI, OPL, protokol chyb, extenze).
- Nové unit testy parseru 1.5.0.1 + topologie.
- `CHANGELOG.md` `[Unreleased]` (propaguje se do info modalu přes `changelog.ts`).

## Verifikace (end-to-end)
- Parser: `npm test -w jvf-parser` + fixture testy nad ukázkami 1.5.0.1.
- Topologie: `npm test -w jvf-topology` (160+ testů) + páry a režim Výdej PSPI.
- Viewer smoke: `npm run dev -w jvf-viewer`, nahrát `ukazkaZPS.jvf.xml` +
  `ukazka_PSPI_import.jvf.xml` (1.5.0.1), `ukazka_protokol_chyb.jvf.xml`, i
  starý 1.4.3 soubor (router). `npm run test:e2e` (Playwright).
- Build: `npm run build` (tsc + vite build všech balíčků).

## Rozhodnutí (dříve rizika) + zbývající externí ověření

**Rozhodnuto (robustnost):** viz R1–R8. Geometrie → defenzivní parser (R6);
`shared-attrs` hybrid → integritní test (R8); `DEFAULT_VERSION` zůstává
`'1.4.3'` (auto-detekce R4 řeší reálné soubory); režim „Výdej PSPI" jako
`complete` bez ZPS meziobjektových checků.

**Zbývá ověřit z externích zdrojů (fakta z XSD) — během T2:**
- Přesná vnitřní struktura wrapperů `Bod*/Linie*/Plocha*/Obvod*` v `xsd/`.
- Přesné `elementName` nových DTM/PSPI objektů (z regenerovaného katalogu).
- Zda se mění extenze (`ukazka_extenze`) v 1.5.0.1.
- Přesná sada společných atributů PSPI/ZPS (z `Doplnky.zip` + XSD) pro codegen.
