export default ActionButtons;
declare function ActionButtons(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace ActionButtons {
    namespace propTypes {
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const itemKey: PropTypes.Requireable<string>;
        const actionButtons: PropTypes.Validator<Object>;
        const disableAllButtons: PropTypes.Requireable<boolean>;
        const hasErrors: PropTypes.Requireable<boolean>;
        const setHasErrors: PropTypes.Validator<(...args: any[]) => any>;
        const setLoading: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const itemKey_1: null;
        export { itemKey_1 as itemKey };
        const disableAllButtons_1: boolean;
        export { disableAllButtons_1 as disableAllButtons };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map