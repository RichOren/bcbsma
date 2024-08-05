/// <reference types="react" />
export interface OperatorType {
    userId?: string;
    userName?: string;
}
export interface CaseOperatorProps {
    getPConnect: () => object;
    label?: string;
    createLabel?: string;
    updateLabel?: string;
    resolveLabel?: string;
    createOperator?: OperatorType;
    updateOperator?: OperatorType;
    resolveOperator?: OperatorType;
    createDateTime?: string;
    updateDateTime?: string;
    resolveDateTime?: string;
    hideLabel?: boolean;
    defVal?: string;
    CreateUserID?: string;
    UpdateUserID?: string;
    ResolvedUserID?: string;
    displayMode?: 'DISPLAY_ONLY';
}
declare const _default: import("react").NamedExoticComponent<CaseOperatorProps>;
export default _default;
//# sourceMappingURL=index.d.ts.map