/**
 * Sdílený stav volby podkladové mapy a její průhlednosti.
 *
 * Jeden zdroj pravdy pro 2D (OL dlaždicové vrstvy ČÚZK) i 3D (textura na
 * terénu DMR): tlačítka a posuvník v levém panelu (sekce Podkladové mapy)
 * sem zapisují, konzumenti se přihlašují přes subscribe. Stejný vzor jako
 * `changesetToggle` / `featureFilter`.
 */

export type BasemapChoice = 'none' | 'zm' | 'ortofoto';

/** Default odpovídá výchozímu aktivnímu tlačítku v index.html. */
let choice: BasemapChoice = 'zm';
/** Průhlednost podkladu 0,1–1; default 1 = beze změny vzhledu 2D mapy. */
let opacity = 1;

type Listener = () => void;
const listeners = new Set<Listener>();

function notify(): void {
  for (const listener of listeners) listener();
}

export function getBasemapChoice(): BasemapChoice {
  return choice;
}

export function setBasemapChoice(value: BasemapChoice): void {
  if (choice === value) return;
  choice = value;
  notify();
}

export function getBasemapChoiceOpacity(): number {
  return opacity;
}

export function setBasemapChoiceOpacity(value: number): void {
  const clamped = Math.min(1, Math.max(0.1, value));
  if (opacity === clamped) return;
  opacity = clamped;
  notify();
}

/** Přihlásí odběr změn volby i průhlednosti. Vrací unsubscribe funkci. */
export function subscribeBasemapChoice(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
