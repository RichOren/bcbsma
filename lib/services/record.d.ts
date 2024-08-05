/**
 * A helper function to get some default/hardcoded info about a field type from type_mappings.json.
 * @param {string} type The type of field. i.e. 'Scalar-Text', 'Complex-Page', etc.
 * @returns { nebulaComponentType, conditionBuilderType, conditionFieldType, defaultConfigProps }
 */
export function getInfoForFieldType(type: string, field: any, fieldReference: any): nebulaComponentType;
/**
 * A helper function to pre-process a field record, generating a new record with additional props.
 * @param {object} field Field record
 * @param {string} [fieldReference] A full field reference to use instead of field.name.
 *   i.e. 'Borrower.Address.State'
 */
export function mapFieldTypeKeyToNebulaComponent(field: object, fieldReference?: string | undefined): any;
export function buildFieldForConditionBuilder({ name, label, conditionBuilderType, conditionBuilderFields, pathToProp, }: {
    name: any;
    label: any;
    conditionBuilderType: any;
    conditionBuilderFields: any;
    pathToProp: any;
}): {
    id: any;
    primary: any;
};
/**
 *
 * @param {*} currentFields
 * @param {object} result
 * @returns
 */
export function buildFieldsById(currentFields: any, result?: object): object;
/**
 * A recursive helper function to map the typeKey and set isSystemField for fields records in RR array
 * @param {array} fieldRecords Array of field records
 * @param {string} [name] used for embedded fields
 */
export function mapFieldsInRelevantRecords(fieldRecords: array, name?: string | undefined): any;
/**
 * A shared function for processing relevant records. This should be called in all the reducer actions
 * that are storing/updating relevant records in the redux store.
 * @param {object} viewState The state object of a view in the redux store
 * @param {string} defaultClass The class where OOTB views are saved into (i.e. Work- or Data-)
 * @param {string} dataSourceChanged is set to true when dataSource is changed (called from SOURCECHANGE redux action)
 */
export function initAndProcessRecords(viewState: object, defaultClass: string, dataSourceChanged?: string): void;
export function getNebulaFieldComponents(): any[];
export function getWidgetComponents(relevantRecords: any): any;
/**
 * Given a property definition that has a data source, build the key string
 * that's used to identitify the cached data source, and build the data page
 * params object that's used in the getDataPage call.
 * @param {object} propDef Property definition of a component definition.
 * @param {object} metadataConfig Metadata config object from which to pull dynamic values
 */
export function getKeyAndBuiltParams(propDef: object, metadataConfig: object): {
    dataSourceName: any;
    key: any;
    dataSourceParams: {};
};
/**
 *
 * @param {object} options Object holding the function parameters
 * @param {object} [options.definition={}] Object holding the function parameters
 * @param {object} [options.cache={}] Object holding the function parameters
 * @param {object} [options.metadataConfig={}] Object holding the function parameters
 * @param {object} [options.relevantRecords={}] Relevant records
 */
export function getUncachedDataSources(options: {
    definition?: object | undefined;
    cache?: object | undefined;
    metadataConfig?: object | undefined;
    relevantRecords?: object | undefined;
}): Promise<{
    key: any;
    records: any;
}[] | undefined>;
/**
 * Helper map function to make a relevant record from a definition.
 * @param {object} definition A single definition
 */
export function mapDefinitionToRecord(definition: object): {
    name: any;
    label: any;
    type: any;
    hideModifyIcon: any;
    defaultConfig: any;
};
/**
 * Used to filter out non numeric scalar fields from a list of field records
 * @param {Object[]} fieldList
 * @returns filtered list of fields - numeric scalar, drill-able field the contains Fields array
 */
export function filterOutNonNumericScalars(fieldList: Object[]): Object;
/**
 * Used to match item from a list of field records
 * @param {string} item consists of field reference which includes embedded field with dot notation
 * @param {string[]} fields contains list of field references which includes embedded fields
 * @returns {boolean} returns true if item is matched in the fields array
 */
export function matchItemInEmbeddedFields(item: string, fields: string[]): boolean;
/**
 * A helper function that maps a single field (from the results of D_pxDataModelFields) to a common
 * field record to be used throughout the codebase. This has been adapted and modified from
 * ViewEditing.java relevantRecordCBPtoJSONObj method.
 * @param {Object} field A field from the results of D_pxDataModelFields
 * @returns {Object} A "normalized" field record
 */
