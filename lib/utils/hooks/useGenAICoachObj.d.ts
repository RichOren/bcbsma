import type { MenuProps, MenuItemProps, MenuGroupProps } from '@pega/cosmos-react-core';
import type { GenAICoach } from '../../components/Widgets/GenAICoach/GenAICoach.types';
declare const useGenAICoachObj: (enableGenAICoach: boolean, coaches: GenAICoach[], caseID: string, pConnect: any) => {
    loading: boolean;
    messages: never[];
    coachOptions: never[];
    onCoachChange: () => void;
    onSend: () => void;
    onOpen: () => void;
    initialSuggestedMessages: never[];
    suggestions: undefined;
    error: any;
    starterMessage: undefined;
} | {
    loading: boolean;
    messages: GenAIMessageProps[];
    coachOptions: (MenuItemProps | MenuGroupProps)[];
    onCoachChange: (id: MenuProps['id']) => void;
    onSend: (item: MessageProps) => void;
    onOpen: () => void;
    initialSuggestedMessages: MessageProps[];
    suggestions: (MenuItemProps | MenuGroupProps)[];
    error: string;
    starterMessage: any;
} | undefined;
export default useGenAICoachObj;
//# sourceMappingURL=useGenAICoachObj.d.ts.map