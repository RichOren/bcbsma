declare function SingleReferenceReadonly(props: any): any;
declare namespace SingleReferenceReadonly {
    namespace defaultProps {
        const displayAs: string;
        const activeViewRuleClass: string;
        const displayMode: string;
        const type: string;
        const referenceType: string;
        const label: string;
        const hideLabel: boolean;
        const dataRelationshipContext: null;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const displayAs_1: PropTypes.Requireable<string>;
        export { displayAs_1 as displayAs };
        const activeViewRuleClass_1: PropTypes.Requireable<string>;
        export { activeViewRuleClass_1 as activeViewRuleClass };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const type_1: PropTypes.Requireable<string>;
        export { type_1 as type };
        const referenceType_1: PropTypes.Requireable<string>;
        export { referenceType_1 as referenceType };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const dataRelationshipContext_1: PropTypes.Requireable<string>;
        export { dataRelationshipContext_1 as dataRelationshipContext };
    }
}
export default SingleReferenceReadonly;
import PropTypes from "prop-types";
//# sourceMappingURL=SingleReferenceReadonly.d.ts.map