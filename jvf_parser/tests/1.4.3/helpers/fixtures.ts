import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const SAMPLES_DIR = join(import.meta.dirname ?? '.', '../../../samples/1.4.3');

export function loadSample(name: string): string {
  return readFileSync(join(SAMPLES_DIR, name), 'utf-8');
}
