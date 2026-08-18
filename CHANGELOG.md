# Changelog

Všechny významné změny tohoto projektu jsou dokumentovány v tomto souboru.

Formát vychází z [Keep a Changelog](https://keepachangelog.com/cs/1.1.0/),
verzování používá [CalVer](https://calver.org/) ve tvaru `YYYY.MM.DD`.

## [Unreleased]

### Přidáno

- **Popisky číselníkových atributů** v panelu detailu prvku — u kódovaných
  atributů se vedle číselného kódu zobrazí i český popisek z číselníku DTM
  (např. `2 — dálnice II. třídy`). Mapování `kód → text` se generuje
  build-time z XSD (`ENUM_LABELS`), překlad běží jen pro sekci „Atributy
  objektu"; nekódované atributy zůstávají beze změny.
- **Podpora JVF DTM 1.5.0.1 souběžně s 1.4.3** napříč všemi balíčky
  (parser, topologie, viewer). Čtení archivních 1.4.3 souborů zůstává beze
  změny — verze se **detekuje automaticky** podle obsahu souboru a aktivní
  verze ve vieweru se při načtení přepne (ruční přepínač zůstává).
  - **Parser**: verzní router `parseJvfDtm` (1.4.3 i 1.5.0.1), nová struktura
    1.5.0.1 — operace v názvu elementu záznamu (`ZaznamObjektuIns/Upd/Del`,
    referenční `RefV/RefN…` a přeshraniční `Pe…` věty), geometrické wrappery
    (`Bod/Linie/Plocha/Obvod3D`), sdílené atributy PSPI, doprovodné info
    (`…GAD/KAD/DTI/VydejZPS/VydejDTI/VydejPSPI`) a `TypDatoveSady`. Katalog
    1.5.0.1 vygenerován z distribučního XSD (nové objekty, PSPI, bez KI
    a zrušeného objektu).
  - **Protokol chyb**: samostatný parser `parseErrorProtocol`
    (`ServisJVFDTM/ProtokolChyb`) + zobrazení jako report ve vieweru.
  - **Topologie**: páry DefBod↔Plocha pro 1.5.0.1 (66), režim „Výdej PSPI",
    bezpečný default pro neznámou verzi (jen generické kontroly).
  - **Viewer**: nová obsahová část **PSPI** v legendě a mapě (nové/PSPI typy
    mají styl), verzní legenda, auto-detekce verze při načtení.
- **Nová obsahová část PSPI** (plánované stavební práce infrastruktury) —
  vlastní sekce v legendě a barevné odlišení v mapě.
- Sekce **Projekty** v levém panelu je nově **sbalitelná** (klik na
  hlavičku „Projekty") — s více načtenými soubory seznam narůstá a zabíral
  místo; počet projektů zůstává v hlavičce vidět i ve sbaleném stavu.
- Klik na projekt v sekci **Projekty** přiblíží pohled na jeho rozsah —
  ve 2D mapě i ve 3D scéně (animovaný přesun kamery).
- **Více JVF souborů (projektů) naráz** — další výběr souboru nebo drag &
  drop načtená data nenahrazuje, ale **přidává jako samostatný projekt**
  (až 8 projektů; hodí se pro navazující projekty v jedné mapě). Levý panel
  má novou sekci **Projekty** (název souboru, barevná tečka, počet záznamů,
  tlačítko × pro odebrání); odebráním posledního projektu se viewer vrátí
  do prázdného stavu. Při ≥2 projektech přibude v Přehledu prvků filtr
  **Projekt** (chips) promítající se do tabulky i 2D/3D mapy; vrstvy
  a skupiny stejného typu z různých projektů odlišuje tečka projektu.
  Topologická validace běží per projekt a klik na projekt v seznamu
  přiblíží jeho rozsah; **3D terén se při ≥2 projektech stahuje zvlášť
  kolem každého projektu** (okolí 800 m místo společného bboxu), takže
  dva projekty daleko od sebe nestáhnou obří model přes prázdnou plochu
  mezi nimi. Identifikátory záznamů se při více projektech kvalifikují
  projektem, takže stejná DTM ID ve dvou souborech nekolidují.
  S jedním načteným souborem se chování vieweru nemění.
- JVF soubor lze nově načíst **přetažením myší (drag & drop)** kamkoli nad
  okno aplikace — při přetahování se zobrazí vizuální nápověda, upuštění
  souboru ho načte stejně jako výběr přes tlačítko „Nahrát soubor".
- **Filtrování prvků podle úrovně umístění (LEVEL)** v Přehledu prvků —
  pokud data obsahují víc úrovní (−3 až +3 z atributů
  `UrovenUmisteniObjektuZPS/TI/DI`, plus skupina „bez úrovně"), zobrazí se
  v panelu řádek chipů **Úroveň**. Odškrtnuté úrovně se skryjí v tabulce
  i ve **2D a 3D mapě**; filtr se kombinuje (AND) s viditelností vrstev
  a changeset přepínači a resetuje se při načtení nového souboru.
- **Barevné rozlišení changeset záznamů**: kromě mazaných (`ZapisObjektu='d'`,
  červeně) se nyní dají zvýraznit a vypínat/zapínat i **nové** záznamy
  (`'i'`, zeleně) a **editované** záznamy (`'u'`, oranžově) — samostatné
  přepínače pod seznamem vrstev, ve 2D i 3D. Přepínač se zobrazí jen pro
  typy zápisu obsažené v nahraném souboru.
- **Podkladová mapa na 3D terénu** — na povrch DMR (ČÚZK DMR5G) lze ve 3D
  scéně namapovat jako texturu **Základní mapu** nebo **Ortofoto ČÚZK**
  (stejné vrstvy jako ve 2D, dlaždice nativně v S-JTSK / EPSG:5514).
  Ovládání ve spodní liště 3D: volba podkladu (Žádný / Základní mapa /
  Ortofoto) + posuvník průhlednosti, aby vykreslené prvky zůstaly čitelné.
  Volba podkladu automaticky zapne terén; načítání běží asynchronně
  s indikátorem a selhání sítě scénu nerozbije.
- **Klikací (e2e) testy vieweru** — Playwright smoke sada (`jvf_viewer/e2e/`)
  pokrývající načtení JVF souboru, odmítnutí nesprávné verze, panely
  validace a přehledu prvků, přepínání 2D/3D, modály a ovládací prvky.
  Spouští se přes `npm run test:e2e` v `jvf_viewer`.

### Změněno

- **Přehled prvků** — hlavička kategorie zůstává při scrollování
  **přišpendlená nahoře** panelu; v dlouhém seznamu (např. stovky podrobných
  bodů v jedné kategorii) je tak stále vidět, ve které kategorii se nacházíte.
  Jakmile doscrollujete k další kategorii, její hlavička předchozí vystřídá.
- **Sjednocené ovládání podkladové mapy**: volba Základní mapa / Ortofoto
  v levém panelu nově řídí 2D mapu i texturu na 3D terénu (jeden zdroj
  pravdy); separátní panel „Podklad" ze spodní 3D lišty byl odstraněn.
  Pod tlačítky přibyl posuvník **sytosti** (ikona kapky, 10–100 %, výchozí
  100 %) — průhlednost podkladu platí shodně pro 2D i 3D. Aktivní volba
  podkladu během 3D automaticky zapne terén; samotné přepnutí do 3D ale
  terén nevnucuje — textura se nanese, až když je (nebo se stane) terén
  zapnutý.
- **Přepínač světlý/tmavý režim** je nově jediné toggle tlačítko ☀️/🌙
  v hlavičce (dříve dvojice tlačítek ve spodní 3D liště) a funguje i ve
  **2D** — mění barvu plochy pod vrstvami, viditelnou při vypnutém
  podkladu, i pozadí 3D scény.
- 3D scéna má nově **výchozí světlé pozadí** (dříve tmavé) — barvy prvků
  z Katalogu ČÚZK počítají se světlým podkladem stejně jako 2D mapa.
  Tmavé pozadí zůstává dostupné přepínačem, pomocná mřížka se barevně
  přizpůsobuje zvolenému pozadí.

### Opraveno

- **Výkon 3D scény** (`threeScene.ts`) — skrývání SVG sprite ikon při pohybu
  kamery (orbit/pan/zoom) už neprochází celou scénu (`scene.traverse`) na
  každý mousemove, ale jen udržovaný seznam spritů; materiály stejné barvy
  a stylu se navíc sdílejí mezi záznamy místo vytváření nové instance pro
  každý jednotlivý objekt. Beze změny chování (highlight, filtry, changeset
  barvy i click-picking fungují stejně jako dřív).
- **Parser (`jvf-parser`) nově validuje vstupní XML** (`XMLValidator.validate`
  z `fast-xml-parser`) — nepárové/oříznuté tagy nebo jinak nevalidní XML dřív
  prošly tiše a vrátily neúplný/zavádějící `JvfDtm`. Nově se vyhodí
  srozumitelná chyba `Neplatný XML soubor: … (řádek …, sloupec …)`.
- Parser nově hlásí (`console.warn`) neočekávanou hodnotu `TypZapisu` (jinou
  než „kompletní zápis"/„změnové věty") a nepodporovanou verzi `VerzeJVFDTM`
  (mimo `SUPPORTED_VERSIONS` z `jvf-dtm-types`) — dřív se hodnoty tiše
  přetypovaly bez ověření. Parsování v obou případech pokračuje (nejedná se
  o fatální chybu), jen upozorní na neočekávaný vstup.
- Obvodové linie ploch (MultiCurve) se ve 2D mapě mohly vykreslovat jako
  obří pruhy přes celou mapu (pozorováno u `BudovaPlocha` z ukázkových OPL
  dat). Příčina v parseru: atribut `srsDimension="3"` nese element
  `gml:MultiCurve`, ale členské `LineString` ho nemají — parser jim místo
  zdědění hodnoty z rodiče (GML sémantika) přiřadil default 2, takže se 3D
  souřadnice četly po dvojicích a výšky se interpretovaly jako polohy.
  Oprava propaguje `srsDimension` z MultiCurve do členských křivek — platí
  pro 2D mapu, 3D scénu i topologické kontroly.
- Půlpixelová registrace DMR terénu ve 3D: rastr z ČÚZK `exportImage` je
  pixel-is-area (hodnota patří středu buňky), ale terén vzorkoval buňky na
  hrany extentu — na okrajích scény to posouvalo terén až o ±půl buňky
  (typicky 2–4 m). Nyní se vzorkují středy buněk; stejně opraveny vrstevnice
  a UV mapování podkladové textury. Nalezeno při prověřování hlášeného
  posunu DMR (~50 m západně), který se přitom nepotvrdil — skutečná odchylka
  vůči referenčnímu vrcholu Sněžky byla do 4 m.
- Prvky bez přiděleného DTM ID (nově vytvořené JVF soubory DI/TI, jejichž
  záznamy se teprve budou do DTM vkládat) jsou nyní plnohodnotně
  identifikovatelné pomocí syntetického klíče — funguje pro ně klik v mapě
  (2D i 3D), zoom, zvýraznění i detail atributů v Přehledu prvků. Dříve byly
  řádky bez ID neklikatelné a výběr prvku v mapě je ignoroval.
- **Bezpečnost**: panel vrstev (`layerPanel.ts`) vkládal název, skupinu,
  kategorii a obsahovou část objektového typu přes `innerHTML` — hodnoty
  pocházející z libovolného nahraného JVF souboru mohly obsahovat cizí
  HTML/JS (XSS). Nahrazeno bezpečným sestavením DOM přes `createElement` /
  `textContent`, vizuálně beze změny.
- Chybové hlášky při selhání načtení JVF souboru (`fileUpload.ts`) uživateli
  zobrazovaly surový technický text výjimky. Nyní se zobrazí srozumitelná
  česká hláška a technický detail jde jen do konzole (`console.error`).
- **Topologie — kontrola 3.4 (self-intersection linií)** nedetekovala
  kolineární překryv ani dotyk vrcholu na jiném segmentu (T-junction) —
  `segmentsIntersect` používal jen ostré nerovnosti, takže tyto případy
  procházely bez chyby, přestože specifikace zakazuje linii se "křížit i
  překrývat". Nyní `LINE_SELF_INTERSECTION` hlásí i tyto případy.
- **Topologie — Vrstva 3 (DefBod ↔ Plocha, Osa ↔ Obvod) ignorovala díry
  polygonů** (interior rings) — definiční bod nebo bod osy ležící uvnitř
  díry plochy/obvodu byl mylně vyhodnocen jako "uvnitř". `pointInPolygon`
  nově zohledňuje `interiors`; dotčeno `checkDefBodInPlocha`,
  `checkOsaInObvod` a `checkDelAreaContainsDefBodPlocha`.
- **Topologie — `checkDanglingEnds` hlásil false positive u samostatné
  uzavřené smyčky** (linie, kde začátek ≈ konec v toleranci 0,05 m) — oba
  konce se ohlašovaly jako volné, i když jde o platně uzavřenou linii bez
  potřeby návaznosti na jinou.
- Odstraněn mrtvý kód (`lineInPolygon`, `toXYFlat` v `geometry-math.ts`),
  nikde v monorepu nepoužívaný.

### Odstraněno

- Tlačítko **„Zoom na data"** v hlavičce — funkci nahradil **klik na projekt**
  v sekci Projekty (přiblíží pohled na jeho rozsah ve 2D i 3D). Automatické
  přiblížení na rozsah po načtení souboru zůstává beze změny.

## [2026.6.16.2] - 2026-06-16

### Přidáno

- V panelu **„Přehled prvků"** se v detailu záznamu nově zobrazuje
  **nadmořská výška** (Z-souřadnice z geometrie) — u bodu jedna hodnota,
  u linií a ploch rozsah `min–max`. Zobrazí se jen u 3D geometrií
  (`srsDimension ≥ 3`).

## [2026.6.16] - 2026-06-16

### Opraveno

- 3D scéna byla severo-jižně zrcadlená proti 2D mapě — sever vycházel dole
  na obrazovce. Three.js kamera při pohledu shora má +Z na obrazovce dole,
  takže JVF Northing (`Y`) je při mapování do scene Z nutné invertovat
  (`cy − Y` místo `Y − cy`). Oprava platí stejně pro JVF geometrii i pro
  podkladový terén DMR5G, takže obě vrstvy nadále sedí. Žádná změna v
  parseru ani v topologii.

## [2026.6.10] - 2026-06-10

### Přidáno

- Panel **„Přehled prvků"** (tlačítko v hlavičce vedle „Zkontrolovat") —
  vypisuje všechny načtené záznamy seskupené podle objektového typu, s
  filtrováním podle obsahové části (Vše / ZPS / TI / DI / GAD / OPL) a
  fulltext vyhledáváním v názvu / `elementName` / ID. Klik na záznam
  zoomuje (2D i 3D) a rozbalí inline detail s tabulkou společných i
  specifických atributů. U malých souborů (≤ 8 typů) se skupiny
  automaticky rozbalí. ZapisObjektu je odlišen barevným badge
  (I = zelená, U = žlutá, D = červená). Druhý klik na aktivní řádek
  zruší výběr. Panel je vzájemně exkluzivní s panelem topologické
  validace. Klik na prvek v mapě (2D i 3D) při otevřeném panelu
  prvek vyhledá v seznamu, rozbalí jeho skupinu a detail, scrollne
  k němu a zvýrazní ho.
- Tlačítka výběru podkladové mapy (*Základní mapa* / *Ortofoto*) lze nyní
  kliknutím na aktivní volbu vypnout — JVF vrstvy zůstanou viditelné nad
  prázdným pozadím mapy. Druhý klik podklad opět zapne.
- Přepínač **„Zobrazit mazané (červeně)"** v levém panelu vieweru. Sekce se
  zobrazí jen u změnových vět (`TypZapisu='změnové věty'`) obsahujících
  alespoň jeden záznam s `ZapisObjektu='d'`. Po zaškrtnutí se mazané
  geometrie vykreslí sytě červeně ve 2D i 3D, po odškrtnutí se skryjí.
  Default je zaškrtnuto — uživatel po nahrání changesetu hned vidí, co se
  bude rušit.

## [2026.4.30] - 2026-04-30

### Přidáno

- README v rootu repozitáře a v každém ze čtyř workspace balíčků
  (`jvf-dtm-types`, `jvf-parser`, `jvf-topology`, `jvf-viewer`). Anglicky,
  zaměřené na vývojáře — popis veřejného API, architektury, vývojového
  workflow a jednotlivých kontrol topologie.

## [2026.4.29] - 2026-04-29

První veřejné vydání aplikace JVF DTM Prohlížeč.

### Přidáno

- Vercel Web Analytics (cookieless, GDPR-friendly) a Speed Insights pro
  měření návštěvnosti a Core Web Vitals (LCP, INP, CLS, TTFB). Aktivní pouze
  na produkčním Vercel hostu, lokálně se neodesílá nic.
- SEO meta tagy v `index.html` — title, description, keywords, robots,
  canonical URL, Open Graph (Facebook, LinkedIn), Twitter Card a JSON-LD
  structured data (`WebApplication`) pro vyhledávače.
- Favicon ve formátu SVG s motivem DTM (půdorys budovy s vrcholy a definičním
  bodem).
- `robots.txt` a `sitemap.xml` ve veřejné cestě `/jvf_viewer/` pro crawlery.
- Legenda všech ~360 objektových typů DTM 1.4.3 v novém modalu (ikona
  `legend_toggle` vedle nadpisu „JVF vrstvy" v levém panelu). Reprezentativní
  swatch pro každý typ (bod / linie / polygon), fulltext filtr podle názvu,
  kódu nebo kategorie.
- Klikatelný odkaz na LinkedIn v patičce levého panelu (jméno autora
  s ikonou v oficiální barvě).
- Sekce „Pro vývojáře" v modalu „O aplikaci" s odkazem na GitHub a popisem
  čtyř workspace balíčků (`jvf-dtm-types`, `jvf-parser`, `jvf-topology`,
  `jvf-viewer`).
- Sekce „Charakter projektu" v modalu „O aplikaci" — explicitní označení
  jako rekreačního projektu, který nenahrazuje oficiální přejímku v IS DMVS.
- Sekce „Verze JVF DTM" v modalu „O aplikaci" — popis přepínače verze,
  chování při neshodě verze souboru a při přepnutí nad načtenými daty.
- Přepínač aktivní verze JVF DTM v hlavičce. Po nahrání souboru se
  kontroluje shoda atributu `verze` s aktivní verzí; při neshodě se soubor
  nenačte a zobrazí se modal s nabídkou přepnutí verze nebo volby jiného
  souboru.
- Geodeticky korektní velikost SVG symbolů ve 2D i 3D — 1 SVG-pixel
  odpovídá 0,5 cm v terénu (referenční měřítko 1:500). Symboly se
  přibližují / oddalují s mapou jako linie a polygony. Při velkém oddálení
  (resolution > 4 m/px ve 2D, radius > 150 m ve 3D) se symbol nahrazuje
  malou tečkou, případně skrývá.
- LICENSE MIT v rootu repozitáře a `license` / `author` / `repository`
  pole ve všech `package.json`.

### Změněno

- Plynulé škálování symbolů během zoomu — `VectorLayer` má nyní zapnuté
  `updateWhileInteracting` a `updateWhileAnimating`, takže se velikost
  ikon mění během gesta, ne až po jeho dokončení.
- 3D sprite materiál má `depthTest: true` (předtím `false`) — sprity se
  korektně překrývají s ostatní 3D geometrií.
- Diakritika v UI textech (`Prohlížeč`, `Načítám…`, `Základní mapa` apod.).

### Opraveno

- Chyba v `symbology.ts`: `strokeWidth: 246236222.0` u typu `0100000009`
  (cyklostezka) opravena na `0.25` mm — outlier z původní extrakce
  Katalogu DTM.
- Detekce `DefinicniBod` v `jvf-parser` a duplicita bodů v `MultiCurve`
  geometriích.
- 3D canvas se po zavření error panelu / přepnutí 2D → 3D nyní správně
  roztáhne na celou plochu (sekvence resize událostí v `requestAnimationFrame`).