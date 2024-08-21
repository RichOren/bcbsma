export interface MockPageSection {
  fieldGroupHeader: string;
  filedata: {
    id: string;
    fileName: string;
    pageSection: string;
  }[];
}

// cspell:disable
const mockPageSection: MockPageSection[] = [
  {
    fieldGroupHeader: 'Type of Authority',
    filedata: [
      {
        id: '1234',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '5678',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '0002',
        fileName: '1234',
        pageSection: 'p2'
      }
    ]
  },
  {
    fieldGroupHeader: 'Authority Name',
    filedata: [
      {
        id: '0004',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '0005',
        fileName: '1234',
        pageSection: 'p2'
      }
    ]
  },
  {
    fieldGroupHeader: 'Authority Website',
    filedata: [
      {
        id: '0007',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '0023',
        fileName: '1234',
        pageSection: 'p2'
      }
    ]
  },
  {
    fieldGroupHeader: 'Type of Authority',
    filedata: [
      {
        id: '0045',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '0066',
        fileName: '1234',
        pageSection: 'p2'
      },
      {
        id: '0088',
        fileName: '1234',
        pageSection: 'p2'
      }
    ]
  }
];
// cspell:enable

export default mockPageSection;
