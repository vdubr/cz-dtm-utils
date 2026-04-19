#!/usr/bin/env node
/**
 * Porovnání výstupu jvf-topology s referenčním IS DMVS Prejimka výstupem.
 *
 * Usage: node scripts/compare-topology.mjs <jvf-file> [reference-report]
 *
 * Načte JVF soubor, spustí `runAllChecks()` a vypíše:
 *   1) Přehled našich chyb seskupený podle kódu
 *   2) Seznam ID objektů s chybami
 *   3) Porovnání proti referenčnímu reportu (pokud je dodán)
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseJvfDtm } from '../jvf_parser/dist/1.4.3/index.js';
import { runAllChecks } from '../jvf_topology/dist/1.4.3/index.js';

const jvfFile = process.argv[2];
const refFile = process.argv[3];

if (!jvfFile) {
  console.error('Usage: node scripts/compare-topology.mjs <jvf-file> [reference-report]');
  process.exit(1);
}

// ---------- Načtení a parsování ----------
console.log(`\n=== Načítám ${jvfFile} ===`);
const xml = readFileSync(resolve(jvfFile), 'utf8');
const dtm = parseJvfDtm(xml);

const objTypy = dtm.objekty ?? [];
const totalRecords = objTypy.reduce((sum, ot) => sum + (ot.zaznamy?.length ?? 0), 0);
console.log(`Objektů (typů): ${objTypy.length}, záznamů celkem: ${totalRecords}`);
console.log(`Verze: ${dtm.verze}, typ: ${dtm.typZapisu}`);
for (const ot of objTypy) {
  const counts = { i: 0, u: 0, d: 0, r: 0 };
  for (const z of ot.zaznamy ?? []) counts[z.zapisObjektu] = (counts[z.zapisObjektu] ?? 0) + 1;
  console.log(`  ${ot.elementName.padEnd(50)} i:${counts.i} u:${counts.u} d:${counts.d}`);
}

// ---------- Spuštění kontrol ----------
console.log(`\n=== Spouštím runAllChecks ===`);
const t0 = Date.now();
const errors = runAllChecks(dtm);
const dt = Date.now() - t0;
console.log(`Trvání: ${dt} ms, chyb celkem: ${errors.length}`);

// ---------- Shrnutí podle kódu ----------
const byCode = new Map();
for (const e of errors) {
  const key = `${e.severity}:${e.code}`;
  if (!byCode.has(key)) byCode.set(key, []);
  byCode.get(key).push(e);
}

console.log(`\n=== Shrnutí podle kódu ===`);
const sortedCodes = [...byCode.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [code, list] of sortedCodes) {
  console.log(`  ${code}: ${list.length}`);
}

// ---------- ID všech chybujících objektů ----------
const ourIds = new Set();
for (const e of errors) {
  if (e.objectId) ourIds.add(e.objectId);
}

// ---------- Porovnání s referenčním reportem ----------
if (refFile) {
  console.log(`\n=== Porovnání s ${refFile} ===`);
  const refText = readFileSync(resolve(refFile), 'utf8');

  // Vytáhneme ID z referenčního reportu — řádky typu "Chyba : ... ID: <ID>"
  // a "Upozornění : ... def.bodu: <ID>"
  const refErrorIds = new Set();
  const refWarningIds = new Set();

  for (const line of refText.split('\n')) {
    const errMatch = line.match(/Chyba\s*:.*?ID:\s*(\d+)/);
    if (errMatch) refErrorIds.add(errMatch[1]);
    const warnMatch = line.match(/Upozornění\s*:.*?def\.bodu:\s*(\d+)/);
    if (warnMatch) refWarningIds.add(warnMatch[1]);
  }

  console.log(`Ref chyby (ID): ${refErrorIds.size}`);
  console.log(`  ${[...refErrorIds].join(', ')}`);
  console.log(`Ref upozornění (unikátní ID): ${refWarningIds.size}`);
  console.log(`  ${[...refWarningIds].join(', ')}`);

  // Detekované chyby shodně s referencí
  const weDetected = [...refErrorIds].filter((id) => ourIds.has(id));
  const weMissed = [...refErrorIds].filter((id) => !ourIds.has(id));

  console.log(`\n--- Referenční CHYBY ---`);
  console.log(`  Detekovali jsme (${weDetected.length}/${refErrorIds.size}): ${weDetected.join(', ') || '(žádné)'}`);
  console.log(`  Missed (${weMissed.length}): ${weMissed.join(', ') || '(žádné)'}`);

  const weDetectedWarn = [...refWarningIds].filter((id) => ourIds.has(id));
  console.log(`\n--- Referenční UPOZORNĚNÍ (DEL oblasti) ---`);
  console.log(`  Detekovali jsme (${weDetectedWarn.length}/${refWarningIds.size}): ${weDetectedWarn.join(', ') || '(žádné)'}`);

  // Naše false positives — ID, která ref nevidí vůbec
  const allRefIds = new Set([...refErrorIds, ...refWarningIds]);
  const ourExtraIds = [...ourIds].filter((id) => !allRefIds.has(id));
  console.log(`\n--- Naše "extra" chyby (ID mimo ref) ---`);
  console.log(`  Počet: ${ourExtraIds.length}`);
  if (ourExtraIds.length > 0 && ourExtraIds.length <= 20) {
    for (const id of ourExtraIds) {
      const mine = errors.filter((e) => e.objectId === id);
      console.log(`    ${id}: ${mine.map((m) => m.code).join(', ')}`);
    }
  }
}

// ---------- Detail konkrétních chyb ----------
console.log(`\n=== Detail chyb podle reference ===`);
const refIdsOfInterest = [
  '52000330001119764',
  '52000330001119759',
  '52000330001112517',
  '52000280000026564',
];
for (const id of refIdsOfInterest) {
  const mine = errors.filter((e) => e.objectId === id);
  console.log(`\n  ID ${id}:`);
  if (mine.length === 0) {
    console.log(`    (naše knihovna nic neshlásila)`);
  } else {
    for (const e of mine) {
      console.log(`    [${e.severity}] ${e.code} (${e.objektovyTyp}): ${e.message}`);
    }
  }
}
