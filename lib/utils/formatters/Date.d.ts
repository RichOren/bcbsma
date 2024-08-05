export function format(value: any, options: any): string | null;
export namespace COSMOS_FORMAT_CONSTANTS {
    const SHORT: string;
    const LONG: string;
}
export namespace COSMOS_VARIANT_CONSTANTS {
    const DATE_TIME: string;
    const DATE: string;
    const RELATIVE: string;
    const TIME: string;
}
export namespace DATE_TYPES {
    const DATE_1: string;
    export { DATE_1 as DATE };
    const DATE_TIME_1: string;
    export { DATE_TIME_1 as DATE_TIME };
    const TIME_1: string;
    export { TIME_1 as TIME };
}
declare const _default: {
    'DateTime-Long': (value: any, options: any) => string | null;
    'DateTime-Short': (value: any, options: any) => string | null;
    'DateTime-Since': (value: any, options: any) => string | null;
    'Time-Only': (value: any, options: any) => string | null;
    convertToTimezone: (value: any, options: any) => any;
    convertFromTimezone: (value: any, timezone: any) => any;
    Date: (value: any, options: any) => any;
    'Date-Default': (value: any, options: any) => string | null;
    'Date-Time-Default': (value: any, options: any) => string | null;
    'Time-Default': (value: any, options: any) => string | null;
};
export default _default;
//# sourceMappingURL=Date.d.ts.map