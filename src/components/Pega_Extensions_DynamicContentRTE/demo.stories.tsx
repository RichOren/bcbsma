import type { Meta, StoryFn } from '@storybook/react';
import { useRef, useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Checkbox,
  Configuration,
  Flex,
  ModalManager,
  PopoverManager,
  Table,
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

  let corrHTML = '';
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
    (insertField: (selectedItem: ItemType) => void) => {
      insertField(selectedField);
      corrHTML = convertString(rteRef.current?.getHtml() ?? '');
      console.log(corrHTML);
    },
    [selectedField]
  );

  const tableData = [
    {
      id: '1234',
      name: 'Jane Smith 2',
      dob: '12/31/1990',
      address: 'Boston, MA',
      email: 'jsmith@email.com',
      balance: '$2,200'
    },
    {
      id: '5678',
      name: 'Joe Smith',
      dob: '01/01/1980',
      address: <Checkbox label='Validate'></Checkbox>,
      email: 'joe.smith@email.com',
      balance: '$1,350'
    },
    {
      id: '0000',
      name: 'Mary Lou',
      dob: '06/15/1985',
      address: '100 Main Street, Springfield',
      email: '',
      balance: '-$175'
    }
  ];
  const columns = [
    { renderer: 'id', label: 'ID' },
    { renderer: 'name', label: 'Name' },
    { renderer: 'dob', label: 'Date of Birth' },
    { renderer: 'address', label: 'Address', align: 'center' },
    { renderer: 'email', label: 'Email' },
    { renderer: 'balance', label: 'Account Balance', align: 'right' }
  ];

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
                initOptions={{
                  pasteDataImages: false,
                  textPatterns: false,
                  initInstanceCallback: editor => {
                    console.log(`The ${editor} command was fired.`, editor);
                  }
                }}
                label='Dynamic content editor 3'
                toolbar={['inline-styling', 'lists', 'indentation', 'links', 'images']}
                form={{ onSubmit, dynamicContentPicker }}
                onActiveFieldChange={onActiveFieldChange}
                fieldItems={fieldItems}
              />
              <Flex container={{ gap: 1 }}>
                <Button onClick={() => handleShowHtml()}>Show HTML</Button>
              </Flex>
              <Table
                title='Accounts'
                hoverHighlight={false}
                loading={false}
                loadingMessage='Loading data'
                data={tableData}
                // @ts-ignore
                columns={columns}
              />
            </Flex>
          </ModalManager>
        </Toaster>
      </PopoverManager>
    </Configuration>
  );
};
