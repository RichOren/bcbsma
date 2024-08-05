export default ErrorBoundary;
declare function ErrorBoundary(props: any): import("react/jsx-runtime").JSX.Element | null;
declare namespace ErrorBoundary {
    namespace propTypes {
        const getPConnect: PropTypes.Requireable<(...args: any[]) => any>;
        const isInternalError: PropTypes.Requireable<boolean>;
        const messages: PropTypes.Requireable<(string | null | undefined)[]>;
        const errorDetails: PropTypes.Requireable<(object | null | undefined)[]>;
    }
    namespace defaultProps {
        const getPConnect_1: null;
        export { getPConnect_1 as getPConnect };
        const isInternalError_1: boolean;
        export { isInternalError_1 as isInternalError };
        const messages_1: never[];
        export { messages_1 as messages };
        const errorDetails_1: undefined;
        export { errorDetails_1 as errorDetails };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map