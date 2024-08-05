import type { EditorProps } from '@pega/cosmos-react-rte';
import type { TestIdProp } from '@pega/cosmos-react-core';
export interface DynamicContentEditorWrapperProps extends TestIdProp {
    className: string;
    label?: string;
    content?: string;
    /** Defaults to richText when variant is not passed. plainText only allows adding of fields */
    variant?: 'richText' | 'plainText';
    onBlurHandler?: (newContent: string) => void;
    required?: boolean;
    ref?: EditorProps['ref'];
}
//# sourceMappingURL=DynamicContentEditorWrapper.types.d.ts.map