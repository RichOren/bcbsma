export function generateDetailsDisplay({ isCaseType, fieldForDisplay, fieldNameForKey }: {
    isCaseType: any;
    fieldForDisplay?: {} | undefined;
    fieldNameForKey: any;
}): {
    type: any;
    config: {
        value: string;
        label: string;
    };
}[];
/**
 * A helper function for generating the view metadata for the various data relationships (complex
 * fields). See the following mural board for a table of example data relationship views.
 * https://app.mural.co/t/platformserviceengineering9820/m/platformserviceengineering9820/1632236944832/a55e871b73a88c5a4542c79a77d515558ddd7b25
 *
 * TODO This has not accounted for adding nested complex fields (i.e.
 * 'BorrowerSingleRef.PersonSingleRef.AddressSingleRef')
 *
 * @param {Object} dependencies All potential dependencies
 * @param {string} dependencies.name The name (id) of the complex field
 * @param {string} dependencies.label The label of the complex field
 * @param {string} dependencies.ruleClass The class of the complex field
 * @param {string} dependencies.type The type of the complex field: 'Complex-List' or 'Complex-Page'
 * @param {string} dependencies.embeddedType The referral type of the data relationship:
 * 'Complex-Embedded', 'Complex-Embedded-Query', or 'Complex-Embedded-Query-Reference-...'
 * @param {string} dependencies.targetObjectClass The class of the object that is referred to by the complex field
 * @param {string} dependencies.targetObjectType 'case' or 'data'
 * @param {string} dependencies.dataRetrievalType 'AUTOMATIC', 'AUTOMATICNONREF', 'MANUAL'
 * @param {string} dependencies.parentViewName The name (id) of the view that the complex field is added to
 * @param {string} dependencies.parentViewClass The class of the view that the complex field is added to
 * @param {boolean} dependencies.isEditable `true` if adding to a form view
 * @param {Array} dependencies.classKeys // TODO
 * @param {Array} dependencies.fieldForDisplay The field to use as the initial display field
 * @param {Object} dependencies.datasource The datasource (data page) of the complex field
 */
export default function generateDataRelationshipView(dependencies: {
    name: string;
    label: string;
    ruleClass: string;
    type: string;
    embeddedType: string;
    targetObjectClass: string;
    targetObjectType: string;
    dataRetrievalType: string;
    parentViewName: string;
    parentViewClass: string;
    isEditable: boolean;
    classKeys: any[];
    fieldForDisplay: any[];
    datasource: Object;
}): {
    name: string;
    type: string;
    config: {
        ruleClassNamespace?: string | undefined;
        ruleNamespace?: string | undefined;
        ruleClass: string;
        template: string;
    };
    children: never[];
};
//# sourceMappingURL=data-relationship.d.ts.map