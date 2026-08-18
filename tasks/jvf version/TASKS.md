# Úkoly: JVF DTM 1.5.0.1

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–G, rozhodnutí R1–R8). Po dokončení úkolu:
zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Registr verzí + sdílené typy** — README §A
  - `jvf_dtm_types/src/versions.ts`: `SUPPORTED_VERSIONS` += `'1.5.0.1'`.
  - `jvf_dtm_types/src/1.4.3/types.ts` (jen aditivně, R1): `ObsahovaCast`
    += `'PSPI'`; `ZaznamObjektu` `recordKind?/visibility?/context?` (R2);
    `JvfDtm.typDatoveSady?`; `TypDatoveSady`; typ `ErrorProtocol` (R5).
  - **Závislosti:** žádné. **Akceptace:** `npm run build` zelený; **1.4.3
    testy zelené beze změny** (R1).

- [x] **T2 — XSD/model/ukázky + codegen** — README §B, R8
  - Stáhnout distribuci 1.5.0.1 → `jvf_parser/docs/1.5.0.1/xsd/` (+ `model/`);
    ukázky XML → `jvf_parser/samples/1.5.0.1/`.
  - Parametrizovat `jvf_parser/scripts/generate-types.ts` verzí; doplnit
    sdílené skupiny `SpolecneAtributyObjektuZPS/PSPI`; rozšířit `detectGeomType`.
  - Vygenerovat `jvf_parser/src/1.5.0.1/generated/*`; integritní test (R8).
  - **Závislosti:** T1. **Akceptace:** katalog obsahuje `02000000XX` a
    `0100000372–388`, neobsahuje `0100000185`; integritní test zelený.

- [x] **T3 — Parser: záznamy + geometrie** — README §C, R2, R6
  - `RECORD_KIND_MAP`, iterace `ZaznamyObjektu` přes klíče; wrappery
    `Bod*/Linie*/Plocha*/Obvod*` → reuse `parsePoint/LineString/Polygon`.
  - **Závislosti:** T1, T2. **Akceptace:** naparsuje `ukazkaZPS.jvf.xml` a
    `ukazka_PSPI_import.jvf.xml`; správné `zapisObjektu`/`recordKind`, správné
    typy geometrie; unit test `RECORD_KIND_MAP` (bezztrátovost).

- [x] **T4 — Parser: atributy + doprovodné info** — README §C
  - Flatten skupin ZPS/PSPI; `DoprovodneInformace{GAD,KAD,DTI,VydejZPS,VydejDTI}`;
    extrahovat `TypDatoveSady`; odstranit `parseOblastObjektuKI` (KI zrušeno).
  - **Závislosti:** T3. **Akceptace:** PSPI atributy (`IDExterni`,
    `UrovenUmisteniObjektuPSPI`) čitelné; `typDatoveSady=11` u Výdeje PSPI.

- [x] **T5 — Router parseru** — README §D, R3, R4
  - `parseJvfDtm(xml)` dispatcher (verze/kořen), `getEntityCatalog(version)`,
    back-compat `ENTITY_CATALOG`.
  - **Závislosti:** T3, T4. **Akceptace:** 1.4.3 i 1.5.0.1 projdou stejným
    API; router testy (včetně strukturního sniffu a fallbacku).

- [x] **T6 — Protokol chyb: parser** — README §C/D, R5
  - `parseErrorProtocol(xml): ErrorProtocol` pro kořen `ServisJVFDTM/ProtokolChyb`.
  - **Závislosti:** T1. **Akceptace:** `ukazka_protokol_chyb.jvf.xml`
    naparsován (DTI + ZPS kontroly a chyby).

- [ ] **T7 — Topologie 1.5.0.1** — README §E, R7
  - `DEFBOD_PLOCHA_PAIRS_1501`; `runAllChecks({version})`; `resolveMode`
    Výdej PSPI; `pairs-integrity` proti novému katalogu.
  - **Závislosti:** T2, T5. **Akceptace:** `npm test -w jvf-topology` zelené;
    nové páry validní vůči katalogu; neznámá verze → jen generické checky.

- [ ] **T8 — Viewer: verzní routing + gate** — README §F
  - Verzně-vědomé volání (`main.ts`); `fileUpload` auto-detekce + `setActiveVersion`;
    `versionSelect` aktivace; e2e fixture předělat.
  - **Závislosti:** T5. **Akceptace:** nahrání 1.5.0.1 i 1.4.3 souboru funguje
    (auto-switch); `npm run test:e2e` zelené.

- [ ] **T9 — Viewer: styly/legenda** — README §F
  - `symbology.ts` ~41 entries (20 DTM + 21 PSPI); `FALLBACK_COLORS`/`CAST_ORDER`
    += `PSPI`; SVG; přegenerovat `variantAttrMap.ts`.
  - **Závislosti:** T2. **Akceptace:** nové typy mají styl (ne jen fallback);
    legenda zobrazuje sekci PSPI.

- [ ] **T10 — Viewer: UI protokolu chyb** — README §F, R5
  - Panel/modal pro `ErrorProtocol`.
  - **Závislosti:** T6, T8. **Akceptace:** nahrání protokolu → zobrazí se
    seznam kontrol a chyb.

- [ ] **T11 — Info modal + changelog + docs** — README §F/G (CLAUDE.md pravidlo!)
  - `infoModal.ts`: opravit hardcoded „1.4.3" (ř. 111, 239) + popis PSPI/
    výdeje PSPI/protokolu chyb/1.5.0.1. `CHANGELOG.md` `[Unreleased]`.
  - **Závislosti:** průběžně (finalizovat po T1–T10). **Akceptace:** info modal
    odpovídá skutečnému stavu; `CHANGELOG.md` má sekci 1.5.0.1.

---

## Poznámky pro `/make-tasks`
- **Nikdy neměnit `jvf_parser/src/1.4.3/`** ani jeho testy (R1). Sdílené typy
  jen aditivně.
- Reálné ukázky 1.5.0.1 stáhnout z distribuce (`JVF_DTM_1501.aspx`) — během
  této session byly staženy do scratchpadu, ale ten je efemérní; T2 je stáhne
  a uloží do `jvf_parser/samples/1.5.0.1/` natrvalo.
- Po každém úkolu: review → test → oprava → CHANGELOG + memory → resume do
  `../finished/T<N>.md` → commit (konvence CLAUDE.md). Po T11 push do `develop`.
