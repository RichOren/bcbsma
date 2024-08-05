declare function MultiReferenceReadonly(props: any): any;
declare namespace MultiReferenceReadonly {
    namespace defaultProps {
        const displayAs: string;
        const label: string;
        const hideLabel: boolean;
    }
    namespace propTypes {
        export const config: PropTypes.Validator<object>;
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const displayAs_1: PropTypes.Requireable<string>;
        export { displayAs_1 as displayAs };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
    }
}
export default MultiReferenceReadonly;
import PropTypes from "prop-types";
//# sourceMappingURL=MultiReferenceReadonly.d.ts.map