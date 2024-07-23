import type { FunctionComponent } from 'react';
import type { ComboBoxProps, NoChildrenProp } from '@pega/cosmos-react-core';
import type { ItemType } from '@pega/cosmos-react-rte/lib/components/DynamicContentEditor/DynamicContentEditor.types';
export interface FieldSelectorProps extends NoChildrenProp {
    /** Array of values for the combobox options. */
    itemList: ItemType[];
    /** Return selected item */
    updateSelection: (selectedItem: ItemType, label: ComboBoxProps['label']) => void;
    /** Default selected item */
    defaultSelection?: ItemType;
}
declare const FieldSelector: FunctionComponent<FieldSelectorProps & Pick<ComboBoxProps, 'label' | 'mode' | 'required' | 'placeholder'>>;
export default FieldSelector;
//# sourceMappingURL=FieldSelector.d.ts.map