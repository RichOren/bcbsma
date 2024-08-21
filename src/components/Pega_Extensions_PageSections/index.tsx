import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Configuration,
  createStringMatcher,
  debounce,
  FieldGroup,
  Grid,
  Table
} from '@pega/cosmos-react-core';
import PageSections from './PageSections';
import { PageSectionsProps, PageListItem, Item, JsonObject, FileData } from './PageSections.types';

type ExtPageSectionsProps = {
  dataPage: string;
  getPConnect: any;
};

export default function PegaExtensionsPageSection(props: ExtPageSectionsProps) {
  const { dataPage = '', getPConnect } = props;
  const pConn = getPConnect();
  const errorMsg = useRef<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [viewAllSearchValue, setViewAllSearchValue] = useState('');
  const [pageitems, setItems] = useState<PageListItem[]>([]);

  const groupByAuthority = (items: Item[]): JsonObject[] => {
    const result: { [key: string]: JsonObject } = {};

    items.forEach(item => {
      const fileData: FileData = {
        id: item.authorityKey,
        fileName: item.fileName,
        pageSection: item.pageSection
      };
      if (result[item.authority]) {
        result[item.authority].filedata.push(fileData);
      } else {
        result[item.authority] = {
          fieldGroupHeader: item.authority,
          filedata: [fileData]
        };
      }
    });

    return Object.values(result);
  };

  const [collapsedStates, setCollapsedStates] = useState<{ [key: string]: boolean }>({});

  // Fetch Page Sections on component mount.
  useEffect(() => {
    errorMsg.current = '';
    const columnNames = [
      { renderer: 'fileName', label: 'File Name' },
      { renderer: 'pageSection', label: 'Page/Section' }
    ];
    setLoading(true);
    const context = pConn.getContextName();
    debounce(
      (window as any).PCore.getDataApiUtils()
        .getData(dataPage, null, context)
        .then(async (response: any) => {
          if (response?.data?.data !== null) {
            const tmpItems: any = [];
            response.data.data.forEach((item: any) => {
              tmpItems.push({
                authorityKey: item.AuthorityKey,
                authority: item.Authority,
                fileName: item.FileName2,
                pageSection: item.PageSection
              });
            });

            const getPageSectionListItem = (filedata: JsonObject): PageListItem => {
              const id = filedata.fieldGroupHeader;
              const collapsed = collapsedStates[id] || false;
              const onToggleCollapsed = (key: string) => {
                setCollapsedStates(prevState => ({
                  ...prevState,
                  [key]: !prevState[key]
                }));
              };
              return {
                data: {
                  id: filedata,
                  fieldGroupHeader: filedata.fieldGroupHeader,
                  columnNames,
                  filedata
                },
                id: '1',
                primary: (
                  <div>
                    <FieldGroup
                      key={id}
                      collapsed={collapsed}
                      onToggleCollapsed={() => onToggleCollapsed(id)}
                      name={filedata.fieldGroupHeader}
                      headingTag='h3'
                    >
                      <Grid container={{ cols: '1fr', gap: 2 }}>
                        <Table
                          title={undefined}
                          hoverHighlight={false}
                          loading={false}
                          loadingMessage='Loading data'
                          data={filedata.filedata}
                          // @ts-ignore
                          columns={columnNames}
                        />
                      </Grid>
                    </FieldGroup>
                  </div>
                ),
                contextualLabel: '',
                secondary: undefined,
                visual: undefined,
                actions: undefined
              };
            };
            const caseID = pConn.getCaseInfo().getKey();
            (window as any).PCore.getPubSubUtils().publish('WidgetUpdated', {
              widget: 'PEGA_EXTENSIONS_PAGESECTIONS',
              count: pageitems.length,
              caseID
            });
            setItems(groupByAuthority(tmpItems).map(getPageSectionListItem));
            setLoading(false);
          }
        })
        .catch((innerError: any) => {
          if (
            innerError?.response?.data?.errorDetails?.length > 0 &&
            innerError.response.data.errorDetails[0].localizedValue
          ) {
            errorMsg.current = innerError.response.data.errorDetails[0].localizedValue;
          } else {
            errorMsg.current = innerError.message;
          }
          setLoading(false);
        }),
      1
    );
  }, [collapsedStates, dataPage, pConn, pageitems.length]);

  const viewAll: PageSectionsProps['viewAll'] = useMemo((): PageSectionsProps['viewAll'] => {
    let viewAllItems = pageitems;

    // When the user has entered a search value we can filter the array or api request.
    if (viewAllSearchValue) {
      // For client side searches cosmos offers utils such as createStringMatcher for creating RegExp with params.
      const filterRegex = createStringMatcher(viewAllSearchValue, 'boundary');
      // Asserting as string since, in this demo, primary is a string. But type is a non nullable ReactNode.
      viewAllItems = pageitems.filter(({ primary }) => filterRegex.test(primary as string));
    }

    const viewAllSections = viewAllItems.map(item => ({
      id: item.id,
      primary: item.primary,
      secondary: item.secondary,
      visual: item.visual,
      data: item.data
    }));

    return {
      // Set this to true when fetching data for the view all modal.
      loading: viewAllLoading,
      // Even when loading is true this must be an array, empty or not.
      items: viewAllSections,
      // The search string will be handed back as the arg, pass a state setter and filter off of that.
      onSearch: setViewAllSearchValue,
      onAfterClose: () => {
        // Clean up loading state when the modal is closed.
        if (viewAllLoading) setViewAllLoading(false);
        setViewAllSearchValue('');
      }
    };
  }, [pageitems, viewAllLoading, viewAllSearchValue]);

  return (
    <Configuration>
      <PageSections
        loading={loading}
        dataPage={undefined}
        items={useMemo(() => pageitems.slice(0, 3), [pageitems])}
        count={pageitems.length}
        onExpandAll={undefined}
        onViewAll={() => {}}
        viewAll={viewAll}
      />
    </Configuration>
  );
}
