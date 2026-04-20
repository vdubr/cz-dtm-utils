// Info modal — zobrazí README o aplikaci v překryvném dialogu.
// Obsah je staticky vložený HTML (bez závislosti na markdown parseru).

const INFO_CONTENT_HTML = `
  <h3>Co to je</h3>
  <p>
    Webový prohlížeč souborů <strong>JVF DTM</strong> (Jednotný výměnný formát
    Digitální technické mapy ČR) podle specifikace verze <strong>1.4.3</strong>.
    Umožňuje načíst JVF XML soubor a prohlédnout si jeho obsah ve 2D mapě i ve
    3D pohledu. Načtený soubor se zpracovává <strong>lokálně v prohlížeči</strong>
    — nic se neodesílá na server.
  </p>

  <h3>Hlavní funkce</h3>
  <ul>
    <li>
      <strong>Nahrát soubor</strong> — výběr JVF XML souboru z disku. Parsování
      probíhá v prohlížeči. Vedle tlačítka je šipka s rychlým výběrem
      přiložených <strong>ukázkových souborů</strong> (ZPS, DI, KI, OPL).
    </li>
    <li>
      <strong>2D mapa</strong> — vektorové vrstvy nad podklady ČÚZK (Základní
      mapa nebo Ortofoto), přepínání jednotlivých vrstev v levém panelu.
      Stylování podle <em>Katalogu kartografických symbolů DTM ČR</em> —
      barvy, čárkování linií a varianty podle atributů, s přepočtem tloušťky
      a dashů pro zvolenou úroveň přiblížení (referenční měřítko 1:500).
    </li>
    <li>
      <strong>3D pohled</strong> — vizualizace Z-souřadnic geometrií. Procházení
      scénou klávesami <code>W</code>/<code>A</code>/<code>S</code>/<code>D</code>
      nebo šipkami, výškové posouvání (<code>Q</code>/<code>E</code>), otáčení
      a náklon. Volitelné převýšení výšky (1× / 2× / 5× / 10×), světlé nebo
      tmavé pozadí a možnost renderovat body jako SVG symboly (shodné s 2D).
      Viditelnost vrstev se zachovává mezi 2D a 3D režimem.
    </li>
    <li>
      <strong>3D terén</strong> — pod vektorovými daty se ve 3D scéně zobrazuje
      digitální model terénu <strong>ČÚZK DMR5G</strong> nad rozsahem načteného
      JVF souboru. Povrch je obarven <em>hypsometricky</em> podle lokálního
      rozsahu výšek (tmavě zelená → žlutá → hnědá → bílá) a překryt
      <em>vrstevnicemi po 1 m</em> (zvýrazněnými každých 10 m). Terénní mesh
      i vrstevnice reagují na nastavené převýšení výšky a pomáhají zasadit
      geometrie do reliéfu krajiny.
    </li>
    <li>
      <strong>Zoom na data</strong> — přiblíží pohled na rozsah načteného JVF
      souboru (ve 2D) nebo resetuje kameru (ve 3D).
    </li>
    <li>
      <strong>Topologická validace</strong> — spustí sadu kontrol nad
      načtenými daty a zobrazí panel nálezů s filtry (<em>Vše / Chyby /
      Varování</em>). Kliknutím na nález dojde k přiblížení na postižený
      objekt.
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

  <h3>Omezení</h3>
  <p>
    Některé kontroly IS DMVS vyžadují přístup k referenční databázi ZPS
    (například detekce volných podrobných bodů nebo definičních bodů
    osiřelých mazáním plochy mimo changeset) a v této aplikaci je nelze
    provést — vidíme pouze obsah JVF souboru, nikoli okolní kontext.
  </p>
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
