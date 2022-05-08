import RenderElement from './mainRender';

export default class TextElement extends RenderElement {
  constructor(tag, className, innerText = '') {
    super(tag, className);
    this.innerText = innerText;
    this.addText();
  }

  addText() {
    this.el.textContent = this.innerText;
  }
}
