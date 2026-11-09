# Zadání: připomínky k vieweru (2026-11-06)

List připomínek uživatele po zavedení symbologie SŽ ze SLD (větev
`feat/redesign-m3`). Každá položka má **zjištění v kódu**, **návrh** a
**náročnost**; lehké položky jsou rovnou připravené v kódu (stav ✅ v
`TASKS.md`), zbytek čeká na `/make-tasks`, položky s otevřenou otázkou až po
potvrzení uživatelem.

Náročnost: 🟢 lehké (CSS / jedno místo), 🟡 střední (víc souborů, testy),
🔴 velké (nová funkce, návrh UI).

## Položky

### P1 — Vyhledávání ve vrstvách 🟡 ✅ T2
> přidat vyhledávání i do vrstev

- Zjištění: panel „Vrstvy výkresu" (`jvf_viewer/index.html:135–146`,
  `ui/layerPanel.ts`) nemá filtr; u ŽXML / vzorníku je vrstev 100+.
  Legendy už vyhledávání mají (`.legend-search`, `index.html:373, 385`).
- Návrh: pole „Hledat vrstvu…" v záhlaví sekce (stejný styl `.legend-search`),
  filtr podle názvu, elementu a kódu bez diakritiky; prázdné kategorie skrýt;
  filtr jen zužuje seznam, viditelnost vrstev v mapě nemění.

### P2 — Konzistentní otevírání legend 🟡 (rozhodnuto: jedna legenda → T5)
> konzistentně otevírat legendy u aplikací vs u vrstev

- Zjištění: dvě tlačítka v záhlaví vrstev — „Legenda DTM" (`#btn-legend`,
  ikona `legend_toggle`, dlaždice geometrie všech typů Katalogu ČÚZK) a
  v UDM/JŽM navíc „Legenda znaků" (`#btn-symbol-legend`, ikona `category`,
  mřížka jen bodových SVG, `ui/symbolLegendModal.ts`). Každá vypadá i ovládá
  se jinak.
- Návrh: jedno tlačítko „Legenda" v každé aplikaci; obsah podle režimu
  (JVF = Katalog ČÚZK, UDM = styly ČKZ, JŽM = styly SLD SŽ + rozšíření),
  jednotný vzhled dlaždic (geometrie bod / linie / plocha, varianty podle
  číselníků), stažení SVG (ZIP) jako akce v legendě dialektu. Souvisí s P3
  a P15.
- **Rozhodnutí uživatele (2026-11-09): „1 typ"** — jedna legenda místo
  Legendy DTM a Legendy znaků, stejná ve všech aplikacích (JVF / UDM / JŽM),
  obsah podle režimu. Realizace v T5.

### P3 — „UDM a ŽXML jsou v aplikaci jen bodové prvky" 🟡
> udm a žxml jsou prý v aplikaci jen bodové prvky

- Zjištění: v mapě se UDM i ŽXML kreslí kompletně (linie, souběžné čáry,
  plochy — vzorník `zxml_vzornik.xml`), ale **Legenda znaků ukazuje jen
  bodové značky** (`collectSymbols` bere jen `app.symbol` / `lineSymbol`,
  `symbolLegendModal.ts`) — odtud dojem „jen body".
- Návrh: v legendě dialektu i liniové a plošné styly (dlaždice geometrie
  `buildGeometryIcon` z `ui/symbolSwatch.ts` jako Legenda DTM, s čárkováním,
  souběžnými čarami a značkami podél linie). Řeší se spolu s P2.

### P4 — Tenčí řádky v přepínači vrstev 🟢 ✅ T1
> ztenčit řádky v přepínači vrstev (požadavek Jerry, WhatsApp 6. 11. — bude
> vidět víc vrstev, hlavně u ŽXML)

- Zjištění: řádek vrstvy má dvouřádkový popis (název + „kategorie · část")
  a výšku ~48 px (`.layer-item` v `app-m3.css`).
- Řešení: kompaktnější řádek (menší svislé odsazení, menší písmo podtitulku).

### P5 — Popisek kategorií (DI — Dopravní infrastruktura) 🟢 ✅ T1
> přidat popisek kategoriím - di - dopravní infrastruktura

- Zjištění: hlavička skupiny v panelu vrstev a legendě ukazuje jen zkratku
  obsahové části (`ZPS`, `DI`, `ZDT`…); popisky jsou v
  `state/contentParts.ts` (`contentPartTitle`), využíval je jen tooltip.
- Řešení: hlavička „DI · Dopravní infrastruktura" (zkratka tučně, popis
  tlumeně) v panelu vrstev, Přehledu prvků i legendách.

