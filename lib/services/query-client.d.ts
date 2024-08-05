export function clearCache(): void;
export function invalidateAuthoringRecords(contextClass: any): Promise<[any, any, any]>;
export function invalidateInsightRecords(): any;
export const INVALIDATE_QUERY: "invalidateQuery";
export const queryClient: any;
export function makeAuthoringRecordsKey(queryContext: string, recordType: string, options?: {}): string[];
export function makeDataPageDetailsKey(dataPageName: any): any[];
export function makeComponentDefinitionsKey(params: any, options?: {}): any[];
export function makeFieldReferenceDataKey(className: any, fieldReference: any): any[];
export function makeParagraphKey(paragraphId: any, className: any): any[];
export function makeParagraphsKey(contextClass: any, category: any): any[];
//# sourceMappingURL=query-client.d.ts.map