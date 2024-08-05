import {
  Configuration,
  Flex,
  useI18n,
  registerIcon,
  FormField,
  useToaster
} from '@pega/cosmos-react-core';
import DynamicContentEditor from './DynamicContentEditor';
import type { DynamicContentEditorProps, EditorState, ItemType } from '@pega/cosmos-react-rte';
import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import FieldSelector from './FieldSelector';
import type { FieldSelectorProps } from './FieldSelector';
import * as Code from '@pega/cosmos-react-core/lib/components/Icon/icons/code.icon';
import handleEvent from './utils/event-utils';

type DynamicContentRTEProps = {
  label: string;
  value: string;
  getPConnect: any;
  fieldMetadata?: any;
};
registerIcon(Code);

const PegaExtensionsDynamicContentRTE = (props: DynamicContentRTEProps) => {
  const { label, value, getPConnect, fieldMetadata } = props;
  const pConn = getPConnect();
  const { enableRTEImageAttachments = false } =
    (window as any).PCore.getEnvironmentInfo().environmentInfoObject?.features?.form || {};
  const rteRef = useRef<EditorState>(null);
  const toasterContext = useToaster();
  const actionSequencer = useMemo(() => (window as any).PCore.getActionsSequencer(), []);
  const actionsApi = pConn.getActionsApi();
  const fieldAdditionalInfo = fieldMetadata?.additionalInformation;
  const additionalInfo = fieldAdditionalInfo
    ? {
        content: fieldAdditionalInfo
      }
    : undefined;
  function reverseConvertString(input: string): string {
    // Use DOMParser to parse the input string as HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');

    // Get all pega:reference elements
    const references = doc.querySelectorAll('pega\\:reference');

    // Loop through each reference and update it
    references.forEach(reference => {
      const name = reference.getAttribute('name') || '';
      const newReference = document.createElement('pega-reference');
      newReference.setAttribute('role', 'button');
      newReference.setAttribute('contenteditable', 'false');
      newReference.setAttribute('data-rule-type', 'field');
      newReference.setAttribute('data-rule-id', name);
      newReference.setAttribute('data-rule-namespace', 'XCompass'); // or PegaPlatform, depending on the context
      newReference.textContent = name;
      reference.replaceWith(newReference);
    });

    // Return the updated HTML as a string
    return doc.body.innerHTML;
  }

  useEffect(() => {
    const outputString = reverseConvertString(value);
    console.log(outputString);
    if (rteRef.current) {
      const editorValue = rteRef.current?.insertHtml(value, true);
      const property = pConn.getStateProps().value;
      if (editorValue === null || editorValue === undefined) {
        pConn.getValidationApi().validate(editorValue);
      }
      if (editorValue !== null && editorValue !== undefined && value !== editorValue) {
        handleEvent(actionsApi, 'change', property, editorValue);
      }
    }
  }, [actionsApi, pConn, value]);

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

  /* const onImageAdded = (image: File, id: string) => {
    const src = URL.createObjectURL(image);
    rteRef.current?.appendImage({ src, alt: image.name }, id);
  }; */

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

  useEffect(() => {
    const sConvertString = convertString(value);
    console.log(sConvertString);
    const editorValue = sConvertString;

    if (editorValue === null || editorValue === undefined) {
      pConn.getValidationApi().validate(editorValue, '.CorrText');
    }
    if (editorValue !== null && editorValue !== undefined && value !== editorValue) {
      // pConn.setValue('.corrHTML', editorValue);
      handleEvent(actionsApi, 'change', '.CorrText', editorValue);
    }
  }, [actionsApi, pConn, value]);

  const handleBlur = () => {
    if (rteRef.current) {
      const editorValue = rteRef.current.getHtml();
      const property = pConn.getStateProps().value;
      if (!editorValue) {
        pConn.getValidationApi().validate(editorValue);
      }
      if (value !== editorValue) {
        handleEvent(actionsApi, 'changeNblur', property, editorValue);
      }
    }
  };

  const onSubmit = useCallback(
    (insertField: (field: ItemType) => void) => {
      insertField(selectedField);
      convertString(rteRef.current?.getHtml() ?? '');
    },

    [selectedField]
  );

  const onImageAdded = (image: any, id: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (enableRTEImageAttachments) {
        actionSequencer.registerBlockingAction(pConn.getContextName()).then(() => {
          (window as any).PCore.getAttachmentUtils()
            .uploadAttachment(
              image,
              () => {},
              () => {},
              pConn.getContextName()
            )
            .then((response: any) => {
              const relativePath = (window as any).PCore.getAttachmentUtils().getAttachmentURL(
                response.ID
              );
              rteRef.current?.appendImage(
                { src: relativePath, alt: image.name, attachmentId: response.ID },
                id
              );
              const editorValue = rteRef.current?.getHtml();
              const property = pConn.getStateProps().value;
              handleEvent(actionsApi, 'change', property, editorValue);
              actionSequencer.deRegisterBlockingAction(pConn.getContextName()).catch(() => {});
            })
            .catch(() => {
              rteRef.current?.appendImage({ src: '', alt: '' }, id);
              const uploadFailMsg = pConn.getLocalizedValue('Upload failed');
              toasterContext.push({
                content: uploadFailMsg
              });
              actionSequencer.cancelDeferredActionsOnError(pConn.getContextName());
            });
        });
      } else {
        rteRef.current?.appendImage({ src: reader.result as string, alt: image.name }, id);
      }
    };
    reader.readAsDataURL(image);
  };

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
            onBlur={handleBlur}
            additionalInfo={additionalInfo}
          />
        </Flex>
      </FormField>
    </Configuration>
  );
};

export default PegaExtensionsDynamicContentRTE;
