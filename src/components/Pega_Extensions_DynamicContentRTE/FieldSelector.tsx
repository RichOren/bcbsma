import { useMemo, useState, useCallback } from 'react';
import type { ChangeEvent, FunctionComponent } from 'react';

import { ComboBox, createStringMatcher, useI18n } from '@pega/cosmos-react-core';
import type { ComboBoxProps, MenuItemProps, NoChildrenProp } from '@pega/cosmos-react-core';
import type { ItemType } from '@pega/cosmos-react-rte/lib/components/DynamicContentEditor/DynamicContentEditor.types';

export interface FieldSelectorProps extends NoChildrenProp {
  /** Array of values for the combobox options. */
  itemList: ItemType[];
  /** Return selected item */
  updateSelection: (selectedItem: ItemType, label: ComboBoxProps['label']) => void;
  /** Default selected item */
  defaultSelection?: ItemType;
}

const FieldSelector: FunctionComponent<
  FieldSelectorProps & Pick<ComboBoxProps, 'label' | 'mode' | 'required' | 'placeholder'>
> = ({
  itemList,
  label,
  mode = 'single-select',
  required = false,
  updateSelection,
  placeholder,
  defaultSelection
}) => {
  const t = useI18n();

  const [filterValue, setFilterValue] = useState('');
  const [items, setItems] = useState(() => {
    return itemList.map(item => {
      return {
        id: item.id,
        primary: item.text,
        namespace: item.namespace ?? '',
        selected: defaultSelection ? defaultSelection.id === item.id : false
      };
    });
  });

  const filterRegex = createStringMatcher(filterValue, 'contains');
  const itemsToRender = useMemo(() => {
    return filterRegex ? items.filter(({ primary }) => filterRegex.test(primary)) : items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue, items]);

  const clearSelection = () => {
    setItems(curr => {
      return curr?.map(item => {
        return {
          ...item,
          selected: false
        };
      });
    });
  };

  const selectItem = useCallback(
    (id: MenuItemProps['id']) => {
      setFilterValue('');
      setItems(
        curr =>
          curr?.map(item => {
            if (item.id === id) {
              return {
                ...item,
                selected: true
              };
            }
            return { ...item, selected: false };
          })
      );
      const selectedItem = items?.find(item => item.id === id);
      if (selectedItem?.id)
        updateSelection(
          {
            id: selectedItem.id,
            text: selectedItem.primary,
            namespace: selectedItem.namespace
          },
          label
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterValue, items]
  );

  const selected = useMemo(() => {
    return items?.find(item => item.selected);
  }, [items]);

  const comboBoxProps: ComboBoxProps = {
    label,
    placeholder,
    mode,
    value: filterValue,
    selected: selected
      ? {
          items: {
            id: selected.id,
            text: selected.primary
          }
        }
      : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) clearSelection();
      setFilterValue(e.target.value);
    },
    onBlur: () => setFilterValue(''),
    menu: {
      items: itemsToRender,
      accent: filterRegex,
      onItemClick: selectItem,
      emptyText: t('no_items')
    },
    required
  };
  return <ComboBox {...comboBoxProps} />;
};

export default FieldSelector;
