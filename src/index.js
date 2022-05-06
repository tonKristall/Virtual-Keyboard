import style from './assets/styles/style.scss';
import header from './assets/styles/header.scss';
import main from './assets/styles/main.scss';
import { TAGS, HEAD_APP, KEYS_ITEMS } from '../const';

const config = {
  lang: 'en',
  caps: false,
  shift: false,
};

class RenderElement {
  _el;
  constructor(tag, className) {
    this.setEl(tag, className);
  }
  _render(tag, className) {
    const el = document.createElement(tag);
    el.className = className.join(' ');
    return el;
  }
  setEl(tag, className) {
    this._el = this._render(tag, className);
  }
  getEl() {
    return this._el;
  }
}
class TextElement extends RenderElement {
  constructor(tag, className, innerText = '') {
    super(tag, className);
    this.innerText = innerText;
    this.addText();
  }
  addText() {
    this._el.textContent = this.innerText;
  }
}
class KeyElement extends TextElement {
  constructor(tag, className, key, textArea) {
    super(tag, className, key[config.lang].normal);
    this.key = key;
    this.textArea = textArea;
    this.addShiftText();

  }
  addShiftText() {
    const normalText = this.key[config.lang].normal;
    const shiftText = this.key[config.lang].shift;
    if (normalText === '') {
      this._el.classList.add(main.space);
    }
    const shiftKey = this._render(TAGS.div, [main.shiftText]);
    shiftKey.textContent = shiftText;
    this._el.appendChild(shiftKey);
  }

}

const wrapper = new RenderElement(TAGS.div, [style.wrapper]).getEl();
const headerContainer = new RenderElement(TAGS.header, [style.container, header.header]).getEl();
const head = new TextElement(TAGS.h1, [header.head], HEAD_APP).getEl();
const mainSection = new RenderElement(TAGS.main, [style.container, main.main]).getEl();
const mainContainer = new RenderElement(TAGS.main, [style.container, main.container]).getEl();
const textArea = new TextElement('textarea', [main.textarea]).getEl();
const keyboardContainer = new RenderElement(TAGS.div, [style.container, main.container]).getEl();
KEYS_ITEMS.forEach(row => {
  const rowKeyboard = new RenderElement(TAGS.div, [main.rowKeyboard]).getEl();
  row.forEach(key => {
    const keyElement = new KeyElement(TAGS.div, [main.key, main.active], key, textArea).getEl();
    rowKeyboard.appendChild(keyElement);
  });
  keyboardContainer.appendChild(rowKeyboard);
});
textArea.setAttribute('rows', '10');

headerContainer.appendChild(head);
mainSection.appendChild(textArea);
mainSection.appendChild(keyboardContainer);
mainContainer.appendChild(mainSection);
wrapper.appendChild(headerContainer);
wrapper.appendChild(mainContainer);
document.body.appendChild(wrapper);
