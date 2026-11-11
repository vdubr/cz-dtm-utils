# Symbologie ŽXML (DTMŽ) — oficiální styly SLD Správy železnic

Vzhled objektů SŽ (`999…`) pro viewer a export do CAD. Zdrojem jsou styly
**OGC SLD**, jimiž objekty kreslí portál ISTEM — SŽ je publikuje v exportu
logického datového modelu DTMŽ (SQLite, tabulka `CS_OBJEKT_DTM`, sloupec
`SLD_STYLE`): barvy, tloušťky a čárkování čar, vektorové značky (inline SVG),
pravidla podle hodnot číselníků a natočení.

Objekty JVF (`0100…`) kreslí ISTEM stejnými značkami a barvami jako Katalog
DTM ČR (shodné SVG, šířky i čárkování) — viewer i CAD je proto v JŽM kreslí
Katalogem (`usesDialectStyle`). Ze SLD objektů JVF se přebírají jen pravidla
na **rozšíření číselníků SŽ** (`ZXML_JVF_EXTENSIONS`, `getExtensionTable`):
hodnoty, které JVF nezná (`CS_REFKODY_DOMEN.JVF_XSD_KOD` chybí nebo se liší
od kódu v ŽXML — kabelová rezerva u zařízení elektrické sítě → JVF 98),
a atributy SŽ u objektů JVF (typ koleje, typ plochy železnice). Jen v JŽM.

## Původ

