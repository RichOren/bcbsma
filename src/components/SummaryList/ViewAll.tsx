import { forwardRef, useState } from 'react';
import type { Ref, FC } from 'react';
import styled, { css } from 'styled-components';

import Actions from '../Actions';
import Flex from '../Flex';
import EmptyState from '../EmptyState';
import SearchInput, { StyledSearchInput } from '../SearchInput';
import type { SearchInputProps } from '../SearchInput';
import { defaultThemeProp } from '../../theme';
import Progress from '../Progress';
import { StyledCard } from '../Card';
import { StyledCardContent } from '../Card/CardContent';
import { omitProps } from '../../styles';
import type { ForwardProps } from '../../types';

import SummaryList from './SummaryList';
import type { SummaryListProps } from './SummaryList';

export interface ViewAllProps extends Pick<SummaryListProps, 'loading' | 'actions' | 'items'> {
  searchInputProps?: SearchInputProps;
  ref?: Ref<HTMLDivElement>;
}

const StyledToolbar = styled.div(({ theme: { base } }) => {
  return css`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${base.palette['primary-background']};
    margin-bottom: ${base.spacing};
    transform: translateY(calc(-0.5 * ${base.spacing}));
    padding: ${base.spacing} 0;

    ${StyledSearchInput} {
      flex-grow: 1;
    }
  `;
});

StyledToolbar.defaultProps = defaultThemeProp;

export const StyledViewAll = styled.div.withConfig<{ loading: ViewAllProps['loading'] }>(
  omitProps('loading')
)(
  ({ loading }) => css`
    ${StyledCardContent}:not(${StyledCard} ${StyledCard} > ${StyledCardContent}) {
      padding: 0;
    }

    ${loading &&
    css`
      min-height: 8rem;
    `}
  `
);

const SearchableList: FC<ViewAllProps & ForwardProps> = forwardRef(function SearchableList(
  { loading, actions, items, searchInputProps, ...restProps },
  ref: ViewAllProps['ref']
) {
  const [searchValue, setSearchValue] = useState<SearchInputProps['value']>('');
  return (
    <StyledViewAll ref={ref} loading={loading} {...restProps}>
      {!loading && (searchInputProps || actions) && (
        <Flex container={{ justify: 'between', alignItems: 'center', gap: 2 }} as={StyledToolbar}>
          {searchInputProps && (
            <Flex container={{ alignItems: 'center', gap: 1 }} item={{ grow: 1 }}>
              <SearchInput
                onSearchChange={val => {
                  searchInputProps.onSearchChange?.(val);
                  setSearchValue(val);
                }}
                value={searchInputProps.value || searchValue}
              />
            </Flex>
          )}
          {actions && <Actions iconOnly={false} items={actions} />}
        </Flex>
      )}

      {loading && <Progress placement='local' />}
      {!loading && (items.length ? <SummaryList items={items} /> : <EmptyState />)}
    </StyledViewAll>
  );
});

export default SearchableList;
