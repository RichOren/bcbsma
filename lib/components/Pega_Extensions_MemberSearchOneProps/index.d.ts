import type { PConnFieldProps } from './PConnProps';
import type { ComponentType } from 'react';
interface PegaExtensionsMemberSearchOneProps extends PConnFieldProps {
}
export interface DefaultRowData {
    id: string | number;
}
export interface ColumnProps<RowData extends DefaultRowData = DefaultRowData> {
    /** Render cell content for a column with a component or by passing a property key on the row object to serve as an accessor. */
    renderer: ComponentType<RowData> | keyof RowData;
    /** The visual label for the column. */
    label: string;
    /**
     * The text alignment of the column header and the row contents for the column.
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * If true, this column will not wrap text on overflow.
     * @default false
     */
    noWrap?: boolean;
}
declare const _default: (props: PegaExtensionsMemberSearchOneProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map