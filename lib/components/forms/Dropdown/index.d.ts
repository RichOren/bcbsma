declare function Dropdown(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Dropdown {
    namespace defaultProps {
        const value: string;
        const placeholder: string;
        const validatemessage: string;
        const hideLabel: boolean;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const testId: null;
        const helperText: string;
        const datasource: never[];
        const listType: string;
        const additionalProps: {};
        const fieldMetadata: {};
        const displayMode: null;
        const onRecordChange: null;
        const formatter: string;
        const isTableFormatter: boolean;
        const hasSuggestions: boolean;
        const deferDatasource: boolean;
        const datasourceMetadata: null;
        const parameters: {};
        const columns: never[];
        const additionalInfo: null;
        const compositeKeys: undefined;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        export const label: PropTypes.Validator<string>;
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const datasource_1: PropTypes.Requireable<NonNullable<string | any[] | PropTypes.InferProps<{
            source: PropTypes.Requireable<any[]>;
        }> | null | undefined>>;
        export { datasource_1 as datasource };
        const listType_1: PropTypes.Requireable<string>;
        export { listType_1 as listType };
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const helperText_1: PropTypes.Requireable<string>;
        export { helperText_1 as helperText };
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
        const onRecordChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onRecordChange_1 as onRecordChange };
        const formatter_1: PropTypes.Requireable<string>;
        export { formatter_1 as formatter };
        const isTableFormatter_1: PropTypes.Requireable<boolean>;
        export { isTableFormatter_1 as isTableFormatter };
        const hasSuggestions_1: PropTypes.Requireable<boolean>;
        export { hasSuggestions_1 as hasSuggestions };
        const deferDatasource_1: PropTypes.Requireable<boolean>;
        export { deferDatasource_1 as deferDatasource };
        const datasourceMetadata_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { datasourceMetadata_1 as datasourceMetadata };
        const parameters_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { parameters_1 as parameters };
        const columns_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { columns_1 as columns };
        const additionalInfo_1: PropTypes.Requireable<PropTypes.InferProps<{
            content: PropTypes.Requireable<string>;
        }>>;
        export { additionalInfo_1 as additionalInfo };
        const compositeKeys_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { compositeKeys_1 as compositeKeys };
    }
}
export default Dropdown;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map