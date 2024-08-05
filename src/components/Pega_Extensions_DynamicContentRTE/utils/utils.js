const updateContentWithAbsoluteURLsOfImgSrcs = (content, pConn) => {
  const newPath = pConn.getServerURL();
  const temporaryElement = new DOMParser().parseFromString(content, 'text/html').body;

  // Replace the `src` attributes
  Array.from(temporaryElement.querySelectorAll('img')).forEach((img) => {
    const path = img.src;
    if (path.includes('datacontent/Image')) {
      const fileName = path.slice(path.lastIndexOf('datacontent/Image'));
      img.src = `${newPath}/${fileName}`;
    }
    if (img.dataset.attachmentId) {
      const relativePath = PCore.getAttachmentUtils().getAttachmentURL(img.dataset.attachmentId);
      img.src = relativePath;
    }
  });

  // Retrieve the updated `innerHTML` property
  return temporaryElement.innerHTML;
};
export default updateContentWithAbsoluteURLsOfImgSrcs;
