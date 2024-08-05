/**
 * [getFieldNameFromEmbeddedFieldName]
 * Description    -               converting embeddedField name starting with !P! or !PL! to normal field
 * @ignore
 * @param {string} propertyName   EmbeddedField name starting with !P! or !PL!
 * @returns {string}              returns converted string without !P! or !PL! and :
 *
 * @example <caption>Example for getFieldNameFromEmbeddedFieldName </caption>
 * getFieldNameFromEmbeddedFieldName('!P!Organization:Name') return 'Organization.Name'
 * getFieldNameFromEmbeddedFieldName('!PL!Employees:Name') return 'Employees.Name'
 */
export function getFieldNameFromEmbeddedFieldName(propertyName: string): string;
export function isScalarList(field: any): boolean;
/**
 * [getEmbeddedFieldName]
 * Description    -               converting normal field name to embedded field starting with !P! or !PL!
 * @ignore
 * @param {string} propertyName   Field name
 * @param {string} classID        classID of datapage
 * @returns {string}              returns converted string with !P! or !PL! and :
 *
 * @example <caption>Example for getEmbeddedFieldName </caption>
 * For page property, getEmbeddedFieldName('Organization.Name') return '!P!Organization:Name'
 * For pageList property, getEmbeddedFieldName('Employees.Name') return '!PL!Employees:Name'
 */
export function getEmbeddedFieldName(propertyName: string, classID: string): string;
/**
 * [updateMetaEmbeddedFieldID]
 * Description    -           If the fieldID in meta starts with '!P!' or '!PL!' and contains ':' then replace them with .(dot)
 * @ignore
 * @param {Array} metaFields  Fields metadata Array. Contains metadata of all the fields.
 */
export function updateMetaEmbeddedFieldID(metaFields: any[]): void;
/**
 * [getConfigEmbeddedFieldsMeta]
 * Description    -           Get the metadata for configured embedded fields
 * @ignore
 * @param {Set} configFields  Set of config fields
 * @param {string} classID    classID of datapage
 * @returns {Array}           Metadata of configured embedded fields
 */
export function getConfigEmbeddedFieldsMeta(configFields: Set<any>, classID: string): any[];
/**
 * [mergeConfigEmbeddedFieldsMeta]
 * Description    -           Get the metadata for configured embedded fields
 * @ignore
 * @param {Array} configEmbeddedFieldsMeta  config fields metadata.
 * @param {Array} metaFields  Fields metadata Array. Contains metadata of all the fields
 */
export function mergeConfigEmbeddedFieldsMeta(configEmbeddedFieldsMeta: any[], metaFields: any[]): any[];
/**
 * [preparePropertyValue]
 * Description    -        Preparing pageList value from FILTERED_LIST annotation to Property annotation
 * @ignore
 * @param {string} value   Pagelist value starts with FILTERED_LIST annotation
 * @returns {string}       returns converted string starting with Property annotation
 *
 * @example <caption>Example for preparePropertyValue </caption>
 * preparePropertyValue('@FILTERED_LIST .Employees[].Name') return '@P .Employees.Name'
 */
export function preparePropertyValue(value: string): string;
/**
 * [updatePageListFieldsConfig]
 * Description    -        updating configured pageList property's type and value
 * @ignore
 * @param {Array} configFields  configured fields
 *
 * @example <caption>Modified config pageListField </caption>
 *
    {
      "type": "ScalarList",
      "config": {
        "value": "@FILTERED_LIST .Employees[].Name",
        "label": "@L Emp_Name",
        "componentType": "TextInput",
        "readOnly": true
      }
    }
    modified to
    {
      "type": "TextInput",
      "config": {
        "value": "@P .Employees.Name",
        "label": "@L Emp_Name",
        "componentType": "TextInput",
        "readOnly": true
      }
    }
 */
export function updatePageListFieldsConfig(configFields: any[]): void;
export function updatePageListPropertyValue(value: any): any;
/**
 * Update the renderer type for the properties of type Page.
 */
