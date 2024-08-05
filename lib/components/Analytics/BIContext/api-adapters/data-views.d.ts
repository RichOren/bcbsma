/**
 * Fetches the list of data objects in the current application.
 * @returns {Array} list of data objects in the current application
 */
export function getDataObjects(): any[];
/**
 * Fetches the list of data page objects in the current application.
 * @param {boolean} useCache whether to retrieve from session cache or not
 * @param {Array} classFilter array of strings with datapage keys to keep, set from the
 * authoring of the explore data page to customize what classes show in Explore data
 * @returns {Array} list of data objects in the current application
 */
export function getDataPageObjects(useCache: boolean, classFilter?: any[]): any[];
/**
 * Fetches the metadata of the selected class.
 * @param {string | null} classID - classID of the object that is selected
 * @param {string} defaultListDataView - defaultListDataView of the object that is selected
 * @param {string[]} [associationFilter] - array of association filter IDs
 * @returns {object} metadata object for the selected class
 */
export function getDataObjectMeta(classID: string | null, defaultListDataView: string, associationFilter?: string[] | undefined): object;
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
 * Fetches data from the data_view apis for the input query from an Insight
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
 * Creates an ApiContext for the Table component to connect with DataViews API
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
export function getTableContext({ classID, dataPageID, isQueryable, getFieldWiseMeta: getWrappedFieldWiseMeta, insightID, personalizationID, getPConnect, classFilter, setError }: {
    classID: any;
    dataPageID: any;
    isQueryable: any;
    getFieldWiseMeta: any;
    insightID: any;
    personalizationID: any;
    getPConnect: any;
    classFilter: any;
    setError: any;
}): Promise<any>;
/**
 * Get default columns to show for the given class
 * @param {string} classID - ID of the current data-class
 * @param {object} source - Backing source to find the fields - only pass one of the following
 * @param {string} source.reportDef - Name of the RD to use
 * @param {string} source.dataPage - Name of the Datapage to use
 */
export function getDefaultColumns(classID: string, { reportDef, dataPage }: {
    reportDef: string;
    dataPage: string;
}): Promise<any>;
/**
 * Get primary fields if they exist, else use D_pxFieldsForDataSource for data view
 * Can pass either dataViewName or className
 * @param {string} dataViewName - name of data view (optional)
 * @param {string} className - name of class (optional)
 * @returns {object} data object containing primary fields
 */
export function getPrimaryFieldsForDataSource(dataViewName: string, className: string): object;
/**
 * Get primary fields for the given classes
 * @param {string} [topLevelClassID]- Top level class ID
 * @param {string} [topLevelDataPageID] - Name of data view
 * @param {string[]} [joinedClassIDs] - Associated classID's
 * @returns {object} data object containing primary fields array with class ID key
 */
export function getPrimaryFieldsForInsights(topLevelClassID?: string | undefined, topLevelDataPageID?: string | undefined, joinedClassIDs?: string[] | undefined): object;
/**
 * Fetches the metadata of an Insight
 * @param {string} insightID - UUID for the Insight to be fetched from the server
 * @returns {object} metadata object for the Insight
 */
export function getInsightByID(insightID: string): object;
/**
 * Fetches the metadata of the Insights
 * @param {string[]} insightIDs - UUID for the Insights to be fetched from the server
 * @returns {object} metadata object for the Insight
 */
export function getInsightsByID(insightIDs: string[]): object;
/**
 * gets the sample data values for all fields in given data view name
 * @param {object} dataObjectMeta metadata object for the Insight
 * @param {string} dataViewName data view name
 * @returns {object} sample values
 */
export function getSampleDataValues(dataObjectMeta: object, dataViewName: string): object;
export function createInsight(config: any, permissions: any, toasterContext: any, insightName: any, insightType: any, insightVisibility: any, insightDescription: any, closeModal: any, translate: any): Promise<any>;
export function updateInsight(insightID: any, insightName: any, className: any, classText: any, insightType: any, insightVisibility: any, description: any, lastUpdated: any, config: any, permissions: any, toasterContext: any, translate: any): Promise<any>;
export function deleteInsight(insightID: any, toasterContext: any, closeModal: any, translate: any): Promise<any>;
/**
 * Fetches metadata for all Insights available to the current operator.
 * Returns the queried subset of properties on each returned insight.
 * @param {any} requestBody - Object compatible with the data_view API
 */
export function readAllInsights(requestBody: any): Promise<any>;
/**
 * Get operators using the D_pyC11nOperatorsList data view
 * @param {object} payload - payload containing data view parameter to refine operators list (optional)
 * @returns {Array} list of operators
 */
export function getOperatorsList(payload?: object): any[];
/**
 * Get work groups using the D_ListOfWorkGroups data view
 * @param {object} payload - payload containing data view parameter to refine work groups list (optional)
 * @returns {Promise<object[]>} Promise of a list of work groups
 */
export function getWorkGroupsList(payload?: object): Promise<object[]>;
/**
 * Get work queues using the D_pyListOfWorkQueues data view
 * @param {object} payload - payload containing data view parameter to refine work queues list (optional)
 * @returns {Promise<object[]>} Promise of a list of work queues
 */
export function getWorkQueuesList(payload?: object): Promise<object[]>;
/**
 * Get AI suggested insight model based on given user prompt and system prompt using GenAI connect rule
 * @param {*} requestBody - Object compatible with the data_view API
 * @returns {object} GPT response
 */
export function queryGPTForSingleShotUX(requestBody: any): object;
/**
 * Get AI suggested insight model based on given user prompt
 * @param {*} requestBody - Object compatible with the data_view API
 * @returns {object} GPT response
 */
export function queryGPT(requestBody: any): object;
/**
 * Fetches high-level information about all classes and their joins relevant to ExploreData GenAI.
 *
 * @param {Array} dataObjects - Filtered list of dataObjects relevant to the current portal
 * @param {Array | null} advancedClassFilter - Class-wise list of configured joins. Null if the author didn't explicitly configure.
 * @returns {Array} List of classes with relevant joins.
 */
export function getClassesWithJoinsForGenAI(dataObjects: any[], advancedClassFilter: any[] | null): any[];
//# sourceMappingURL=data-views.d.ts.map