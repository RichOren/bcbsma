import type { TextProps as CosmosTextProps } from '@pega/cosmos-react-core';
export interface TextProps {
    formatType?: string;
    displayAs?: string;
    text?: string | number | boolean;
    value?: string;
    label?: string;
    hideLabel?: boolean;
    customFormat?: string;
    additionalProps?: {
        noLabel?: boolean;
    };
    testId?: string;
    decorator?: (text: string | number | boolean | undefined) => CosmosTextProps['children'];
    symbol?: string;
    symbolPosition?: string;
    decimalPrecision?: string | number;
}
export default function Text(props: TextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map