import { forwardRef, useRef, useEffect, useState } from 'react';
import type { FunctionComponent, PropsWithoutRef } from 'react';
import styled from 'styled-components';
import type { Bookmark, Editor as TinyMCEEditor, EditorSelection } from 'tinymce';

import {
  Button,
  defaultThemeProp,
  Menu,
  menuHelpers,
  Modal,
  Popover,
  StyledPopover,
  useModalManager,
  useConsolidatedRef,
  useI18n,
  useUID,
  useTestIds,
  withTestIds
} from '@pega/cosmos-react-core';
import type { ForwardProps, ModalMethods, PropsWithDefaults } from '@pega/cosmos-react-core';
import { getKeyCommand } from '@pega/cosmos-react-rte/lib/components/RichTextEditor/Toolbar/utils';

import { Editor } from '@pega/cosmos-react-rte';
import type { EditorProps } from '@pega/cosmos-react-rte';

import { isFieldMenuItem } from '@pega/cosmos-react-rte/lib/components/DynamicContentEditor/DynamicContentEditor.types';
import type {
  DynamicContentEditorProps,
  FieldItems,
  ItemType
} from '@pega/cosmos-react-rte/lib/components/DynamicContentEditor/DynamicContentEditor.types';
import { pegaReferenceElementStyle, createPegaReferenceElement } from './PegaCustomElement';
import { getDynamicContentEditorTestIds } from '@pega/cosmos-react-rte/lib/components/DynamicContentEditor/DynamicContentEditor.test-ids';

type DynamicContentEditorPropsWithDefaults = PropsWithDefaults<DynamicContentEditorProps>;

const StyledDynamicContentEditor = styled.div<DynamicContentEditorPropsWithDefaults>``;

export const StyledSearchPopover = styled(StyledPopover)`
  min-width: 20rem;
`;

StyledDynamicContentEditor.defaultProps = defaultThemeProp;

