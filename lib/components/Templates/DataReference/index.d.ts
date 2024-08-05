declare function DataReference(props: any): any;
declare namespace DataReference {
    namespace defaultProps {
        const label: undefined;
        const displayMode: undefined;
        const allowAndPersistChangesInReviewMode: boolean;
        const referenceType: string;
        const selectionMode: string;
        const displayAs: string;
        const contextClass: string;
        const ruleClass: string;
        const parameters: undefined;
        const hideLabel: boolean;
        const inline: boolean;
        const showPromotedFilters: boolean;
    }
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const allowAndPersistChangesInReviewMode_1: PropTypes.Requireable<boolean>;
        export { allowAndPersistChangesInReviewMode_1 as allowAndPersistChangesInReviewMode };
        const referenceType_1: PropTypes.Requireable<string>;
        export { referenceType_1 as referenceType };
        const selectionMode_1: PropTypes.Requireable<string>;
        export { selectionMode_1 as selectionMode };
        const displayAs_1: PropTypes.Requireable<string>;
        export { displayAs_1 as displayAs };
        const contextClass_1: PropTypes.Requireable<string>;
        export { contextClass_1 as contextClass };
        const ruleClass_1: PropTypes.Requireable<string>;
        export { ruleClass_1 as ruleClass };
        const parameters_1: PropTypes.Requireable<(PropTypes.InferProps<{}> | null | undefined)[]>;
        export { parameters_1 as parameters };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const inline_1: PropTypes.Requireable<boolean>;
        export { inline_1 as inline };
        const showPromotedFilters_1: PropTypes.Requireable<boolean>;
        export { showPromotedFilters_1 as showPromotedFilters };
    }
}
export default DataReference;
export const StyledAdvancedSearchContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map