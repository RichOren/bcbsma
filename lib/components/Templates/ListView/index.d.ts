declare function ListView(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace ListView {
    namespace defaultProps {
        const additionalTableConfig: {};
        const allowAddingNewRecords: boolean;
        const allowBulkActions: boolean;
        const allowMovingRecords: boolean;
        const apiContext: {};
        const basicMode: boolean;
        const children: never[];
        const compositeKeys: never[];
        const disabled: boolean;
        const displayMode: null;
        const editing: boolean;
        const expandGroups: boolean;
        const fieldName: undefined;
        const grouping: boolean;
        const globalSearch: boolean;
        const icon: undefined;
        const isParametersOverride: undefined;
        const isSearchable: boolean;
        const numberOfRows: undefined;
        const openCaseViewAfterCreate: boolean;
        const parameters: undefined;
        const personalization: boolean;
        const personalizationId: null;
        const selectionMode: null;
        const showHeaderIcons: boolean;
        namespace tableDisplay {
            const show: boolean;
            const placeHolder: string;
        }
        const toggleFieldVisibility: boolean;
        const reorderFields: boolean;
        const required: boolean;
        const validatemessage: string;
        const viewName: undefined;
        const useSearchAndSelect: boolean;
        const ifCaseDataRefSearchSelect: boolean;
        const searchFields: never[];
        const selectedValues: null;
        const showRecords: boolean;
        const displayToolbarActions: boolean;
    }
    namespace propTypes {
        export const title: PropTypes.Validator<string>;
        const icon_1: PropTypes.Requireable<string>;
        export { icon_1 as icon };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        export const referenceList: PropTypes.Validator<string>;
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const personalization_1: PropTypes.Requireable<boolean>;
        export { personalization_1 as personalization };
        const grouping_1: PropTypes.Requireable<boolean>;
        export { grouping_1 as grouping };
        const expandGroups_1: PropTypes.Requireable<boolean>;
        export { expandGroups_1 as expandGroups };
        const reorderFields_1: PropTypes.Requireable<boolean>;
        export { reorderFields_1 as reorderFields };
        const showHeaderIcons_1: PropTypes.Requireable<boolean>;
        export { showHeaderIcons_1 as showHeaderIcons };
        const editing_1: PropTypes.Requireable<boolean>;
        export { editing_1 as editing };
        const globalSearch_1: PropTypes.Requireable<boolean>;
        export { globalSearch_1 as globalSearch };
        const toggleFieldVisibility_1: PropTypes.Requireable<boolean>;
        export { toggleFieldVisibility_1 as toggleFieldVisibility };
        const personalizationId_1: PropTypes.Requireable<string>;
        export { personalizationId_1 as personalizationId };
        const basicMode_1: PropTypes.Requireable<boolean>;
        export { basicMode_1 as basicMode };
        const apiContext_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { apiContext_1 as apiContext };
        const parameters_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { parameters_1 as parameters };
        const selectionMode_1: PropTypes.Requireable<string>;
        export { selectionMode_1 as selectionMode };
        const additionalTableConfig_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalTableConfig_1 as additionalTableConfig };
        const compositeKeys_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { compositeKeys_1 as compositeKeys };
        const viewName_1: PropTypes.Requireable<string>;
        export { viewName_1 as viewName };
        const isSearchable_1: PropTypes.Requireable<boolean>;
        export { isSearchable_1 as isSearchable };
        const tableDisplay_1: PropTypes.Requireable<PropTypes.InferProps<{
            show: PropTypes.Validator<boolean>;
            placeHolder: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        }>>;
        export { tableDisplay_1 as tableDisplay };
        const allowBulkActions_1: PropTypes.Requireable<boolean>;
        export { allowBulkActions_1 as allowBulkActions };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const allowAddingNewRecords_1: PropTypes.Requireable<boolean>;
        export { allowAddingNewRecords_1 as allowAddingNewRecords };
        const numberOfRows_1: PropTypes.Requireable<string>;
        export { numberOfRows_1 as numberOfRows };
        const allowMovingRecords_1: PropTypes.Requireable<boolean>;
        export { allowMovingRecords_1 as allowMovingRecords };
        const fieldName_1: PropTypes.Requireable<string>;
        export { fieldName_1 as fieldName };
        const isParametersOverride_1: PropTypes.Requireable<boolean>;
        export { isParametersOverride_1 as isParametersOverride };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const openCaseViewAfterCreate_1: PropTypes.Requireable<boolean>;
        export { openCaseViewAfterCreate_1 as openCaseViewAfterCreate };
        const useSearchAndSelect_1: PropTypes.Requireable<boolean>;
        export { useSearchAndSelect_1 as useSearchAndSelect };
        const ifCaseDataRefSearchSelect_1: PropTypes.Requireable<boolean>;
        export { ifCaseDataRefSearchSelect_1 as ifCaseDataRefSearchSelect };
        const showRecords_1: PropTypes.Requireable<boolean>;
        export { showRecords_1 as showRecords };
        const searchFields_1: PropTypes.Requireable<any[]>;
        export { searchFields_1 as searchFields };
        const selectedValues_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { selectedValues_1 as selectedValues };
        const displayToolbarActions_1: PropTypes.Requireable<boolean>;
        export { displayToolbarActions_1 as displayToolbarActions };
    }
}
export default ListView;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map