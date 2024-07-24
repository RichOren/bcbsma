import { Configuration, Flex, useI18n, registerIcon, FormField } from '@pega/cosmos-react-core';
import DynamicContentEditor from './DynamicContentEditor';
import type { DynamicContentEditorProps, EditorState, ItemType } from '@pega/cosmos-react-rte';
import { useRef, useState, useCallback, useEffect } from 'react';
import FieldSelector from './FieldSelector';
import type { FieldSelectorProps } from './FieldSelector';
import * as Code from '@pega/cosmos-react-core/lib/components/Icon/icons/code.icon';

type DynamicContentRTEProps = {
  label: string;
  value: string;
};
registerIcon(Code);

const PegaExtensionsDynamicContentRTE = (props: DynamicContentRTEProps) => {
  const { label, value } = props;

  const rteRef = useRef<EditorState>(null);

  useEffect(() => {
    rteRef.current?.insertHtml(value, true);
  }, [value]);

  const fieldItems: DynamicContentEditorProps['fieldItems'] = [
    {
      id: 'Param.CustomerName',
      primary: 'CustomerName',
      namespace: 'XCompass',
      items: [
        {
          id: 'Locale',
          primary: 'Locale'
        },
        {
          id: label,
          primary: 'Response Type',
          items: [
            {
              id: 'B',
              label: 'B',
              items: [{ id: 'Reply to', primary: 'Reply to' }]
            },
            { id: 'Forward to', primary: 'Forward to' }
          ]
        }
      ]
    },
    { id: 'Address', primary: 'Address', namespace: 'PegaPlatform' },
    { id: 'Locality', primary: 'Locality', namespace: 'PegaPlatform' },
    { id: 'Country', primary: 'Country', namespace: 'XCompass' },
    { id: 'Region', primary: 'Region', namespace: 'PegaPlatform' },
    { id: 'Occupation', primary: 'Occupation', namespace: 'PegaPlatform' },
    { id: 'City', primary: 'City' },
    { id: 'Colony', primary: 'Colony' },
    { id: 'Lastname', primary: 'Lastname' },
    { id: 'Preference', primary: 'Preference' },
    { id: 'Currency', primary: 'Currency' },
    { id: 'Iconname', primary: 'Iconname' }
  ];

  const onImageAdded = (image: File, id: string) => {
    const src = URL.createObjectURL(image);
    rteRef.current?.appendImage({ src, alt: image.name }, id);
  };

  const t = useI18n();
  const [selectedField, setSelectedField] = useState<ItemType>({
    id: '',
    text: ''
  });

  const updateSelection: FieldSelectorProps['updateSelection'] = (selectedItem: ItemType) => {
    setSelectedField(selectedItem);
  };

  function convertString(input: string): string {
    // Use DOMParser to parse the input string as HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');

    // Get all pega-reference elements
    const references = doc.querySelectorAll('pega-reference');

    // Loop through each reference and update it
    references.forEach(reference => {
      const name = reference.getAttribute('data-rule-id') || '';
      const newReference = document.createElement('pega:reference');
      newReference.setAttribute('name', name);
      reference.replaceWith(newReference);
    });

    // Return the updated HTML as a string
    return doc.body.innerHTML;
  }

  const onSubmit = useCallback(
    (insertField: (field: ItemType) => void) => {
      insertField(selectedField);
      console.log(convertString(rteRef.current?.getHtml() ?? ''));
    },
    [selectedField]
  );

  const dynamicContentPicker = (
    <Flex
      container={{
        gap: 2,
        direction: 'column'
      }}
    >
      <FieldSelector
        itemList={[
          { id: 'CustomerName', text: 'CustomerName', namespace: 'XCompass' },
          { id: 'Address', text: 'Address', namespace: 'PegaPlatform' },
          { id: 'Locality', text: 'Locality', namespace: 'PegaPlatform' },
          { id: 'Country', text: 'Country', namespace: 'XCompass' },
          { id: 'Region', text: 'Region', namespace: 'PegaPlatform' },
          { id: 'Occupation', text: 'Occupation', namespace: 'PegaPlatform' }
        ]}
        key={selectedField?.id}
        label='Field'
        updateSelection={updateSelection}
        placeholder={t('select')}
        defaultSelection={selectedField}
      />
    </Flex>
  );
  const onActiveFieldChange = (field: ItemType) => setSelectedField(field);

  return (
    <Configuration>
      <FormField>
        <Flex container={{ direction: 'column', gap: 2 }}>
          <DynamicContentEditor
            onImageAdded={onImageAdded}
            ref={rteRef}
            label={label}
            toolbar={['inline-styling', 'lists', 'indentation', 'links', 'images']}
            form={{ onSubmit, dynamicContentPicker }}
            onActiveFieldChange={onActiveFieldChange}
            fieldItems={fieldItems}
          />
        </Flex>
      </FormField>
    </Configuration>
  );
};

export default PegaExtensionsDynamicContentRTE;
