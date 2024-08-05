export class PConnect extends Component<any, any, any> {
    static propTypes: {
        getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        additionalProps: PropTypes.Requireable<PropTypes.InferProps<{
            noLabel: PropTypes.Requireable<boolean>;
            readOnly: PropTypes.Requireable<boolean>;
        }>>;
        validatemessage: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        additionalProps: {};
        validatemessage: string;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
    };
    c11nEnv: any;
    Control: any;
    componentDidMount(): void;
    componentDidCatch(error: any, info: any): void;
    componentWillUnmount(): void;
    createChildren(): any;
    getKey(): string;
    render(): import("react/jsx-runtime").JSX.Element;
}
declare function _default(): typeof PConnect;
export default _default;
import { Component } from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=react_pconnect.d.ts.map