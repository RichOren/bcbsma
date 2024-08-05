declare function BannerPage(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace BannerPage {
    namespace propTypes {
        const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        const layout: PropTypes.Requireable<string>;
        const heading: PropTypes.Requireable<string>;
        const message: PropTypes.Requireable<string>;
        const imageTheme: PropTypes.Requireable<string>;
        const backgroundImage: PropTypes.Requireable<string>;
        const backgroundColor: PropTypes.Requireable<string>;
        const tintImage: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const layout_1: string;
        export { layout_1 as layout };
        const heading_1: string;
        export { heading_1 as heading };
        const message_1: string;
        export { message_1 as message };
        const imageTheme_1: string;
        export { imageTheme_1 as imageTheme };
        const backgroundImage_1: string;
        export { backgroundImage_1 as backgroundImage };
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        const tintImage_1: boolean;
        export { tintImage_1 as tintImage };
    }
}
export default BannerPage;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map