import { forwardRef, useRef, useEffect, useMemo, useState, useCallback } from 'react';
import type { FunctionComponent, PropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  SummaryList,
  useI18n,
  Button,
  ViewAll,
  Modal,
  Popover,
  Flex,
  Text,
  useModalManager,
  useOuterEvent,
  Progress,
  useAfterInitialEffect,
  defaultThemeProp
} from '@pega/cosmos-react-core';
import type {
  Action,
  ForwardProps,
  ModalMethods,
  ModalProps,
  OmitStrict
} from '@pega/cosmos-react-core';

import type { Role, PageSectionsProps } from './PageSections.types';
import PageSectionsForm from './PageSectionsForm';

const StyledPageSections = styled(SummaryList)``;

const StyledEditFormWrap = styled.div(({ theme }) => {
  return css`
    position: relative;
    min-height: 8rem;
    overflow: auto;
    padding-block: calc(${theme.base.spacing} / 2);
    padding-inline: calc(2 * ${theme.base.spacing});

    &[aria-busy='true'] > :nth-child(2) {
      visibility: hidden;
    }
  `;
});

StyledEditFormWrap.defaultProps = defaultThemeProp;

const StyledPopover = styled(Popover)`
  width: 40ch;
  min-height: 12rem;
`;

const StyledContainer = styled(Flex)(({ theme }) => {
  return css`
    max-height: inherit;
    > h3 {
      padding-block-start: calc(2 * ${theme.base.spacing});
      padding-inline: calc(2 * ${theme.base.spacing});
    }
  `;
});

StyledContainer.defaultProps = defaultThemeProp;

