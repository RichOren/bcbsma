import type { ReactNode, Ref, MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { RawEditorOptions, Editor as TinymceEditor } from 'tinymce/tinymce';
import type { Action, BaseProps, FormControlProps, TestIdProp } from '@pega/cosmos-react-core';
import type { Features } from '@pega/cosmos-react-rte/lib/components/RichTextEditor/Toolbar/Toolbar.types';
import type { RichTextEditorState } from '@pega/cosmos-react-rte/lib/components/RichTextEditor';
export type EditorState = RichTextEditorState & {
    getEditor: () => TinymceEditor | undefined;
    element?: HTMLElement;
    setCursorLocationToStart?: () => void;
    updateAttachmentAttributes: (id: string, progress?: number, error?: string) => void;
};
export type CustomAction = {
    text: Action['text'];
    icon: NonNullable<Action['icon']>;
    onMouseDown: (e: ReactMouseEvent | ReactKeyboardEvent) => void;
    active?: (editor: TinymceEditor) => void;
    shortcut?: {
        pattern: string;
        description: string;
        command: (editor: TinymceEditor) => void;
    };
    'data-testid'?: string;
};
export type CustomComponent = {
    createCustomElement: (window: typeof globalThis) => CustomElementConstructor;
    name: string;
    extensionAttributes?: string[];
    style?: string;
};
export interface EditorProps extends FormControlProps, BaseProps, TestIdProp {
    /** An array of strings that activate features on the toolbar */
    toolbar?: Features[];
    /** Children content */
    children?: ReactNode;
    /** A callback that supplies an object with functions that can manipulate the editor and retrieve it's content/state */
    onChange?: (editor?: TinymceEditor) => void;
    /** KeyDown event custom handlers for the editor */
    onKeyDown?: (event?: KeyboardEvent) => void;
    /** A callback that runs if the editor is focused */
    onFocus?: () => void;
    /** A callback that runs if the editor loses focus */
    onBlur?: () => void;
    /** A callback when an image is added through the toolbar image feature */
    onImageAdded?: (image: File, id: string) => void;
    /** A callback for when tinymce is finished initializing */
    onInit?: (editor: TinymceEditor) => void;
    /** Standard placeholder for an input */
    placeholder?: string;
    /** Default value for the RTE - HTML String */
    defaultValue?: string;
    /** Will automatically focus the RTE on render if true */
    autoFocus?: boolean;
    /** Sets the height for the RTE. If no max height is set the RTE will continue to expand, otherwise an overflow will be applied */
    height?: {
        min?: number;
        max?: number;
    };
    /** An array of custom components, custom components must use web component API */
    customComponents?: CustomComponent[];
    /** An array of custom buttons to be inserted into the toolbar */
    customActions?: CustomAction[];
    /**
     * Enables browser spellcheck.
     * @default true
     */
    spellcheck?: boolean;
    /** Options used during init of the editor */
    initOptions?: {
        /** Disables pasting of images in editor when false */
        pasteDataImages?: RawEditorOptions['paste_data_images'];
        /** Disables inline, block, and replacement text patterns when false and can be array of allowed formats */
        textPatterns?: RawEditorOptions['text_patterns'];
        valid_elements?: RawEditorOptions['valid_elements'];
        /** Function called during init_instance_callback as part of editor init */
        initInstanceCallback?: RawEditorOptions['init_instance_callback'];
    };
    /** Handle to the state. */
    ref?: Ref<EditorState>;
}
//# sourceMappingURL=Editor.types.d.ts.map