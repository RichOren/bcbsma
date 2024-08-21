interface Item {
    Authority: string;
    AuthorityKey: string;
    FileName: string;
    PageSection: string;
}
interface FileData {
    id: string;
    fileName: string;
    pageSection: string;
}
interface JsonObject {
    fieldGroupHeader: string;
    filedata: FileData[];
}
export declare const buildJsonObject: (items: Item[]) => JsonObject[];
export {};
//# sourceMappingURL=utils.d.ts.map