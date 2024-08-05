declare function TwoColumnPage(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace TwoColumnPage {
    namespace propTypes {
        const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        const title: PropTypes.Validator<string>;
        const templateCol: PropTypes.Requireable<string>;
        const icon: PropTypes.Requireable<string>;
        const useConfigurableLayout: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const templateCol_1: string;
        export { templateCol_1 as templateCol };
        const icon_1: string;
        export { icon_1 as icon };
        const useConfigurableLayout_1: boolean;
        export { useConfigurableLayout_1 as useConfigurableLayout };
    }
}
export default TwoColumnPage;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map