export default function loadComponents() {
  return Promise.all([
    loadView("./components/main-view.html", "main-view", MainView),
    loadView("./components/start-modal.html", "start-modal", StartModal),
    loadView("./components/start-view.html", "start-view", StartView),
    loadView(
      "./components/main-view-header.html",
      "main-view-header",
      MainViewHeader
    ),
    loadView(
      "./components/main-view-footer.html",
      "main-view-footer",
      MainViewFooter
    ),
    loadView(
      "./components/main-menu-item.html",
      "main-menu-item",
      MainMenuItem
    ),
  ]);
}

/**
 * Creates a web component from an HTML file, registers the component's name and calls the constructor of the component's class.
 * @param {string} htmlFilePath - The file path for the html.
 * @param {string} componentName - A name to register the component as.
 * @param {Object} className - The name of the class of the component.
 * @returns
 */
function loadView(htmlFilePath, componentName, className) {
  return fetch(htmlFilePath)
    .then((stream) => stream.text())
    .then((text) => {
      className._html = text;
      customElements.define(componentName, className);
    });
}

class MainView extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = MainView._html;
  }
}

class StartModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = StartModal._html;
  }
}

class StartView extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = StartView._html;
  }
}

class MainViewHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = MainViewHeader._html;
  }
}

class MainViewFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = MainViewFooter._html;
  }
}

class MainMenuItem extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = searchAndReplace(this, MainMenuItem._html, [
      "icon",
      "text",
      "info-text",
    ]);
  }
}

function searchAndReplace(component, sourceText, replaceTextArray) {
  replaceTextArray.forEach((replaceText) => {
    sourceText = sourceText.replace(
      "{{" + replaceText + "}}",
      component.getAttribute(replaceText) || ""
    );
  });
  return sourceText;
}
