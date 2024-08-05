declare function ItemPicker({ label, required, allowClearing, placeholder, multiselect, defaultSelection, items, itemTypes, onSelect, onRemove, testId, ...restProps }: {
    [x: string]: any;
    label: any;
    required?: boolean | undefined;
    allowClearing?: boolean | undefined;
    placeholder: any;
    multiselect?: boolean | undefined;
    defaultSelection: any;
    items: any;
    itemTypes?: undefined;
    onSelect: any;
    onRemove?: (() => void) | undefined;
    testId: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ItemPicker {
    namespace defaultProps {
        const required: boolean;
        const placeholder: string;
        const multiselect: boolean;
        const defaultSelection: string;
        const itemTypes: undefined;
        function onRemove(): void;
    }
    namespace propTypes {
        export const label: PropTypes.Validator<string>;
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        const multiselect_1: PropTypes.Requireable<boolean>;
        export { multiselect_1 as multiselect };
        const defaultSelection_1: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        export { defaultSelection_1 as defaultSelection };
        export const items: PropTypes.Validator<any[]>;
        const itemTypes_1: PropTypes.Requireable<NonNullable<PropTypes.InferProps<{
            name: PropTypes.Requireable<string>;
            key: PropTypes.Requireable<string>;
            convertToMenuItem: PropTypes.Validator<(...args: any[]) => any>;
            fetchItems: PropTypes.Requireable<(...args: any[]) => any>;
            getItems: PropTypes.Requireable<(...args: any[]) => any>;
        }> | (PropTypes.InferProps<{
            name: PropTypes.Requireable<string>;
            key: PropTypes.Requireable<string>;
            convertToMenuItem: PropTypes.Validator<(...args: any[]) => any>;
            fetchItems: PropTypes.Requireable<(...args: any[]) => any>;
            getItems: PropTypes.Requireable<(...args: any[]) => any>;
        }> | null | undefined)[] | null | undefined>>;
        export { itemTypes_1 as itemTypes };
        export const onSelect: PropTypes.Validator<(...args: any[]) => any>;
        const onRemove_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onRemove_1 as onRemove };
        export const testId: PropTypes.Requireable<string>;
    }
}
export default ItemPicker;
import PropTypes from "prop-types";
//# sourceMappingURL=ItemPicker.d.ts.map