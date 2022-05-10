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
}
