export const pegaReferenceElementStyle = `\
pega-reference {
  color: #076bc9;
  cursor: pointer;
}

pega-reference:hover{
  text-decoration: underline;
}

pega-reference::before{
  content: '['
}

pega-reference::after{
  content: ']'
}`;

export const createPegaReferenceElement = () => {
  return class PegaReferenceElement extends HTMLObjectElement {
    connectedCallback() {
      const template = document.createElement('template');
      const temp = document.importNode(template.content, true);
      this.append(temp);
    }
  };
};
