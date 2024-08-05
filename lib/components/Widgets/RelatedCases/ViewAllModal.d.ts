export default RelatedCasesModal;
declare function RelatedCasesModal({ label, cases, getPConnect, onAddRelatedCases, onRemoveRelatedCase }: {
    label: any;
    cases: any;
    getPConnect: any;
    onAddRelatedCases: any;
    onRemoveRelatedCase: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace RelatedCasesModal {
    namespace propTypes {
        const label: PropTypes.Validator<string>;
        const cases: PropTypes.Requireable<(object | null | undefined)[]>;
        const onAddRelatedCases: PropTypes.Validator<(...args: any[]) => any>;
        const onRemoveRelatedCase: PropTypes.Validator<(...args: any[]) => any>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const cases_1: never[];
        export { cases_1 as cases };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=ViewAllModal.d.ts.map