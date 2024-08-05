declare function CategorySubPage(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace CategorySubPage {
    namespace defaultProps {
        const icon: string;
        const title: string;
        const menuHeading: string;
        const actions: never[];
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const datasource: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            source: PropTypes.Requireable<(PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                viewClass: PropTypes.Requireable<string>;
                viewName: PropTypes.Requireable<string>;
                viewContext: PropTypes.Requireable<string>;
            }> | null | undefined)[]>;
        }>>>;
        const actions_1: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        export { actions_1 as actions };
        const title_1: PropTypes.Requireable<string>;
        export { title_1 as title };
        const menuHeading_1: PropTypes.Requireable<string>;
        export { menuHeading_1 as menuHeading };
        const icon_1: PropTypes.Requireable<string>;
        export { icon_1 as icon };
    }
}
export default CategorySubPage;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map