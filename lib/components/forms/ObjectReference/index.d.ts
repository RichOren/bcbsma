declare function ObjectReference(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace ObjectReference {
    namespace defaultProps {
        const label: undefined;
        const displayMode: undefined;
        const allowAndPersistChangesInReviewMode: boolean;
        const mode: string;
        const parameters: undefined;
        const hideLabel: boolean;
        const inline: boolean;
        const showPromotedFilters: boolean;
        const additionalFields: undefined;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const allowAndPersistChangesInReviewMode_1: PropTypes.Requireable<boolean>;
        export { allowAndPersistChangesInReviewMode_1 as allowAndPersistChangesInReviewMode };
        const mode_1: PropTypes.Requireable<string>;
        export { mode_1 as mode };
        const parameters_1: PropTypes.Requireable<(PropTypes.InferProps<{}> | null | undefined)[]>;
        export { parameters_1 as parameters };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const additionalFields_1: PropTypes.Requireable<(PropTypes.InferProps<{
            source: PropTypes.Requireable<string>;
            target: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        export { additionalFields_1 as additionalFields };
        const inline_1: PropTypes.Requireable<boolean>;
        export { inline_1 as inline };
        const showPromotedFilters_1: PropTypes.Requireable<boolean>;
        export { showPromotedFilters_1 as showPromotedFilters };
    }
}
export default ObjectReference;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map