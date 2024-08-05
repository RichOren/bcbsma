declare function ListPage({ getPConnect, parameters, enableGetNextWork, localeReference, enableGenAICoach, coaches }: {
    getPConnect: any;
    parameters: any;
    enableGetNextWork: any;
    localeReference: any;
    enableGenAICoach: any;
    coaches?: any[] | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ListPage {
    namespace defaultProps {
        const parameters: undefined;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const parameters_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { parameters_1 as parameters };
    }
}
export default ListPage;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map