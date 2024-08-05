export function fetchData(stateFromTable: any, meta: any, dataPageName: any, dataViewParameters: any, context: any, compositeKeys: any, isCacheable: any, options?: {}, retryOptions?: {}): Promise<any>;
export function fetchUniqueColValues(stateFromTable: any, meta: any, colId: any, dataPageName: any, dataViewParameters: any, context: any, retryOptions?: {}): Promise<any>;
export function fetchGroupedInfo(parameters: any, retryOptions?: {}): Promise<never[]>;
export function fetchAllData({ dataPageName, totalRecordsCount, filters, calculations, dataViewParameters, isQueryable, meta, stateFromTable, context, compositeKeys, promotedFilters, isSearchable, skipClearErrorMessages, retryOptions }: {
    dataPageName: any;
    totalRecordsCount: any;
    filters: any;
    calculations: any;
    dataViewParameters: any;
    isQueryable: any;
    meta: any;
    stateFromTable: any;
    context: any;
    compositeKeys: any;
    promotedFilters: any;
    isSearchable: any;
    skipClearErrorMessages: any;
    retryOptions?: {} | undefined;
}): any;
export function fetchAggregatedValues(stateFromTable: any, meta: any, dataPageName: any, dataViewParameters: any, context: any, distinctResultsOnly?: string, options?: {}, retryOptions?: {}): Promise<any>;
export function fetchFilteredCount(stateFromTable: any, meta: any, dataPageName: any, dataViewParameters: any, context: any, compositeKeys?: any[], retryOptions?: {}): any;
export function fetchRowActionDetails(caseId: any): any;
export function fetchCaseBulkActions(selectionList: any): any;
export function adjustQueryForPerformance(query: any, meta: any, stateFromTable: any): void;
//# sourceMappingURL=ServerApi.d.ts.map