declare function Panel(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Panel {
    namespace defaultProps {
        const children: never[];
        const open: boolean;
    }
    namespace propTypes {
        const open_1: PropTypes.Requireable<boolean>;
        export { open_1 as open };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        export const closeCallback: PropTypes.Validator<(...args: any[]) => any>;
        export const hideCallback: PropTypes.Validator<(...args: any[]) => any>;
    }
}
export default Panel;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map