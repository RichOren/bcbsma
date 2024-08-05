import { useEffect, useRef, useState } from 'react';

import {
  ComboBox,
  RadioButtonGroup,
  RadioButton,
  Flex,
  useI18n,
  Input,
  getFocusables
} from '@pega/cosmos-react-core';

import type { Role, PageSectionsProps } from './PageSections.types';

interface FormProps
  extends Pick<PageSectionsProps['form'], 'roles' | 'currentRole' | 'renderer' | 'rendererProps'> {
  setSelectedRoleNameRef: (selectedRoleName?: string | undefined) => void;
}

export default ({
  roles,
  currentRole,
  renderer: Renderer,
  rendererProps,
  setSelectedRoleNameRef
}: FormProps) => {
  const contentRef = useRef<HTMLElement>(null);
  const t = useI18n();

  const [selectedRoleName, setSelectedRoleName] = useState<Role['name'] | undefined>(() => {
    if (roles) {
      return (currentRole ? roles.find(role => role.name === currentRole.name) : roles[0])?.name;
    }
  });

  let control: JSX.Element | null = null;

  if (roles) {
    const label = t('stakeholders_role');

    if (roles.length > 3) {
      const items = roles.map(role => {
        return {
          id: role.name,
          primary: role.name,
          selected: role.name === selectedRoleName
        };
      });

      const selected = items.find(item => item.selected);

      control = (
        <ComboBox
          label={label}
          selected={selected ? { items: { id: selected.id, text: selected.primary } } : undefined}
          menu={{
            mode: 'single-select',
            items,
            onItemClick: setSelectedRoleName
          }}
        />
      );
    } else {
      control = (
        <RadioButtonGroup
          label={label}
          name='role'
          inline
          onChange={e => {
            setSelectedRoleName(e.target.value);
          }}
        >
          {roles.map(role => (
            <RadioButton
              key={role.name}
              label={role.name}
              value={role.name}
              checked={role.name === selectedRoleName}
            />
          ))}
        </RadioButtonGroup>
      );
    }
  } else if (currentRole) {
    control = (
      <Input
        readOnly
        label={t('stakeholders_role')}
        value={currentRole.name}
        info={currentRole.description}
      />
    );
  }

  useEffect(() => {
    getFocusables(contentRef)[0]?.focus();
  }, []);

  useEffect(() => {
    if (!roles) return;
    setSelectedRoleNameRef(selectedRoleName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoleName]);

  return (
    <Flex container={{ direction: 'column', gap: 2 }} ref={contentRef}>
      {control}
      <Renderer {...rendererProps} selectedRoleName={selectedRoleName} />
    </Flex>
  );
};
