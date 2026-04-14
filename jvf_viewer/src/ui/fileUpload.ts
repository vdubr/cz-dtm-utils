import { parseJvfDtm } from 'jvf-parser';
import type { JvfDtm } from 'jvf-parser';

export function setupFileUpload(
  onLoad: (data: JvfDtm) => void
): void {
  const btnUpload = document.getElementById('btn-upload') as HTMLButtonElement;
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;

  btnUpload.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    loadingOverlay.style.display = 'flex';

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const xml = e.target?.result as string;
        const data = parseJvfDtm(xml);
        onLoad(data);
      } catch (err) {
        console.error('Failed to parse JVF file:', err);
        alert(`Chyba pri nacteni souboru: ${String(err)}`);
      } finally {
        loadingOverlay.style.display = 'none';
        fileInput.value = '';
      }
    };

    reader.onerror = () => {
      loadingOverlay.style.display = 'none';
      alert('Chyba pri cteni souboru.');
      fileInput.value = '';
    };

    reader.readAsText(file, 'UTF-8');
  });
}
