export function getMappedKey(key: any): any;
export function launchLocalAction(getPConnect: any, rowContext: any, action: any, cb: any): void;
export function launchBulkAction(getPConnect: any, selectedList: any, action: any, caseTypeID: any, cb: any): void;
export function updateWithTimeZone(stateFromTable: any, meta: any): any;
export function isHybrid(): boolean;
export function isGroupingAdded(state: any): any;
export function getDataViewParameters(parameters: any, runtimeParams: any): {};
export function generateKeyFromCompositeKeys(compositeKeys: any, rowData: any): string;
export function getLookUpDataPageInfo(classID: any): {
    lookUpDatePage: any;
    lookUpDataPageInfo: any;
};
export function getLookupDataViewParameters(lookupDP: any, lookUpDataPageInfo: any, rowContext: any): {};
export function isAlternateKeyStorageForLookUp(lookUpDataPageInfo: any): boolean;
export function getDescriptorsFieldName(property: any, pageClass: any): any;
export function preparePatchQueryFields(fields: any, isDataObject: boolean | undefined, classID: string | undefined, getPConnect: any, patchFields?: any[]): any[];
export function prepareFilters(keys?: any[], data?: {}, logicOperator?: string): {
    logic: string;
    filterConditions: {};
} | null;
export function prepareAdditionalApiParams({ useExtendedTimeout, includeTotalCount }?: {
    useExtendedTimeout: any;
    includeTotalCount: any;
}): {
    useExtendedTimeout: any;
    includeTotalCount: any;
};
export function getLabelsForTimeoutModal(tableState: any): {
    heading: string;
    description: string;
    submitButtonLabel: string;
    cancelButtonLabel: string;
};
export function isFLProperty(label: any): any;
/**
 * [getFieldLabel]
 * Description - A utility that returns resolved field label for "@FL" annotation i.e from data model.
 * @param {Object} fieldConfig
 * @returns {string} resolved label string
 *
 * example:
 * fieldConfig = {label: "@FL .pyID", classID: "TestCase-Work"};
 * return "Case ID"
 */
export function getFieldLabel(fieldConfig: Object): string;
export function getAssociationFieldsFromQuery(query: any): any;
export function mergeAssociationFieldsAggregations(meta: any, stateFromTable: any, select: any, existingAggregations: any): void;
export function filterDuplicatesBy(id: any): (obj: any) => boolean;
export function isOpenViewInModal(additionalDetails: any): any;
/**
 *
 * @param {Object} promotedFiltersObject
 * @returns An array of conditions formed with the promoted filters
 *
 * example:
 * promotedFiltersObject = {a:2, b: 3};
 * return
 * [
    condition: {
      comp: 'EQ',
        lhs: {field: 'a'},
        rhs: {value: '2'}
      },
      condition: {
        comp: 'EQ',
        lhs: {field: 'b'},
        rhs: {value: '3'}
      }
    ]
*/
export function formatPromotedFiltersAsFilterConditions(promotedFiltersObject: Object | undefined, getMappedProperty: any, fieldsMeta: any): never[];
/**
 * @param {Object} state
 * @param {Object} meta
 * @returns Copy of states with virtualizer indexes
 */
export function updatePaginationStatesForMultipleCalls(state: Object, meta: Object): {
    paginationOptions: {
        rootVirtualiser: {
            startIndex: number;
            endIndex: number;
        };
    };
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
}[];
/**
 * @param {Object} state
 * @param {Object} meta
 * @param {Array} requests
 * @returns Resolves promise, compiles and slices the data
 */
export function processRequests(state: Object, meta: Object, requests: any[]): Promise<{
    data: any[];
    queryStats: any;
    count: undefined;
}>;
export function getLeafValue(data: any, fieldName: any, fieldSeparator: any): any;
export function isDataOfNestedStructure(data?: any[]): boolean;
export function prepareCategories(category: any, pConnect: any): any;
/**
 * [getPropertyValue]
 *
    example
    {
      value: @P .Employee
    }
    modified to
    {
      value: Employee
    }
 */
export function getPropertyValue(value: any): any;
export function isAccessibleValue(value: any): boolean;
export function refreshTableOnDataObjectUpdate(getPConnect: any, isQueryable: any, apiContextRefreshCb: any, rowRefreshCb: any, tableRefreshViewCb: any): void;
export function getExportDataDetails(state: any, meta: any, dataPageName: any): {
    name: any;
    config: {
        state: any;
        meta: any;
    };
};
export const SIMPLE_TABLE_MANUAL_READONLY: "SimpleTableManualReadOnly";
export const PAGE: "!P!";
export const PAGELIST: "!PL!";
export const PERIOD: ".";
export namespace defaultDateFunctions {
    const DATE_TIME: string[];
    const DATE_ONLY: string[];
}
export function isPageListInPath(propertyName: any, currentClassID: any): any;
export function isEmbeddedField(field: any): boolean;
export function getFieldListFromFilter(filterExpression: any): any[];
export function isSelfReferencedProperty(param: any, referenceProp: any): boolean;
export function buildAggOrCalcId(columnId: any, functionName: any): string;
//# sourceMappingURL=Utils.d.ts.map