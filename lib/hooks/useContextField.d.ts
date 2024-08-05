import type { State } from '../common.types';
export declare function getContextField(state: State): any;
/**
 * Get the field record data for the complex field associated with the context of the current view.
 *
 * @remarks
 * When a complex field or a view reference in a different context is added to a view, we set the field reference
 * (i.e. 'Contact.Address') in the generated view reference child's config object, either on `authorContext` or
 * `context`. Using this field reference and the context/save class of the view it was added to, we retrieve the field
 * record data for that about the complex field
 *
 * @returns The field record data found in the parent view's relevant records or in the queryClient, or undefined
 */
export default function useContextField(): any;
//# sourceMappingURL=useContextField.d.ts.map