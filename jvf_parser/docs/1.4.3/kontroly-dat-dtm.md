# Kontroly dat DTM (JVF DTM 1.4.3)

Přehled kontrol, které IS DTM krajů provádí na datech v Jednotném výměnném formátu DTM.
Slouží jako referenční podklad pro implementaci validační vrstvy v `jvf-parser`.

---

## Zdroje

Veškeré informace jsou čerpány z **DTMwiki** — pracovního prostoru Metodické pracovní skupiny DTM,
spravovaného Českým úřadem zeměměřickým a katastrálním (ČÚZK) od 1. 10. 2025.

| Dokument | URL | Stav |
|---|---|---|
| DTMwiki — úvod | <https://dtmwiki.cuzk.gov.cz/start> | hotovo |
| 1.4. Kontroly dat DTM (přehled) | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly> | hotovo, projednáno 10. 3. 2026 |
| 1.4.0. Úvod do kontrol | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/00_uvod> | hotovo, projednáno 21. 3. 2024 |
| 1.4.1. Kontroly výměnného formátu | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/01_kontroly_jvf> | hotovo, projednáno 10. 3. 2026 |
| 1.4.2. Atributové kontroly | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/02_kontroly_atributy> | hotovo, projednáno 17. 12. 2025 |
| 1.4.3. Topologické kontroly | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/03_kontroly_topolog> | hotovo, projednáno 10. 2. 2026 |
| 1.4.4. Kontroly odvozených objektů | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/04_kontroly_odvoz_objektu> | hotovo, projednáno 22. 3. 2026 |
| 1.4.5. Přehled kontrol | <https://dtmwiki.cuzk.gov.cz/01_pravidla/04_kontroly/05_prehled_kontrol> | hotovo, projednáno 22. 3. 2026 |
| Starší verze kontrol pro JVF 1.4.2.x | <https://dtmwiki.cuzk.gov.cz/kontroly> | neaktuální verze |
| ČÚZK — JVF DTM (platná verze 1.4.3) | <https://www.cuzk.cz/DMVS/JVF-DTM/Platna-verze.aspx> | platná od 1. 7. 2024 |

**Datum zjištění:** 14. 4. 2026

---

## Přehled systému kontrol

Kontroly jsou provozovány v IS DTM krajů a jsou dostupné ve čtyřech scénářích:

- **Příjem GAD** (Geodetická aktualizační dokumentace) — import JVF souboru editorem
- **Editace** — přímá editace dat v klientu IS DTM
- **Klient pro předběžnou kontrolu** — editor si může ověřit data před odesláním
- **Přeshraniční editace** — synchronizace dat mezi kraji sdílejícími hranici

Kontroly jsou rozděleny do čtyř skupin:

| Skupina | Název | Počet kontrol |
|---|---|---|
| 1 | Kontroly výměnného formátu | 7 |
| 2 | Atributové kontroly | 2 |
| 3 | Topologické kontroly | 13 |
| 4 | Kontroly odvozených objektů | 11 |

> **Pozn. k verzi:** Kontroly jsou platné pro JVF DTM verze **1.4.3**.
> Aktualizace pro připravovanou verzi 1.5 jsou průběžně doplňovány (zejm. kontrola 4.11).

---

## Skupina 1 — Kontroly výměnného formátu

Probíhají při **příjmu JVF souboru**. Chyba v této skupině opravňuje k odmítnutí celé aktualizační dokumentace.

| # | Název | Popis | Závažnost |
|---|---|---|---|
| 1.1 | Struktura souboru / XSD validace | Validace souboru proti platným XSD schématům JVF DTM. Nevalidní soubor nelze importovat. | chyba |
| 1.2 | Existence oblasti změny | JVF musí obsahovat polygon vymezující oblast změny (`ObLastZmeny`). | chyba |
| 1.3 | Extent (umístění v rámci kraje) | Oblast změny musí alespoň částečně zasahovat do území příslušného kraje. | chyba |
| 1.4 | Typy geometrií | Povoleny jsou pouze bod, linie a plocha. Oblouky jsou zakázány s výjimkou objektů DI/TI (zóny nejistoty, ochranná a bezpečnostní pásma). | chyba |
| 1.5 | Souřadnice X, Y, Z | Souřadnice X, Y musí být v S-JTSK (EPSG:5514), 3. kvadrant, v definovaném rozsahu. Pro ZPS se kontroluje i rozsah Z. | chyba |
| 1.6 | Přesnost souřadnic na cm | Souřadnice musí být zadány s přesností maximálně na centimetry. Vyšší přesnost (mm a menší) je zakázána. | chyba |
| 1.7 | Umístění změn v oblasti změny AZI | Veškerá aktualizovaná geometrie (původní i nový stav) musí celá ležet uvnitř nebo na hranici oblasti změny zakreslené AZI. | chyba |

