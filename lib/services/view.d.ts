/**
 * A helper to return the name of the metadata child field, whether scalar or complex.
 * @param {Object} metadataChild
 * @param {boolean} [returnFullReference=false] Return the full field reference path for complex fields
 * @returns {string}
 */
export function getFieldName(metadataChild: Object, returnFullReference?: boolean | undefined): string;
/**
 * Function to override/default the view label for OOTB view names
 * @param {boolean} isInWorkClass flag to determine if view is in work- class
 * @param {string} viewName Name value from view metadata
 * @returns label to use corresponding to name (Full case page, etc) or no if no match
 */
export function getViewLabelFromName(isInWorkClass: boolean, viewName: string): any;
/**
 * Function to get the label used in Insight Authoring for navigating back to View Authoring
 * @param {boolean} isInWorkClass flag to determine if view is in work- class
 * @param {string} viewName Name value from view metadata
 * @param {string} viewLabel Label value from the view
 * @param {string} viewType Type of the view
 * @returns label to be used to navigate back to View Authoring from Insight Authoring
 */
export function getBackToViewLabelForInsightAuthoring(isInWorkClass: boolean, viewName: string, viewLabel: string, viewType: string): string;
export function getRegion(viewMetadata: any, regionName: any): any;
export function getRegionChild(viewMetadata: any, regionName: any, childIndexOrPath: any): any;
export function getValueFromReferenceChild(child: any, name: any, lookupPath: any): any;
export function getFieldReferenceFromMetadata(metadata: any): any;
export function isReusableView(templateSubtype: any): boolean;
/**
 * BUG-817343: This function was transcribed from the Infinity's pxPublishView activity, obtaining the viewType
 * accordingly when building out a View. This function is meant to be platform-type agnostic.
 *
 * NOTE: This is not an exhaustive list as it does not include some view types such as 'tab', 'multirecordlist', etc.
 *
 * @param {object} viewMetadata The metadata of the view (pxViewMetadata)
 */
export function getViewType(viewMetadata: object): string;
export function setValueOnReferenceConfig(configState: any, name: any, value: any, lookupPath: any, isWithinInheritedPropObj?: boolean): void;
/**
 * This function is used to get basic info from a region child. Mainly used to for building the
 * items for AuthoringList. Only supports fields for now.
 * TODO Support all other item types, not just fields
 * @param {object} child Child metadata object of a Region
 * @param {object} data Data that corresponds to the child, needed for information that is not found
 *   on the child. For example, if the child is a field, then this param would be the record for that field
 */
export function getBasicInfo(child: object, data: object): {
    id: string;
    type: any;
    label: any;
};
export function checkIsQueryableSource(viewMetadata: any, dataSources: any): any;
/**
 * Create the metadata object for a record
 * @param {object} viewMetadata The view metadata of the view that the new region child is being created for
 * @param {string} type The type of record we are generating metadata for
 * @param {object} record The record being added
 * @param {object} dependencies Extra dependencies needed to generate metadata
 * @returns {object} Metadata object
 */
export function createNewRegionChild(viewMetadata: object, type: string, record: object, dependencies: object): object;
export function setValueAsInheritedProp(targetObj: any, propName: any, propValue: any): void;
/**
 * Determine if a view can be deleted.
 * @param {object} param0
 * @param {object} param0.view The view object in the views list
 * @param {string} param0.view.viewName The rule name of the view
 * @param {string} param0.view.viewType The view type
 * @param {string} param0.category The views list category of the view
 * @param {string} param0.caseClass The class of object/rule the view is for
 * @returns {boolean} Whether the view can be deleted or not
 */
export function canDeleteView({ view, category, caseClass }: {
    view: {
        viewName: string;
        viewType: string;
    };
    category: string;
    caseClass: string;
}): boolean;
/**
 * Determine the class to save a view into.
 * @param {string | null | undefined} templateSubtype
 * @param {object} classes
 * @param {string} [classes.caseClass] The case class for the object associated with the current view authoring
 * @param {string} [classes.pageClass] The save location for landing page views
 * @param {string} viewClass The class stored on the view in the redux store
 * @param {boolean} [specializeOnSave] Whether the view needs to be specialized (hoisted) into a different class
 * @param {any} [contextField] The field context associated with the view
 * @returns
 */
export function resolveViewClass(templateSubtype: string | null | undefined, classes: {
    caseClass?: string | undefined;
    pageClass?: string | undefined;
}, viewClass: string, specializeOnSave?: boolean | undefined, contextField?: any): any;
/**
 * This function verifies whether referenced list source is work related or not.
 *
 * returns true/false based on if the list source used is work related or not
 *
 * @param {*} viewMetadata - viewMetadata
 * @param {*} dataSources - object containing array of list of data sources
 */
