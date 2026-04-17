/**
 * Vrstva 3 — Meziobjektová topologie.
 *
 * - 3A: Definiční bod leží v odpovídající ploše (`DEFBOD_PLOCHA_PAIRS`)
 * - 3B: Osa pozemní komunikace leží uvnitř Obvodu pozemní komunikace (`OSA_OBVOD_PAIRS`)
 * - 3C: Volné konce liniových prvků stejného objektového typu (`SNAP_TOLERANCE`)
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
/**
 * Vrstva 3A: Každý definiční bod musí ležet uvnitř (nebo na hranici) své
 * odpovídající plochy (2D, stejné LEVEL-agnostické párování dle elementName).
 *
 * Kódy:
 * - `DEFBOD_OUTSIDE_PLOCHA`   — bod leží mimo jakoukoliv plochu svého typu
 * - `DEFBOD_NO_PLOCHA`        — v JVF souboru není žádná plocha odpovídajícího typu
 */
export declare function checkDefBodInPlocha(dtm: JvfDtm): TopologyError[];
/**
 * Vrstva 3B: Všechny vrcholy linie Osy musí ležet uvnitř (nebo na hranici)
 * alespoň jednoho Obvodu stejné DI skupiny (2D).
 *
 * Kódy:
 * - `OSA_OUTSIDE_OBVOD`  — bod osy leží mimo jakýkoliv obvod
 * - `OSA_NO_OBVOD`       — v JVF souboru není žádný obvod odpovídajícího typu
 */
export declare function checkOsaInObvod(dtm: JvfDtm): TopologyError[];
/**
 * Vrstva 3C: Sdílené body sousedních linií stejného objektového typu.
 * Konec jedné linie musí být ve snap toleranci od začátku nebo konce jiné linie.
 * Volný konec = žádná jiná linie ze stejného objektového typu v JVF souboru
 * nezačíná ani nekončí blíže než SNAP_TOLERANCE.
 *
 * Kód: `LINE_DANGLING_END`
 *
 * Závažnost: warning — DTM spec. neřeší linie jako topologicky uzavřené sítě
 * na úrovni JVF souboru (to je DB záležitost), ale v praxi jsou volné konce
 * indikátorem chyby digitalizace.
 */
export declare function checkDanglingEnds(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=relations.d.ts.map