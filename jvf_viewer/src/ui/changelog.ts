// Jednoduchý markdown → HTML parser pro CHANGELOG.md.
// Žádná externí závislost — pokrývá jen podmnožinu markdownu, kterou používáme:
//   - nadpisy `## …` a `### …`
//   - odrážky `- …`
//   - `**bold**`, `` `code` ``, `[text](url)`
//
// Výstup je vložen do info modalu jako sekce „Historie verzí". Prvních N
// verzí (default 3) se vykreslí rozbalených, zbytek pod expand toggle.

import changelogRaw from '../../../CHANGELOG.md?raw';

const VERSIONS_VISIBLE_BY_DEFAULT = 3;

interface ParsedVersion {
  /** Heading text — typicky `[2026.04.30] - 2026-04-30` nebo `[Unreleased]`. */
  heading: string;
  /** HTML obsah sekce (bez heading). */
  bodyHtml: string;
}

/** Escapuj HTML speciální znaky — vstup z markdownu nesmí prosakovat jako HTML. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Inline markdown formátování — bold, code, links. Aplikováno na escapovaný text. */
function formatInline(s: string): string {
  // [text](url) — link (escapuj url i text předem)
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const safeUrl = String(url).replace(/"/g, '&quot;');
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });
  // **bold**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // `code`
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  return s;
}

/** Rozparsuj jednu sekci od `## ` do dalšího `## ` (bez tohoto headingu). */
function parseSectionBody(rawBody: string): string {
  const lines = rawBody.split('\n');
  const out: string[] = [];
  let inList = false;
  let pendingPara: string[] = [];

  const flushPara = (): void => {
    if (pendingPara.length > 0) {
      const text = pendingPara.join(' ').trim();
      if (text.length > 0) {
        out.push(`<p>${formatInline(escapeHtml(text))}</p>`);
      }
      pendingPara = [];
    }
  };
  const closeList = (): void => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  for (const lineRaw of lines) {
    const line = lineRaw.trimEnd();

    if (line.startsWith('### ')) {
      flushPara();
      closeList();
      const text = line.slice(4).trim();
      out.push(`<h4>${formatInline(escapeHtml(text))}</h4>`);
      continue;
    }

    const bulletMatch = /^\s*-\s+(.*)$/.exec(line);
    if (bulletMatch) {
      flushPara();
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${formatInline(escapeHtml(bulletMatch[1]))}</li>`);
      continue;
    }

    if (line.trim() === '') {
      flushPara();
      closeList();
      continue;
    }

    // Pokračování bullet (indent) — připoj k poslednímu li.
    if (inList && /^\s+/.test(lineRaw)) {
      const last = out.pop();
      if (last && last.endsWith('</li>')) {
        const inner = last.slice(4, -5);
        out.push(`<li>${inner} ${formatInline(escapeHtml(line.trim()))}</li>`);
        continue;
      } else if (last) {
        out.push(last);
      }
    }

    // Jinak: prostý text → odstavec.
    closeList();
    pendingPara.push(line.trim());
  }

  flushPara();
  closeList();
  return out.join('\n');
}

/** Najdi všechny `## …` sekce v changelogu. */
function parseChangelog(raw: string): ParsedVersion[] {
  const lines = raw.split('\n');
  const versions: ParsedVersion[] = [];
  let currentHeading: string | null = null;
  let currentBody: string[] = [];

  const flush = (): void => {
    if (currentHeading !== null) {
      versions.push({
        heading: currentHeading,
        bodyHtml: parseSectionBody(currentBody.join('\n')),
      });
    }
  };

  for (const line of lines) {
    if (line.startsWith('## ')) {
      flush();
      currentHeading = line.slice(3).trim();
      currentBody = [];
    } else if (currentHeading !== null) {
      currentBody.push(line);
    }
    // Před první `## ` (úvodní text souboru) ignorujeme.
  }
  flush();

  return versions;
}

/**
 * Vrať HTML pro sekci „Historie verzí" do info modalu.
 * První `VERSIONS_VISIBLE_BY_DEFAULT` verze rozbalené; zbytek pod `<details>`.
 */
export function buildChangelogHtml(): string {
  const versions = parseChangelog(changelogRaw);
  if (versions.length === 0) {
    return '<p class="empty-hint">Changelog není k dispozici.</p>';
  }

  const renderVersion = (v: ParsedVersion): string => {
    // Heading očekáváme ve tvaru `[VERZE] - DATUM` nebo `[Unreleased]`.
    const headingClean = formatInline(escapeHtml(v.heading));
    return `
      <section class="changelog-version">
        <h3 class="changelog-version-heading">${headingClean}</h3>
        ${v.bodyHtml}
      </section>
    `;
  };

  const visible = versions.slice(0, VERSIONS_VISIBLE_BY_DEFAULT).map(renderVersion).join('\n');
  const hidden = versions.slice(VERSIONS_VISIBLE_BY_DEFAULT);

  let hiddenHtml = '';
  if (hidden.length > 0) {
    hiddenHtml = `
      <details class="changelog-older">
        <summary>Starší verze (${hidden.length})</summary>
        ${hidden.map(renderVersion).join('\n')}
      </details>
    `;
  }

  return `
    <div class="changelog">
      ${visible}
      ${hiddenHtml}
    </div>
  `;
}
