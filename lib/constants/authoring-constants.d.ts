export namespace textStyles {
    const color: string;
}
export namespace editViewStyles {
    namespace presets {
        namespace subLabels {
            const color_1: string;
            export { color_1 as color };
            export const paddingBottom: string;
            export const fontWeight: string;
        }
    }
}
export const DEBOUNCE_TIME: 200;
export namespace DEFAULT_RULES_MAPPING {
    namespace classes {
        const _case: string;
        export { _case as case };
        export const data: string;
    }
    namespace dataPages {
        namespace worklist {
            const name: string;
            const contextClass: string;
        }
    }
    namespace properties {
        const caseID: string;
        const dataID: string;
        const id: string;
        const label: string;
    }
    namespace views {
        const create: string;
        const details: string;
        const edit: string;
        const objectPage: string;
    }
}
/**
 * OOTB view record names
 * Create = Create
 * pyDetails = Case details page
 * pyCaseSummary = Summary
 * pyReview = Details
 * pyEdit = Edit
 * pyCasePreview = Preview
 * pyGlimpse = Glimpse
 * pyDetailsTabContent = Details
 */
export const OOTBViewNames: string[];
export const ViewReferenceTypeForSinglePageFields: string[];
export const OOTBFieldComponentNames: string[];
/**
 * TODO: In the future we should remove this map since it is not guaranteed to be a unique one to one mapping
 * of Component to ID (ex Scalar-Text vs Scalar-Identifier are both TextInputs in nebula)
 */
export const FieldTypeByComponentName: {};
/**
 * We need to organize the map based on field id instead of nebulaComponentType since the nebula component is not unique
 * */
export const ComponentNameByFieldType: {};
export const listTemplates: string[];
export namespace valueTypeToConditionBuilderType {
    const string: string;
    const boolean: string;
    const number: string;
}
export namespace formatToConditionBuilderType {
    const TEXT: string;
    const BOOLEAN: string;
    const NUMBER: string;
}
export const COSMOSUIWIDGET: "cosmosuiwidget";
export namespace ReferenceTypeToRecordType {
    const widget: string;
    const view: string;
}
export namespace ReferenceTypeToLabelsType {
    const widget_1: string;
    export { widget_1 as widget };
    const view_1: string;
    export { view_1 as view };
}
export const RecordTypes: string[];
export const invalidWidgetNamesForDataViews: string[];
export const invalidWidgetNamesForLaunchpad: string[];
export const sortOrderSource: {
    label: string;
    id: string;
}[];
export namespace defaultSortConfig {
    const sortBy: string;
    const sortOrder: string;
}
export namespace presetInitialView {
    const label_1: string;
    export { label_1 as label };
}
export namespace formattersMap {
    const Text: any[];
    const Date: any[];
    const DateTime: any[];
    const Time: any[];
    const Boolean: any[];
    const Number: any[];
}
export const COMPONENTSLIST_EXT_API: "/componentslist-ext";
export const COMPONENTSLIST_API: "/componentslist";
export const COMPONENTSLIST_API_VERSION: "v861";
export namespace VIEWTYPES {
    const TAB: string;
    const PAGE: string;
    const CASEVIEW: string;
}
export namespace ListViewType {
    const Existing: string;
    const Custom: string;
}
export namespace ViewListCategories {
    const CasePages: string;
    const CaseViews: string;
    const ListViews: string;
    const FormViews: string;
}
export namespace ViewListCategoriesAX {
    export const FullObjectViews: string;
    const ListViews_1: string;
    export { ListViews_1 as ListViews };
    export const PartialViews: string;
    const FormViews_1: string;
    export { FormViews_1 as FormViews };
}
export const RENDER_MODES: {
    label: string;
    value: string;
}[];
export namespace dataRetrievalTypes {
    const COPY: string;
    const REFER: string;
    const MANUAL: string;
}
export const USER_REFER: "USER_REFER";
export const REFER: "REFER";
export const CONSTANT: "CONSTANT";
export const dataSourceParametersType: ({
    value: string;
    key: string;
    type: string;
    context: string[];
    annotation?: undefined;
    isDotAllowed?: undefined;
} | {
    value: string;
    key: string;
    type: string;
    annotation: string;
    context: string[];
    isDotAllowed: boolean;
})[];
export namespace ENV_INFO_AUTH_LABEL {
    const APPLICATION_NAME: string;
    const ACCESS_GROUP: string;
    const USER_NAME: string;
    const USER_ID: string;
    const APPLICATION_DESC: string;
    const USER_IMAGE: string;
    const LOCALE: string;
    const TIMEZONE: string;
    const WORK_GROUP: string;
}
export namespace StudioxCategoryMapping {
    import page = ViewListCategories.CasePages;
    export { page };
    import landingpage = ViewListCategories.CasePages;
    export { landingpage };
    import form = ViewListCategories.FormViews;
    export { form };
    import list = ViewListCategories.ListViews;
    export { list };
    import rule = ViewListCategories.CaseViews;
    export { rule };
}
export const ALTERNATE_DESIGN_SYSTEM_CONFIG_NAME: "configAlternateDesignSystem";
export const ALTERNATE_DESIGN_SYSTEM_LABEL: "Alternate design system";
export const PRIMARY_FIELDS: "pyPrimaryFields";
export namespace INSIGHT_ICONS {
    const exploration: string;
    const Exploration: string;
    const COLUMN: string;
    const CLUSTERED_COLUMN: string;
    const STACKED_COLUMN: string;
    const BAR: string;
    const CLUSTERED_BAR: string;
    const STACKED_BAR: string;
    const SIMPLE_VALUE: string;
    const PIE: string;
    const DONUT: string;
    const GAUGE: string;
    const LINE: string;
    const MULTI_LINE: string;
    const MULTI_AREA: string;
    const AREA: string;
    const STACKED_AREA: string;
    const BUBBLES: string;
    const TABLE: string;
    const RAW_TABLE: string;
    const PARETO: string;
    const COMBO_CHART: string;
}
export const LIST_VIEW_TEMPLATES: string[];
export namespace ANNOTATIONS {
    const PARAGRAPH: string;
    const FIELD_LABEL: string;
    const LABEL: string;
}
//# sourceMappingURL=authoring-constants.d.ts.map