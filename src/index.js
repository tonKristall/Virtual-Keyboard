import style from './assets/styles/style.scss';
import header from './assets/styles/header.scss';
import main from './assets/styles/main.scss';
import { TAGS, HEAD_APP, KEYS_ITEMS } from '../const';

const config = {
  lang: 'en',
};

class Controller {
  constructor(keyboard, keys) {
    this.keys = keys;
    this.keyboard = keyboard;
    this.globalListener();
    this.caps = false;
    this.shift = false;
    this.ctrl = false;
    this.changeLang = false;
    this.key = '';
    this.sortedKeys = this.sortKeys();
  }
  sortKeys() {
    const sortedKeys = {};
    this.keys.forEach(key => {
      const keyLang = key.key[config.lang];
      const modKey = this.shift && keyLang.shift ? 'shift' : 'normal';
      if (this.changeLang) {
        key.keyElement.childNodes[0].textContent = key.key[config.lang].normal;
        if (key.keyElement.children.length) {
          key.keyElement.childNodes[1].textContent = key.key[config.lang].shift;
        }
      }
      let valueKey = key.key.code ? key.key.code : keyLang[modKey];
      sortedKeys[valueKey] = key.keyElement;
    });
    this.changeLang = false;
    return sortedKeys;
  }
  globalListener() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (event.key === 'Shift') {
        if (this.shift) {
          return;
        }
        this.shift = true;
        this.sortedKeys = this.sortKeys();
      }
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.code;
      const findKey = this.sortedKeys[key];
      if (findKey && !findKey.classList.contains(main.pressed)) {
        findKey.classList.add(main.pressed);
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Alt' && event.ctrlKey || event.key === 'Control' && event.altKey) {
        config.lang = config.lang === 'en' ? 'ru' : 'en';
        this.changeLang = true;
        this.sortedKeys = this.sortKeys();
      }
      if (event.key === 'Shift') {
        this.shift = false;
        if (!this.changeLang) {
          this.sortedKeys = this.sortKeys();
        }
      }
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.code;
      const findKey = this.sortedKeys[key];
      if (findKey) {
        findKey.classList.remove(main.pressed);
      }
    });
  }
}

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
    if (normalText === ' ') {
      this._el.classList.add(main.space);
    }
    if (shiftText) {
      const shiftKey = this._render(TAGS.div, [main.shiftText]);
      shiftKey.textContent = shiftText;
      this._el.appendChild(shiftKey);
    }
  }
  // keyPress() {
  //   const normalText = this.key[config.lang].normal;
  //   const shiftText = this.key[config.lang].shift;
  //   let activeText = shiftText && config.shift ? shiftText : normalText;
  //   if (!this._el.classList.contains(main.pressed)) {
  //     this._el.classList.add(main.pressed);
  //   }
  //   if (normalText === 'Caps Lock') {
  //     config.caps = !config.caps;
  //   }
  //   if (normalText === 'Shift') {
  //     config.shift = true;
  //   }
  //   if (activeText.length <= 1) {
  //     let inputText = normalText.toLowerCase();
  //     if ((config.caps && !config.shift) || (config.shift && !config.caps)) {
  //       inputText = inputText.toUpperCase();
  //     }
  //     this.textArea.value += inputText;
  //   }
  // }
  // keyFree() {
  //   if (this._el.classList.contains(main.pressed)) {
  //     this._el.classList.toggle(main.pressed);
  //   }
  //   // if (target.textContent === 'Shift') {
  //   //   config.shift = false;
  //   // }
  // };
  // addListener() {
  // this._el.addEventListener('mousedown', () => { this.keyPress(); });

  // ['mouseup', 'mouseleave'].forEach(ev => {
  //   this._el.addEventListener(ev, () => { this.keyFree(); });
  // });


  // }

}

const wrapper = new RenderElement(TAGS.div, [style.wrapper]).getEl();
const headerContainer = new RenderElement(TAGS.header, [style.container, header.header]).getEl();
const head = new TextElement(TAGS.h1, [header.head], HEAD_APP).getEl();
const mainSection = new RenderElement(TAGS.main, [style.container, main.main]).getEl();
const mainContainer = new RenderElement(TAGS.main, [style.container, main.container]).getEl();
const textArea = new TextElement('textarea', [main.textarea]).getEl();
const keyboardContainer = new RenderElement(TAGS.div, [style.container, main.container]).getEl();
const keys = [];
KEYS_ITEMS.map(row => {
  const rowKeyboard = new RenderElement(TAGS.div, [main.rowKeyboard]).getEl();
  row.forEach(key => {
    const keyElement = new KeyElement(TAGS.div, [main.key, main.active], key, textArea).getEl();
    keys.push({ key, keyElement });
    rowKeyboard.appendChild(keyElement);
  });
  keyboardContainer.appendChild(rowKeyboard);
});
textArea.setAttribute('rows', '10');

const controller = new Controller(keyboardContainer, keys);

headerContainer.appendChild(head);
mainSection.appendChild(textArea);
mainSection.appendChild(keyboardContainer);
mainContainer.appendChild(mainSection);
wrapper.appendChild(headerContainer);
wrapper.appendChild(mainContainer);
document.body.appendChild(wrapper);
