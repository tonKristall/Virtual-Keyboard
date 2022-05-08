import TextElement from './textRender';
import config from './config';
import main from './assets/styles/main.scss';
import { TAGS } from '../const';

export default class KeyElement extends TextElement {
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
      this.el.classList.add(main.space);
    }
    if (shiftText !== undefined) {
      const shiftKey = this.render(TAGS.div, [main.shiftText]);
      shiftKey.textContent = shiftText;
      shiftKey.classList.add(main.noActive);
      this.el.appendChild(shiftKey);
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
