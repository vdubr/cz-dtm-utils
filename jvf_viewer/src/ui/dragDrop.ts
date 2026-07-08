import type { JvfDtm } from 'jvf-parser';
import { loadJvfFile } from './fileUpload.js';

/**
 * Drag & drop načtení JVF souboru — drop zóna je celé okno aplikace.
 *
 * Při přetahování souboru nad oknem se zobrazí overlay s rámečkem a výzvou;
 * po upuštění se soubor předá stejnému kód-path jako file input
 * (`loadJvfFile`), takže platí stejná validace verze i chybové stavy.
 * Drop nahradí aktuálně načtený soubor (stejně jako výběr přes file input).
 */
export function setupDragAndDrop(onLoad: (data: JvfDtm) => void): void {
  const overlay = document.getElementById('drop-overlay') as HTMLDivElement;

  // Počítadlo vnořených dragenter/dragleave — eventy bublají z child
  // elementů, samotné dragleave by overlay zhasínalo při každém přejezdu
  // přes vnitřní prvek.
  let dragDepth = 0;

  const showOverlay = (): void => {
    overlay.removeAttribute('hidden');
  };
  const hideOverlay = (): void => {
    dragDepth = 0;
    overlay.setAttribute('hidden', '');
  };

  /** Vrátí true, pokud drag obsahuje soubory (ne např. tažený text). */
  const hasFiles = (e: DragEvent): boolean =>
    Array.from(e.dataTransfer?.types ?? []).includes('Files');

  window.addEventListener('dragenter', (e) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth++;
    showOverlay();
  });

  window.addEventListener('dragover', (e) => {
    if (!hasFiles(e)) return;
    // preventDefault je nutný, jinak prohlížeč drop nepovolí
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  });

  window.addEventListener('dragleave', (e) => {
    if (!hasFiles(e)) return;
    dragDepth = Math.max(0, dragDepth - 1);
    if (dragDepth === 0) hideOverlay();
  });

  // Úklid, pokud drag skončí jinak než dropem (Escape, ztráta fokusu okna)
  window.addEventListener('dragend', hideOverlay);

  window.addEventListener('drop', (e) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    hideOverlay();

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length === 0) return;

    if (files.length > 1) {
      alert(
        `Přetaženo ${files.length} souborů — načte se pouze první ` +
        `(${files[0]!.name}). Podpora více projektů se připravuje.`
      );
    }

    const file = files[0]!;
    if (!isXmlFile(file)) {
      alert(
        `Soubor „${file.name}" nevypadá jako JVF XML — očekává se ` +
        `přípona .xml nebo .jvf.`
      );
      return;
    }

    loadJvfFile(file, onLoad);
  });
}

/** JVF soubory mají příponu .xml, případně složenou .jvf.xml či jen .jvf. */
function isXmlFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return name.endsWith('.xml') || name.endsWith('.jvf');
}
