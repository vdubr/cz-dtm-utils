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
