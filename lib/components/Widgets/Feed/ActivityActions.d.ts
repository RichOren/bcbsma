declare const _default: import("react").MemoExoticComponent<{
    (props: any): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        replies: never[];
        mentions: never[];
        recipients: never[];
        likeCount: number;
        liked: boolean;
        postContextDescription: string;
        postContextClass: string;
        postContextType: string;
        message: string;
        postType: string;
        postContextID: string;
        pyHasAttachment: boolean;
        isEdited: boolean;
        updateDateTime: string;
        hideAttachment: boolean;
    };
    propTypes: {
        ID: PropTypes.Validator<string>;
        postedByUser: PropTypes.Validator<{
            [x: string]: any;
        }>;
        postedTime: PropTypes.Validator<string>;
        message: PropTypes.Requireable<string>;
        likeCount: PropTypes.Requireable<number>;
        liked: PropTypes.Requireable<boolean>;
        feedTitle: PropTypes.Validator<string>;
        getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        replies: PropTypes.Requireable<any[]>;
        postType: PropTypes.Requireable<string>;
        recipients: PropTypes.Requireable<any[]>;
        contentViewName: PropTypes.Validator<string>;
        iconType: PropTypes.Validator<string>;
        iconReference: PropTypes.Validator<string>;
        commentContext: PropTypes.Validator<string>;
        feedContext: PropTypes.Validator<string>;
        postContextID: PropTypes.Requireable<string>;
        postContextDescription: PropTypes.Requireable<string>;
        postContextClass: PropTypes.Requireable<string>;
        postContextType: PropTypes.Requireable<string>;
        pyHasAttachment: PropTypes.Requireable<boolean>;
        mentions: PropTypes.Requireable<any[]>;
        isEdited: PropTypes.Requireable<boolean>;
        updateDateTime: PropTypes.Requireable<string>;
        hideAttachment: PropTypes.Requireable<boolean>;
        updateCaseMentions: PropTypes.Validator<NonNullable<NonNullable<boolean | ((...args: any[]) => any) | null | undefined>>>;
    };
}>;
export default _default;
import PropTypes from "prop-types";
//# sourceMappingURL=ActivityActions.d.ts.map