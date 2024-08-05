export function getAllSupportedComparators(): never[];
export function buildExpression(node: any, fieldsById: any): {
    expressionString: string;
    displayString: string;
};
export function convertJSONtoStrings(json: any, fieldsById: any): {
    strCondition: string;
    displayCondition: string;
};
export function parseExpressionString(expr: any, fieldsById: any): {
    logicString: any;
    conditionLookup: {};
};
/**
 * A helper function that evaluates the expression string using the provided data and fields.
 * @param {string} expression Expression string to be evaluated
 * @param {object} data The current values that will be used to evaluate the expression
 * @param {Array<object>} [fields=[]] The fields from which can be specified in the expression string
 * @param {object} [fieldsById=[]]
 * @returns {boolean}
 */
export function evaluateExpression(expression: string, data: object, fields?: object[] | undefined, fieldsById?: object | undefined): boolean;
//# sourceMappingURL=expression.d.ts.map