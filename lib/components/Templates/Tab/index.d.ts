declare function TabContent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace TabContent {
    namespace defaultProps {
        const label: undefined;
        const showLabel: undefined;
        const useConfigurableLayout: boolean;
    }
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const template: PropTypes.Validator<string>;
        const showLabel_1: PropTypes.Requireable<boolean>;
        export { showLabel_1 as showLabel };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const useConfigurableLayout_1: PropTypes.Requireable<boolean>;
        export { useConfigurableLayout_1 as useConfigurableLayout };
    }
}
export default TabContent;
export const StyledTabContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map