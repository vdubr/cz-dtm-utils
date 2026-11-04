// Info modal — zobrazí README o aplikaci v překryvném dialogu.
// Obsah je staticky vložený HTML (bez závislosti na markdown parseru).

import { JVF_VERSIONS, UDM_VERSIONS, ZXML_VERSIONS, formatVersionLabel } from 'jvf-parser';
import { buildChangelogHtml } from './changelog.js';

const VERSIONS_DISPLAY = JVF_VERSIONS.join(', ');
const UDM_DISPLAY = UDM_VERSIONS.map(formatVersionLabel).join(', ');
const ZXML_DISPLAY = ZXML_VERSIONS.map(formatVersionLabel).join(', ');

const INFO_CONTENT_HTML = `
  <h3>Co to je</h3>
  <p>
    Webový prohlížeč souborů <strong>JVF DTM</strong> (Jednotný výměnný formát
    Digitální technické mapy ČR). Podporované verze specifikace:
    <strong>${VERSIONS_DISPLAY}</strong> a rozšíření
    <strong>${UDM_DISPLAY}</strong> (Univerzální datový model ČKZ) a
    <strong>${ZXML_DISPLAY}</strong> (železniční data DTMŽ Správy železnic)
    (verze se detekuje automaticky
    z načteného souboru; konkrétní verzi každého souboru ukáže tooltip
    názvu projektu v panelu „Projekty").
    Umožňuje načíst JVF XML soubor a prohlédnout si jeho obsah ve 2D mapě i ve
    3D pohledu. Načtený soubor se zpracovává <strong>lokálně v prohlížeči</strong>
    — nic se neodesílá na server.
  </p>

  <h3>Hlavní funkce</h3>
  <ul>
    <li>
      <strong>Nahrát soubor</strong> — výběr JVF XML souboru z disku (lze
      vybrat i více souborů naráz), nebo jednoduše
      <strong>přetažení souborů myší</strong> (drag &amp; drop)
      kamkoli nad okno aplikace. Parsování probíhá v prohlížeči. Vedle
      tlačítka je šipka s rychlým výběrem přiložených
      <strong>ukázkových souborů</strong> (ZPS, DI, KI, OPL, UDM a ŽXML —
      nabídka ukazuje ukázky aktivního režimu).
    </li>
    <li>
      <strong>Více projektů naráz</strong> — každý načtený soubor se přidá
      jako samostatný <em>projekt</em> (další výběr souboru nebo drag &amp;
      drop načtená data <em>nenahrazuje</em>, ale přidává — až do
      8 projektů). Hodí se pro navazující projekty, které chcete vidět
      společně v jedné mapě. Levý panel zobrazuje sekci
      <em>Projekty</em> se seznamem souborů (barevná tečka, počet záznamů)
      a tlačítkem × pro odebrání; odebráním posledního projektu se viewer
      vrátí do prázdného stavu. <strong>Zeměkoule</strong> u projektu (nebo
      klik na řádek) přiblíží pohled na jeho rozsah (ve 2D mapě i ve 3D
      scéně); <strong>oko</strong> skryje / zobrazí všechny prvky projektu
      ve 2D, 3D i v Přehledu prvků (skrytý projekt je ztlumený). Hlavičku
      sekce lze <strong>sbalit</strong> (klik na „Projekty") — počet projektů
      zůstává v hlavičce vidět i po sbalení. Při ≥2 projektech přibude
      v Přehledu prvků řádek <em>Projekt</em> s přepínatelnými chipy —
      odškrtnutý projekt se skryje v tabulce i ve 2D a 3D mapě. Vrstvy
      a skupiny stejného typu z různých projektů jsou odlišené barevnou
      tečkou projektu. Verze každého souboru se detekuje automaticky
      (podporované 1.4.3, 1.5.0.1 i UDM); topologická validace běží pro každý
      projekt zvlášť dle jeho verze. 3D
      terén se při více projektech stahuje <strong>zvlášť kolem každého
      projektu</strong> (okolí 800&nbsp;m) — dva projekty daleko od sebe
      tak nestáhnou obří model přes prázdnou plochu mezi nimi.
    </li>
    <li>
      <strong>2D mapa</strong> — vektorové vrstvy nad podklady ČÚZK (Základní
      mapa nebo Ortofoto), přepínání jednotlivých vrstev v levém panelu.
      Volba <em>Prázdná</em> podklad vypne — JVF vrstvy zůstanou nad
      prázdným pozadím, které je ve světlém motivu bílé a v tmavém černé
      (užitečné pro kontrolu geometrie bez vizuálního šumu). Posuvník sytosti pod
      tlačítky řídí průhlednost podkladu od 0 (podklad úplně průhledný) do
      100 % — platí společně pro 2D mapu i 3D scénu. Tlačítko motivu v hlavičce přepíná
      <em>světlý (výchozí) / tmavý motiv</em> celé aplikace — panely,
      dialogy, pozadí pod vrstvami ve 2D i 3D.
      <strong>DTM ČR (překryv)</strong> — přepínač pod podkladovými mapami
      zobrazí nad podkladem Digitální technickou mapu ČR ze služeb ČÚZK
      (IS DMVS, data krajských DTM; rastr — vektorová služba DTM celostátně
      neexistuje). Zaškrtnout jde všechny vrstvy (<em>Vybrat vše</em>), celé
      skupiny (ZPS – plochy, Dopravní infrastruktura, Technická
      infrastruktura, Přípojky, ZPS – linie a body) nebo jednotlivé
      podvrstvy po rozbalení skupiny; vlastní posuvník řídí sytost. Celá
      skupina se načítá z rychlých cachovaných dlaždic (WMTS), výběr
      podvrstev přes WMS. Služby kreslí jen při přiblížení (ZPS od
      ~1 : 37 000, sítě od ~1 : 150 000, přípojky a drobné prvky od
      1 : 800). Data JVF zůstávají nad překryvem. Ve 3D se vybrané vrstvy
      DTM přehodí přes terén (terén se zapne sám). Při přiblížení se kolem
      středu pohledu dočte podrobnější výřez podkladu i překryvů (jen okolí
      pohledu, po zastavení kamery), takže čáry zůstávají ostré.
      <strong>Katastr nemovitostí</strong> — stejný překryv z WMS ČÚZK
      (hranice parcel, parcelní čísla, obrazy parcel, další prvky mapy,
      KM-D, analogové mapy, orientační mapa parcel; všechny nebo jen
      vybrané). Ve světlém motivu je katastr černý, v tmavém bílý (inverzní
      vrstvy ČÚZK); kreslí se od 1 : 5 000, je nad DTM a pod daty JVF
      a ve 3D se také přehodí přes terén. Se zapnutým katastrem přibude
      vedle tlačítka měření tlačítko <strong>Zjistit vlastníka parcely</strong>:
      klik do mapy (2D i 3D) ukáže katastrální území, parcelní číslo
      a výměru parcely (dotaz na katastr ČÚZK), zvýrazní její hranici
      (WFS katastrálních parcel ČÚZK, i s otvory; v 2D tlačítko
      <em>Přiblížit na parcelu</em>, ve 3D obrys položený na terén)
      a nabídne odkaz <em>Vlastník
      v Nahlížení do KN</em>, který otevře parcelu ve veřejném Nahlížení do
      katastru nemovitostí s vlastníky (v nové záložce; aplikace vlastníky
      sama nestahuje — ČÚZK je strojově veřejně neposkytuje).
      Stylování podle <em>Katalogu kartografických symbolů DTM ČR</em> —
      barvy, čárkování linií a varianty podle atributů i podle typu
      geometrie (bod nese značku varianty, plocha obrys a výplň, definiční
      bod plošnou značku — les, zahrada, hřbitov…; ochranná pásma a záměry
      jen obrysem), s přepočtem tloušťky a dashů pro zvolenou úroveň
      přiblížení (referenční měřítko 1:500).
      Bodové <strong>SVG symboly mají geodeticky korektní velikost</strong> —
      1 SVG-pixel odpovídá 0,5 cm v terénu (referenční měřítko 1:500), takže
      se s mapou přibližují a oddalují stejně jako linie a polygony.
      Při velkém oddálení (zhruba nad 4 m/pixel) se symbol nahradí malou
      barevnou tečkou, jinak by byl menší než pixel obrazovky.
    </li>
    <li>
      <strong>Ovládání</strong> — rozhraní používá standardní komponenty
      <em>Material Design 3</em> (tlačítka, přepínače, segmentové volby,
      filtrační čipy, boční panely, dialogy). Boční panely Kontrol
      a Přehledu prvků se zavírají křížkem v hlavičce nebo znovu tlačítkem
      v liště. Na úzké obrazovce (mobil, tablet na výšku) je levý panel
      vrstev <strong>výsuvný</strong> — otevře se ikonou nabídky vlevo
      nahoře, zavře klepnutím vedle panelu nebo klávesou Esc; v panelu je
      i přepínač režimu JVF / UDM / JŽM.
    </li>
    <li>
      <strong>Měření</strong> — tlačítko s pravítkem vlevo dole (ve 2D mapě
      i ve 3D scéně) zapne měření (podobně jako na mapy.cz). Klikáním
      přidáváte body; vzdálenost se počítá průběžně i k pozici kurzoru a od
      tří bodů se zároveň ukazuje <strong>plocha</strong> mnohoúhelníku
      z bodů. V mapě jsou popsané délky úseků, celková délka a plocha,
      v kartě nad tlačítkem souhrn (<em>Zpět</em> a <em>Nové měření</em>
      jsou aktivní, jen když je co vrátit). <strong>Klik na první bod
      polygon uzavře</strong> — body měření se také přichytávají.
      Body se <strong>přichytávají k prvkům JVF</strong> — k vrcholům
      (mají přednost), hranám linií a obvodů ploch a k průsečíkům linií;
      jen k prvkům, které jsou právě vidět (skrytá vrstva ani prvky
      skryté filtrem se nepřichytávají). Kurzor přichycení vyznačí
      (čtverec = vrchol / průsečík, kosočtverec = hrana) a karta ukáže,
      k čemu je bod přichycený.
      Dvojklik nebo klik na poslední bod měření ukončí (další klik začne
      nové), <em>Backspace</em> vrátí poslední bod, <em>Esc</em> nástroj
      zavře. Během měření klik nevybírá prvky a dvojklik nepřibližuje.
      Ve 2D jsou délky a plochy rovinné v S-JTSK (metry).
      <strong>Ve 3D</strong> se měří stejně: bod se vezme z místa pod
      kurzorem (vrchol nebo hrana objektu, povrch plochy či terénu, jinak
      vodorovná rovina), tažení myší dál otáčí scénou. Ve 3D se za klik
      (bod měření, výběr prvku, nový střed otáčení) považuje jen krátké
      stisknutí do 200&nbsp;ms bez tažení — otáčení ani posun scény body
      nepřidávají. Karta ukáže
      <em>vzdálenost 3D</em> (šikmou), vodorovnou vzdálenost, převýšení
      a plochu jako vodorovný průmět; výšky jsou skutečné (bez převýšení
      scény). Přepnutí 2D ↔ 3D měření ukončí.
    </li>
    <li>
      <strong>3D pohled</strong> — vizualizace Z-souřadnic geometrií. Procházení
      scénou klávesami <code>W</code>/<code>A</code>/<code>S</code>/<code>D</code>
      nebo šipkami, výškové posouvání (<code>Q</code>/<code>E</code>),
      přiblížení/oddálení (<code>+</code> / <code>−</code>) a reset pohledu
      (<code>R</code>). Otáčení a náklon kamery se ovládají tlačítky ve spodní
      liště, kterou lze sbalit. Kliknutím do scény se nastaví <em>střed
      otáčení (pivot)</em> na zvolené místo. Volitelné převýšení výšky
      (1× / 2× / 5× / 10×) a možnost renderovat
      body jako SVG symboly (shodné s 2D). Viditelnost vrstev se zachovává
      mezi 2D a 3D režimem.
    </li>
    <li>
      <strong>3D terén</strong> — pod vektorovými daty se ve 3D scéně zobrazuje
      digitální model terénu <strong>ČÚZK DMR5G</strong> nad rozsahem načteného
      JVF souboru (při více projektech kolem každého zvlášť — viz výše).
      Povrch je obarven <em>hypsometricky</em> podle lokálního
      rozsahu výšek (tmavě zelená → žlutá → hnědá → bílá) a překryt
      <em>vrstevnicemi po 1 m</em> (zvýrazněnými každých 10 m). Terénní mesh
      i vrstevnice reagují na nastavené převýšení výšky a pomáhají zasadit
      geometrie do reliéfu krajiny. Je-li v levém panelu zvolená podkladová
      mapa (<em>Základní mapa</em> nebo <em>Ortofoto</em>), namapuje se místo
      hypsometrie jako <strong>textura na povrch terénu</strong> — stejná
      volba i sytost jako ve 2D, jedno ovládání pro oba režimy; volba
      podkladu ve 3D automaticky zapne terén. Vypnutím podkladu se terén
      vrátí k hypsometrickému obarvení.
    </li>
    <li>
      <strong>Topologická validace</strong> — spustí sadu kontrol nad
      načtenými daty a zobrazí panel nálezů s filtry (<em>Vše / Chyby /
      Varování</em>). Kliknutím na nález dojde k přiblížení na postižený
      objekt.
    </li>
    <li>
      <strong>Legenda DTM</strong> — kompletní seznam všech ~360 objektových
      typů specifikace s reprezentativními symboly a barvami podle
      <em>Katalogu kartografických symbolů DTM ČR</em>. Barva swatche
      odpovídá tomu, jak se prvek vykreslí v mapě — i u sítí, které barvu
      nesou až ve variantách (elektro červená, plyn zelená, voda modrá,
      kanalizace hnědá, teplovod oranžová), takže legenda i vrstvový panel
      souhlasí s mapou. Otevře se ikonou
      <span class="material-symbols-outlined" style="font-size:14px;vertical-align:-2px">legend_toggle</span>
      vedle nadpisu <em>JVF vrstvy</em>. Lze fulltextově filtrovat podle
      názvu, kódu nebo kategorie.
      <br>
      <em style="color:#8b949e;font-size:11px">
        Pozn.: Barvy a styly vycházejí z Katalogu DTM 1.4.3, hodnoty však
        nebyly verifikovány kus po kuse oproti oficiálnímu zdroji ČÚZK.
        Skupinové barvy ZPS / TI / DI / GAD / OPL v záhlaví sekcí jsou
        volbou autora a neodpovídají žádné specifikaci.
      </em>
    </li>
    <li>
      <strong>Barevné rozlišení změn (nové / editované / mazané)</strong> —
      přepínače pod seznamem vrstev, které se objeví jen pro typy
      <code>ZapisObjektu</code> obsažené v nahraném souboru:
      <strong>nové</strong> (<code>i</code>) zeleně,
      <strong>editované</strong> (<code>u</code>) oranžově,
      <strong>mazané</strong> (<code>d</code>) sytě červeně. Po zaškrtnutí
      se geometrie daného typu vykreslí příslušnou barvou ve 2D i 3D, takže
      rovnou vidíte, co přijetím dávky do DTM přibude, změní se nebo zmizí.
      Po odškrtnutí se záznamy daného typu skryjí. Default je vše zaškrtnuto.
      Funguje i pro nově vytvořené JVF soubory DI/TI, jejichž prvky ještě
      nemají přidělená DTM ID. Přepínač <strong>Zvýraznit změny
      barvou</strong> přebarvení vypne — záznamy zůstanou viditelné, ale
      kreslí se vlastní symbologií. U souborů <strong>UDM</strong> a
      <strong>ŽXML</strong> (data geodeta celá jako nová) je zvýraznění ve
      výchozím stavu vypnuté.
    </li>
    <li>
      <strong>Export do CAD</strong> (ve všech režimech — JVF, UDM i JŽM)
      — tlačítko v hlavičce vyexportuje načtený projekt do
      <strong>AutoCAD DXF</strong> ve vzhledu datového modelu — stejném
      jako v mapě: hladiny podle objektových typů (barva, tloušťka, typ
      čáry), značky jako bloky (JVF podle Katalogu DTM ČR — značky
      kartografického balíčku ČÚZK v jejich barvě, UDM z knihovny ČKZ, ŽXML
      znaky SŽ natočené podle atributu <code>Natoceni</code>), u JVF plochy
      vyplněné barvou Katalogu (lze vypnout), popisy a názvy jako texty
      (výšky dle UDM pro 1:500) a atributy objektů v XDATA „UDM" (v AutoCADu
      příkaz <code>XDLIST</code>). Na výběr je DXF pro AutoCAD 2013+ (barvy
      přesně) nebo DXF R2000 pro starší CAD; volitelně i mazané záznamy
      a 2D výkres. Souřadnice zůstávají v EPSG:5514. Typy čar mají
      čárkování dle vzoru (bez vložených značek).
      <strong>DWG</strong> získáte tak, že DXF otevřete
      v AutoCADu a uložíte jako DWG. Export běží lokálně v prohlížeči.
    </li>
    <li>
      <strong>Legenda znaků</strong> (v režimech UDM a JŽM) — ikona vedle
      „Legendy DTM" v panelu vrstev otevře přehled všech znaků datového
      modelu po objektech a hodnotách číselníků (s hledáním). Tlačítkem
      <strong>Stáhnout SVG (ZIP)</strong> získáte znaky jako SVG soubory
      v balíku ZIP (složka podle objektu) se seznamem
      <code>znaky.csv</code> (objekt, kód, atribut, hodnota, barva).
    </li>
    <li>
      <strong>Přehled prvků</strong> — tlačítko v hlavičce otevře panel se
      seznamem všech načtených objektů seskupených podle typu. Hlavička
      kategorie vypadá jako položka legendy (symbol, název, skupina ·
      obsahová část · element) a zůstává při scrollování přišpendlená
      nahoře. <strong>Oko</strong> u kategorie ji skryje — stejně jako
      klik na vrstvu v panelu vrstev; viditelnost je společná pro panel
      vrstev, tabulku, 2D mapu i 3D scénu (skrytá kategorie je ztlumená).
      Části skryté filtrem obsahové části se ztlumí i v panelu vrstev. Lze
      filtrovat podle obsahové části — nabízí se ty, které v datech jsou
      (JVF: ZPS / TI / DI / GAD / OPL, UDM navíc ZPSUDM / DIUDM / OST,
      ŽXML ZDT / ZDD / H3D / ODSZ / SKLEP), souhrn pak ukazuje počty ve
      filtru — a hledat v názvu, <code>elementName</code> nebo ID. Řádek
      <em>Úroveň</em> ukazuje <em>úrovně umístění</em> přítomné v datech
      (LEVEL −3 až +3 z atributů <code>UrovenUmisteniObjektu*</code>, případně
      „bez úrovně") s přepínatelnými chipy — odškrtnuté úrovně se skryjí.
      Filtr obsahové části i úrovní platí pro tabulku i pro 2D a 3D mapu
      (kombinuje se s viditelností vrstev a changeset přepínači) a resetuje
      se při načtení nového souboru.
      Klik na záznam zoomuje
      mapu (2D i 3D) a rozbalí tabulku všech atributů včetně
      <em>nadmořské výšky</em> (Z ze geometrie — u bodu jedna hodnota,
      u linií a ploch rozsah min–max). U <strong>číselníkových atributů</strong>
      se vedle číselného kódu zobrazí i <strong>český popisek</strong> z číselníku
      DTM (např. <code>2 — dálnice II. třídy</code>); u <strong>ano/ne atributů</strong>
      (např. <code>KritickaTI</code>, <code>NeuplnaData</code>) se kód
      <code>0</code>/<code>1</code> přeloží na <code>ne</code>/<code>ano</code>.
      Funguje to i opačně:
      klik na prvek v mapě (2D i 3D) se synchronně promítne do panelu — rozbalí
      jeho skupinu, scrollne na řádek a označí ho jako vybraný.
      <strong>Je-li panel „Přehled prvků" zavřený, klik na prvek v mapě ho
      automaticky otevře</strong> a prvek rovnou vybere (klik do prázdné plochy
      nedělá nic). ZapisObjektu se
      v changeset souborech rozlišuje barevným badge
      (<strong>I</strong> zelená / <strong>U</strong> žlutá /
      <strong>D</strong> červená). Prvky bez přiděleného DTM ID (nové
      záznamy s prázdným <code>&lt;ID/&gt;</code>, které se teprve budou
      vkládat) a prvky s ID, které se v souboru opakuje, dostanou
      <strong>interní UUID</strong> jen pro potřeby aplikace (do dat ani
      exportu se nezapisuje; v seznamu se ukazuje „bez ID") — klikání, zoom
      i detail atributů pro ně fungují stejně jako pro prvky s ID. Posun
      seznamu na vybraný řádek trvá nejvýš 0,3&nbsp;s.
    </li>
    <li>
      <strong>Protokol chyb</strong> (JVF 1.5.0.1) — nahrání souboru
      s protokolem chyb (<code>ServisJVFDTM</code>) se místo mapy zobrazí
      jako <em>report</em>: přehled kontrol a chyb odděleně pro část
      DTI a ZPS (kód kontroly, popis chyby, ID objektu).
    </li>
  </ul>

  <h3>Co topologická validace kontroluje</h3>
  <ul>
    <li>
      <strong>Geometrická validita</strong> — uzavřenost ringů polygonů,
      minimální počet bodů, absence self-intersection, validní souřadnice (bez
      NaN/Infinity), dodržení rozsahů S-JTSK pro XY i Z a přesnost souřadnic
      na centimetry.
    </li>
    <li>
      <strong>Konzistence geometrie</strong> — XY souřadnice Polygonu a
      MultiCurve u ploch musí souhlasit (počet bodů i hodnoty).
    </li>
    <li>
      <strong>Duplicity a blízkost</strong> — duplicitní body a linie,
      nulové nebo příliš krátké segmenty, body blíže než 0,05 m
      (s rozlišením podle úrovně umístění objektu).
    </li>
    <li>
      <strong>Meziobjektová topologie</strong> — definiční bod musí ležet
      uvnitř své plochy (63 párů DefBod ↔ Plocha), osa pozemní komunikace
      musí ležet uvnitř odpovídajícího obvodu, detekce volných konců linií
      stejného typu.
    </li>
    <li>
      <strong>DEL oblasti</strong> — upozornění, pokud definiční bod ZPS
      plochy leží v oblasti kompletní ZPS označené ke zmenšení.
    </li>
  </ul>

  <h3>Režimy validace</h3>
  <p>
    Pro soubory změnových vět (<code>typZapisu = změnové věty</code>) se
    meziobjektová topologie přeskakuje — sousední plochy, obvody a linie
    mohou existovat v referenční databázi IS DMVS, kterou JVF soubor
    nevidí, a jejich kontrola by vedla k false positive nálezům.
  </p>

  <h3>Verze JVF DTM</h3>
  <p>
    Aplikace podporuje verze <strong>${VERSIONS_DISPLAY}</strong> souběžně.
    Verze se <strong>detekuje automaticky</strong> podle obsahu souboru
    (element <code>VerzeJVFDTM</code>, případně strukturně) — není potřeba
    ji ručně nastavovat. Konkrétní verzi každého načteného souboru ukáže
    tooltip názvu projektu v panelu „Projekty", takže
    při více projektech může mít každý jinou verzi. Nepodporovaná verze se
    nenačte a zobrazí se upozornění.
  </p>
  <p>
    <strong>JVF DTM 1.5.0.2</strong> je opravná verze 1.5.0.1 (ČÚZK, 9. 9. 2026)
    a od <strong>18. 11. 2026</strong> produkční verze IS DMVS (verze 1.5.0.1
    do produkce nasazena nebyla, soubory v ní se dál načtou). Oproti 1.5.0.1
    upravuje hlavně povinnost a <code>nillable</code> některých atributů
    a přidává atribut <code>IDRDTI</code> objektu O6.
  </p>
  <p>
    <strong>Novinky 1.5.0.1:</strong> nová obsahová část
    <strong>PSPI</strong> (plánované stavební práce infrastruktury) —
    zobrazuje se v mapě i jako samostatná sekce v legendě; nový typ datové
    sady <em>Výdej PSPI</em>; operace záznamu jsou nově v názvu elementu
    (<code>ZaznamObjektuIns/Upd/Del</code>, referenční a přeshraniční věty);
    zrušeno rozlišení KI a objekt „průběh technologické konstrukce".
  </p>
  <p>
    <strong>UDM — Univerzální datový model ČKZ (${UDM_DISPLAY}):</strong>
    otevřený datový model České komory zeměměřičů, nadmnožina JVF DTM pro
    data nad rámec DTM (stromy, mobiliář, svislé a vodorovné dopravní
    značení, popisy, vrstevnice, pasportní atributy, přílohy). S UDM se
    pracuje v <strong>režimu UDM</strong> (přepínač <em>JVF / UDM</em>
    v hlavičce, viz Režimy aplikace). Soubor UDM se pozná podle elementu
    <code>VerzeJVFUDM</code>.
    Objekty nad rámec DTM (kód <code>94…</code>) tvoří obsahové části
    <strong>ZPSUDM</strong>, <strong>DIUDM</strong>, <strong>TIUDM</strong>
    a <strong>OST</strong>; v legendě i v panelu prvků mají české
    názvy a popisky číselníků <code>ckz_*</code> (např. stav stromu,
    materiál). Tooltip názvu projektu ukáže verzi UDM i podkladového JVF.
    <strong>Všechny objekty souboru UDM</strong> (i objekty DTM) se kreslí
    <strong>symbologií UDM</strong> místo katalogu ČÚZK — barva, tloušťka
    čáry a SVG symboly bodů z knihovny ČKZ, včetně vzhledu podle hodnot
    číselníků (např. druh stromu, typ dopravního zařízení). Barvy UDM jsou
    navržené pro tmavé pozadí, na světlém podkladu je bílá kreslena černě
    a světlé odstíny ztmavené. <strong>Vzory linií</strong> (čárkování)
    jsou změřené z vektorového vzorníku ČKZ ve skutečné velikosti při 1:500;
    značky vložené do čar (ploty, sítě TI, alej) se nekreslí. Texty (popisy,
    názvy) se v mapě jako text nevykreslují.
    Meziobjektová topologie se pro UDM nespouští — UDM nepracuje s plošnou
    mapou ani s vazbou definiční bod ↔ plocha. Ukázkové soubory UDM jsou
    v režimu UDM v nabídce vedle tlačítka „Nahrát soubor".
  </p>
  <p>
    <strong>ŽXML — železniční data Správy železnic (${ZXML_DISPLAY}):</strong>
    výměnný formát Digitální technické mapy železnice (DTMŽ). Od 1. 7. 2024
    přijímá Správa železnic geodetickou dokumentaci jen v ŽXML; verze
    <strong>1.4.2.1</strong> stojí na JVF DTM 1.4.3, verze
    <strong>1.5.1.6</strong> (platná od <strong>23. 11. 2026</strong>,
    datový model DTMŽ 1.5.0.2 V23) na JVF DTM 1.5.0.2. S ŽXML se pracuje
    v <strong>režimu JŽM</strong> (Jednotná železniční mapa); soubor se pozná
    podle elementu <code>VerzeZXML</code>. Objekty Správy železnic (kód
    <code>999…</code>, např. balízy, návěstidla, výhybky, staničníky,
    přejezdová zařízení) tvoří obsahové části <strong>ZDT</strong>
    (železniční technická infrastruktura), <strong>ZDD</strong> (železniční
    dopravní infrastruktura), <strong>H3D</strong> (hrany 3D doplňující
    kresbu ZPS), <strong>ODSZ</strong> (ostatní data SŽ) a
    <strong>SKLEP</strong> (data ze starších dokumentací). Atributy SŽ
    (správce, zdroj dat, typy zařízení…) mají české popisky číselníků;
    staničení objektů (<code>StaniceniData</code>, verze 1.5.x) parser čte
    také. Objekty SŽ se kreslí <strong>znaky SŽ</strong> zpětně
    vektorizovanými z obrázků fotokatalogu <em>MOZeK</em> (předpis SŽ
    M20/MP014) — jednotná výška znaku 3 mm při 1:500, natočení podle
    atributu <code>Natoceni</code>; barvy podle obsahové části (katalog
    je černobílý). Objekty JVF bez vlastní značky SŽ zůstávají v symbologii
    ČÚZK. Meziobjektová topologie se pro ŽXML spouští jako pro podkladovou
    verzi JVF (objekty SŽ do párů nevstupují). Ukázky ŽXML jsou v režimu JŽM
    v nabídce vedle tlačítka „Nahrát soubor" (oficiální ukázka SŽ a
    schematické nádraží v Řevnicích se smyšlenými daty).
  </p>

  <h3>Režimy aplikace</h3>
  <p>
    Přepínač <strong>JVF / UDM / JŽM</strong> v hlavičce určuje, s jakým
    datovým modelem pracujete. Výchozí je <strong>JVF</strong> (JVF DTM,
    symbologie dle Katalogu ČÚZK). Režim <strong>UDM</strong> přidává
    symbologii UDM, režim <strong>JŽM</strong> (Jednotná železniční mapa)
    data ŽXML Správy železnic se znaky SŽ; oba mají vlastní ukázkové
    soubory a <em>Legendu znaků</em> (<em>Export do CAD</em> je ve všech
    režimech). Přepnutí zavře
    načtené soubory (při načtených datech se aplikace nejdřív zeptá).
    Načtete-li soubor jiného modelu (např. ŽXML v režimu JVF), aplikace
    nabídne přepnutí — bez něj se soubor nenačte. Režim je v adrese stránky
    (<code>?mode=udm</code>, <code>?mode=jzm</code>), takže odkaz lze sdílet;
    bez parametru se aplikace otevře v režimu JVF.
  </p>

  <h3>Omezení</h3>
  <p>
    Některé kontroly IS DMVS vyžadují přístup k referenční databázi ZPS
    (například detekce volných podrobných bodů nebo definičních bodů
    osiřelých mazáním plochy mimo changeset) a v této aplikaci je nelze
    provést — vidíme pouze obsah JVF souboru, nikoli okolní kontext.
  </p>

  <h3>Charakter projektu</h3>
  <p>
    Tato aplikace je <strong>rekreační (hobby) projekt</strong> — není
    oficiálním nástrojem ČÚZK ani součástí IS DMVS. Výsledky nelze brát
    závazně a <strong>nenahrazují oficiální přejímku</strong> v IS DMVS.
    Smyslem je poskytnout uživatelům rychlou <em>základní validaci</em>
    JVF souborů (vizuální kontrolu obsahu ve 2D / 3D a sadu topologických
    kontrol) ještě před odesláním dat do oficiálního systému, případně
    jako pomůcku při přípravě a kontrole dat. Pro autoritativní výstup
    vždy použijte oficiální nástroje ČÚZK a IS DMVS.
  </p>

  <h3>Pro vývojáře</h3>
  <p>
    Projekt je open-source pod licencí <strong>MIT</strong> a celý zdrojový
    kód je k dispozici na GitHubu:
    <a href="https://github.com/vdubr/cz-dtm-utils" target="_blank" rel="noopener noreferrer">github.com/vdubr/cz-dtm-utils</a>.
    Repozitář je rozdělen do pěti npm workspace balíčků:
  </p>
  <ul>
    <li>
      <strong>jvf-dtm-types</strong> — sdílené TypeScript typy doménového
      modelu DTM (objektové typy, geometrie, atributy). Bez runtime kódu,
      bez závislostí.
    </li>
    <li>
      <strong>jvf-parser</strong> — parser JVF XML do typovaných objektů.
      Postavený nad <code>fast-xml-parser</code>, podporuje JVF DTM 1.4.3,
      1.5.0.1 a 1.5.0.2 a dialekty UDM 2.1.1 (ČKZ) a ŽXML 1.4.2.1 / 1.5.1.6
      (Správa železnic) — verzní router s registrem dialektů
      a auto-detekcí — a samostatný parser protokolu chyb.
    </li>
    <li>
      <strong>jvf-topology</strong> — topologická a geometrická validace.
      Tři vrstvy kontrol (validita geometrie, konzistence Polygon ↔
      MultiCurve, meziobjektová topologie) plus IS DMVS kontroly
      (rozsahy S-JTSK, duplicity, blízkost). Závisí pouze na typech.
    </li>
    <li>
      <strong>jvf-cad</strong> — export JVF DTM, UDM a ŽXML do AutoCAD DXF
      (R2013 i R2000) ve vzhledu datového modelu, bez externích závislostí.
    </li>
    <li>
      <strong>jvf-viewer</strong> — tato webová aplikace. Vite + OpenLayers
      (2D) + Three.js (3D), bez backendu.
    </li>
  </ul>
  <p>
    Pull requesty, issue, návrhy i obecná zpětná vazba jsou vítány.
    Nejjednodušší cesta je <strong>založit issue na GitHubu</strong>,
    případně mě kontaktovat napřímo (viz patička levého panelu).
  </p>

  <h3>Autor</h3>
  <p>
    Aplikaci vyvíjí <strong>Vojtěch Dubrovský</strong>. Pro zpětnou vazbu,
    dotazy nebo nahlášení chyby mě můžete kontaktovat na LinkedInu
    (odkaz najdete v patičce levého panelu) nebo
    <a href="https://github.com/vdubr/cz-dtm-utils/issues" target="_blank" rel="noopener noreferrer">založit issue na GitHubu</a>.
  </p>

  <h3>Historie verzí</h3>
  ${buildChangelogHtml()}
`;

export function setupInfoModal(): void {
  const btn = document.getElementById('btn-info');
  const modal = document.getElementById('info-modal');
  const closeBtn = document.getElementById('info-modal-close');
  const body = document.getElementById('info-modal-body');

  if (!btn || !modal || !closeBtn || !body) {
    console.warn('[infoModal] chybí některý DOM prvek');
    return;
  }

  body.innerHTML = INFO_CONTENT_HTML;

  const open = (): void => {
    modal.style.display = 'flex';
  };

  const close = (): void => {
    modal.style.display = 'none';
  };

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Klik mimo dialog = zavření.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Escape = zavření.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') close();
  });
}
