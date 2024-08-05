import { forwardRef, useMemo } from 'react';
import type { PropsWithoutRef, Ref, FC } from 'react';
import styled, { css } from 'styled-components';

import Actions from '../Actions';
import type { ActionsProps } from '../Actions';
import Flex from '../Flex';
import Text from '../Text';
import Count from '../Badges/Count';
import Icon from '../Icon';
import Card, { CardHeader, CardContent, CardFooter, StyledCard } from '../Card';
import EmptyState from '../EmptyState';
import type { EmptyStateProps } from '../EmptyState';
import type { ForwardProps, NoChildrenProp, OmitStrict, Action, HeadingTag } from '../../types';
import { omitProps } from '../../styles';
import { useI18n } from '../../hooks';
import { defaultThemeProp } from '../../theme';
import SummaryItem from '../SummaryItem';
import type { SummaryItemProps } from '../SummaryItem';
import Progress from '../Progress';
import Button from '../Button';
import ErrorState from '../ErrorState';
import type { ErrorStateProps } from '../ErrorState';
import { StyledCardFooter } from '../Card/CardFooter';

export interface SummaryListProps extends NoChildrenProp {
  /** Name of the utility to be used as its heading along with associated actions and aria attributes. */
  name?: string;
  /**
   * The heading tag to render the provided name as with.
   * @default 'h2'
   */
  headingTag?: HeadingTag;
  /** Identifier for the icon within Pega icons. */
  icon?: string;
  /** Integer representing the total count of items for a list utility dataset. */
  count?: number;
  /** Top level actions for the utility. If more than one action is passed a consolidated ActionMenu will be generated. */
  actions?: Action[];
  /** If the utility is in a state of fetching data. */
  loading?: boolean | string;
  /** An array of SummaryListItem objects to render. Pass an appropriately limited length array with a desired sort order based on design system defaults or config. */
  items: SummaryListItem[];
  /** User click initiated callback for when to show view all modal. List lengths less than the count prop will display a "View all" button with this function is bound to. */
  onViewAll?: (callback: Function) => void;
  /** A simple message to display when there are no items. */
  noItemsText?: EmptyStateProps['message'];
  /**
   * Indicate an error occurred while acquiring data for the list.
   * The default error state may be overridden with custom props.
   */
  error?: boolean | ErrorStateProps;
  /** Ref for the SummaryList's root element. */
  ref?: Ref<HTMLElement>;
}

export interface SummaryListItem
  extends OmitStrict<SummaryItemProps, 'actions'>,
    Pick<ActionsProps, 'contextualLabel'>,
    ForwardProps {
  /** A unique id to represent the item. */
  id: string;
  /** A set of Actions to render alongside the item. If more than one action is passed a consolidated ActionMenu will be generated. */
  actions?: Action[];
}

export const StyledSummaryListHeader = styled(CardHeader)(
  ({ theme }) => css`
    &:not(${StyledCard} ${StyledCard} > &) {
      padding-block-end: calc(${theme.base.spacing} / 2);
    }
  `
);

StyledSummaryListHeader.defaultProps = defaultThemeProp;

export const StyledSummaryListContent = styled(CardContent).withConfig<{ loading?: boolean }>(
  omitProps('loading')
)(
  ({ theme, loading }) => css`
    ${loading &&
    css`
      min-height: 4rem;
    `}

    &:not(:last-child) > ul > li:last-child {
      border-block-end: 0.0625rem solid ${theme.base.palette['border-line']};
    }

    &:not(${StyledCard} ${StyledCard} > &) {
      padding-block-end: calc(${theme.base.spacing} / 2);

      & + ${StyledCardFooter} {
        padding-block-start: ${theme.base.spacing};
      }
    }
  `
);

StyledSummaryListContent.defaultProps = defaultThemeProp;

export const StyledSummaryListItem: typeof SummaryItem = styled(SummaryItem)(
  ({ theme }) => css`
    padding-block: ${theme.base.spacing};

    &:not(:last-child) {
      border-block-end: 0.0625rem solid ${theme.base.palette['border-line']};
    }
  `
);

StyledSummaryListItem.defaultProps = defaultThemeProp;

export const SummaryListItems = ({ name, items }: Pick<SummaryListProps, 'items' | 'name'>) => {
  const t = useI18n();
  return (
    <ul>
      {items.map(({ id, actions: itemActions, contextualLabel, ...restItemProps }) => {
        return (
          <StyledSummaryListItem
            key={id}
            {...restItemProps}
            forwardedAs='li'
            actions={
              itemActions && (
                <Actions
                  items={itemActions}
                  contextualLabel={
                    name && contextualLabel
                      ? t('action_from_summarylist_heading', [contextualLabel, name])
                      : contextualLabel
                  }
                />
              )
            }
          />
        );
      })}
    </ul>
  );
};

const SummaryList: FC<SummaryListProps & ForwardProps> = forwardRef(function SummaryList(
  {
    icon,
    name,
    headingTag = 'h2',
    count,
    actions,
    items,
    onViewAll,
    loading,
    noItemsText,
    error,
    ...restProps
  }: PropsWithoutRef<SummaryListProps>,
  ref: SummaryListProps['ref']
) {
  const t = useI18n();

  const content = useMemo(() => {
    if (loading) {
      return (
        <Progress placement='local' message={typeof loading === 'string' ? loading : undefined} />
      );
    }

    if (error) {
      return <ErrorState {...(error === true ? {} : error)} />;
    }

    return items.length > 0 ? (
      <SummaryListItems name={name} items={items} />
    ) : (
      <EmptyState message={noItemsText} />
    );
  }, [loading, items, noItemsText, error]);

  return (
    <Card ref={ref} {...restProps}>
      {(icon || name || typeof count === 'number' || actions) && (
        <StyledSummaryListHeader>
          <Flex container={{ alignItems: 'center', gap: 1 }}>
            {icon && <Icon name={icon} />}
            {name && <Text variant={headingTag}>{name}</Text>}
            {typeof count === 'number' && <Count>{count}</Count>}
          </Flex>
          {actions && <Actions items={actions} contextualLabel={name} />}
        </StyledSummaryListHeader>
      )}

      <StyledSummaryListContent loading={loading}>{content}</StyledSummaryListContent>

      {!error && typeof count === 'number' && count > items.length && onViewAll && (
        <CardFooter justify='center'>
          <Button
            variant='link'
            aria-label={name ? t('view_all_noun', [name.toLowerCase()]) : t('view_all')}
            onClick={onViewAll}
          >
            {t('view_all')}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
});

export default SummaryList;
