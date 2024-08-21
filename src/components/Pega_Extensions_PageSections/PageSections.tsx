import { forwardRef, useRef, useEffect, useMemo, useState } from 'react';
import type { FunctionComponent, PropsWithoutRef, ReactNode } from 'react';
import * as bookOpen from '@pega/cosmos-react-core/lib/components/Icon/icons/book-open.icon';

import {
  SummaryList,
  useI18n,
  ViewAll,
  Modal,
  useModalManager,
  registerIcon
} from '@pega/cosmos-react-core';
import type {
  Action,
  ForwardProps,
  ModalMethods,
  ModalProps,
  OmitStrict
} from '@pega/cosmos-react-core';

import type { PageSectionsProps } from './PageSections.types';
import styled from 'styled-components';

registerIcon(bookOpen);

const StyledPageSections = styled(SummaryList)``;

const PageSections: FunctionComponent<PageSectionsProps & ForwardProps> = forwardRef(
  function PageSections(
    {
      items: itemsProp,
      count,
      loading,
      onExpandAll,
      onViewAll,
      viewAll,
      error,
      ...restProps
    }: PropsWithoutRef<PageSectionsProps>,
    ref: PageSectionsProps['ref']
  ) {
    const { create: createModal } = useModalManager();
    const t = useI18n();
    const modalMethods = useRef<ModalMethods>();
    const [mode, setMode] = useState<undefined | 'expand' | 'viewAll'>();
    const [viewAllSearchValue, setViewAllSearchValue] = useState('');
    const progressMsgRef = useRef(t('loading'));
    const itemElsRef = useRef<{ itemEls: HTMLLIElement[]; viewAllItemEls: HTMLLIElement[] }>({
      itemEls: [],
      viewAllItemEls: []
    });

    // This function merges the pre-defined actions(add & edit) to the item object.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mergeItemActions = (
      items: PageSectionsProps['items'] | NonNullable<PageSectionsProps['viewAll']>['items']
    ) => {
      return items.map(({ onEdit, onRemove, ...rest }, i) => {
        const itemActions: Action[] = [];
        const elArray = itemElsRef.current[mode === 'viewAll' ? 'viewAllItemEls' : 'itemEls'];
        return {
          ...rest,
          ref: (el: HTMLLIElement) => {
            elArray[i] = el;
          },
          actions: itemActions
        };
      });
    };

    // Content for the modal either for adding new or viewing all.
    let modalContent: ReactNode = null;

    if (!viewAll.loading && mode === 'viewAll') {
      modalContent = (
        <ViewAll
          items={mergeItemActions(viewAll.items)}
          actions={[]}
          searchInputProps={
            viewAll.onSearch
              ? {
                  value: viewAllSearchValue,
                  onSearchChange: (value: string) => {
                    setViewAllSearchValue(value);
                    viewAll?.onSearch?.(value);
                  }
                }
              : undefined
          }
        />
      );
    }

    useEffect(() => {
      if (!mode) {
        modalMethods.current = undefined;
        return;
      }

      const modalProps: OmitStrict<ModalProps, 'heading'> = {
        progress: viewAll.loading ? { message: progressMsgRef.current } : undefined,
        count: mode === 'viewAll' ? count : undefined,
        children: modalContent,
        actions: undefined,
        onRequestDismiss: progressMsgRef.current === t('submitting') ? () => false : undefined
      };

      if (modalMethods.current) {
        modalMethods.current.update(modalProps);
      } else if (mode === 'viewAll') {
        modalMethods.current = createModal(Modal, {
          ...modalProps,
          heading: 'Page/Sections',
          onAfterClose: () => {
            setViewAllSearchValue('');
            viewAll.onAfterClose?.();
            progressMsgRef.current = t('loading');
            setMode(undefined);
          }
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, modalContent, count, viewAll.loading]);

    return (
      <StyledPageSections
        {...restProps}
        ref={ref}
        icon='book-open'
        name='Page/Sections'
        headingTag='h3'
        loading={loading}
        count={count}
        error={error}
        items={useMemo(
          () => mergeItemActions(itemsProp.slice(0, 3)),
          [mergeItemActions, itemsProp]
        )}
        actions={
          onExpandAll
            ? [
                {
                  text: t('expand'),
                  id: 'expand',
                  icon: 'scale-up',
                  onClick() {
                    setMode('expand');
                    onExpandAll?.();
                  }
                }
              ]
            : undefined
        }
        onViewAll={
          onViewAll && count && count > 3
            ? () => {
                setMode('viewAll');
                onViewAll?.();
              }
            : undefined
        }
      />
    );
  }
);

export default PageSections;
