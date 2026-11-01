export type DxfVersion = 'R2013' | 'R2000';
/** Vzhled entity — vynechané složky = ByLayer. */
export interface EntityStyle {
    layer: string;
    /** Barva `#rrggbb`; `'byblock'` = převzít z bloku (geometrie uvnitř bloků). */
    color?: string | 'byblock';
    /** Tloušťka čáry v setinách mm (370), `-2` = ByBlock. */
    lineweight?: number;
    /** Typ čáry (název LTYPE). */
    linetype?: string;
    /** XDATA aplikace „UDM" (řetězce, max 255 znaků). */
    xdata?: readonly string[];
}
/** Vrchol polylinie: x, y, volitelně bulge (oblouk k dalšímu vrcholu). */
export type Vertex2 = readonly [number, number, number?];
/** Nejbližší barva ACI (1–255) k `#rrggbb` — R2000 nezná true color. */
export declare function nearestAci(hex: string): number;
export declare class DxfDocument {
    readonly version: DxfVersion;
    private readonly lines;
    private handleSeed;
    private readonly layerChunks;
    private readonly ltypeChunks;
    private readonly blockRecordChunks;
    private readonly blockChunks;
    private readonly entityChunks;
    private readonly layerNames;
    private readonly ltypeNames;
    private readonly blockNames;
    private readonly ext;
    /** Handly z šablony. */
    private readonly modelSpace;
    private readonly layerTable;
    private readonly ltypeTable;
    private readonly blockRecordTable;
    private readonly plotStyle;
    private readonly material;
    constructor(version: DxfVersion);
    /** Index řádku s kódem `  0` a hodnotou `type`, kde následuje `2\nname`. */
    private findRecord;
    private recordStart;
    private valueAfter;
    private tableHandle;
    private recordHandle;
    private handle;
    private extend;
    /** Počet přidaných hladin / bloků (bez záznamů šablony). */
    get layerCount(): number;
    get blockCount(): number;
    hasLayer(name: string): boolean;
    addLayer(name: string, color: string, lineweight: number, linetype?: string): void;
    hasLinetype(name: string): boolean;
    /** Typ čáry: střídání čárek a mezer (metry výkresu), první prvek = čárka. */
    addLinetype(name: string, description: string, pattern: readonly number[]): void;
    hasBlock(name: string): boolean;
    /**
     * Definice bloku. `build` dostane vlastníka (handle záznamu bloku) a vrací
     * entity uvnitř bloku (přes `entity*` metody s parametrem `owner`).
     */
    addBlock(name: string, build: (owner: string) => string[]): void;
    private common;
    /** Volitelné složky vzhledu entity (typ čáry, barva, tloušťka). */
    private styleExtras;
    private xdata;
    private emit;
    /** Vlastník: handle záznamu bloku, nebo `undefined` = modelový prostor. */
    private ownerOf;
    point(x: number, y: number, z: number, style: EntityStyle, owner?: string): string;
    /** 2D polylinie s konstantní výškou (LWPOLYLINE), vrcholy s bulge. */
    lwpolyline(vertices: readonly Vertex2[], closed: boolean, elevation: number, style: EntityStyle, owner?: string): string;
    /** 3D polylinie (POLYLINE + VERTEX + SEQEND) — proměnná výška. */
    polyline3d(vertices: readonly (readonly [number, number, number])[], closed: boolean, style: EntityStyle): void;
    circle(x: number, y: number, r: number, style: EntityStyle, owner?: string): string;
    ellipse(x: number, y: number, rx: number, ry: number, rotDeg: number, style: EntityStyle, owner?: string): string;
    /**
     * Text. `align: 'left'` = vkládací bod vlevo na účaří (popisy UDM),
     * `'center'` = střed na účaří (texty v symbolech).
     */
    text(x: number, y: number, z: number, height: number, rotDeg: number, value: string, align: 'left' | 'center', style: EntityStyle, owner?: string, oblique?: number): string;
    insert(block: string, x: number, y: number, z: number, rotDeg: number, style: EntityStyle): string;
    /** Plná výplň (HATCH SOLID) uzavřené hranice s bulge — jen uvnitř bloků. */
    solidHatch(boundary: readonly Vertex2[], style: EntityStyle, owner: string): string;
    /** Celý výkres jako text DXF. */
    toString(): string;
}
//# sourceMappingURL=document.d.ts.map