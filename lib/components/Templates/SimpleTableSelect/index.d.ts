/**
 * SimpleTable react component
 * @param {*} props - props
 */
declare function SimpleTableSelect(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SimpleTableSelect {
    namespace defaultProps {
        const label: undefined;
        const renderMode: string;
        const promptedFilters: never[];
        const viewName: string;
        const parameters: undefined;
        const readonlyContextList: never[];
        const dataRelationshipContext: null;
        const defaultRowHeight: string;
        const showPromotedFilters: boolean;
        const contextPage: {};
    }
    namespace propTypes {
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const referenceList: PropTypes.Validator<NonNullable<NonNullable<string | (object | null | undefined)[] | null | undefined>>>;
        const renderMode_1: PropTypes.Requireable<string>;
        export { renderMode_1 as renderMode };
        const promptedFilters_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { promptedFilters_1 as promptedFilters };
        const viewName_1: PropTypes.Requireable<string>;
        export { viewName_1 as viewName };
        const parameters_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { parameters_1 as parameters };
        const readonlyContextList_1: PropTypes.Requireable<NonNullable<string | (object | null | undefined)[] | null | undefined>>;
        export { readonlyContextList_1 as readonlyContextList };
        const dataRelationshipContext_1: PropTypes.Requireable<string>;
        export { dataRelationshipContext_1 as dataRelationshipContext };
        const defaultRowHeight_1: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        export { defaultRowHeight_1 as defaultRowHeight };
        const showPromotedFilters_1: PropTypes.Requireable<boolean>;
        export { showPromotedFilters_1 as showPromotedFilters };
        const contextPage_1: PropTypes.Requireable<object>;
        export { contextPage_1 as contextPage };
    }
}
export default SimpleTableSelect;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map