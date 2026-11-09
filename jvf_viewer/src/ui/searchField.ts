/**
 * Pole hledání s křížkem pro vymazání — panel vrstev, legendy a Přehled
 * prvků vypadají a chovají se stejně. Křížek je vidět vždy, když pole není
 * prázdné (CSS `:placeholder-shown`, platí i po vymazání z kódu), ne jen při
 * hoveru jako nativní křížek `type="search"`. Klik pole vymaže a vyvolá
 * `input`, takže se filtr přepočítá stejnou cestou jako při psaní.
 */
export function attachSearchClear(input: HTMLInputElement): void {
  if (input.parentElement?.classList.contains('search-field')) return;
  const wrap = document.createElement('span');
  wrap.className = 'search-field';
  // Pole skryté v HTML skrývá dál obal (i s křížkem) — viditelnost pak řídí obal.
  wrap.hidden = input.hidden;
  input.hidden = false;
  input.replaceWith(wrap);
  wrap.append(input);

  const clear = document.createElement('button');
  clear.type = 'button';
  clear.className = 'search-clear';
  clear.title = 'Vymazat hledání';
  clear.setAttribute('aria-label', 'Vymazat hledání');
  clear.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">close</span>';
  clear.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  });
  wrap.append(clear);
}

/** Text pro hledání bez rozlišení velikosti písmen a diakritiky. */
export function normalizeSearch(s: string): string {
  return s.toLocaleLowerCase('cs').normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

/** Obsahuje některý z textů hledaný výraz (`query` už normalizovaný přes `normalizeSearch`)? */
export function matchesSearch(query: string, ...texts: (string | undefined)[]): boolean {
  return texts.some((t) => t !== undefined && normalizeSearch(t).includes(query));
}
