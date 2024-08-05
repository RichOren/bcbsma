/**
 * Fetch the relevant scalar fields from the current class and the class hierarchy that the current class inherits from
 * @param {String} classHierarchy comma delimited string of classes
 * @param {String} className the current class to get relevant scalar fields for
 * @returns a list of properties that are relevant at the given class
 */
export function _getRelevantInheritedScalarProperties(classHierarchy: string, className: string): Promise<any>;
/**
 * Determine the options to be rendered for each grid row entry in the table based on the type
 * @param {Object} data information pertaining to the field
 * @returns content to be rendered in the table under options
 */
export function _getOptionsToRender(data: Object): import("react/jsx-runtime").JSX.Element;
export function _getFieldsBySourceContext(fieldSourceContext: string, className: string): Promise<any>;
export function _getScalarDataModelFields(pageClass: string): Promise<any>;
export function _getClassesForEmbeddedFields(): Promise<any>;
export function _getClassesForReferenceFields(classType: string): Promise<any>;
export function _getAvailableFieldTypes(fieldClass: string): Promise<any>;
export function _deleteProperty(fieldPage: any, invalidateFields?: any): Promise<void>;
export function _getDisplayOptionsForField(contextClass: string): Promise<any>;
export function _populateIdentifier(fieldPage: Object, value: string): Promise<any>;
export function _fieldTypeOnChange(fieldPage: Object, value: string): Promise<any>;
export function _handlePicklistSourceChange(fieldPage: Object, value: string): Promise<any>;
export function _resetRemotePicklistConfiguration(fieldPage: Object): Promise<any>;
export function _getFieldValueListEditor(): Promise<any>;
export function _updateFieldValueListEditor(): Promise<void>;
export function _getDataModelFields(contextClass: string): Promise<any>;
export function _getApplicationDataPages(): Promise<any>;
export function _getDataViewsForClass(pageClass: any, classLabel: any, type: any, excludeDefault: any): Promise<any>;
export function _getDataViewsForApplication(type: any): Promise<any>;
export function _openVisualDataModel(contextClass: any): void;
export function _transformParametersForDataView(fieldPage: Object, dataObjectInfo: Object): Promise<any>;
export function _handleDataObjectChange(fieldPage: Object, dataObjectInfo: Object): Promise<any>;
export function _validateDataObjectName(fieldPage: Object, name: string): Promise<any>;
export function _handleEmbeddedFieldTypeChange(fieldPage: Object, type?: string): Promise<any>;
export function _setLinkObjectName(fieldPage: Object): Promise<any>;
export function _addFieldPreProcessing(className: string, fieldType: string): Promise<any>;
export function _addFieldPostProcessing(fieldPage: Object, className: string, addAnother: boolean | undefined, fieldType: string): Promise<any>;
export function _editFieldPreProcessing(fieldPage: Object): Promise<any>;
export function _editFieldPostProcessing(fieldPage: Object): Promise<any>;
export const getRelevantInheritedScalarProperties: any;
export const getDataModelFields: any;
export const getAvailableFieldTypes: any;
export const getApplicationDataPages: any;
export const getDataViewsForApplication: any;
export const getDataViewsForClass: any;
export const deleteProperty: any;
export const getOptionsToRender: any;
export const openVisualDataModel: any;
export const fieldTypeOnChange: any;
export const populateIdentifier: any;
export const getDisplayOptionsForField: any;
export const getFieldsBySourceContext: any;
export const getScalarDataModelFields: any;
export const getClassesForEmbeddedFields: any;
export const getClassesForReferenceFields: any;
export const handlePicklistSourceChange: any;
export const resetRemotePicklistConfiguration: any;
export const getFieldValueListEditor: any;
export const updateFieldValueListEditor: any;
export const transformParametersForDataView: any;
export const handleDataObjectChange: any;
export const validateDataObjectName: any;
export const handleEmbeddedFieldTypeChange: any;
export const setLinkObjectName: any;
export const addFieldPreProcessing: any;
export const addFieldPostProcessing: any;
export const editFieldPreProcessing: any;
export const editFieldPostProcessing: any;
//# sourceMappingURL=data-model-api.d.ts.map