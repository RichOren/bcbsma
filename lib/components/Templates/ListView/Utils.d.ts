/**
 * This updates the authoring meta for following usecases of List view templates.
 * - For Gallery template, append card header and secondary text as hidden fields in preset children.
 * - For Timeline template append timelineTitle and timelineDate as hidden fields in preset children.
 * - For promoted filters append promoted filter fields as hidden fields in preset children.
 * @param {*} presetMeta existing presetMeta that needs to be updated
 * @param {*} promotedFilters existing promoted filters that needs to be updated
 * @returns {Array} Array of updated presetMeta and promoted filters in an array.
 */
export function updateAuthoredMeta(presetMeta: any, promotedFilters: any): any[];
/**
 * [getTableConfigFromPresetMeta]
 * Description - Get the table config from the presets meta.
 * @ignore
 * @param   {object}    presetMeta          Presets meta
 * @param   {boolean}   isMetaWithPresets   true if meta has presets else false
 * @param   {Function}  getPConnect         Callback to get the PConnect object
 * @param   {string}    classID             Class ID from the response
 * @param   {Array}     primaryFields       List of Primary Fields
 * @param   {Array}     metaFields          List of all metafields
 * @returns {object}                        Table config object
 */
export function getTableConfigFromPresetMeta(presetMeta: object, isMetaWithPresets: boolean, getPConnect: Function, classID: string, primaryFields: any[], metaFields: any[], isQueryable: any, promotedFilters: any): object;
/**
 * [fetchEditableFields]
 * Description - Returns the editable fields for a case
 * @ignore
 * @param   {*}       parameters -
 * @param   {*}       props -
 * @param   {*}       runtimeParams -
 * @param   {*}       referenceList -
 * @param   {*}       toasterCtx        Toaster content to push the errors
 * @returns {object}                    Editable fields
 */
export function fetchEditableFields(parameters: any, props: any, runtimeParams: any, referenceList: any, toasterCtx: any): object;
export function isDisplayMode(displayModeValue: any): boolean;
export function readContextResponse(context: object, params: object): Promise<void>;
//# sourceMappingURL=Utils.d.ts.map