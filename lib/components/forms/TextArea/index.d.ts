declare function TextArea(props: any): any;
declare namespace TextArea {
    namespace defaultProps {
        const value: string;
        const placeholder: string;
        const validatemessage: string;
        const helperText: string;
        const hideLabel: boolean;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const testId: null;
        const displayMode: null;
        const fieldMetadata: {};
        const additionalProps: {};
        const formatter: string;
        const isTableFormatter: boolean;
        const hasSuggestions: boolean;
    }
    namespace propTypes {
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        export const label: PropTypes.Validator<string>;
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const helperText_1: PropTypes.Requireable<string>;
        export { helperText_1 as helperText };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const fieldMetadata_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { fieldMetadata_1 as fieldMetadata };
        const additionalProps_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalProps_1 as additionalProps };
        const formatter_1: PropTypes.Requireable<string>;
        export { formatter_1 as formatter };
        const isTableFormatter_1: PropTypes.Requireable<boolean>;
        export { isTableFormatter_1 as isTableFormatter };
        const hasSuggestions_1: PropTypes.Requireable<boolean>;
        export { hasSuggestions_1 as hasSuggestions };
    }
}
export default TextArea;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map