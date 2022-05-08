export default class RenderElement {
  el;
  constructor(tag, className) {
    this.setEl(tag, className);
    this.renderEl;
  }

  render(tag, className) {
    this.renderEl = document.createElement(tag);
    this.renderEl.className = className.join(' ');
    return this.renderEl;
  }

  setEl(tag, className) {
    this.el = this.render(tag, className);
  }

  getEl() {
    return this.el;
  }
}
