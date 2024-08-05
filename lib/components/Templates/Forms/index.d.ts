declare function FormTemplate(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace FormTemplate {
    namespace defaultProps {
        const label: undefined;
        const showLabel: undefined;
        const mode: undefined;
        const displayMode: null;
        const hideLabel: undefined;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const template: PropTypes.Validator<string>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const showLabel_1: PropTypes.Requireable<boolean>;
        export { showLabel_1 as showLabel };
        const mode_1: PropTypes.Requireable<string>;
        export { mode_1 as mode };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
    }
}
export default FormTemplate;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map