### P6 — Scrollbar v modálu znaků 🟢 ✅ T1
> v prohlížení symbolů v modálu přidat scrollbar

- Řešení: viditelný posuvník v těle modálů legend (`.modal-body` u
  `#symbol-legend-modal` a `#legend-modal`).

### P7 — Přidat, nebo nahradit projekt; ochrana proti duplicitě 🟡 ✅ T3
> potvrzení od uživatele zda přidat, nebo nahradit projekt při přidání
> dat/ukázky + ochrana, abych si ukázku nemohl přidat 2×, minimálně
> notifikace, že tento soubor už je v aplikaci

- Zjištění: nahrání souboru (drag & drop, výběr, ukázka) vždy přidá další
  projekt (`state/projects.ts`); stejný soubor jde přidat opakovaně.
- Řešení: (a) duplicita = projekt se shodným názvem souboru → hláška
  „Soubor … už je načtený" a nepřidá se; (b) jsou-li načtené projekty, dotaz
  **Přidat / Nahradit** (křížek = zrušit), u dávky souborů jen jednou;
  nahrazení až po úspěšném načtení nového souboru.

### P8 — Styl plotu v mapě (ZPS) 🟡 (otázka)
> styl pro plot v mapě je blbě (zps)

- Zjištění: plot (0100000162) kreslí Katalog jako plnou čáru 0,18 mm
  s příčkami po 10 mm (`createTickStyle`, `map/jvfLayers.ts`); v JŽM má
  plot s rozšířením SŽ (zásněžky, zajištění skal) vlastní značky ze SLD.
- Otázka: co konkrétně nesedí (příčky moc husté / tenké, chybí rozlišení
  druhu plotu podle Katalogu, v JVF nebo JŽM)? Ideálně snímek s porovnáním
  proti mapě ČÚZK.

### P9 — Přestylovat panel nástrojů ve 3D 🟡
> ve 3D přestylovat panel nástrojů

- Zjištění: spodní lišta 3D („Procházení", šipky, zoom, rotace, převýšení
  1× / 2× / 5× / 10×) má vlastní styl odlišný od plovoucích tlačítek nad
  mapou (`ui/toggle3d.ts`, `app-m3.css`).
- Návrh: stejný vizuální jazyk jako tlačítka nad mapou (bílé skupiny
  `--app-radius`, hover přes celé tlačítko, aktivní stav barvou písma),
  ikony seskupit (pohyb · zoom · rotace · převýšení), popisky jako tooltipy.

### P10 — Průhlednost terénu ve 3D 🟡 (T8)
> přidat opacity na terén

- Zjištění: terén má víc materiálů (hypsometrie, podklad, detail při
  přiblížení — `viewer3d/terrain.ts:350, 696, 775`), které se za běhu
  vyměňují; „Terén" je jen přepínač bez karty voleb.
- Návrh: viz T8 v `TASKS.md`.

### P11 — Tmavý motiv: tlačítka nad mapou 🟢 ✅ T1
> doladit dark mode — s černým podkladem nejsou rozpoznat tlačítka nad mapou

- Řešení: v tmavém motivu tlačítka nad mapou s obrysem a stínem, který je
  vidět i na černém podkladu (podklad „Prázdná" je v tmavém motivu černý).

### P12 + P13 — Méně přepínačů změn, srozumitelné popisky 🟡 (souvisí s #6)
> zredukovat toggly, pokud je JVF se změnami · vyjasnit, co dělají toggly
> „Zvýraznit změny barvou" a „Zobrazit nové zeleně"; tlačítko dát jinam
> a přidat popisky

- Zjištění: sekce `#changeset-options-section` (`index.html:154–171`,
  `ui/changesetToggle.ts:99`) se ukazuje jen u dat se změnami, ale má až
  4 přepínače: „Zvýraznit změny barvou" (přebarví i/u/d barvou typu změny)
  + „Zobrazit nové / editované / mazané" (filtr — skryje záznamy daného typu).
  Názvy obou skupin svádějí k záměně (barva × viditelnost).
- Návrh: jeden blok „Změny v datech" v Přehledu prvků nebo nad vrstvami:
  tři chipy s počty **Nové 12 · Editované 3 · Mazané 5** (klik = skrýt /
  zobrazit, barva chipu = barva změny) a jeden přepínač „Obarvit podle
  změny" s nápovědou. Navazuje na zadání #6 (bod D — minimalizace
  přepínačů).

