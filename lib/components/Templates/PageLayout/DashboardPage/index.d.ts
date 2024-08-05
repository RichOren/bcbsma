declare function DashboardPage(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DashboardPage {
    namespace propTypes {
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const title: PropTypes.Validator<string>;
        const icon: PropTypes.Requireable<string>;
        const fitToViewport: PropTypes.Requireable<boolean>;
        const filterPosition: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const icon_1: string;
        export { icon_1 as icon };
        const fitToViewport_1: boolean;
        export { fitToViewport_1 as fitToViewport };
        const filterPosition_1: string;
        export { filterPosition_1 as filterPosition };
    }
}
export default DashboardPage;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map