| Zdroj | Verze | Použití |
|---|---|---|
| `istem_export_LDM_1502_V23.sqlite` — export LDM DTMŽ (balík „Datový model DTMŽ") | LDM 1.5.0.2 V23 (ŽXML 1.5.1.6) | `CS_OBJEKT_DTM.SLD_STYLE` (139 platných objektů SŽ), `CS_ATR_OBJEKT_DTM` (atributy v pravidlech) |
| `SZ_LDM_1.5.0.2_V23.xlsx` — LDM DTMŽ, list `export` | LDM 1.5.0.2 V23 | `../ldm/` — objekty LDM a kódy hodnot LDM ↔ ŽXML (`scripts/zxml/ldm-attributes.py`) |

## Obsah

- `sld-styles.json` — výtah SLD platných objektů SŽ a objektů JVF s pravidly
  na rozšíření SŽ (`<codeBase>-<geometrie>` → název, XML element, obsahová
  část, SLD), atributů, na které pravidla odkazují (`PropertyName` =
  `CS_ATR_OBJEKT_DTM.KOD` → XML element), a hodnot z filtrů (`Literal` =
  `CS_REFKODY_DOMEN.KOD` → kód v ŽXML, převod do JVF, platnost).
- `SVG/<id>.svg` — použité značky normalizované pro CAD: jen `<path>`,
  transformace a styly rozpuštěné (svgelements), barvy ze SLD, `width/height`
  v jednotkách 0,01 mm papíru, rámec souměrný kolem vkládacího bodu. Id
  `sz-<8 hex>` = SHA-1 normalizovaného SVG. Viewer má navíc náhledy oříznuté
  na kresbu (`symboly/zxml/nahled/`, legenda a panely).

Generované výstupy mimo tento adresář:
`jvf_parser/src/zxml-1.5.1.6/generated/styles.ts` (a shodný
`zxml-1.4.2.1/generated/styles.ts`), `jvf_viewer/public/symboly/zxml/`,
`jvf_cad/src/generated/symbols-zxml.ts`.

## Převod SLD → styly (`scripts/zxml/build-zxml-styles.py`)

- **Měřítko:** pravidla pokrývající 1:400 (podrobné zobrazení); objekt bez
  takového pravidla → pravidla s nejmenším `MinScaleDenominator`.
- **Filtry:** bez filtru → `base`; jedna rovnost → `rules` (XML element
  atributu, kód hodnoty v ŽXML z `values`); `And`, `Or`,
  `PropertyIsNotEqualTo` → `cases` (`when` / `unless`, platí první shoda —
  např. zařízení sítě EK SŽ podle využití × typu). `And` dvou rovností
  téhož atributu (chyba v SLD) se čte jako `Or`. Pravidlo s rovností na
  **neplatnou hodnotu** číselníku (`PLATNOST_DO` v minulosti) se vynechá.
- **Čáry:** `stroke`, `stroke-width`, `stroke-dasharray` → barva, `widthMm`,
  `dashMm`. Jednotky SLD jsou mm papíru stejně jako v Katalogu DTM ČR
  (ověřeno: plynovod 0,13 / „36 8", osa PK 0,7 / „60 6"). Druhá čára se
  vzorem příček (čárka < 0,5 mm, mezera ≥ 5 mm — úhelník) → `ticksMm`.
  Další čáry → `lines` (`offsetMm` z `PerpendicularOffset`, kladně vlevo ve
  směru linie, mm papíru jako čárkování); pravidlo bez osy (brzda) →
  `axis: false`; značky na koncích linie (`startPoint`/`endPoint`, krátké
  příčky) → `endTicks` souběžné čáry (spojka s osou); `GraphicStroke` →
  `lineSymbol` (značka natočená podél linie, `intervalMm` = šířka značky +
  `Gap`, `startMm` = `InitialGap` + půl šířky; grafika nahrazuje čáru, čáru
  dodá případné pravidlo bez filtru).
- **Obvod plochy (geometrie 5)** nemá v ŽXML vlastní kód — jeho čáru přebírá
  plocha (-03).
- **Značky:** inline SVG nebo `WellKnownName` (circle, square, triangle);
  `Size` je zobrazovací velikost portálu, ne mm — u objektů JVF odpovídá
  značkám Katalogu v poměru ~1,53 (medián 48 párů, Size 4 ↔ 2,62 mm), výška
  značky = `Size / 1,53` mm; `<Size type="width">` (ISTEM u širokých značek —
  tabulky návěstidel s ramenem) je šířka. Vkládací bod = střed viewBoxu (SVG SŽ mají
  stožáry návěstidel dokreslené tak, aby střed ležel v bodě).
  `fixedRotation(<atribut>)` → `rotationAttr` (Natoceni). Barva vzhledu =
  převažující barva značky.
- **Plochy:** `PolygonSymbolizer` → výplň a obrys.

## Omezení

- Nepřebírají se popisy (`TextSymbolizer`).
- V CAD jsou značky jednobarevné (blok v barvě převažující barvy značky);
  osa linie se v CAD zachová i tam, kde ji SLD nekreslí (brzda, zábradlí) —
  je to zaměřená geometrie a nese XDATA záznamu.
- Dva objekty SŽ z LDM nemají SLD — kreslí se černou čarou.

## Přegenerování

Z rootu repozitáře, Python s balíkem `svgelements` (např. venv):

```bash
python3 scripts/zxml/extract-sld.py <cesta>/istem_export_LDM_1502_V23.sqlite
python3 scripts/zxml/ldm-attributes.py <cesta>/SZ_LDM_1.5.0.2_V23.xlsx   # jen při nové verzi LDM
python3 scripts/zxml/build-zxml-styles.py
python3 scripts/cad/build-cad-symbols.py --profile zxml
python3 scripts/zxml/samplegen.py      # ukázky vč. vzorníku znaků zxml_vzornik.xml
cp jvf_parser/samples/zxml-1.5.1.6/zxml_*.xml jvf_viewer/public/fixtures/
npm --prefix jvf_parser run build && npm --prefix jvf_cad run build
```

Kroky od `build-zxml-styles.py` dál pracují jen s daty v repozitáři.

## Jak získat zdroje při aktualizaci

Web Správy železnic **blokuje automatické stahování**: `curl`/WebFetch vrací
403 nebo „Request Rejected", rozšíření Claude in Chrome má doménu
`spravazeleznic.cz` zablokovanou politikou organizace. Ochranu neobcházet —
soubory **stáhne člověk ručně v běžném prohlížeči** (velké zdroje mimo git).

| Co | Kde (stránka SŽ) | K čemu |
|---|---|---|
| `Datovy_model_DTMZ_<verze>.zip` — XSD ŽXML, `SZ_LDM_*.xlsx`, **`istem_export_LDM_*.sqlite`** | [Datový model DTMŽ](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/datovy-model-dtmz) | XSD → `../xsd`, xlsx → `ldm-attributes.py`, SQLite → `extract-sld.py` (**symbologie**) |
| `SZ_M20LMP006_<datum>.zip` — předpis M20/MP006 (zásady zaměřování, fotokatalog 2022, pomocné xlsx) | [SŽG – Digitální technická mapa železnice](https://www.spravazeleznic.cz/szg/dokumenty-ke-stazeni/dtmz), sekce „VZ1 – Pořízení dat" | pravidla zaměřování a kresby; **knihovnu buněk ani barvy neobsahuje** (ověřeno 2026-11-06: značky jen jako černobílý rastr, nahrazuje zrušenou TNŽ 01 3412) |
| `MOZeK_fotokatalog_<datum>.pdf` (~240 MB) | [Modelový objektový železniční katalog](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/modelovy-objektovy-zeleznicni-katalog) | fotografie a popisy objektů; značky jen rastr (dříve zdroj vektorizace, nahrazeno SLD) |
| Knihovna značek zabezpečovací techniky ZABCELL (příloha TNŽ 34 5542) | [přímý odkaz](https://www.spravazeleznic.cz/documents/50004227/142705238/Knihovna+zna%C4%8Dek+zabezpe%C4%8Dovac%C3%AD+techniky+ZABCELL/f37c6ed5-0daf-469c-82eb-fd25aaa3e23c) | buňky MicroStation (návěstidla, zabezpečovací zařízení) — neověřeno |
| Technický standard tvorby dat | [Tvorba a aktualizace dat DTMŽ](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/tvorba-a-aktualizace-dat-dtmz) | pravidla dat, kontroly |

Kontrolu nových verzí datového modelu dělá `npm run check:upstream`
(i týdenní GitHub Action) — při nové verzi stáhnout balík ručně a přegenerovat.

## Licence

Styly SLD, značky a výtah z LDM jsou **odvozeny z materiálů Správy železnic,
státní organizace** (datový model DTMŽ). Autorská a další práva náleží SŽ;
licence MIT tohoto repozitáře se na ně nevztahuje. Data slouží k zobrazení
dat ŽXML ve vieweru a exportu do CAD; před jiným použitím (zejména veřejným
šířením knihovny značek) ověřte podmínky u SŽ.
