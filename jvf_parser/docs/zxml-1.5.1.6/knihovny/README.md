# Knihovna značek ŽXML (DTMŽ) — odvozená z fotokatalogu MOZeK

Symbologie objektů ŽXML pro viewer a export do CAD. Správa železnic pro
DTMŽ žádnou strojově čitelnou knihovnu značek nevydává (LDM ani XSD vzhled
neobsahují) — jediným zdrojem jsou obrázky značek ve fotokatalogu MOZeK.
Tento adresář obsahuje jejich **vektorizovanou podobu**.

## Původ

| Zdroj | Verze | Použití |
|---|---|---|
| `MOZeK_fotokatalog_20250601.pdf` — Modelový objektový železniční katalog, fotokatalog (SŽ, předpis M20/MP014, obrázky převzaté z M20/MP006) | platnost od 1. 6. 2025, ŽXML 1.4.2.1 | obrázky značek (oddíly „Značky") a jejich vazba na objekt / atribut / hodnotu číselníku |
| `SZ_LDM_1.5.0.2_V23.xlsx` — logický datový model DTMŽ, list `export` | LDM 1.5.0.2 V23 (ŽXML 1.5.1.6) | kódy objektů, XML elementy atributů, kódy hodnot číselníků v ŽXML, příznak `URCUJICI_SYMBOL`, atribut `Natoceni` |

Obojí je ke stažení na webu Správy železnic (Digitální technická mapa
železnice — technické standardy). Do repozitáře se zdrojové soubory
neukládají (PDF má 238 MB).

## Obsah

- `SVG/<id>.svg` — vektorizované bodové značky (id `sz-<8 hex>` = SHA-1
  binarizovaného obrázku a jeho rozměrů). Jediný barevný literál `#000000`
  (viewer přebarvuje barvou objektu).
- `line-patterns.json` — vzory linií změřené ze vzorků linií fotokatalogu:
  `dashMm` (čárka, mezera, … v mm papíru; `null` = plná), `widthMm`
  (0,25 / 0,5), `markers` (vzorek obsahuje vložené značky, které se
  nekreslí), `parallel` (souběžná čára), `px` (naměřené hodnoty).
- `../mozek/` — mezivýsledky: `manifest.json` (všechny značky, příznaky,
  použití v katalogu se stranou PDF), `png/` (binarizované zdrojové obrázky),
  `attribute-map.csv` a `ldm-objects.csv` (výtah z LDM), `extract.log`.

Generované výstupy mimo tento adresář:
`jvf_parser/src/zxml-1.5.1.6/generated/styles.ts` (a shodný
`zxml-1.4.2.1/generated/styles.ts`), `jvf_viewer/public/symboly/zxml/`,
`jvf_cad/src/generated/symbols-zxml.ts`.

## Metoda

1. **Vytěžení** (`extract-mozek-symbols.py`): PDF se prochází podle typografie
   — průběžné záhlaví objektu, „Kód JVF" (10 číslic) na první straně objektu,
   11 pt tučně `Atribut <kód>: …` (kontext atributu), 11 pt `<kód>: <hodnota>`
   (kontext hodnoty číselníku), 10 pt tučná kurzíva `Značky` (oddíl). Obrázky
   v oddílu Značky patří aktuálnímu kontextu, i přes konec strany.
   Binarizace prahem jasu 140; fotografie / barevné zákresy (`photoLike`) se
   nevektorizují. Obrázek se širokým poměrem stran (737×93 apod.) je vzorek
   linie, ostatní bodová značka.
2. **Vektorizace** (`vectorize.py`, vlastní tracer v numpy): vyplněné části
   (tloušťka ≥ 5 px) → obrys + Douglas–Peucker 0,6 px, `fill-rule="evenodd"`,
   rozpoznané kružnice; tenké čáry → ztenčení, graf středových pixelů bez
   schodových diagonál, řetězce mezi uzly, Douglas–Peucker 0,75 px, spojení
   kolineárních úseků (< 3°) → `<line>`, `<circle>`, `<path>` s tahem.
   Kontrola: zpětné rastrování (MuPDF) a shoda se zdrojem s tolerancí 1 px;
   pod 0,85 příznak `lowIou` v manifestu.
3. **Vzory linií** (`extract-line-patterns.py`): osa vzorku = řádek s nejvíce
   inkoustem, úseky v pásu osy, perioda algoritmem z
   `scripts/udm/extract-line-patterns.py`; u vzorů s vloženými značkami
   (sítě TI) převládající dvojice čárka/mezera.
4. **Styly** (`build-zxml-styles.py`): klíč `<codeBase>-<sufix>` pro všech
   539 objektů LDM (Bod 01, Linie 02, Plocha 03, Definiční bod 04); značka
   u objektu → `base`, u hodnoty číselníku → pravidlo podle XML elementu
   atributu a kódu hodnoty v ŽXML (`HODNOTA_CISELNIK_KOD_XSD_CUSTOMER`,
   ověřeno proti enumeracím XSD ŽXML 1.5.1.6). Barva podle obsahové části
   (`scripts/zxml/colors.json`). `rotationAttr: "Natoceni"` u objektů
   s atributem Natoceni.

## Parametry

| Parametr | Hodnota | Kde |
|---|---|---|
| výška standardní značky (109 px inkoustu v rámečku 190×120 px) | **3,0 mm** papíru | `vectorize.py --height-mm` |
| měřítko SVG | 1 jednotka = 0,01 mm papíru (`width/height = viewBox × 100·3,0/109`) | jako UDM (`SVG_SCALE` v `build-udm-styles.py`) |
| vkládací bod | střed rámečku obrázku (střed viewBoxu) | |
| tah | 0,13 mm (zdrojová čára 2 px → 0,26 mm) | `vectorize.py` |
| měřítko vzorků linií | **5,5 px/mm** papíru | `extract-line-patterns.py --px-per-mm` |
| ruční velikosti značek | `{"sz-…": výška inkoustu v mm}` | `scripts/zxml/size-overrides.json` (volitelný) |

## Omezení

- Značky jsou rekonstruované z rastrových obrázků (část převzatá z M20/MP006,
  část antialiasovaná) — tvar odpovídá obrázku, ne závazné grafické normě.
  Velikost (3 mm) a vkládací bod (střed obrázku) jsou odhad, ne údaj SŽ.
- Fotokatalog je k ŽXML 1.4.2.1, LDM k 1.5.0.2: kódy atributů se mezi
  verzemi u některých objektů změnily (dohledává se podle kódu hodnoty),
  několik hodnot/objektů v LDM 1.5.0.2 už není (viz výpis `build-zxml-styles.py`).
- Vložené značky v liniích (sítě TI, ploty, zábradlí) se nekreslí — styl
  nese jen čárkování osy (`markers: true` v `line-patterns.json`).
- Vzorek linie u bodového objektu a bodová značka u liniového objektu se
  nepoužívají; více značek pro tentýž kontext → první (ostatní v manifestu).
- Díry ve vyplněných tvarech se do CAD exportují jako samostatné vyplněné
  polylinie (typ primitiv CAD díry nevyjadřuje).
- Fotografie a zákresy z fotokatalogu se nepřebírají.

## Přegenerování

Z rootu repozitáře, Python s numpy, Pillow a PyMuPDF (např. venv):

```bash
python3 scripts/zxml/ldm-attributes.py <cesta>/SZ_LDM_1.5.0.2_V23.xlsx
python3 scripts/zxml/extract-mozek-symbols.py <cesta>/MOZeK_fotokatalog_20250601.pdf
python3 scripts/zxml/vectorize.py --height-mm 3.0
python3 scripts/zxml/extract-line-patterns.py --px-per-mm 5.5
python3 scripts/zxml/build-zxml-styles.py
python3 scripts/cad/build-cad-symbols.py --profile zxml
# kontrola očima (HTML: PNG vs SVG, vzory linií):
python3 scripts/zxml/review-sheet.py --out /tmp/zxml-review/index.html
# testy traceru:
python3 -m unittest scripts/zxml/test_vectorize.py
```

Kroky od `vectorize.py` dál pracují jen s daty v repozitáři (manifest, PNG),
PDF ani xlsx nepotřebují.

## Jak získat zdroje při aktualizaci

Web Správy železnic **blokuje automatické stahování**: `curl`/WebFetch bez
prohlížečového User-Agenta vrací 403 nebo „Request Rejected", rozšíření
Claude in Chrome má doménu `spravazeleznic.cz` zablokovanou politikou
organizace. Ochranu neobcházet — soubory **stáhne člověk ručně v běžném
prohlížeči** a uloží je do repozitáře (velké zdroje mimo git, viz níže).

| Co | Kde (stránka SŽ) | K čemu |
|---|---|---|
| `Datovy_model_DTMZ_<verze>.zip` (XSD ŽXML, `SZ_LDM_*.xlsx`) | [Datový model DTMŽ](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/datovy-model-dtmz) | XSD → `../xsd`, LDM xlsx → `scripts/zxml/ldm-attributes.py` |
| `MOZeK_fotokatalog_<datum>.pdf` (~240 MB) | [Modelový objektový železniční katalog](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/modelovy-objektovy-zeleznicni-katalog) | obrázky značek → `extract-mozek-symbols.py` |
| `SZ_Předpis_M20_MP006.zip` (i `…MP005`, `…MP010`) | [SŽG – Digitální technická mapa železnice](https://www.spravazeleznic.cz/szg/dokumenty-ke-stazeni/dtmz), sekce „VZ1 – Pořízení dat" (případně „VZ2") — podklady zakázky na tvorbu DTMŽ; na stránce „Dokumentace pro externí firmy" **není** | předpis zaměřování; podklady VZ1 možná obsahují knihovnu buněk / šablony DGN (MicroStation) — **přesný vektorový zdroj značek**; zatím neověřeno (údaj z vyhledávače) |
| Knihovna značek zabezpečovací techniky ZABCELL (příloha TNŽ 34 5542) | [přímý odkaz](https://www.spravazeleznic.cz/documents/50004227/142705238/Knihovna+zna%C4%8Dek+zabezpe%C4%8Dovac%C3%AD+techniky+ZABCELL/f37c6ed5-0daf-469c-82eb-fd25aaa3e23c) | buňky MicroStation (návěstidla, zabezpečovací zařízení) |
| Technický standard tvorby dat | [Tvorba a aktualizace dat DTMŽ](https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/tvorba-a-aktualizace-dat-dtmz) | pravidla dat, kontroly |

Kontrolu nových verzí datového modelu dělá `npm run check:upstream`
(i týdenní GitHub Action) — při nové verzi stáhnout balíky ručně podle tabulky.

**Buňky DGN místo vektorizace z PNG:** pokud balík M20/MP006 (nebo ZABCELL)
obsahuje knihovnu buněk (`.cel`/`.dgn`), převést ji na DXF (ODA File
Converter; DGN v8 neumí otevřené nástroje číst) a z DXF skriptem přes
`ezdxf` na SVG — přesné vektory místo obrysů trasovaných z rastru. Objekty
JVF, jejichž značka v MOZeK je jen kopií Katalogu ČÚZK, se kreslí oficiálním
SVG ČÚZK (`PREFER_KATALOG` v `scripts/zxml/build-zxml-styles.py`).

## Licence

Obrázky značek, jejich vektorizace a výtah z LDM jsou **odvozeny z materiálů
Správy železnic, státní organizace** (fotokatalog MOZeK, předpis M20/MP014,
LDM DTMŽ). Autorská a další práva náleží SŽ; licence MIT tohoto repozitáře
se na ně nevztahuje. Data slouží k zobrazení dat ŽXML ve vieweru a exportu do
CAD; před jiným použitím (zejména veřejným šířením knihovny značek) ověřte
podmínky u SŽ.
