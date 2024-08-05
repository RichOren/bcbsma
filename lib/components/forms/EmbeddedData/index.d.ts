declare function EmbeddedData(props: any): any;
declare namespace EmbeddedData {
    namespace defaultProps {
        const placeholder: string;
        const disabled: boolean;
        const required: boolean;
        const displayAs: string;
        const testId: null;
        const datasource: never[];
        const children: never[];
        const validatemessage: string;
        const displayMode: null;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const displayAs_1: PropTypes.Requireable<string>;
        export { displayAs_1 as displayAs };
        export const targetPage: PropTypes.Validator<NonNullable<NonNullable<string | {
            [x: string]: any;
        } | null | undefined>>>;
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        export const label: PropTypes.Validator<string>;
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        export const editable: PropTypes.Validator<boolean>;
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const datasource_1: PropTypes.Requireable<NonNullable<string | {
            [x: string]: any;
        } | null | undefined>>;
        export { datasource_1 as datasource };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
    }
}
export default EmbeddedData;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map