const PageSections: FunctionComponent<PageSectionsProps & ForwardProps> = forwardRef(
  function PageSections(
    {
      items: itemsProp,
      count,
      loading,
      onAddNew,
      form,
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
    const [mode, setMode] = useState<undefined | 'add' | 'viewAll'>();
    const [editing, setEditing] = useState(false);
    const [viewAllSearchValue, setViewAllSearchValue] = useState('');
    const popoverRef = useRef<HTMLDivElement>(null);
    const progressMsgRef = useRef(t('loading'));

    // Why? Don't think this should trigger a re-render. We just need the value when we invoke callback props.
    const selectedRoleNameRef = useRef<Role['name'] | undefined>();
    // Setter for the ref. Avoids a re-render.
    const setSelectedRoleNameRef = useCallback((selectedRoleName?: Role['name']) => {
      selectedRoleNameRef.current = selectedRoleName;
    }, []);

    const [popoverTarget, setPopoverTarget] = useState<{
      portal: HTMLLIElement;
      button: HTMLButtonElement | null;
    } | null>(null);

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
        let itemActions: Action[] = [];
        const elArray = itemElsRef.current[mode === 'viewAll' ? 'viewAllItemEls' : 'itemEls'];

        if (onEdit) {
          itemActions = [
            {
              id: 'edit',
              text: t('edit'),
              icon: 'pencil',
              onClick: () => {
                setEditing(true);
                setPopoverTarget({
                  portal: elArray[i],
                  button: elArray[i].querySelector<HTMLButtonElement>(
                    'button[aria-haspopup="menu"]'
                  )
                });

                onEdit?.();
              }
            }
          ];
        }

        if (onRemove) {
          itemActions = [
            ...itemActions,
            {
              id: 'remove',
              text: t('remove'),
              icon: 'trash',
              onClick: () => {
                onRemove?.();
              }
            }
          ];
        }

        return {
          ...rest,
          ref: (el: HTMLLIElement) => {
            elArray[i] = el;
          },
          actions: itemActions
        };
      });
    };

    const closePopover = () => {
      if (!popoverTarget || (form.loading && progressMsgRef.current === t('submitting'))) return;
      popoverTarget.button?.focus();
      setPopoverTarget(null);
      setEditing(false);
      progressMsgRef.current = t('loading');
    };

    let formContent: ReactNode = null;
    if (
      (mode === 'add' || editing) &&
      (!form.loading || progressMsgRef.current === t('submitting'))
    ) {
      formContent = (
        <PageSectionsForm
          roles={form.roles}
          currentRole={form.currentRole}
          renderer={form.renderer}
          rendererProps={form.rendererProps}
          setSelectedRoleNameRef={setSelectedRoleNameRef}
        />
      );
    }

    // Actions used for add and edit both in the modal and the popover.
    let formActions: ReactNode = null;
    if (
      (mode === 'add' || editing) &&
      (!form.loading || progressMsgRef.current === t('submitting'))
    ) {
      const closeForm = () => {
        if (mode === 'add') {
          modalMethods.current?.dismiss();
        } else {
          closePopover();
        }
      };

      formActions = (
        <>
          <Button
            disabled={form.loading}
            onClick={() => {
              form.onDismiss({ closeForm });
            }}
          >
            {t('cancel')}
          </Button>
          <Button
            disabled={form.loading}
            type='submit'
            variant='primary'
            onClick={() => {
              progressMsgRef.current = t('submitting');
              form.onSubmit({
                selectedRoleName: selectedRoleNameRef.current,
                closeForm
              });
            }}
          >
            {t('submit')}
          </Button>
        </>
      );
    }

    let editPopover: ReactNode = null;
    if (popoverTarget) {
      editPopover = (
        <StyledPopover
          ref={popoverRef}
          target={popoverTarget.button}
          placement='auto'
          role='dialog'
        >
          <StyledContainer container={{ direction: 'column', gap: 2 }}>
            <Text variant='h3'>{t('edit_stakeholder')}</Text>
            <StyledEditFormWrap aria-busy={form.loading ? 'true' : 'false'}>
              <Progress placement='local' visible={form.loading} message={progressMsgRef.current} />
              {(!form.loading || progressMsgRef.current === t('submitting')) && (
                <PageSectionsForm
                  roles={form.roles}
                  currentRole={form.currentRole}
                  renderer={form.renderer}
                  rendererProps={form.rendererProps}
                  setSelectedRoleNameRef={setSelectedRoleNameRef}
                />
              )}
            </StyledEditFormWrap>
            {formActions && (
              <Flex container={{ justify: 'between', pad: [undefined, 2, 2] }}>{formActions}</Flex>
            )}
          </StyledContainer>
        </StyledPopover>
      );
    }

    // Content for the modal either for adding new or viewing all.
    let modalContent: ReactNode = null;
    if (mode === 'add') modalContent = formContent;

    if (!viewAll.loading && (mode === 'viewAll' || (editing && modalMethods.current))) {
      modalContent = (
        <>
          <ViewAll
            items={mergeItemActions(viewAll.items)}
            actions={[
              {
                id: 'addStakeHolder',
                text: 'Add new',
                onClick: () => {
                  setMode('add');
                  onAddNew?.();
                }
              }
            ]}
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
          {/* Edit popover triggered from a modal must be rendered within modal content to render in correct DOM position. */}
          {editPopover}
        </>
      );
    }

    useEffect(() => {
      if (!mode) {
        modalMethods.current = undefined;
        return;
      }

      const modalProps: OmitStrict<ModalProps, 'heading'> = {
        progress:
          (mode === 'add' && form.loading) || viewAll.loading
            ? { message: progressMsgRef.current }
            : undefined,
        count: mode === 'viewAll' ? count : undefined,
        children: modalContent,
        actions: mode === 'add' ? formActions : undefined,
        onRequestDismiss:
          form.loading && progressMsgRef.current === t('submitting') ? () => false : undefined
      };

      if (modalMethods.current) {
        modalMethods.current.update(modalProps);
      } else if (mode === 'add' || mode === 'viewAll') {
        modalMethods.current = createModal(Modal, {
          ...modalProps,
          heading: mode === 'add' ? 'Add Page/Sections' : 'Page/Sections',
          onAfterClose: () => {
            if (mode === 'add') {
              form.onAfterClose?.();
            } else {
              setViewAllSearchValue('');
              viewAll.onAfterClose?.();
            }

            progressMsgRef.current = t('loading');
            setMode(undefined);
          }
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, modalContent, form.loading, formActions, count, viewAll.loading]);

    // Using mousedown instead of click since drag selecting an input's value within the popover, then releasing outside the popover triggers outer click.
    useOuterEvent('mousedown', [popoverRef], closePopover);

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopover();
      }
    };

    useEffect(() => {
      if (!popoverTarget) return;
      document.addEventListener('keydown', onKeydown);
      return () => {
        document.removeEventListener('keydown', onKeydown);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popoverTarget]);

    useAfterInitialEffect(() => {
      if (!popoverTarget) form.onAfterClose?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popoverTarget]);

    return (
      <>
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
            onAddNew
              ? [
                  {
                    text: t('add'),
                    id: 'add_new',
                    icon: 'scale-up',
                    onClick() {
                      setMode('add');
                      onAddNew?.();
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
        {/* When edit is opened outside of the view all modal. */}
        {editPopover && mode !== 'viewAll' ? editPopover : null}
      </>
    );
  }
);

export default PageSections;
