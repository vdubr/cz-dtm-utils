// Info modal — zobrazí README o aplikaci v překryvném dialogu.
// Obsah je staticky vložený HTML (bez závislosti na markdown parseru).

import { SUPPORTED_VERSIONS } from 'jvf-parser';
import { buildChangelogHtml } from './changelog.js';

const VERSIONS_DISPLAY = SUPPORTED_VERSIONS.join(', ');

const INFO_CONTENT_HTML = `
  <h3>Co to je</h3>
  <p>
    Webový prohlížeč souborů <strong>JVF DTM</strong> (Jednotný výměnný formát
    Digitální technické mapy ČR). Podporované verze specifikace:
    <strong>${VERSIONS_DISPLAY}</strong> (aktivní verzi lze přepnout v hlavičce).
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
      <strong>ukázkových souborů</strong> (ZPS, DI, KI, OPL).
    </li>
    <li>
      <strong>Více projektů naráz</strong> — každý načtený soubor se přidá
      jako samostatný <em>projekt</em> (další výběr souboru nebo drag &amp;
      drop načtená data <em>nenahrazuje</em>, ale přidává — až do
      8 projektů). Hodí se pro navazující projekty, které chcete vidět
      společně v jedné mapě. Levý panel zobrazuje sekci
      <em>Projekty</em> se seznamem souborů (barevná tečka, počet záznamů)
      a tlačítkem × pro odebrání; odebráním posledního projektu se viewer
      vrátí do prázdného stavu. <strong>Klikem na projekt</strong> v seznamu
      přiblížíte pohled na jeho rozsah (ve 2D mapě i ve 3D scéně). Hlavičku
      sekce lze <strong>sbalit</strong> (klik na „Projekty") — počet projektů
      zůstává v hlavičce vidět i po sbalení. Při ≥2 projektech přibude
      v Přehledu prvků řádek <em>Projekt</em> s přepínatelnými chipy —
      odškrtnutý projekt se skryje v tabulce i ve 2D a 3D mapě. Vrstvy
      a skupiny stejného typu z různých projektů jsou odlišené barevnou
      tečkou projektu. Verze každého souboru se detekuje automaticky
      (podporované 1.4.3 i 1.5.0.1); topologická validace běží pro každý
      projekt zvlášť dle jeho verze. 3D
      terén se při více projektech stahuje <strong>zvlášť kolem každého
      projektu</strong> (okolí 800&nbsp;m) — dva projekty daleko od sebe
      tak nestáhnou obří model přes prázdnou plochu mezi nimi.
    </li>
    <li>
      <strong>2D mapa</strong> — vektorové vrstvy nad podklady ČÚZK (Základní
      mapa nebo Ortofoto), přepínání jednotlivých vrstev v levém panelu.
      Druhý klik na aktivní podkladové tlačítko podklad <em>vypne</em> —
      JVF vrstvy zůstanou viditelné nad prázdným pozadím (užitečné pro
      kontrolu geometrie bez vizuálního šumu). Posuvník sytosti pod
      tlačítky řídí průhlednost podkladu — platí společně pro 2D mapu
      i 3D scénu. Tlačítko ☀️/🌙 v hlavičce přepíná
      <em>světlý (výchozí) / tmavý režim</em> — barvu pozadí pod vrstvami
      ve 2D i 3D.
      Stylování podle <em>Katalogu kartografických symbolů DTM ČR</em> —
      barvy, čárkování linií a varianty podle atributů, s přepočtem tloušťky
      a dashů pro zvolenou úroveň přiblížení (referenční měřítko 1:500).
      Bodové <strong>SVG symboly mají geodeticky korektní velikost</strong> —
      1 SVG-pixel odpovídá 0,5 cm v terénu (referenční měřítko 1:500), takže
      se s mapou přibližují a oddalují stejně jako linie a polygony.
      Při velkém oddálení (zhruba nad 4 m/pixel) se symbol nahradí malou
      barevnou tečkou, jinak by byl menší než pixel obrazovky.
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
      <em>Katalogu kartografických symbolů DTM ČR</em>. Otevře se ikonou
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
      nemají přidělená DTM ID.
    </li>
    <li>
      <strong>Přehled prvků</strong> — tlačítko v hlavičce otevře panel se
      seznamem všech načtených objektů seskupených podle typu. Hlavička
      kategorie zůstává při scrollování přišpendlená nahoře, takže je
      v dlouhém seznamu stále vidět, ve které kategorii se nacházíte. Lze
      filtrovat podle obsahové části (ZPS / TI / DI / GAD / OPL) a hledat
      v názvu, <code>elementName</code> nebo ID. Pokud data obsahují víc
      <em>úrovní umístění</em> (LEVEL −3 až +3 z atributů
      <code>UrovenUmisteniObjektu*</code>), zobrazí se navíc řádek
      <em>Úroveň</em> s přepínatelnými chipy — odškrtnuté úrovně se skryjí
      v tabulce i ve 2D a 3D mapě (kombinuje se s viditelností vrstev
      a changeset přepínači). Filtr se resetuje při načtení nového souboru.
      Klik na záznam zoomuje
      mapu (2D i 3D) a rozbalí tabulku všech atributů včetně
      <em>nadmořské výšky</em> (Z ze geometrie — u bodu jedna hodnota,
      u linií a ploch rozsah min–max). Funguje to i opačně:
      klik na prvek v mapě se synchronně promítne do panelu — rozbalí jeho
      skupinu, scrollne na řádek a označí ho jako vybraný. ZapisObjektu se
      v changeset souborech rozlišuje barevným badge
      (<strong>I</strong> zelená / <strong>U</strong> žlutá /
      <strong>D</strong> červená). Prvky bez přiděleného DTM ID (nové
      záznamy, které se teprve budou vkládat) jsou identifikovány
      syntetickým klíčem — klikání, zoom i detail atributů pro ně fungují
      stejně jako pro prvky s ID.
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
    (element <code>VerzeJVFDTM</code>, případně strukturně) — při nahrání
    souboru jiné podporované verze se aktivní verze v hlavičce
    <strong>automaticky přepne</strong>. Nepodporovaná verze se nenačte
    a zobrazí se upozornění. Verzi lze v hlavičce zvolit i ručně; při
    ruční změně nad již načtenými daty aplikace nejprve požádá o potvrzení,
    protože dojde k jejich vymazání.
  </p>
  <p>
    <strong>Novinky 1.5.0.1:</strong> nová obsahová část
    <strong>PSPI</strong> (plánované stavební práce infrastruktury) —
    zobrazuje se v mapě i jako samostatná sekce v legendě; nový typ datové
    sady <em>Výdej PSPI</em>; operace záznamu jsou nově v názvu elementu
    (<code>ZaznamObjektuIns/Upd/Del</code>, referenční a přeshraniční věty);
    zrušeno rozlišení KI a objekt „průběh technologické konstrukce".
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
    Repozitář je rozdělen do čtyř npm workspace balíčků:
  </p>
  <ul>
    <li>
      <strong>jvf-dtm-types</strong> — sdílené TypeScript typy doménového
      modelu DTM (objektové typy, geometrie, atributy). Bez runtime kódu,
      bez závislostí.
    </li>
    <li>
      <strong>jvf-parser</strong> — parser JVF XML do typovaných objektů.
      Postavený nad <code>fast-xml-parser</code>, podporuje verze 1.4.3
      i 1.5.0.1 (verzní router s auto-detekcí) a samostatný parser
      protokolu chyb.
    </li>
    <li>
      <strong>jvf-topology</strong> — topologická a geometrická validace.
      Tři vrstvy kontrol (validita geometrie, konzistence Polygon ↔
      MultiCurve, meziobjektová topologie) plus IS DMVS kontroly
      (rozsahy S-JTSK, duplicity, blízkost). Závisí pouze na typech.
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