export function checkWorkObjectSource(viewMetadata: any, dataSources: any): any;
export function checkDataObjectSource(viewMetadata: any, dataSources: any): any;
export function checkAssignListSource(viewMetadata: any, dataSources: any): any;
export function getListContextClass(viewMetadata: any, dataSources: any): any;
/**
 * This function verifies whether field added are under CaseRef or not.
 *
 * returns true/false based on if the field added are under CaseRef or not
 *
 * @param {*} viewMetadata - viewMetadata
 * @param {*} componentMappings - Contains key-value pairs associating the associated complex field type to the name to display
 */
export function checkFieldInsideCaseRef(viewMetadata: any, componentMappings: any): boolean;
/**
 * This function returns a reordered and formatted config object for sorting which is an array of object types { value: configValue, sortOrder, sortDirection, sortBy }
 * @param {*} fields - list of relevant records
 * [{
 *    conditionBuilderType: "NUMBER",
 *    label: "Priority",
 *    name: ".pxUrgencyAssign",
 *    nebulaComponentType: "Integer",
 *    typeKey: "Pega-Fields-Scalar-Integer"
 * }]
 * @param {*} children - list of properties available
 * [
 *  {
 *    type: "Text",
 *    config: {
 *      label: "@L Priority",
 *      sortDirection: "DESC",
 *      sortPriority: 1,
 *      value: "@P .pxUrgencyAssign"
 *    }
 *  }
 * ]
 */
export function initializeSortConfig(fields: any, children: any): any[];
export function updateSortConfig(sortConfig: any, columnFields: any, newSortPriority: any, existingSortBy: any): any;
/**
 * This function extracts the displayAs value, returns the displayAs from the viewMetadata config if it is defined, otherwise obtains it
 * from the children type
 *
 * @param {*} viewMetadata - viewMetadata
 */
export function getDisplayAsValue(viewMetadata: any): any;
export function upgradeCurrentViewMetadata(currentViewMetadata: any): any;
/**
 * This function takes care of updating the viewMetadata of:
 * 1. an existing list view from previous viewmetadata (viewmetadata.children contains properties info) to new metadata
 * 2. a new list view with default metadata (from infinity).
 *
 * returns the updated view metadata.
 *
 * @param {*} currentViewMetadata - viewMetadata
 */
export function upgradeViewMetadata(currentViewMetadata: any, dataSources: any, additionalData: any): any;
/**
 * This function takes care of updating field configuration object with right displayAsLink prop:
 * displayAsLink should be true for fields(pyID and pyLabel) that are added under column region inside ListView with worktype datasource
 * displayAsLink should be true for fields(pyID and pyLabel) added under Query
 *
 * returns the updated configuration config with right additionalDetails prop
 *
 * @param {*} viewMetadata - viewMetadata
 * @param {*} payload - required data sent to perform update of config object with additionalDetails having type : 'DISPLAY_LINK'
 */
export function updateDisplayAsLink(viewMetadata: any, payload: any): any;
export function getDefaultMetadataForMultiRecordSimpleTableSelect(targetType: any, firstNonSysScalarField: any, displayFieldForPicker: any, keyFieldForPicker: any): ({
    type: any;
    config: {
        value: string;
        label: string;
        previewKey?: undefined;
        additionalDetails?: undefined;
    };
} | {
    type: string;
    config: {
        value: string;
        label: string;
        previewKey: string;
        additionalDetails: {
            type: string;
            params: {};
        };
    };
})[];
export function getEditInModalConfigForMultiRecordSimpleTableManual(): {
    editMode: string;
};
/**
 * Determine if `field` is a type that overlaps with `targetField`.
 *
 * For example, Email overlaps with Text, but Text does not overlap with Email
 * @param {any} targetField
 * @param {any} field
 */
export function doesFieldTypeOverlap(targetField: any, field: any): any;
export function isReadOnlyTable(viewMetaData?: {}): boolean;
export function checkViewMetadataForDeprecatedConfigs(viewMetadata: any): {
    variant: string;
    dismissible: boolean;
    messages: {
        label: string;
        description: string;
    }[];
} | undefined;
export function removeEmbeddedListUUIDField(config: any): void;
export function addEmbeddedListUUIDIfAbsent(config: any): void;
//# sourceMappingURL=view.d.ts.map