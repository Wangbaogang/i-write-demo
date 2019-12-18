import html from './index.html';
class XTip extends HTMLElement {
    static get is() {
        return 'x-tip';
    }
    constructor(text) {
        super();
        this.text = text;

        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.innerHTML = html;
    }

    connectedCallback() {

    }
}

customElements.define(XTip.is, XTip);

export default XTip;