declare function FieldGroup({ children, heading, showHeading, instructions, collapsible, displayMode, type, getPConnect, ...restProps }: {
    [x: string]: any;
    children: any;
    heading: any;
    showHeading: any;
    instructions: any;
    collapsible: any;
    displayMode: any;
    type: any;
    getPConnect: any;
}): import("react/jsx-runtime").JSX.Element | null | undefined;
declare namespace FieldGroup {
    namespace defaultProps {
        const instructions: string;
        const showHeading: boolean;
        const collapsible: boolean;
    }
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const heading: PropTypes.Validator<string>;
        const showHeading_1: PropTypes.Requireable<boolean>;
        export { showHeading_1 as showHeading };
        const instructions_1: PropTypes.Requireable<string>;
        export { instructions_1 as instructions };
        const collapsible_1: PropTypes.Requireable<boolean>;
        export { collapsible_1 as collapsible };
    }
}
export default FieldGroup;
export const StyledGroupContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map