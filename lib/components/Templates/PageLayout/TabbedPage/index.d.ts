export default TabbedPage;
declare function TabbedPage(props: any): any;
declare namespace TabbedPage {
    namespace defaultProps {
        const icon: string;
        const showHeader: boolean;
    }
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const title: PropTypes.Validator<string>;
        const icon_1: PropTypes.Requireable<string>;
        export { icon_1 as icon };
        const showHeader_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { showHeader_1 as showHeader };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map