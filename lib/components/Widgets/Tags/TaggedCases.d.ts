export default TaggedCases;
declare function TaggedCases({ tag, getPConnect, taggedCasesData }: {
    tag: any;
    getPConnect: any;
    taggedCasesData: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace TaggedCases {
    namespace propTypes {
        const tag: PropTypes.Validator<string>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const taggedCasesData: PropTypes.Validator<{
            [x: string]: any;
        }>;
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=TaggedCases.d.ts.map