export function getConstellationServiceURL(): any;
export function getImageAssetPath(): string;
export function isDevStudio(): boolean;
export function getEnvironmentInfo(): any;
/**
 * A wrapper function that triggers a reload of constellation runtime present in the given root
 * element.
 * @param {object} uiResources A uiresources
 * @param {HTMLElement} rootElement The root element containing the runtime preview
 * @param {HTMLElement} stylesElement
 */
export function reloadRuntime(viewResponse: any, rootElement: HTMLElement, stylesElement: HTMLElement): Promise<void>;
/**
 * Private helper function for mapping an object to pega.api parameters
 * @param {object} paramsObj Object to be mapped to pega.api parameters.
 */
export function mapObjToPegaApiParams(paramsObj: object, encodeValue?: boolean): {
    name: string;
    value: any;
    isProperty: boolean;
}[];
export function mapPegaApiParamsToObj(parameters?: any[]): {};
/**
 * Helper function to run an activity. This can be improved upon.
 * @param {string} activityName Name of the Activity to run
 * @param {object} params (optional) Object of the params to send
 * @param {object} options (optional) options{
 * returnsResponse: to indicate whether or not data is returned from Activity call.
 * returnsJSON: to indicate whether or not json response is returned.
 * }
 */
export function _runActivity(activityName: string, params?: object, options?: object): Promise<any>;
/**
 * Helper function to launch a landing page. This can be improved upon.
 * @param {object} config (required) Object containing at a minimum, the name, className and label for the harness to launch.
 * Example configuration would look like this:
 *  {
 *    name: 'value',
 *    className: 'value',
 *    displayMode: 'value',
 *    label: 'value',
 *  }
 * Additional Configuration includes displayMode, readOnly and doSubmit
 * @param {object} options (optional) Object containing data transform name and parameter(s) / activity and parameter(s) to be supplied while launching the harness
 * Example configuration would look like this:
 * {
 *    activity: {
 *      name: 'activityName',
 *      parameters: {
 *         name: 'FocusClass',
 *         value: 'value',
 *         isProperty: false,
 *       },
 *    },
 *    dataTransform: {
 *      name: 'dataTransformName',
 *      parameters: {
 *        name: 'FocusClass',
 *        value: 'value',
 *        isProperty: false,
 *       },
 *    },
 *  }
 */
export function launchLandingPage(config: object, options?: object): void;
/**
 * Helper function to open a property ruleform in dev studio
 * @param {String} insKey (required) The pzInsKey of the asset to open ruleform for
 */
export function openRuleform(insKey: string): void;
/**
 * Open a given ruleform in Dev Studio by keys (supports up to 2 keys at this moment)
 * @param {String} objClass (required) the pxObjClass of the item to be opened, i.e. - 'Rule-Declare-Pages'
 * @param {Array} keys array of strings containing key names, i.e. - [D_OperatorID]
 */
export function openRuleformByKeys(objClass: string, keys?: any[]): void;
/**
 * Flush instance(s) of a given data page by running pzFlushDataPage activity.
 * @param {string} dataPageName Name of the data page to be flushed
 * @param {boolean} flushAllInstances (optional) Whether or not you want to flush all instances or use dpParams to flush specific instance. Defaults to true.
 * @param {object} dpParams (optional) Parameters to use for flushing specific instance of data page. flushAllInstances needs to be set to false for pzFlushDataPage to use these.
 */
export function _flushDataPage(dataPageName: string, flushAllInstances?: boolean, dpParams?: object): Promise<any>;
/**
 * Notify Infinity that a View name has been modified (i.e., refresh the left panel View list)
 */
export function _refreshInfinityViewList(context: any): void;
/**
 * Helper function to retrieve a data page.
 * @param {string} dataPageName Name of the data page to retrieve.
 * @param {object} params Parameters for the desired data page if any.
 */
