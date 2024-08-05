declare function DeferLoad(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DeferLoad {
    namespace defaultProps {
        const isChildDeferLoad: boolean;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const name: PropTypes.Validator<string>;
        const isChildDeferLoad_1: PropTypes.Requireable<boolean>;
        export { isChildDeferLoad_1 as isChildDeferLoad };
    }
}
export default DeferLoad;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map