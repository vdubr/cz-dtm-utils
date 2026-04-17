import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * JVF vzorky žijí v `jvf_parser/samples/1.4.3/` (sdíleno napříč oběma balíčky
 * — parser i topology je konzumují pro integrační testy).
 */
export const SAMPLES_DIR = join(
  import.meta.dirname ?? '.',
  '../../../../jvf_parser/samples/1.4.3'
);

export function loadSample(name: string): string {
  return readFileSync(join(SAMPLES_DIR, name), 'utf-8');
}
