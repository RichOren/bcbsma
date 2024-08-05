declare function SimpleComboBox(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SimpleComboBox {
    namespace defaultProps {
        const items: never[];
        const value: string;
    }
    namespace propTypes {
        const items_1: PropTypes.Requireable<any[]>;
        export { items_1 as items };
        export const emptyText: PropTypes.Validator<string>;
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        export const itemsKeyProp: PropTypes.Validator<string>;
        export const itemsValueProp: PropTypes.Validator<string>;
        export const onRecordChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
export default SimpleComboBox;
import PropTypes from "prop-types";
//# sourceMappingURL=SimpleComboBox.d.ts.map