import type { ReactNode } from 'react';

import { hasProp } from '@pega/cosmos-react-core';
import type { TestIdProp } from '@pega/cosmos-react-core';
import type {
  MenuGroupProps,
  MenuItemProps
} from '@pega/cosmos-react-core/lib/components/Menu/Menu.types';

import type { EditorProps } from '@pega/cosmos-react-rte';

export type ItemType = {
  id: string;
  text: string;
  namespace?: string;
};

export type FieldMenuItem = MenuItemProps & {
  namespace?: string;
  items?: FieldItems[];
};

export type FieldMenuGroup = MenuGroupProps & {
  namespace?: string;
  items?: FieldItems[];
};

export type FieldItems = FieldMenuItem | FieldMenuGroup;

export const isFieldMenuItem = (item: FieldItems): item is FieldMenuItem =>
  hasProp(item, 'primary');

export interface DynamicContentEditorProps extends EditorProps, TestIdProp {
  /** Insert field form */
  form: {
    onSubmit: (insertField: (selectedField: ItemType) => void) => void;
    dynamicContentPicker: ReactNode;
  };
  onActiveFieldChange: (field: ItemType) => void;
  /** Property selection array */
  fieldItems?: FieldItems[];
  defaultValue?: string;
  onBlur?: () => void;
}

export interface DynamicContentEditorContextProps extends DynamicContentEditorProps {
  updateProperties?: (selectedfield: ItemType) => void;
}
