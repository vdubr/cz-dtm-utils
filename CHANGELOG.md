# Changelog

Všechny významné změny tohoto projektu jsou dokumentovány v tomto souboru.

Formát vychází z [Keep a Changelog](https://keepachangelog.com/cs/1.1.0/),
verzování používá [CalVer](https://calver.org/) ve tvaru `YYYY.MM.DD`.

## [Unreleased]

### Přidáno

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
  Topologická validace běží per projekt, zoom na data a 3D terén pracují
  se sjednoceným rozsahem; identifikátory záznamů se při více projektech
  kvalifikují projektem, takže stejná DTM ID ve dvou souborech nekolidují.
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

### Změněno

- 3D scéna má nově **výchozí světlé pozadí** (dříve tmavé) — barvy prvků
  z Katalogu ČÚZK počítají se světlým podkladem stejně jako 2D mapa.
  Tmavé pozadí zůstává dostupné přepínačem, pomocná mřížka se barevně
  přizpůsobuje zvolenému pozadí.

### Opraveno

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