export function mapToFieldRecord(field: Object): Object;
/**
 * This is a recursive helper function for getting all the field records from all the dependent
 * classes, starting from the given context class. For instance, a case class may have complex fields
 * that reference other case or data classes which we need to also fetch the fields for, and so on.
 * @param {string} contextClass The starting context class from which to fetch fields
 * @param {string} accumulator The object on which to set all the data
 */
export function fetchFields(contextClass: string, accumulator: string): Promise<void>;
/**
 * Fetch and cache data for field references
 * @param {string} contextClass The root class for the field _references_ (not the _referenced_ fields)
 * @param {string[]} fieldReferences The field references (i.e. 'Contact.Address.State')
 * @param {object} [options]
 * @param {boolean} [options.includeIntermediates] If true, include intermediates of the fieldReferences.
 *   i.e. 'Contact.Address.State' -> ['Contact', 'Contact.Address', 'Contact.Address.State']
 */
export function fetchFieldReferencesData(contextClass: string, fieldReferences: string[], options?: {
    includeIntermediates?: boolean | undefined;
} | undefined): Promise<{}>;
/**
 * Retrieve the field record data from cache given a field reference and a contextClass
 * @param {object} params
 * @param {string} params.fieldReference The field reference (i.e. 'Contact.Address')
 * @param {string} params.contextClass The context/root class where the first field of the reference lives
 * @param {object} [params.relevantRecords] Records to search in if the reference consists of only one segment (i.e. '.Contact')
 * @param {boolean} [params.includeFullRecordInfo] Includes whole record returned not just inner field object portion (relevant for nested field scenario)
 * @returns The field record data if found, otherwise undefined
 */
export function getFieldReferenceData(params: {
    fieldReference: string;
    contextClass: string;
    relevantRecords?: object | undefined;
    includeFullRecordInfo?: boolean | undefined;
}): any;
/**
 * Retrieve ruleClass/targetObjectClass for a given page class reference
 * @param {string} contextPagePath - Full path to field reference (Customer.Team)
 * @param {object} relevantRecordFields - Field relevant records from parent context (Customer.Team.Member should be RR from Customer)
 * @returns object that contains the ruleClass and targetObject class for the given field reference path
 */
export function getFieldReferenceClasses(contextPagePath: string, relevantRecordFields: object): Promise<{
    targetClass: any;
    ruleClass: any;
}>;
export function getFirstNonSysScalarField(className: any, ruleClassNamespace: any): Promise<any>;
export function fetchAndBuildWidgets(templateDefinition: any, options: any): Promise<any>;
export function determineViewForEmbeddedData(views: any, targetObjectClass: any): undefined;
/**
 * Check if leafField is an embeddedPage property
 * @param {string} leafField
 * @example <caption>Example for isFieldInEmbeddedPage.</caption>
 * isFieldInEmbeddedPage("@P .PrimaryContact.Address") - returns true
 */
export function isFieldInEmbeddedPage(leafField: string): boolean | "";
export function isFieldInEmbeddedPageList(field: any): any;
export function retrieveConditionBuilderFields({ className, classNamespace, filterAuthoredColumn, drillLevel, fields, fieldsToFilterFor, includeOptimizedProperties, ...extraOptions }: {
    [x: string]: any;
    className: any;
    classNamespace: any;
    filterAuthoredColumn: any;
    drillLevel?: number | undefined;
    fields: any;
    fieldsToFilterFor: any;
    includeOptimizedProperties?: boolean | undefined;
}): Promise<any[]>;
export function filterGroupSortFields(fields: any, children: any): any;
export function filterGroupSortFieldsMap(currentView: any, currentRegionChildren: any): Promise<any>;
export function filterChildFields(fieldList: any, children: any, filterAnnotation: any): any;
export function filterEmbeddedPageFieldsChildren(fieldList: any, children: any, filterAnnotation: any): any;
export function filterFlattenChildFields(fieldCategories: any, children: any, filterAnnotation: any): any;
export function isNumericScalar(type: string): boolean;
//# sourceMappingURL=record.d.ts.map