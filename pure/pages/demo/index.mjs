// ServiceWorker help with import html template
import css7 from '../../templates/css-7.html';
import css8 from '../../templates/css-8.html';
import css9 from '../../templates/css-9.html';

import dom12 from '../../templates/dom-12.html';
import dom13 from '../../templates/dom-13.html';
import dom14 from '../../templates/dom-14.html'
import DisplayList from '../../components/display-list.mjs';

const fragments = [
    css7,
    css8,
    css9,
    dom12,
    dom13,
    dom14,
].map(template => document.createRange().createContextualFragment(template))

console.log(fragments)
const head = document.querySelector('head');
fragments.forEach(frag => {
    head.appendChild(frag);
});

class Demo extends HTMLDivElement {
    static get is() {
        return 'x-demo';
    }
    constructor() {
        super();
        const display = new DisplayList();
        this.appendChild(display);
    }

    render() {
        
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
}

customElements.define(Demo.is, Demo, {
    extends: 'div'
});

export default Demo;
