export const metadataChildType: PropTypes.Requireable<PropTypes.InferProps<{
    type: PropTypes.Validator<string>;
    config: PropTypes.Requireable<PropTypes.InferProps<{
        value: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
    }>>;
}>>;
export const viewMetadataType: PropTypes.Requireable<PropTypes.InferProps<{
    name: PropTypes.Validator<string>;
    type: PropTypes.Validator<string>;
    isDynamicView: PropTypes.Requireable<boolean>;
    config: PropTypes.Requireable<PropTypes.InferProps<{
        template: PropTypes.Validator<string>;
        ruleClass: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        referenceList: PropTypes.Requireable<string>;
        caseTypeReference: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        filterExpression: PropTypes.Requireable<string>;
        grouping: PropTypes.Requireable<boolean>;
        reorderFields: PropTypes.Requireable<boolean>;
        editing: PropTypes.Requireable<boolean>;
        globalSearch: PropTypes.Requireable<boolean>;
        personalization: PropTypes.Requireable<boolean>;
        toggleFieldVisibility: PropTypes.Requireable<boolean>;
    }>>;
    children: PropTypes.Requireable<(PropTypes.InferProps<{
        type: PropTypes.Validator<string>;
        config: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
            type: PropTypes.Requireable<string>;
        }>>;
    }> | null | undefined)[]>;
}>>;
export const templateDefinitionType: PropTypes.Requireable<PropTypes.InferProps<{
    name: PropTypes.Validator<string>;
    description: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
    subtype: PropTypes.Requireable<string>;
    icon: PropTypes.Validator<string>;
    hideTemplateEdit: PropTypes.Requireable<boolean>;
    hideViewName: PropTypes.Requireable<boolean>;
    viewHeadingLabel: PropTypes.Requireable<string>;
    hideFilterBy: PropTypes.Requireable<boolean>;
    hideSortBy: PropTypes.Requireable<boolean>;
    properties: PropTypes.Validator<(PropTypes.InferProps<{
        name: PropTypes.Validator<string>;
        format: PropTypes.Validator<string>;
    }> | null | undefined)[]>;
}>>;
export const viewRecordsType: PropTypes.Requireable<(PropTypes.InferProps<{
    name: PropTypes.Validator<string>;
    label: PropTypes.Requireable<string>;
}> | null | undefined)[]>;
export const relevantRecordsType: PropTypes.Requireable<PropTypes.InferProps<{}>>;
export const recordLabelsType: PropTypes.Requireable<PropTypes.InferProps<{
    views: PropTypes.Requireable<PropTypes.InferProps<{}>>;
    properties: PropTypes.Requireable<PropTypes.InferProps<{}>>;
    widgets: PropTypes.Requireable<PropTypes.InferProps<{}>>;
}>>;
export const addItemTypes: PropTypes.Requireable<(string | null | undefined)[]>;
import PropTypes from "prop-types";
//# sourceMappingURL=prop-types.d.ts.map