Povolené rozsahy souřadnic jsou definovány v:
[1.3.2. Minimální rozměry a tolerance](https://dtmwiki.cuzk.gov.cz/01_pravidla/03_hierarchie/02_tolerance)

---

## Skupina 2 — Atributové kontroly

| # | Název | Popis | Závažnost |
|---|---|---|---|
| 2.1 | Kontrola atributů | Povinné hodnoty jsou vyplněny; hodnoty odpovídají číselníkům; správná syntaxe systémových atributů. Nové podrobné body (INSERT) musí mít třídu přesnosti ≥ 3 v poloze i výšce. | chyba |
| 2.2 | Kontrola IČS | Výpis rušených objektů s IČS (Identifikátor čísla stavby). Upozorňuje na potenciálně problematické mazání. | varování |

> Atributové kontroly **neprobíhají** na straně příjímajícího subjektu (slave) při přeshraniční editaci.
> Při importu konsolidovaných dat (příznak `Konsolidace=1`) se nekontroluje třída přesnosti.

Pravidla pro povinné/nepovinné atributy dle operace (INSERT/UPDATE/DELETE) jsou v tabulce:
[Specifická pravidla pro povinné a nepovinné atributy objektů DTM (PDF)](https://dtmwiki.cuzk.gov.cz/_media/01_pravidla/04_kontroly/pravidla_povinne_nepovinne_atributy_dtm_062024.pdf)

---

## Skupina 3 — Topologické kontroly

Kontroly konstrukčních prvků ZPS. Probíhají po jednotlivých **úrovních umístění (LEVEL)** od −3 do +3.

| # | Název | Popis | Závažnost |
|---|---|---|---|
| 3.1 | Závislost na podrobných bodech | Každý vrchol geometrického objektu musí mít odpovídající podrobný bod ZPS (kód 0100000218) se shodnou souřadnicí X, Y, Z ve stejném LEVELu. Kontrola ve 3D. | chyba |
| 3.2 | Kolize prvků — překryv | Liniové objekty ve stejném LEVELu se nesmí překrývat (délka průniku > 0). Za překryv se nepovažují plně identické linie — ty řeší kontrola 3.6. Kontrola ve 2D. | chyba |
| 3.3 | Kolize prvků — křížení | Linie může začínat nebo končit pouze v počátečním nebo koncovém bodě jiné linie (nikoliv na lomovém bodě). Kontrola ve 2D per LEVEL. | chyba |
| 3.4 | Kolize prvků — křížení sebe sama | Linie nesmí sama sebe křížit ani překrývat. Povoleno je pouze uzavření (start == end), pokud není porušeno pravidlo křížení. Kontrola ve 2D. | chyba |
| 3.5 | Nulová délka | Délka segmentu linie ve 3D nesmí být 0. | chyba |
| 3.6 | Duplicity prvků | Liniové objekty ve stejném LEVELu s identickými XY vrcholy. Pokud je rozdíl Z = 0: chyba; rozdíl Z < tolerance: varování. | chyba / varování |
| 3.7 | Volné konce | Liniové objekty vstupující do tvorby odvozených ploch nesmí mít volné konce — platí pouze v Oblasti kompletní ZPS. Konstrukční linie podzemního objektu ZPS se kontroluje celoplošně, výsledkem je vždy varování. | chyba / varování |
| 3.8 | Duplicita bodů | Podrobné body ZPS a bodové objekty ZPS musí mít unikátní XYZ (kontrola ve 3D napříč LEVELy). Definiční body musí mít unikátní XY per LEVEL (2D). | chyba |
| 3.9 | Blízkost bodů | Dvě a více bodových objektů ve vzdálenosti menší než definovaná tolerance. Kontrola ve 3D. | varování |
| 3.10 | Minimální délky | Délka segmentu linie je větší než 0, ale menší než definovaný parametr. Kontrola ve 3D. | varování |
| 3.11 | Solitérní podrobné body ZPS | Každý podrobný bod ZPS musí být použit alespoň jedním bodovým nebo liniovým prvkem ve stejném LEVELu. Kontrola pouze v Oblast změny. | chyba |
| 3.12 | Obvod Oblasti kompletní ZPS | Hranice polygonu Oblasti kompletní ZPS musí vrcholově identicky kopírovat průběh příslušných konstrukčních linií ZPS. Kontrola ve 2D per LEVEL. | chyba |
| 3.13 | Minimální vzdálenost bodu od linie | Podrobné body ve vzdálenosti menší než tolerance od linie, na níž nejsou navázány. Kontrola ve 2D per LEVEL. | varování |

Tolerance a minimální rozměry jsou definovány v:
[1.3.2. Minimální rozměry a tolerance](https://dtmwiki.cuzk.gov.cz/01_pravidla/03_hierarchie/02_tolerance)

---

## Skupina 4 — Kontroly odvozených objektů

> **Klíčová poznámka k architektuře:**
> Odvozené plochy (2D) a 3D obvody **nejsou součástí příchozího JVF GAD souboru**.
> Editor předává pouze **konstrukční liniové prvky**, ze kterých IS DTM krajů automaticky
> odvozuje plošné objekty ZPS interně. Kontroly skupiny 4 proto **neprobíhají při příjmu GAD**
> — jsou prováděny až po odvození ploch (interní proces IS DTM, přeshraniční editace).
> Výjimkou je kontrola **4.11**, která bude zavedena s verzí JVF DTM 1.5.

| # | Název | Popis | Závažnost |
|---|---|---|---|
| 4.1 | Minimální velikost ploch | Odvozená plocha musí být větší než 0,05 m² (platí od července 2025). Kontrola ve 2D. | chyba |
| 4.2 | Plocha s více definičními body | Každá odvozená plocha smí mít právě jeden definiční bod ve stejném LEVELu. | chyba |
| 4.3 | Plocha bez definičního bodu | Každá odvozená plocha musí mít definiční bod. | chyba |
| 4.4 | Plocha s chybným ohraničením | Každý 3D obvod odvozené plochy musí být tvořen pouze konstrukčními liniemi odpovídajícími hierarchii daného objektu ZPS. | chyba |
| 4.5 | Kolize ploch | Odvozené plochy se nesmí překrývat ve stejném LEVELu. Kontrola ve 2D. | chyba |
| 4.6 | Bezešvost ploch | Odvozené plochy musí v Oblasti kompletní ZPS celistvě a bez mezer pokrývat celé mapované území. Kontrola ve 2D per LEVEL. | chyba |
| 4.7 | Definiční bod bez plochy | Každý definiční bod musí ležet v odvozené ploše stejného LEVELu. Kontrola ve 2D, pouze v Oblasti kompletní ZPS. | chyba |
| 4.8 | Existence svislých hran | Pokud je pro uzavření 3D obvodu nutná svislá linie a ta v datech chybí, jedná se o chybu. (V prvotním importu varování, v provozní fázi chyba.) | chyba |
| 4.9 | Kolize prvků ve 3D | Kontrola svislých hran ve 3D: duplicita, částečný překryv, jeden prvek je obsažen v jiném. | chyba |
| 4.10 | Posun definičního bodu | Definiční bod nesmí být přesunut mimo původní plochu v referenčním stavu, ani do jiné existující plochy. | chyba |
| 4.11 | Validita zápisu geometrie ploch *(JVF 1.5)* | OGC Simple Features: LinearRing musí být uzavřený (start == end) a jednoduchý (neprochází bodem dvakrát). Exterior Ring: CCW; Interior Ring: CW, leží uvnitř Exterior Ring, nedělí polygon. Žádný segment hranice se nesmí vyskytovat vícekrát. | chyba |

Specifikace OGC Simple Feature Access, na níž je kontrola 4.11 založena:
<https://portal.ogc.org/files/?artifact_id=25355>

---

## Relevance pro jvf-parser

`jvf-parser` pracuje s **výstupem** JVF souboru (plochy a MultiCurve jsou v ZPS objektech přímo obsaženy),
nikoliv se stavem databáze IS DTM krajů. Mnoho kontrol IS DTM vyžaduje databázový kontext
(podrobné body ZPS, Oblast kompletní ZPS, stav před změnou, hierarchie napříč objekty).

### Co je aplikovatelné přímo na JVF soubor

| Kontrola IS DTM | Ekvivalent v jvf-parser |
|---|---|
| 1.1 Struktura / XSD validace | Parser odmítne nevalidní XML strukturu |
| 1.4 Typy geometrií | Lze ověřit typy v `Geometry.type` |
| 1.5 Souřadnice X, Y, Z — rozsah | Kontrola rozsahu S-JTSK a výšky |
| 1.6 Přesnost souřadnic na cm | Kontrola max. 2 desetinných míst |
| 3.4 Křížení sebe sama | Self-intersection liniových geometrií |
| 3.5 Nulová délka | Nulová vzdálenost po sobě jdoucích bodů |
| 4.11 Validita zápisu polygonů | OGC Simple Features: uzavřenost, jednoduchost, orientace ringů |

### Co vyžaduje databázový kontext IS DTM

| Kontrola IS DTM | Důvod nedostupnosti |
|---|---|
| 1.2 Existence oblasti změny | Oblast změny (`ObLastZmeny`) není součástí datového modelu ZPS objektů |
| 1.3 Extent v rámci kraje | Vyžaduje znalost hranic kraje |
| 1.7 Umístění změn v oblasti AZI | Vyžaduje oblast změny AZI z databáze |
| 2.1 Atributy — třída přesnosti | Závisí na kontextu operace (INSERT/UPDATE/DELETE) |
| 3.1 Závislost na podrobných bodech | Podrobné body ZPS jsou samostatné objekty, nutný globální stav |
| 3.2 Překryv linií | Nutný globální stav všech linií v daném LEVELu a kraji |
| 3.3 Křížení linií | Totéž |
| 3.7 Volné konce | Závisí na existenci Oblasti kompletní ZPS |
| 3.11 Solitérní podrobné body | Závisí na globálním stavu podrobných bodů |
| 3.12 Obvod Oblasti kompletní ZPS | Závisí na Oblasti kompletní ZPS |
| 4.1–4.10 Odvozené objekty | Plochy jsou odvozovány IS DTM interně ze zdrojových linií |

### Částečně aplikovatelné (v rámci jednoho JVF souboru)

| Kontrola IS DTM | Aplikovatelnost |
|---|---|
| 3.6 Duplicity prvků | Lze detekovat duplicity uvnitř jednoho JVF souboru (ne vůči DB) |
| 3.8 Duplicita bodů | Totéž — duplicity uvnitř souboru |

---

## Plánovaná implementace kontrol v jvf-parser

Plán implementace validační vrstvy je popsán v [`CLAUDE.md`](../../../CLAUDE.md) (sekce _Topologické checkování_).

Navrhované tři vrstvy v pořadí implementace:

**Vrstva 1 — Geometrická validita** (bez závislostí mezi objekty)
- Uzavřenost polygonu: první bod == poslední bod v LinearRing
- Min. počet bodů polygonu: exterior ≥ 4 (3 unikátní + uzavírací)
- Min. počet bodů linie: ≥ 2
- Validita souřadnic: žádné NaN ani Infinity
- Shoda srsDimension: počet souřadnic dělitelný srsDimension
- Self-intersection polygonu: exterior ring se sám nekříží

**Vrstva 2 — Konzistence uvnitř záznamu** (Polygon ↔ MultiCurve u ploch)
- XY souřadnice exterioru Polygonu odpovídají XY souřadnicím MultiCurve
- Počet bodů obvodu Polygonu == počet bodů MultiCurve (po dedup.)

**Vrstva 3 — Meziobjektová topologie** (snap tolerance, vyžaduje globální stav)
- Linie tvoří uzavřený polygon: `HraniceStavby` → `BudovaPlocha`
- Sdílené body sousedních linií: konec jedné == začátek druhé
- Definiční bod leží v ploše: `BudovaDefBod` uvnitř `BudovaPlocha`
- Osa leží uvnitř obvodu: `OsaPozemniKomunikace` uvnitř `ObvodPozemniKomunikace`
