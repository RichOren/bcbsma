interface Item {
  Authority: string;
  AuthorityKey: string;
  FileName: string;
  PageSection: string;
}

interface FileData {
  id: string;
  fileName: string;
  pageSection: string;
}

interface JsonObject {
  fieldGroupHeader: string;
  filedata: FileData[];
}

export const buildJsonObject = (items: Item[]): JsonObject[] => {
  // Initialize an empty result array
  const result: JsonObject[] = [];

  // Loop through each item
  items.forEach(item => {
    // Check if the Authority matches one of the specified strings
    if (['Type Of Authority', 'Authority Name', 'Authority Website'].includes(item.Authority)) {
      console.log('Item', item);
      // Create a fileData object
      const fileData: FileData = {
        id: item.AuthorityKey,
        fileName: item.FileName,
        pageSection: item.PageSection
      };

      // Find if there is an existing entry with the same fieldGroupHeader
      const existingEntryIndex = result.findIndex(
        entry => entry.fieldGroupHeader === item.Authority
      );
      console.log('Existing Entry Index', existingEntryIndex);

      if (existingEntryIndex !== -1) {
        // If the entry exists, push the new fileData into the filedata array
        result[existingEntryIndex].filedata.push(fileData);
      } else {
        // If the entry does not exist, create a new one and push it to the result array
        result.push({
          fieldGroupHeader: item.Authority,
          filedata: [fileData]
        });
      }
    }
  });

  return result;
};