const DynamicContentEditor: FunctionComponent<DynamicContentEditorProps & ForwardProps> =
  forwardRef(function DynamicContentEditor(
    {
      testId,
      form: { dynamicContentPicker, onSubmit },
      onActiveFieldChange,
      label,
      toolbar,
      fieldItems,
      defaultValue,
      value = '', // Provide a default value for the 'value' variable
      onBlur,
      onKeyDown: onKeyDownProp,
      ...restProps
    }: PropsWithoutRef<DynamicContentEditorProps>,
    ref: DynamicContentEditorProps['ref']
  ) {
    const testIds = useTestIds(testId, getDynamicContentEditorTestIds);
    const menuID = useUID();
    const { create } = useModalManager();
    const t = useI18n();

    const modalMethods = useRef<ModalMethods>();
    const [editor, setEditor] = useState<TinyMCEEditor | undefined>();
    const [bookmark, setBookmark] = useState<Bookmark | undefined>();
    const [fieldMenuItems, setFieldMenuItems] = useState<FieldItems[]>(fieldItems || []);
    const [currentElementId, setCurrentElementId] = useState('');
    const [currentElementContent, setCurrentElementContent] = useState('');
    const [currentElementNamespace, setCurrentElementNamespace] = useState('');
    const [currentCursorPosition, setCurrentCursorPosition] = useState({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      toJSON: () => {}
    });
    const [showFieldsPopover, setShowFieldsPopover] = useState<boolean>(false);

    const fieldPopoverRef = useRef<HTMLDivElement>(null);
    const editorRef = useConsolidatedRef(ref);

    const tooltip = getKeyCommand(
      navigator.appVersion.includes('Mac'),
      ({ ctrl }) => `${t('rte_insert_field')} (${ctrl}/)`
    );

    const insertField = (field: ItemType) => {
      if (!editor) return;

      const fieldContent = `<pega-reference role="button" contenteditable="false" name=${
        field.id
      } data-rule-type='field' data-rule-id=${field.id} ${
        field.namespace && `data-rule-namespace=${field.namespace}`
      }>${field.text}</pega-reference>`;

      if (bookmark) {
        editor.selection.moveToBookmark(bookmark);
        editor.selection.setContent(fieldContent);
      } else {
        editor.insertContent(fieldContent);
      }

      modalMethods.current?.dismiss();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const modalProps = {
      'data-testid': testIds.insertFieldModal,
      children: dynamicContentPicker,
      heading: t('rte_insert_field'),
      actions: (
        <>
          <Button
            data-testid={testIds.insertFieldModalCancel}
            variant='secondary'
            onClick={() => modalMethods.current?.dismiss()}
          >
            {t('cancel')}
          </Button>
          <Button
            data-testid={testIds.insertFieldModalSubmit}
            variant='primary'
            onClick={() => onSubmit(insertField)}
          >
            {t('submit')}
          </Button>
        </>
      ),
      center: true,
      onAfterClose: () => {
        setBookmark(undefined);
        setCurrentElementId('');
        setCurrentElementContent('');
        setCurrentElementNamespace('');
        onActiveFieldChange({ id: '', text: '', namespace: '' });
      },
      onBeforeOpen: () => {
        if (currentElementId) {
          onActiveFieldChange({
            id: currentElementId,
            text: currentElementContent,
            namespace: currentElementNamespace
          });
        }
      }
    };

    const findAndRenameField = (fieldId: string) => {
      if (!editor || !fieldMenuItems) return;

      const selectedRange = editor.selection.getRng();
      const endOffset = selectedRange.endOffset;
      const stringToSearch = selectedRange.commonAncestorContainer.nodeValue?.slice(0, endOffset);
      if (stringToSearch === undefined) return;

      const splitSearch = stringToSearch.split(' ');
      const fieldString = splitSearch[splitSearch.length - 1];
      const range = editor.getDoc().createRange();

      const startPos = stringToSearch.lastIndexOf(fieldString);
      const endPos = startPos + fieldString.length;
      range.setStart(selectedRange.commonAncestorContainer, startPos);
      range.setEnd(selectedRange.commonAncestorContainer, endPos);
      editor.getDoc().getSelection()?.removeAllRanges();
      editor.getDoc().getSelection()?.addRange(range);

      const selectedField = menuHelpers.getItem(fieldMenuItems, fieldId);
      if (selectedField && isFieldMenuItem(selectedField)) {
        editor.selection.setContent(
          `<pega-reference role="button" contenteditable="false" name="${
            selectedField.id
          }" data-rule-type="field" data-rule-id="${selectedField.id}" ${
            selectedField.namespace && `data-rule-namespace=${selectedField.namespace}`
          }>${selectedField.primary}</pega-reference>`
        );
        setShowFieldsPopover(false);
      }
    };

    const hidePopover = () => {
      if (fieldPopoverRef) setShowFieldsPopover(false);
    };

    const filterFieldMenu = (searchString: string) => {
      setShowFieldsPopover(true);
      setFieldMenuItems(fieldItems || []);
      if (/\s/.test(searchString)) {
        setShowFieldsPopover(false);
        return;
      }
      if (searchString && fieldMenuItems) {
        const newFieldMenuItems: FieldItems[] = menuHelpers
          .flatten(fieldMenuItems)
          .filter(({ primary }) =>
            primary.toLowerCase().startsWith(searchString.toLocaleLowerCase())
          );
        if (newFieldMenuItems) {
          setShowFieldsPopover(true);
          setFieldMenuItems(newFieldMenuItems);
        } else setShowFieldsPopover(false);
      }
    };

    const updateBookmarkAndCurrentElement = (editorSelection: EditorSelection) => {
      const targetEl = editorSelection.getNode() as HTMLElement;
      const fieldId = targetEl.getAttribute('data-rule-id');
      const fieldNamespace = targetEl.getAttribute('data-rule-namespace');
      const fieldValue = targetEl.innerText;
      setBookmark(editorSelection.getBookmark());
      setCurrentElementId(fieldId || '');
      setCurrentElementContent(fieldValue);
      setCurrentElementNamespace(fieldNamespace || '');
    };

    const handleElementClick = ({ target }: MouseEvent) => {
      if (editor && target && (target as HTMLElement).tagName === 'PEGA-REFERENCE') {
        updateBookmarkAndCurrentElement(editor.selection);
      }
      hidePopover();
    };

    const onInsertField = (incEditor: TinyMCEEditor) => {
      const targetEl = incEditor.selection.getNode();
      if (targetEl.tagName === 'PEGA-REFERENCE') {
        updateBookmarkAndCurrentElement(incEditor.selection);
      } else {
        modalMethods.current = create(Modal, modalProps);
      }
    };

    const isPegaRefActive = (incEditor: TinyMCEEditor) => {
      const targetEl = incEditor.selection.getNode();
      return targetEl.tagName === 'PEGA-REFERENCE';
    };

    const fieldSelectionPopover = (
      <Popover
        show={showFieldsPopover}
        strategy='fixed'
        ref={fieldPopoverRef}
        target={{
          getBoundingClientRect() {
            return currentCursorPosition;
          }
        }}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: () => {
                const iframe = editorRef.current?.element?.querySelector('iframe');
                const iframeRect = iframe?.getBoundingClientRect();
                const x = iframeRect?.x ?? 0;
                const y = iframeRect?.y ?? 0;
                return [x, y];
              }
            }
          }
        ]}
        placement='bottom-start'
      >
        {fieldMenuItems && (
          <Menu
            id={menuID}
            items={fieldMenuItems}
            as={StyledSearchPopover}
            focusControlEl={editor?.getBody() || undefined}
            mode='action'
            onItemClick={findAndRenameField}
            variant='drill-down'
          />
        )}
      </Popover>
    );

    useEffect(() => {
      if (currentElementId && currentElementContent)
        modalMethods.current = create(Modal, modalProps);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentElementId, currentElementContent]);

    useEffect(() => {
      editor?.getDoc().addEventListener('click', handleElementClick);
      return () => {
        editor?.getDoc().removeEventListener('click', handleElementClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor, editorRef.current]);

    useEffect(() => {
      if (modalMethods.current) {
        modalMethods.current.update(modalProps);
      }
    }, [modalProps]);

    const onEditorChange: EditorProps['onChange'] = (formEditor?: TinyMCEEditor) => {
      if (formEditor) {
        const targetEl = formEditor.selection.getBoundingClientRect();
        const { left = 0, top = 0 } = targetEl ?? {};
        setCurrentCursorPosition({
          ...formEditor.selection.getBoundingClientRect(),
          x: left,
          y: top,
          toJSON: () => {}
        });

        if (formEditor.selection.isCollapsed()) {
          // get the full line string
          const selectedRange = formEditor.selection.getRng();
          const endOffset = selectedRange.endOffset;
          const stringToSearch = selectedRange.commonAncestorContainer.nodeValue?.slice(
            0,
            endOffset
          );
          const fieldString = stringToSearch?.split(' ')[stringToSearch.split(' ').length - 1];
          if (
            fieldString?.startsWith('@') &&
            fieldString.indexOf('@') === fieldString.lastIndexOf('@')
          ) {
            filterFieldMenu(fieldString.slice(1));
          } else setShowFieldsPopover(false);
        }
      }
    };

    const onKeyDown: EditorProps['onKeyDown'] = event => {
      if (onKeyDownProp) {
        onKeyDownProp(event);
      }

      if (
        (event?.key === 'Enter' ||
          event?.key === 'ArrowLeft' ||
          event?.key === 'ArrowRight' ||
          event?.key === 'ArrowDown' ||
          event?.key === 'ArrowUp') &&
        !!fieldPopoverRef.current
      ) {
        event?.preventDefault();
      }
      if (event?.key === 'Escape' && !!fieldPopoverRef.current) {
        hidePopover();
      }
    };

    return (
      <Editor
        data-testid={testIds.root}
        ref={editorRef}
        {...restProps}
        label={label}
        toolbar={toolbar}
        customComponents={[
          {
            createCustomElement: createPegaReferenceElement,
            name: 'pega-reference',
            extensionAttributes: ['contenteditable , name'],
            style: pegaReferenceElementStyle
          }
        ]}
        customActions={[
          {
            'data-testid': testIds.insertField,
            icon: 'code',
            text: tooltip,
            onMouseDown: () => {
              modalMethods.current = create(Modal, modalProps);
            },
            active: isPegaRefActive,
            shortcut: {
              pattern: 'meta+191',
              description: tooltip,
              command: onInsertField
            }
          }
        ]}
        onInit={setEditor}
        initOptions={{
          pasteDataImages: false,
          textPatterns: false,
          initInstanceCallback: textEditor => {
            textEditor.shortcuts.add('meta+b', '', () => {
              console.log('Hi');
            });
          }
        }}
        onChange={onEditorChange}
        onBlur={() => {
          onBlur?.();
          hidePopover();
        }}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
        value={value}
      >
        {fieldSelectionPopover}
      </Editor>
    );
  });

export default withTestIds(DynamicContentEditor, getDynamicContentEditorTestIds);
