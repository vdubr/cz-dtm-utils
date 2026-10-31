# UDM 2.1.1 — Univerzální datový model ČKZ

Otevřený datový model České komory zeměměřičů (ČKZ) — nadmnožina JVF DTM
krajů pro data nad rámec DTM. Verze 2.1.1 (vydána 2026-10-19) navazuje na
**JVF DTM 1.5.0.2**.

- Zdroj: <https://www.ckz.cz/udm> (balík „UDM 2.1.1.zip")
- `xsd/` — výměnný formát XSD (`XSD_JVFUDM 2.1.1`): 470 objektů
  (393 JVF + 77 UDM s `code_base` 94…), číselníky v `common/lists.xsd`
- `spec/` — Popis struktury UDM 2.1.1, Seznam změn 2.1 → 2.1.1,
  Struktura UDM 2.1.1.xlsx (objekty, atributy, číselníky, vzhledy, převody)

## Odlišnosti od JVF DTM (podstatné pro parser)

- Hlavička navíc `<cmn:VerzeJVFUDM>` — podle ní router pozná UDM.
- Atributy jsou **zploštělé**: systémové (`ID`, `IDZmeny`, `PopisObjektu`, …)
  i sdílené atributy leží přímo v `AtributyObjektu`, bez obalů
  `SpolecneAtributy…`; v XSD jsou inline (`name=` + `type="lst:…"`).
- Obsahové části objektů nad rámec DTM: `ZPSUDM`, `DIUDM`, `TIUDM`, `OST`.
- Plochy ZPS mají jen `Plocha2D` (bez `Obvod3D`).

## Regenerace

```bash
npm run generate:udm -w jvf-parser             # src/udm-2.1.1/generated/*
# symbologie UDM (src/udm-2.1.1/generated/styles.ts + viewer public/symboly/udm/*.svg)
# ze spec/Struktura UDM 2.1.1.xlsx a knihovny symbolů knihovny/SVG
python3 scripts/udm/build-udm-styles.py
```

- `knihovny/` — knihovna symbolů ČKZ z balíku „UDM 2.1.1.zip" (`Knihovny/SVG`
  + `Knihovna symbolu_udm.csv`), zdroj symbolů pro viewer i export do CAD.

Ukázky: `jvf_parser/samples/udm-2.1.1/` (ukázka ČKZ, vzorník objektů,
ruční minimální fixture, pontonový most) — ruční soubory jsou validní proti
XSD (`xmllint --noout --schema xsd/index/index_data.xsd <soubor>`). Druhá ukázka ČKZ (`UDM_ukazka-2.xml`, 10 MB) není
v repu kvůli velikosti — je v balíku na webu ČKZ.
