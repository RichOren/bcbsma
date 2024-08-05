export function hasUnexpectedErrors(data: any): boolean;
export function dataFetcher(requestBody: any): any;
/**
 * Fetches the metadata of the selected class.
 * @param {string} classID - ID of the data-class that is selected
 * @param {string} defaultListDataView - defaultListDataView of the object that is selected (Can leave it blank for SRS)
 * @param {string[]} associationFilter - array of association filter IDs (Can leave it blank for SRS)
 * @returns {DataObject} metadata object for the selected class
 */
export function getDataObjectMeta(classID: string, defaultListDataView: string, associationFilter: string[]): any;
/**
 * Fetches the metadata of the given fields in the selected class.
 * @param {string} classID - ID of the data-class that is selected
 * @param {string} dataPageID - Infinity parameter
 * @param {Array} fieldIDs - List of field IDs to fetch
 * @returns {Array} Field-wise metadata
 */
export function getFieldWiseMeta(classID: string, dataPageID: string, fieldIDs: any[]): any[];
export function getSampleData(dataViewName: any, dataObjectMeta: any, recentCaseId: any, itemKey: any, updateDataTimeProp: any): Promise<any>;
/**
 * Fetches data from the SRS `query` API for the input query from an Insight
 * @param {object} insightModel - Insight model with a state-aware `query`
 * @param {object} fieldWiseMeta - Metadata for just the fields involved in the Insight query
 * @param {boolean} useMaxTimeOut - if api call has to be made with extra Timeout value
 * @returns {Promise} Resolved with the data response transformed for the charts to consume
 */
export function getInsightData(insightModel: object, fieldWiseMeta: object, useMaxTimeOut: boolean): Promise<any>;
/**
 * Returns all possible values for the given property
 *
 * @param {string} classID - Class ID of the current source
 * @param {string} dataPageID - DataPage ID of the current source
 * @param {boolean} isQueryable - Whether the current source is queryable
 * @param {string} fieldId - ID of the field.
 * @param {object} searchOptions - Search options
 * @param {Function} getWrappedFieldWiseMeta - Method to get field-wise metadata. NOT using the method above, since we want the wrapped method from BIProvider with caching support.
 * @returns {Promise} Resolved with the data response transformed
 */
export function getUniqueValuesForField(classID: string, dataPageID: string, isQueryable: boolean, fieldId: string, searchOptions: object, getWrappedFieldWiseMeta: Function): Promise<any>;
/**
 * Creates an ApiContext for the Table component
 *
 * @param args - Object with arguments
 * @param args.classID - ID of the current data-class
 * @param args.dataPageID - Data page ID of the current data-class
 * @param args.isQueryable - Whether the data page is queryable
 * @param args.getFieldWiseMeta - Method to get field-wise metadata. NOT using the method above, since we want the wrapped method from BIProvider with caching support.
 * @param args.insightID - ID of the current Insight (if applicable)
 * @param args.personalizationID - ID used to store personalizations (if any)
 * @param args.getPConnect - To access the relevant pConnect object
 * @param args.classFilter - Array of class filter objects containing association filters. Can be null.
 * @param args.setError - Callback to toggle error messages
 * @returns {Promise} A promise that's resolved with an instance of ApiContext
 */
export function getTableContext(args: any): Promise<any>;
/**
 * Get default columns (primary fields if available) to show for the given class
 * @param {string} classID - ID of the current data-class
 */
export function getDefaultColumns(classID: string): Promise<any>;
/**
 * Get primary fields equivalent
 * @param {string} dataViewName - name of data view (optional)
 * @param {string} className - name of class (optional)
 * @returns {object} data object containing primary fields
 */
export function getPrimaryFieldsForDataSource(dataViewName: string, className: string): object;
/**
 * Get primary fields equivalent
 * @param {string} [topLevelClassID]- Top level class ID
 * @param {string} [topLevelDataPageID] - Name of data view
 * @param {string[]} [joinedClassIDs] - Associated classID's
 * @returns {object} data object containing primary fields array with class ID as key
 */
export function getPrimaryFieldsForInsights(topLevelClassID?: string | undefined, topLevelDataPageID?: string | undefined, joinedClassIDs?: string[] | undefined): object;
export function scheduleInsight(): void;
export function queryGPT(): void;
export function queryGPTForSingleShotUX(): void;
export type DataObject = any;
export function getDataObjects(): Promise<any>;
export { getDataObjects as getDataPageObjects };
//# sourceMappingURL=srs.d.ts.map