export function useBulkActions(): {
    setSelectedRowsCallback: (selectionList: any, resetList?: any) => Promise<any>;
    getSelectedRowsCallback: () => Promise<never[]>;
    clearSelectedRowsCallback: () => Promise<any>;
};
export function useRenderFactory({ getPConnect, displayMode, classId, customNebulaRenderer }: {
    getPConnect: any;
    displayMode: any;
    classId: any;
    customNebulaRenderer: any;
}): (type: string) => object;
export function useCascadeAndUpdate({ getPConnect, cosmosTableRef, listContext, referenceList, fieldName, isParametersOverride }: {
    getPConnect: any;
    cosmosTableRef: any;
    listContext: any;
    referenceList: any;
    fieldName: any;
    isParametersOverride: any;
}): void;
export function usePromotedFilters(ref: any, { uniqueId, cosmosTableRef, listContext }: {
    uniqueId: any;
    cosmosTableRef: any;
    listContext: any;
}): void;
export function useUpdateSelectionsOnSelectionTable({ cosmosTableRef, selectedValues }: {
    cosmosTableRef: any;
    selectedValues: any;
}): void;
export function useClearSelectionsAndUpdateTable({ getPConnect, uniqueId, cosmosTableRef, viewName }: {
    getPConnect: any;
    uniqueId: any;
    cosmosTableRef: any;
    viewName: any;
}): void;
export function useSearchAndSelect(ref: any, { uniqueId, cosmosTableRef, listContext, viewName, isSearchable }: {
    uniqueId: any;
    cosmosTableRef: any;
    listContext: any;
    viewName: any;
    isSearchable: any;
}): void;
export function useRefreshListOnPromotedFilters(ref: any, { uniqueId, viewName, cosmosTableRef, listContext, isSearchable }: {
    uniqueId: any;
    viewName: any;
    cosmosTableRef: any;
    listContext: any;
    isSearchable: any;
}): void;
export function useRefreshListForDataRecord({ classId, listContext, uniqueId, cosmosTableRef, contextName }: {
    classId: any;
    listContext: any;
    uniqueId: any;
    cosmosTableRef: any;
    contextName: any;
}): void;
export function useRefreshListOnCreateStage({ classId, listContext, uniqueId, cosmosTableRef, contextName, getPConnect, ref, tableState }: {
    classId: any;
    listContext: any;
    uniqueId: any;
    cosmosTableRef: any;
    contextName: any;
    getPConnect: any;
    ref: any;
    tableState: any;
}): void;
export function useUpdateForWebsocket(props: any): void;
export function useInit(props: any): void;
export function useRequiredToggle(params: any): void;
export function useDisableSelectionToggle(props: any): void;
//# sourceMappingURL=hooks.d.ts.map