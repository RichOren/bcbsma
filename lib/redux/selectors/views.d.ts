export function selectViewById(state: any, id: any): any;
export function selectCurrentViewId(state: any): any;
export function selectParentViewId(state: any): any;
export function selectInitialViewId(state: any): any;
export function selectIsDrilledIn(state: any): boolean;
export function selectInitialView(state: any): any;
/**
 * @param {import('../../common.types').State} state
 * @returns {import('../../common.types').View}
 */
export function selectCurrentView(state: import('../../common.types').State): import('../../common.types').View;
/**
 * @param {import('../../common.types').State} state
 * @returns {import('../../common.types').View | undefined}
 */
export function selectParentView(state: import('../../common.types').State): import('../../common.types').View | undefined;
/**
 * From a drilled in context, return the view reference metadata of the parent view.
 * @param {import('../../common.types').State} state Redux state
 * @returns {import('../../common.types').ViewReferenceMetadata | import('../../common.types').DeferLoadMetadata | undefined}
 */
export function selectReferenceChild(state: import('../../common.types').State): import('../../common.types').ViewReferenceMetadata | import('../../common.types').DeferLoadMetadata | undefined;
/**
 * @param {import('../../common.types').State} state Redux state
 * @returns {{ templateDefinition: import('../../component-definition.types').TemplateDefinition}}
 */
export function selectCurrentTemplate(state: import('../../common.types').State): {
    templateDefinition: import('../../component-definition.types').TemplateDefinition;
};
/**
 * A selector function that returns a path string for use by lodash `get` and `set` based on the
 * input parameters. If no parameters are provided, the path to the current view's viewMetadata will
 * be returned.
 * @param {Object} state The redux store object
 * @param {Object} [parameters] Optional parameters
 *   view's viewMetadata will be returned.
 * @param {string} [parameters.lookupPath]
 * @param {boolean} [parameters.saveToReference]
 * @param {string} [parameters.propName]
 * @param {string} [parameters.containerName]
 * @param {boolean} [parameters.saveToConfig]
 * @param {string} [parameters.itemPath]
 * @returns {string}
 */
export function selectPathToTarget(state: Object, parameters?: {
    lookupPath?: string | undefined;
    saveToReference?: boolean | undefined;
    propName?: string | undefined;
    containerName?: string | undefined;
    saveToConfig?: boolean | undefined;
    itemPath?: string | undefined;
} | undefined): string;
/**
 * A common selector function that gets the desired metadata in the store.
 * @param {Object} state The redux state
 * @param {string} lookupPath A string that represents the path to the target object
 */
export function selectFromLookupPath(state: Object, lookupPath?: string): any;
export function selectValue(state: any, lookupPath: any, propertyDefinition: any): any;
export function selectViewLabelInfo(state: any, name: any): any;
/**
 * Selector to check if the current view is an OOTBView.
 * @param {object} state Redux store
 */
export function selectIsOOTBView(state: object): boolean;
/**
 * Selector to check if the current view is a table variant (a view that has a Columns region) or a single record reference.
 */
export function selectIsTableVariant(state: any, currentView: any): boolean;
/**
 * A selector function to get the base context class for the fields of a view. Views for multi-record
 * fields should use contextClass and other table views should use the class of the current data page.
 * @param {object} state Redux store
 * @param {object} [options] Optional parameters
 * @param {boolean} [options.forTableSource] If true, retrieve the class for a table/columns source
 * @returns {string} A class that represents where the fields/columns for the current view are based off of.
 */
export function selectContextClass(state: object, options?: {
    forTableSource?: boolean | undefined;
} | undefined): string;
/**
 * Selector to get the name of the property for the current data relationship (DataReference).
 */
export function selectDataRelationshipFieldName(state: any): any;
export function selectIsLandingPageAuthoring(state: any): boolean;
export function selectCurrentViewType(state: any): string;
/**
 * Selector to get all data sources for the current view.
 * @param {object} state Redux store
 */
export function selectDataSources(state: object): import("../../common.types").DataSource[];
/**
 * Selector to get a specified data sources for the current view.
 * @param {object} state Redux store
 * @param {string} source Name of the source to retrieve (i.e., Data page name)
 */
export function selectCurrentDataSource(state: object, source: string): import("../../common.types").DataSource | null;
/**
 * Selector to check is the datasource is of work class .
 * @param {object} state Redux store
 * @param {string} source data source
 */
export function selectIsCaseTypeWorkObjectSource(state: object, source: string): true | null;
export function selectIsDataObjectSource(state: any, source: any): true | null;
export function selectDataSourceClass(state: any, source: any): string | undefined;
/**
 * Retrieve the field reference for used for the display field from a DataReference view.
 */
export function selectDisplayField(state: any): string;
export function filterViews(currentView: any, viewsList: any, options?: {}): any;
export function getExpressionDependencies(state: any, lookupPath: any): {
    expressionDependencies: {
        metadataConfig: any;
        viewType: string;
        isCaseTypeWorkObjectSource: boolean | null;
        isDataObjectSource: boolean | null;
        viewAuthoringContext: any;
        isHybridApp: any;
        ruleViewType: string;
    };
    propertyDefinitions: {};
};
//# sourceMappingURL=views.d.ts.map