### P14 — Vyhezkat Přehled prvků 🟡 (radiusy ✅ T1, ikony ❓ T10)
> vyhezkat přehled prvků — ikony, odebrat radiusy

- Návrh: ikony u akcí a hlaviček (Material Symbols jako zbytek UI), řádky
  bez zaoblení (jako panel vrstev), jednotné odsazení. Souvisí s #6 (A).

### P15 — Více stylů ve vrstvě: klik na znak ukáže všechny 🟡
> pokud vrstva obsahuje více stylů, mělo by jít na znak kliknout a všechny
> zobrazit à la legenda

- Zjištění: znak vrstvy ukazuje vzhled nejčastější hodnoty v datech
  (`resolveDataStyle`, `map/jvfLayers.ts`), varianty a jejich počty už
  `DataStyle.variants` zná.
- Návrh: klik na znak → popover / mini legenda se všemi vzhledy vrstvy
  (dlaždice + hodnota + počet záznamů); u dialektů i podle pravidel stylu.

### P16 — Minimální výška modálu legendy 🟢 ✅ T1
> drž minimální výšku modálu s legendou, když nic nenajde, je nízká

- Řešení: `min-height` těla modálu legend (DTM i znaků), ať se při hledání
  bez výsledků nezmenšuje.

### P17 — Číselníky pro JVF / UDM / ŽXML 🟡 (otázka)
> načti a používej číselníky pro jvf/udm/žxml

- Zjištění: popisky číselníků jsou generované z XSD pro všechny verze
  (`*/generated/enum-labels.ts`, `labelForAttribute`) a používají se v detailu
  prvku, legendách a XDATA exportu do CAD; ověřeno — všech 541 hodnot
  ze stylů SŽ, 150 hodnot rozšíření SŽ a 1 046 hodnot UDM má popisek.
- Otázka: kde chybí? (např. filtrování Přehledu prvků podle hodnoty
  číselníku, výpis všech hodnot v detailu, číselníky z ISTEM pro SŽ hodnoty
  mimo XSD?)

### P18 — Vektorizované ikony SŽ (trojúhelník jako trojúhelník) ✅ vyřešeno
> optimalizovat vektorizované ikony pro SŽ, z trojúhelníku udělat trojúhelník

- Stav: ikony SŽ už nejsou vektorizované z PNG fotokatalogu — od
  `bd8f20b` jsou z oficiálních SVG ve stylech SLD (export LDM, ISTEM),
  trojúhelníky balíz apod. jsou přesné. `WellKnownName triangle` se kreslí
  jako přesný trojúhelník (`scripts/zxml/build-zxml-styles.py`, `MARK_SHAPES`).

### P19 — Styly „jen tečka" (např. hák) 🟡
> je tam plno stylů, kde je jen tečka, třeba hák

- Zjištění (ověřeno):
  1. **Katalog ČÚZK** — 22 bodových SVG z oficiálního balíčku je opravdu jen
     plná tečka: podpěrné zařízení hák, střešník, portál, sloup jiný / trakční,
     šoupě plynu a potrubní pošty, body protikorozní ochrany, vodojem, ČOV,
     skládka, spalovna, výškový bod… U části z nich Katalog doplňuje
     **zkratku textem** („vdj.", „ČOV", „skl.", „spal.", „let. st.") — ISTEM
     ji kreslí `TextSymbolizer`em v SLD, viewer texty zatím nepřebírá.
  2. **ŽXML** — 26 bodových objektů SŽ má značku v SLD jen pro vyjmenované
     hodnoty číselníku (bod výhybky, balíza, návěstidla, staničník…); záznam
     s jinou / chybějící hodnotou se kreslí tečkou (SLD pro něj nic nemá).
- Návrh: (a) převzít textové zkratky z `TextSymbolizer` (Katalog i SŽ)
  a kreslit je u tečky (2D, 3D, CAD); (b) u objektů SŽ s chybějící hodnotou
  použít značku hodnoty „neurčeno / nezjištěno", existuje-li.

### P20 — Tisk 🔴 (otázka)
> tisk???

- Otázka: co tisknout — aktuální výřez mapy (PNG/PDF), mapový list
  v měřítku s rámem a legendou, nebo tabulku Přehledu prvků? Bez upřesnění
  se neimplementuje.

## Verifikace
- `npx tsc --noEmit -p jvf_viewer`, `npx eslint` dotčených souborů,
  `npx playwright test` (e2e), u legend a panelu vrstev snímky Playwrightem
  ve světlém i tmavém motivu.
- Info modal (`ui/infoModal.ts`) a `CHANGELOG.md` [Unreleased] u každé
  změny funkčnosti.
