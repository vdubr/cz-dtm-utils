/**
 * Plovoucí karty nad mapou (Změnit mapu, Katastr — jako mapy.cz): tlačítko
 * otevře / zavře kartu, klik mimo nebo Esc ji zavře. Otevřená může být jen
 * jedna karta.
 */
const closers = new Map<string, () => void>();

/** Naváže tlačítko `buttonId` na kartu `cardId`. */
export function setupMapCard(buttonId: string, cardId: string): void {
  const button = document.getElementById(buttonId) as HTMLButtonElement | null;
  const card = document.getElementById(cardId);
  if (!button || !card) return;

  const close = (focus = false): void => {
    if (card.hidden) return;
    card.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    if (focus) button.focus();
  };
  closers.set(cardId, () => close());

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!card.hidden) {
      close();
      return;
    }
    for (const [id, closeOther] of closers) if (id !== cardId) closeOther();
    card.hidden = false;
    button.setAttribute('aria-expanded', 'true');
  });
  document.addEventListener('click', (e) => {
    const t = e.target as Node | null;
    if (!card.hidden && t && t.isConnected && !card.contains(t) && !button.contains(t)) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !card.hidden) close(true);
  });
}
