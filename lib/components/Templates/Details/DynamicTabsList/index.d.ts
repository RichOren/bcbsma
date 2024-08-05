export default DynamicTabs;
declare function DynamicTabs(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DynamicTabs {
    namespace defaultProps {
        const label: undefined;
        const showLabel: boolean;
    }
    namespace propTypes {
        export const referenceList: PropTypes.Validator<string>;
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const showLabel_1: PropTypes.Requireable<boolean>;
        export { showLabel_1 as showLabel };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map