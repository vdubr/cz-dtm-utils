#!/usr/bin/env node
/**
 * Detailní diagnostika: proč knihovna nenašla 4 referenční chyby
 * a proč produkuje 75 LINE_DANGLING_END + 25 DEFBOD_NO_PLOCHA.
 */
import { readFileSync } from 'node:fs';
import { parseJvfDtm } from '../jvf_parser/dist/1.4.3/index.js';
import { runAllChecks, DEFBOD_PLOCHA_PAIRS } from '../jvf_topology/dist/1.4.3/index.js';

const xml = readFileSync('test-files/SUBJ-00007989_CZ052_10796_JVF.jvf.xml', 'utf8');
const dtm = parseJvfDtm(xml);
const errors = runAllChecks(dtm);

// ---------- 1. Hledání referenčních chybových ID v DTM ----------
console.log('=== 1. Existují referenční ID vůbec v parsovaném DTM? ===');
const refIds = [
  '52000330001119764', // volný PB
  '52000330001119759', // volný PB
  '52000330001112517', // volný PB
  '52000280000026564', // def. bod bez plochy (UdrzovanaPlochaZeleneDefinicniBod)
];
for (const id of refIds) {
  let found = null;
  for (const ot of dtm.objekty) {
    for (const z of ot.zaznamy) {
      if (z.commonAttributes.id === id) {
        found = { ot: ot.elementName, zapis: z.zapisObjektu, geom: z.geometrie.map(g => g.type) };
        break;
      }
    }
    if (found) break;
  }
  console.log(`  ${id}: ${found ? JSON.stringify(found) : '*** NEEXISTUJE ***'}`);
}

// ---------- 2. Jaké plochy pro UdrzovanaPlochaZeleneDefinicniBod existují? ----------
console.log('\n=== 2. Plochy pro UdrzovanaPlochaZeleneDefinicniBod ===');
const pairForUdrzovana = DEFBOD_PLOCHA_PAIRS.filter(p => p.defBod === 'UdrzovanaPlochaZeleneDefinicniBod');
console.log(`  Páry definované: ${JSON.stringify(pairForUdrzovana)}`);
for (const pair of pairForUdrzovana) {
  const ot = dtm.objekty.find(o => o.elementName === pair.plocha);
  console.log(`  ${pair.plocha}: ${ot ? `${ot.zaznamy.length} záznamů` : 'NENÍ v souboru'}`);
}

// ---------- 3. Vzorek PB a kontrola, proč se nehlásí volné ----------
console.log('\n=== 3. PodrobnyBodZPS — kde jsou reference na volné PB? ===');
const pbOt = dtm.objekty.find(o => o.elementName === 'PodrobnyBodZPS');
for (const refId of refIds.slice(0, 3)) {
  const pb = pbOt?.zaznamy.find(z => z.commonAttributes.id === refId);
  if (pb) {
    console.log(`  ${refId}: ${pb.zapisObjektu}, geom=${pb.geometrie.map(g => g.type).join(',')}, coords=${JSON.stringify(pb.geometrie[0]?.data?.coordinates)}`);
  }
}

// ---------- 4. LINE_DANGLING_END: kolik a kde ----------
console.log('\n=== 4. LINE_DANGLING_END — první 10 ===');
const dangling = errors.filter(e => e.code === 'LINE_DANGLING_END');
console.log(`  Celkem: ${dangling.length}`);
const byType = new Map();
for (const e of dangling) byType.set(e.objektovyTyp, (byType.get(e.objektovyTyp) ?? 0) + 1);
console.log(`  Podle typu:`);
for (const [t, n] of byType) console.log(`    ${t}: ${n}`);
for (const e of dangling.slice(0, 5)) {
  console.log(`    ${e.objectId} (${e.objektovyTyp}): ${e.message}`);
}

// ---------- 5. DEFBOD_NO_PLOCHA: které ID ----------
console.log('\n=== 5. DEFBOD_NO_PLOCHA — všechny ID ===');
const defbodErrs = errors.filter(e => e.code === 'DEFBOD_NO_PLOCHA');
for (const e of defbodErrs) {
  console.log(`  ${e.objectId} (${e.objektovyTyp})`);
}

// ---------- 6. Má vůbec DefBod "i" záznamy? (d = delete, možná jen mažeme) ----------
console.log('\n=== 6. Lifecycle zápisu DefBod ===');
for (const ot of dtm.objekty.filter(o => o.elementName.includes('DefinicniBod'))) {
  const counts = { i: 0, u: 0, d: 0 };
  for (const z of ot.zaznamy) counts[z.zapisObjektu] = (counts[z.zapisObjektu] ?? 0) + 1;
  console.log(`  ${ot.elementName}: ${JSON.stringify(counts)}`);
}
