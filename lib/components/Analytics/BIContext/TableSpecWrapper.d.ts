/**
 * This class facilitates passing dependencies of the RepeatingStructures component from Nebula.
 * When a new dependency needs to be passed to the table from Nebula, it will need to map through this layer.
 */
export default class TableSpecWrapper {
    constructor({ classID, dataPageID, isQueryable, getFieldWiseMeta, insightID, personalizationID, getPConnect, classFilter }: {
        classID: any;
        dataPageID: any;
        isQueryable: any;
        getFieldWiseMeta: any;
        insightID: any;
        personalizationID: any;
        getPConnect: any;
        classFilter: any;
    });
    classID: any;
    dataPageID: any;
    isQueryable: any;
    getFieldWiseMeta: any;
    insightID: any;
    personalizationID: any;
    getPConnect: any;
    classFilter: any;
    preparePatchQueryFields: typeof preparePatchQueryFields;
    getApiContext(setError: any, stateUpdateCallback: any): Promise<any>;
    getDefaultColumns(reportDef: any): Promise<any>;
    getFormatUtils(): {
        formatters: {
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
        components: {
            [k: string]: {
                component: any;
                props: any;
            };
        };
    };
}
import { preparePatchQueryFields } from "../../RepeatingStructures/lib/Utils";
//# sourceMappingURL=TableSpecWrapper.d.ts.map