/**
 * Parser pro `DoprovodneInformace` — metadatová sekce sourozenec `Data`
 * uvnitř `DataJVFDTM`. Aktuálně extrahuje jen `OblastiKompletniZPS`, protože
 * jen tu potřebují topologické kontroly.
 *
 * XSD: `jvf_parser/docs/1.4.3/xsd/common/doprovodne_informace.xsd`.
 */
import type { DoprovodneInformace } from './types.js';
/**
 * Parse `DoprovodneInformace` element. Returns `undefined`, když element chybí
 * nebo je prázdný (nic smysluplného neextrahováno).
 */
export declare function parseDoprovodneInformace(el: Record<string, unknown> | undefined): DoprovodneInformace | undefined;
//# sourceMappingURL=doprovodne-informace.d.ts.map