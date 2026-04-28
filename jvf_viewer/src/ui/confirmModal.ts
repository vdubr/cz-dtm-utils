/**
 * Generický confirm/alert modal s konfigurovatelnými tlačítky.
 *
 * Singleton — používá DOM elementy `#confirm-modal*` z `index.html`.
 * Volání `showConfirm` vrací Promise s labelem zvoleného tlačítka, nebo
 * `null` při zavření přes křížek / Escape / klik mimo dialog.
 */

interface ConfirmButton {
  /** Text na tlačítku. Stejný řetězec se vrací z Promise jako identifikátor volby. */
  label: string;
  /** Vizuální styl. Default `secondary`. */
  variant?: 'primary' | 'secondary' | 'danger';
}

interface ConfirmOptions {
  title: string;
  /** HTML obsah těla modalu. Volající je zodpovědný za escapování. */
  bodyHtml: string;
  buttons: ConfirmButton[];
}

let initialized = false;
let currentResolve: ((value: string | null) => void) | null = null;

function ensureInit(): void {
  if (initialized) return;
  initialized = true;

  const overlay = document.getElementById('confirm-modal');
  const closeBtn = document.getElementById('confirm-modal-close');
  if (!overlay || !closeBtn) return;

  const close = (): void => {
    if (currentResolve) {
      currentResolve(null);
      currentResolve = null;
    }
    overlay.style.display = 'none';
  };

  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display !== 'none') close();
  });
}

export function showConfirm(opts: ConfirmOptions): Promise<string | null> {
  ensureInit();

  const overlay = document.getElementById('confirm-modal');
  const titleEl = document.getElementById('confirm-modal-title');
  const bodyEl = document.getElementById('confirm-modal-body');
  const footerEl = document.getElementById('confirm-modal-footer');
  if (!overlay || !titleEl || !bodyEl || !footerEl) {
    return Promise.resolve(null);
  }

  // Pokud je už nějaký dialog otevřen, ten první se zruší (resolve null).
  if (currentResolve) {
    currentResolve(null);
    currentResolve = null;
  }

  titleEl.textContent = opts.title;
  bodyEl.innerHTML = opts.bodyHtml;
  footerEl.innerHTML = '';

  for (const btn of opts.buttons) {
    const el = document.createElement('button');
    const variant = btn.variant ?? 'secondary';
    el.className = `btn btn-${variant}`;
    el.textContent = btn.label;
    el.addEventListener('click', () => {
      if (currentResolve) {
        currentResolve(btn.label);
        currentResolve = null;
      }
      overlay.style.display = 'none';
    });
    footerEl.appendChild(el);
  }

  overlay.style.display = 'flex';

  return new Promise((resolve) => {
    currentResolve = resolve;
  });
}
