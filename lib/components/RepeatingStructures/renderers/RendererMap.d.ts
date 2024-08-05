export namespace columnWidthConfigs {
    const auto: string;
    const custom: string;
}
export namespace renderFormatterTypeMap {
    const text: {
        label: string;
        value: string;
    }[];
    const date: {
        label: string;
        value: string;
    }[];
    const datetime: {
        label: string;
        value: string;
    }[];
    const time: {
        label: string;
        value: string;
    }[];
    const boolean: {
        label: string;
        value: string;
    }[];
    const number: {
        label: string;
        value: string;
    }[];
}
export const repeatFormatters: {
    [x: string]: (inputValue: any, options: any) => any;
    TrueFalse: (inputValue: any, options: any) => any;
    Currency: (inputValue: any, options: any) => any;
    'Currency-Code': (inputValue: any, options: any) => any;
    'Currency-Compact': (inputValue: any, options: any) => any;
    Decimal: (inputValue: any, options: any) => any;
    'Decimal-Auto': (inputValue: any, options: any) => any;
    Integer: (inputValue: any, options: any) => any;
    Percentage: (inputValue: any, options: any) => any;
};
export function fieldRendererMap(type: any): string;
//# sourceMappingURL=RendererMap.d.ts.map