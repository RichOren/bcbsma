/// <reference types="react" />
import type { DefaultTheme, StyledComponent } from 'styled-components';
export declare const StyledRuler: StyledComponent<"div", DefaultTheme, {}, never>;
export declare const StyledBlockColumn: StyledComponent<import("react").FunctionComponent<import("@pega/cosmos-react-core").FlexProps & import("@pega/cosmos-react-core").ForwardProps>, DefaultTheme, {}, never>;
export declare const StyledGridCell: StyledComponent<"div", DefaultTheme, {
    visible?: boolean | undefined;
}, never>;
type StyledGroupGridCellProps = {
    initial?: boolean;
    last?: boolean;
};
export declare const StyledGroupGridCell: StyledComponent<typeof StyledGridCell, DefaultTheme, StyledGroupGridCellProps, never>;
type StyledGridBlockProps = {
    maxWidthForColumns: 1 | 2 | 3;
    asColumn?: boolean;
};
export declare const StyledGridBlock: StyledComponent<import("react").FunctionComponent<import("@pega/cosmos-react-core/lib/components/Grid/Grid.types").default & import("@pega/cosmos-react-core").ForwardProps>, DefaultTheme, StyledGridBlockProps, never>;
export {};
//# sourceMappingURL=AutomaticLayout.styles.d.ts.map