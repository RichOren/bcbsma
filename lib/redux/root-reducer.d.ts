export declare const initialReduxState: {
    views: {
        byId: {};
        allIds: never[];
    };
    templates: {
        byId: {};
        allIds: never[];
    };
    viewsStack: never[];
};
export declare const reducers: any[];
/**
 * The root reducer function that effectively "combines" all the reducers by calling all them so
 * that the action can be handled by whichever reducer is responsible for it. Reducer functions
 * should return the state as-is if they aren't meant to handle the dispatched action.
 */
export default function rootReducer(prevStateReadonly: any, action: any): any;
//# sourceMappingURL=root-reducer.d.ts.map