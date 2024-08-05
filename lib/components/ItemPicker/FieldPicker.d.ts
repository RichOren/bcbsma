declare function FieldPicker({ expandable, selectable, filter, ...restProps }: {
    [x: string]: any;
    expandable: any;
    selectable: any;
    filter: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace FieldPicker {
    const defaultProps: {
        required: boolean;
        placeholder: string;
        multiselect: boolean;
        defaultSelection: string;
        itemTypes: undefined;
        onRemove: () => void;
    };
    const propTypes: {
        label: import("prop-types").Validator<string>;
        required: import("prop-types").Requireable<boolean>;
        placeholder: import("prop-types").Requireable<string>;
        multiselect: import("prop-types").Requireable<boolean>;
        defaultSelection: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
        items: import("prop-types").Validator<any[]>;
        itemTypes: import("prop-types").Requireable<NonNullable<import("prop-types").InferProps<{
            name: import("prop-types").Requireable<string>;
            key: import("prop-types").Requireable<string>;
            convertToMenuItem: import("prop-types").Validator<(...args: any[]) => any>;
            fetchItems: import("prop-types").Requireable<(...args: any[]) => any>;
            getItems: import("prop-types").Requireable<(...args: any[]) => any>;
        }> | (import("prop-types").InferProps<{
            name: import("prop-types").Requireable<string>;
            key: import("prop-types").Requireable<string>;
            convertToMenuItem: import("prop-types").Validator<(...args: any[]) => any>;
            fetchItems: import("prop-types").Requireable<(...args: any[]) => any>;
            getItems: import("prop-types").Requireable<(...args: any[]) => any>;
        }> | null | undefined)[] | null | undefined>>;
        onSelect: import("prop-types").Validator<(...args: any[]) => any>;
        onRemove: import("prop-types").Requireable<(...args: any[]) => any>;
        testId: import("prop-types").Requireable<string>;
    };
}
export default FieldPicker;
//# sourceMappingURL=FieldPicker.d.ts.map