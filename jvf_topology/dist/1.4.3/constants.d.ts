/**
 * Konstanty pro topologické kontroly.
 *
 * - Hranice a tolerance dle DTMwiki 1.3.2
 * - Páry objektových typů pro meziobjektovou topologii (Vrstva 3)
 */
/**
 * Definované hranice 3. kvadrantu S-JTSK (EPSG:5514) pro území ČR.
 * Zdroj: DTMwiki 1.3.2 Minimální rozměry a tolerance
 */
export declare const SJTSK_BOUNDS: {
    readonly xMin: -904685;
    readonly xMax: -431627;
    readonly yMin: -1227296;
    readonly yMax: -935134;
};
/** Rozsah výšek Z pro ZPS (m n. m.) */
export declare const Z_BOUNDS_ZPS: {
    readonly min: 1;
    readonly max: 1620;
};
/** Rozsah výšek Z pro definiční body (m n. m.) */
export declare const Z_BOUNDS_DEFBOD: {
    readonly min: 0;
    readonly max: 1620;
};
/** Rozsah tolerance Z pro duplicitní linie (m) — DTMwiki 1.3.2 */
export declare const DUPLICATE_Z_TOLERANCE = 0.12;
/** Minimální tolerance vzdálenosti (m) — DTMwiki 1.3.2 */
export declare const MIN_DISTANCE_TOLERANCE = 0.05;
/** Snap tolerance pro sdílení koncových bodů linií (m) */
export declare const SNAP_TOLERANCE = 0.05;
/**
 * Mapa: kořen názvu objektu → { defbod elementName, plocha elementName }
 *
 * Generuje se ze konvence názvů: `{Kořen}DefinicniBod` + `{Kořen}Plocha`.
 * Zahrnuje všechny páry, kde obě strany existují v DTM katalogu.
 */
export declare const DEFBOD_PLOCHA_PAIRS: ReadonlyArray<{
    defbod: string;
    plocha: string;
}>;
/**
 * Páry Osa → Obvod pro DI objekty.
 * V JVF DTM 1.4.3: OsaPozemniKomunikace leží uvnitř ObvodPozemniKomunikace.
 */
export declare const OSA_OBVOD_PAIRS: ReadonlyArray<{
    osa: string;
    obvod: string;
}>;
//# sourceMappingURL=constants.d.ts.map