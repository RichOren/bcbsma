import type { Meta, StoryFn } from '@storybook/react';
import { useRef, useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Configuration,
  Flex,
  ModalManager,
  PopoverManager,
  TextArea,
  Toaster,
  useAutoResize,
  useConsolidatedRef,
  useI18n
} from '@pega/cosmos-react-core';
import DynamicContentEditor from './DynamicContentEditor';
import type { DynamicContentEditorProps, EditorState, ItemType } from '@pega/cosmos-react-rte';

import FieldSelector from './FieldSelector';
import type { FieldSelectorProps } from './FieldSelector';

export default {
  title: 'RTE/DynamicContentEditor',
  component: DynamicContentEditor
} as Meta;

export interface DynamicContentEditorStoryProps extends DynamicContentEditorProps {}

export const DynamicContentEditorDemo: StoryFn<Partial<DynamicContentEditorStoryProps>> = (
  args: Partial<DynamicContentEditorStoryProps>
) => {
  const [html, setHtml] = useState(
    '<p>Hi <pega-reference role="button" contenteditable="false" data-rule-type="field" name="CustomerName" data-rule-id="CustomerName" data-rule-namespace="XCompass">CustomerName</pega-reference><p>please check this <a href="https://google.com">link</a></p></p>'
  );
  const rteRef = useRef<EditorState>(null);

  const fieldItems: DynamicContentEditorProps['fieldItems'] = [
    {
      id: 'CustomerName',
      primary: 'CustomerName',
      namespace: 'XCompass',
      items: [
        {
          id: 'Locale',
          primary: 'Locale'
        },
        {
          id: 'Response Type',
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
  const [textAreaRef, resizeTextArea] = useAutoResize<HTMLTextAreaElement>(undefined, 100);
  const ref = useRef(null);
  const consolidatedRef = useConsolidatedRef(textAreaRef, ref);
  const handleShowHtml = () => {
    resizeTextArea();
    setHtml(rteRef.current?.getHtml() || '');
  };
  const t = useI18n();
  const [selectedField, setSelectedField] = useState<ItemType>({
    id: '',
    text: ''
  });

  const updateSelection: FieldSelectorProps['updateSelection'] = (selectedItem: ItemType) => {
    setSelectedField(selectedItem);
  };

  const onSubmit = useCallback(
    (insertField: (selectedItem: ItemType) => void) => {
      insertField(selectedField);
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
    <Configuration id='Preview'>
      <PopoverManager>
        <Toaster dismissAfter={5000}>
          <ModalManager>
            <Flex container={{ direction: 'column', gap: 2 }}>
              <Card>
                <CardContent>
                  <TextArea
                    value={html}
                    onChange={e => setHtml(e.target.value)}
                    autoResize
                    ref={consolidatedRef}
                  />
                </CardContent>
                <CardFooter>
                  <Button onClick={() => rteRef.current?.insertHtml(html.trim(), true)}>
                    Overwrite RTE with new HTML
                  </Button>
                </CardFooter>
              </Card>
              <DynamicContentEditor
                defaultValue={html}
                onImageAdded={onImageAdded}
                ref={rteRef}
                label='Dynamic content editor 3'
                toolbar={['inline-styling', 'lists', 'indentation', 'links', 'images']}
                form={{ onSubmit, dynamicContentPicker }}
                onActiveFieldChange={onActiveFieldChange}
                fieldItems={fieldItems}
              />
              <Flex container={{ gap: 1 }}>
                <Button onClick={() => handleShowHtml()}>Show HTML</Button>
              </Flex>
            </Flex>
          </ModalManager>
        </Toaster>
      </PopoverManager>
    </Configuration>
  );
};