export function _getDataPage(dataPageName: string, params?: object, encodeParams?: boolean): Promise<any>;
export function _saveView(payload: any): Promise<any>;
export function _getDataModelFields(contextClass: any): Promise<any>;
export function _getViewsOfClass(contextClass: any): Promise<{
    isWorkClass: any;
    pxResults: any;
}>;
export function _getRuleInfo(objClass: any, identifier: any, className: any): Promise<any>;
export function _createParagraph(ruleName: any, className: any, content: any, description: any, additionalPayload: any): any;
export function _getParagraph(ruleName: any, className: any): any;
export function _getParagraphs(ContextClass: any, Category: any): any;
export function _updateParagraph(ruleName: any, className: any, content: any): any;
export function _deleteParagraph(ruleName: any, className: any): any;
/**
 * A wrapper api function to fetch a component definition.
 * See the lookupComponents function in service.js of npm-cli to get an idea of how it is returning.
 * https://git.pega.io/projects/PS/repos/constellationui/browse/npm-cli/src/ui-service/service.js#410
 * @param {object} params
 * @param {string} [params.name] The component name
 * @param {string} [params.type] The component type
 * @param {string} [params.subtype] The component subtype
 * @param {object} options
 * @param {boolean} [options.skipLoadCustomerComponents] Whether or not to skip loading customer components, not required
 */
export function fetchComponentDefinitions(params: {
    name?: string | undefined;
    type?: string | undefined;
    subtype?: string | undefined;
}, options?: {
    skipLoadCustomerComponents?: boolean | undefined;
}): Promise<any>;
/**
 * An api function for creating a new view.
 * @param {string} viewName The authoring label (pyLabel) for the new Rule-UI-View record to be created
 * @param {string} viewClass The class that the view will live in (pxClassName)
 * @param {object} viewMetadata The metadata of the view (pxViewMetadata)
 * @param {string} [viewType] The type of the view
 * @returns The response of the api call
 */
export function _createNewView(viewName: string, viewClass: string, viewMetadata: object, viewType?: string | undefined): Promise<any>;
export function _addView(viewName: any, viewClass: any, viewType: any, drillIntoAddedView: any, templateDefinition: any, viewMetadataConfig: any): Promise<any>;
export function _getViewData(ruleName: any, className: any, caseClass: any, ignoreFetchAuthoringRecords?: boolean, optionsObj?: {}): Promise<any>;
export function _getCustomComponentConfig(componentName: any): Promise<any>;
/**
 * An api for fetching the data sources (i.e. Infinity data pages) for a given contextClass.
 * @param {string} contextClass
 */
export function _fetchListDatapagesByClass(contextClass: string): Promise<any>;
/**
 * An api for fetching a Rule-UI-View.
 * @param {string} viewName
 * @param {string} contextClass
 */
export function _fetchView(viewName: string, contextClass: string): Promise<any>;
export function _deleteView(viewName: any, contextClass: any): Promise<any>;
export function _getRelevantRecordsFromDataSource(sourceName: any): Promise<{
    pxResults: any;
    pxAssociations: any;
}>;
export function _getBasicClassInfo(contextClassName: any): Promise<{
    pyLabel: any;
    pyIsACaseClass: any;
}>;
export function _getDataPageDetails(sourceName: any): Promise<{
    name: any;
    isSearchable: boolean;
    parameters: any;
    className: any;
}>;
/**
 * A function to get the default list data page (i.e. 'D_PersonList') for a given class. This is
 * mainly used to get the default datasource for generating certain data relatationship views.
 * @param {string} contextClass
 */
export function _getListDataPageForClass(contextClass: string): Promise<{
    name: any;
    isSearchable: boolean;
    parameters: any;
    className: any;
}>;
export function _getAuthoringRecords(options: any): z.infer<any>;
export function fetchAuthoringRecords(options: any): Promise<any>;
export function _getSecondaryContent(contextClass: string | undefined, fieldReferences: string | Array<string>): any;
export function _getAIFieldSuggestions(prompt: any): Promise<any>;
export function getCaseTypesOfClass(className: any): Promise<any>;
export const getRelevantRecordsFromDataSource: any;
export const getBasicClassInfo: any;
export const getCustomComponentConfig: any;
export const getViewData: any;
export const addView: any;
export const createNewView: any;
export const getDataModelFields: any;
export const getViewsOfClass: any;
export const getRuleInfo: any;
export const saveView: any;
export const getDataPage: any;
export const getDataPageDetails: any;
export const getListDataPageForClass: any;
export const refreshInfinityViewList: any;
export const flushDataPage: any;
export const runActivity: any;
export const fetchListDatapagesByClass: any;
export const fetchView: any;
export const deleteView: any;
export const getSecondaryContent: any;
export const getAuthoringRecords: any;
export const createParagraph: any;
export const getParagraph: any;
export const getParagraphs: any;
export const updateParagraph: any;
export const deleteParagraph: any;
export const getAIFieldSuggestions: any;
//# sourceMappingURL=api.d.ts.map