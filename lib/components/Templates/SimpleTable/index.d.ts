/**
 * SimpleTable react component
 * @param {*} props - props
 */
declare function SimpleTable(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SimpleTable {
    namespace defaultProps {
        const fieldMetadata: null;
        const parameters: null;
        const propertyLabel: string;
        const label: string;
        const displayMode: null;
        const hideLabel: boolean;
        const contextClass: null;
        const defaultRowHeight: null;
        const uniqueField: undefined;
    }
    namespace propTypes {
        const propertyLabel_1: PropTypes.Requireable<string>;
        export { propertyLabel_1 as propertyLabel };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const referenceList: PropTypes.Validator<(object | null | undefined)[]>;
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const renderMode: PropTypes.Validator<string>;
        const fieldMetadata_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { fieldMetadata_1 as fieldMetadata };
        export const type: PropTypes.Validator<string>;
        export const ruleClass: PropTypes.Validator<string>;
        export const name: PropTypes.Validator<string>;
        const parameters_1: PropTypes.Requireable<any[]>;
        export { parameters_1 as parameters };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        export const multiRecordDisplayAs: PropTypes.Validator<string>;
        export const allowTableEdit: PropTypes.Requireable<boolean>;
        const contextClass_1: PropTypes.Requireable<string>;
        export { contextClass_1 as contextClass };
        const defaultRowHeight_1: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        export { defaultRowHeight_1 as defaultRowHeight };
        const uniqueField_1: PropTypes.Requireable<string>;
        export { uniqueField_1 as uniqueField };
    }
}
export default SimpleTable;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map