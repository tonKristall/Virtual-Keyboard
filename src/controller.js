import main from './assets/styles/main.scss';
import { SYMBOLS_KEY, LOCALSTORAGE_KEYS } from '../const';
import config from './config';

export default class Controller {
  constructor(keyboard, keys, textArea) {
    this.keys = keys;
    this.keyboard = keyboard;
    this.caps = { press: false, on: false };
    this.shift = false;
    this.changeLang = false;
    this.sortedKeys = this.sortKeys();
    this.textArea = textArea;
    this.inputValue = [];
  }

  sortKeys() {
    const sortedKeys = {};
    this.keys.forEach((key) => {
      const { keyElement, keyValue } = key;
      if (this.changeLang) {
        keyElement.childNodes[0].textContent = keyValue[config.lang].normal;
        if (keyElement.children.length) {
          keyElement.childNodes[1].textContent = keyValue[config.lang].shift;
        }
      }
      keyElement.classList.remove(main.noActive);
      keyElement.classList.add(main.active);
      if (keyElement.children.length && keyElement.children[0].textContent.length) {
        if (this.shift) {
          keyElement.classList.remove(main.active);
          keyElement.classList.add(main.noActive);
          keyElement.children[0].classList.remove(main.noActive);
          keyElement.children[0].classList.add(main.active);
        } else {
          keyElement.children[0].classList.add(main.noActive);
          keyElement.children[0].classList.remove(main.active);
        }
      }
      const valueKey = keyValue.code;
      sortedKeys[valueKey] = keyElement;
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
      if (event.key === 'CapsLock') {
        if (this.caps.press) {
          return;
        }
        this.caps.on = !this.caps.on;
        this.caps.press = true;
      }
      const findKey = this.sortedKeys[event.code];
      if (findKey) {
        findKey.classList.add(main.pressed);
        this.inputTextArea(findKey);
      }
    });
    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      if ((event.key === 'Alt' && event.ctrlKey) || (event.key === 'Control' && event.altKey)) {
        config.lang = config.lang === 'en' ? 'ru' : 'en';
        localStorage.setItem(LOCALSTORAGE_KEYS.lang, config.lang);
        this.changeLang = true;
        this.sortedKeys = this.sortKeys();
      }
      if (event.key === 'Shift') {
        this.shift = false;
        if (!this.changeLang) {
          this.sortedKeys = this.sortKeys();
        }
      }
      if (event.key === 'CapsLock') {
        this.caps.press = false;
      }
      const findKey = this.sortedKeys[event.code];
      if (findKey) {
        findKey.classList.remove(main.pressed);
      }
    });
  }

  mouseListener() {
    const keyFree = (event) => {
      event.target.classList.remove(main.pressed);
      event.target.removeEventListener('mouseleave', keyFree);
      if (event.target.textContent === 'CapsLock') {
        this.caps.press = false;
      }
      this.textArea.focus();
    };
    this.keyboard.addEventListener('mousedown', (event) => {
      const nodeList = Array.from(this.keyboard.children);
      let key = event.target;
      if (nodeList.includes(key)) {
        this.textArea.focus();
        return;
      }
      if (!nodeList.includes(key.parentElement)) {
        key = key.parentElement;
      }
      key.classList.add(main.pressed);
      if (key.textContent === 'CapsLock') {
        this.caps.on = !this.caps.on;
        this.caps.press = true;
      }
      key.addEventListener('mouseleave', keyFree);
      this.inputTextArea(key);
    });

    this.keyboard.addEventListener('mouseup', (event) => {
      const nodeList = Array.from(this.keyboard.children);
      let key = event.target;
      this.textArea.focus();
      if (nodeList.includes(key)) {
        return;
      }
      if (key.textContent === 'CapsLock') {
        this.caps.press = false;
      }
      if (!nodeList.includes(key.parentElement)) {
        key = key.parentElement;
      }
      key.classList.remove(main.pressed);
    });
  }

  inputTextArea(key) {
    let value = key.childNodes[0].textContent;
    if (key.children.length && key.childNodes[1].textContent.length && this.shift) {
      value = key.childNodes[1].textContent;
    }
    if (document.activeElement !== this.textArea) {
      this.textArea.focus();
      this.textArea.selectionStart = this.textArea.value.length;
      this.textArea.selectionEnd = this.textArea.value.length;
    }
    switch (value) {
      case 'Del': {
        if (this.textArea.selectionStart === this.textArea.selectionEnd) {
          this.textArea.selectionEnd = this.textArea.selectionStart + 1;
        }
        this.textArea.setRangeText('');
        break;
      }
      case 'Backspace': {
        if (this.textArea.selectionStart
          && this.textArea.selectionStart === this.textArea.selectionEnd) {
          this.textArea.selectionStart = this.textArea.selectionEnd - 1;
        }
        this.textArea.setRangeText('');
        break;
      }
      case 'Enter': {
        value = SYMBOLS_KEY.enter;
        break;
      }
      case 'Tab': {
        value = SYMBOLS_KEY.tab;
        break;
      }
      default: {
        break;
      }
    }
    if (value.length === 1 || value === SYMBOLS_KEY.enter || value === SYMBOLS_KEY.tab) {
      if ((this.caps.on && !this.shift) || (!this.caps.on && this.shift)) {
        value = value.toUpperCase();
      }
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        this.textArea.setRangeText(value);
        this.textArea.selectionEnd += 1;
        this.textArea.selectionStart = this.textArea.selectionEnd;
      } else {
        this.textArea.setRangeText(value);
        this.textArea.selectionStart = this.textArea.selectionEnd;
      }
    }
  }
}
