import style from './assets/styles/style.scss';
import header from './assets/styles/header.scss';
import main from './assets/styles/main.scss';
import footer from './assets/styles/footer.scss';
import {
  TAGS, HEAD_APP, KEYS_ITEMS, TEXT_FOOTER,
} from '../const';
import RenderElement from './mainRender';
import TextElement from './textRender';
import KeyElement from './keyRender';
import Controller from './controller';

const wrapper = new RenderElement(TAGS.div, [style.wrapper]).getEl();
const headerContainer = new RenderElement(TAGS.header, [style.container, header.header]).getEl();
const head = new TextElement(TAGS.h1, [header.head], HEAD_APP).getEl();
const mainSection = new RenderElement(TAGS.div, [style.container, main.container]).getEl();
const mainContainer = new RenderElement(TAGS.main, [style.container, main.main]).getEl();
const textArea = new TextElement(TAGS.textarea, [main.textarea]).getEl();
const keyboardContainer = new RenderElement(TAGS.div, [style.container, main.container]).getEl();
const footerSection = new RenderElement(TAGS.footer, [footer.footer]).getEl();
const keys = [];
KEYS_ITEMS.forEach((row) => {
  const rowKeyboard = new RenderElement(TAGS.div, [main.rowKeyboard]).getEl();
  row.forEach((key) => {
    const keyElement = new KeyElement(TAGS.div, [main.key, main.active], key, textArea).getEl();
    keys.push({ keyValue: key, keyElement });
    rowKeyboard.appendChild(keyElement);
  });
  keyboardContainer.appendChild(rowKeyboard);
});
Object.keys(TEXT_FOOTER).forEach((key) => {
  const text = new TextElement(TAGS.div, [], TEXT_FOOTER[key]).getEl();
  footerSection.appendChild(text);
});

textArea.setAttribute('rows', '10');

const controller = new Controller(keyboardContainer, keys, textArea);
controller.globalListener();
controller.mouseListener();

headerContainer.appendChild(head);
mainSection.appendChild(textArea);
mainSection.appendChild(keyboardContainer);
mainContainer.appendChild(mainSection);
wrapper.appendChild(headerContainer);
wrapper.appendChild(mainContainer);
wrapper.appendChild(footerSection);
document.body.appendChild(wrapper);