export function updatePageFieldsConfig(configFields: any): any;
export function updateChangeSetValueKeys(changeSetObj: any, getOriginalProperty: any): {};
/**
 * [isPageListProperty]
 * Description    -        checking if propertyName is pageList or not
 * @ignore
 * @param {string} propertyName   PropertyName
 * @returns {boolean}  true if property is pageList else false
 *
 * @example <caption>Example for isPageListProperty </caption>
 * isPageListProperty('!PL!Employees.Name') return true
 * isPageListProperty('!P!Employees.Name') return false
 * isPageListProperty('Name') return false
 */
export function isPageListProperty(propertyName: string): boolean;
/**
 * [preparePropertyMaps]
 * Description    -        preparing maps for property names and set it in dataApi context
 * @ignore
 * @param {Array} fields   fields array
 * @param {string} classID  classID of datapage
 * @param {string} context  dataApi context
 * @returns {boolean} true if pageListProperty is present
 */
export function preparePropertyMaps(fields: any[], classID: string, context: string): boolean;
/**
 * [getPageListFields]
 * Description    -        getting pageListFields names from the fields
 * @ignore
 * @param {Array} fields   fields array
 * @returns {Array} array of pageListFields name
 */
export function getPageListFields(fields: any[]): any[];
export function mergePageListFieldAggregation(pageListName: any, select: any, existingAggregations: any, existingAggregationsName: any): void;
export function mergePageListFieldsAggregation(fields: any, select: any, existingAggregations: any): any[];
/**
 * [hasPageListProperty]
 * Description    -        getting pageListFields names from the fields
 * @ignore
 * @param {Array} fieldDefs   fields array
 * @returns {object | undefined} value of first pageListProperty found
 */
export function hasPageListProperty(fieldDefs: any[]): object | undefined;
/**
 * [parseEmbeddedAnnotations]
 * Description -  converting embeddedField name starting with !P! or !PL! present withing a datastructure (of type Object | Array | string) to normal field recursively
 * @ignore
 * @param {string | Array | Object} value    a data structure that contains embedded annotations in it starting with !P! or !PL!
 * @returns {string | Array | Object}       returns converted data structure without !P! or !PL! and :
 *
 * @example <caption>Example for parseEmbeddedAnnotations </caption>
 * parseEmbeddedAnnotations({
    "select": [
        {
            "field": "pyID"
        },
        {
            "field": "!P!EmbeddedPage:TextField"
        },
    ],
    "sortBy": [
        {
            "field": "!P!EmbeddedPage:TextField",
            "type": "ASC"
        }
    ],
    "filter": {},
    "groupBy": [
        {
            "field": "pyID",
            "sortType": "asc"
        }
    ],
    "groupFilters": [
        {
            "groupFrom": 0,
            "groupTo": 3,
            "filters": {
                "pyID": "EPFT-2"
            }
        }
    ]
}) returns
{
    "select": [
        {
            "field": "pyID"
        },
        {
            "field": "EmbeddedPage.TextField"
        },
    ],
    "sortBy": [
        {
            "field": "EmbeddedPage.TextField",
            "type": "ASC"
        }
    ],
    "filter": {},
    "groupBy": [
        {
            "field": "pyID",
            "sortType": "asc"
        }
    ],
    "groupFilters": [
        {
            "groupFrom": 0,
            "groupTo": 3,
            "filters": {
                "pyID": "EPFT-2"
            }
        }
    ]
}
 */
export function parseEmbeddedAnnotationsRecursively(value: string | any[] | Object): string | any[] | Object;
export function populateClassIDforNestedFields(embeddedFieldMeta: any, rowData: any): void;
export const AT_FILTEREDLIST: "@FILTERED_LIST";
export const AT_PROPERTY: "@P";
export const SQUARE_BRACKET_START: "[";
export const SQUARE_BRACKET_END: "]";
//# sourceMappingURL=EmbeddedUtil.d.ts.map