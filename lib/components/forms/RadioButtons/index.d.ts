export default RadioButtons;
declare function RadioButtons(props: any): any;
declare namespace RadioButtons {
    namespace defaultProps {
        const value: string;
        const validatemessage: string;
        const helperText: string;
        const hideLabel: boolean;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const align: string;
        const testId: null;
        const datasource: never[];
        const listType: string;
        const additionalProps: {};
        const fieldMetadata: {};
        const displayMode: null;
        const inline: boolean;
        const placeholder: null;
        const formatter: string;
        const isTableFormatter: boolean;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        export const label: PropTypes.Validator<string>;
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const datasource_1: PropTypes.Requireable<any[]>;
        export { datasource_1 as datasource };
        const listType_1: PropTypes.Requireable<string>;
        export { listType_1 as listType };
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const helperText_1: PropTypes.Requireable<string>;
        export { helperText_1 as helperText };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const align_1: PropTypes.Requireable<string>;
        export { align_1 as align };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const additionalProps_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalProps_1 as additionalProps };
        const fieldMetadata_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { fieldMetadata_1 as fieldMetadata };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const inline_1: PropTypes.Requireable<boolean>;
        export { inline_1 as inline };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        const formatter_1: PropTypes.Requireable<string>;
        export { formatter_1 as formatter };
        const isTableFormatter_1: PropTypes.Requireable<boolean>;
        export { isTableFormatter_1 as isTableFormatter };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map