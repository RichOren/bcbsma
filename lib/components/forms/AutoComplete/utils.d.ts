export function usePaginate(): {
    getInitialPaginatedRecords: (totalRecords: any, matchPosition: any) => any;
    fetchData: (searchText: any, onScroll: any, columns?: any[]) => any;
    resetIndexes: () => void;
    hasMoreResults: (searchText: any) => boolean;
};
export function useDeepMemo(memoFn: any, key: any): any;
export function setValuesToOtherAdditionalFields(selectedItem: any, assocProp: any, item: any, columns: any, actions: any): null;
export function updatePropertiesForNewRecord(dataConfig: any, contextName: any, dataApiObj: any, setDataApiObj: any, displayFieldMeta: any, c11nEnv: any, columns: any, actions: any, newCaseId: any): void;
export function getFilteredList(dataApiObj: any, responseData: any, displayFieldMeta: any, columnsWithSetProperty: any): any;
export function doSearch(filterText: any, displayFieldMeta: any, dataApiObj: any, setListItems: any, setLoading: any, hasMoreResults: any, extraProps?: {}): void;
export function setValuesToFields(assocProp: any, selectedItem: any, listType: any, listSource: any, actions: any, columns: any): any;
export function useAutoCompleteInitialProcessing(deferDatasource: any, isTableTypeDataPage: any, isReferenceField: any, datasourceMetadata: any, listType: any, datasource: any, parameters: any, columns: any, isSearchableOnKey: any, referenceType: any, descriptors: any, dataRelationshipContext: any, contextClass: any, additionalFields: any, compositeKeys: any): any[];
export function buildAndSelectDisplayItem(value: any, displayFieldMeta: any, isReferenceField: any, primaryField: any, referenceType: any, secondaryField: any, dataApiObj: any, hasMoreResults: any, displayItem: any, listItems: any, setSelectedItem: any, setListItems: any, setLoading: any, AC_TYPE: any, setFilterValue: any, paginateHelperApis: any, pConn: any): void;
//# sourceMappingURL=utils.d.ts.map