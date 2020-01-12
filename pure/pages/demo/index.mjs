// ServiceWorker help with import html template
import css7 from '../../templates/css-7.html';
import css8 from '../../templates/css-8.html';
import css9 from '../../templates/css-9.html';
import css10 from '../../templates/css-10.html';

import dom12 from '../../templates/dom-12.html';
import dom13 from '../../templates/dom-13.html';
import dom14 from '../../templates/dom-14.html'

import highPerformance5 from '../../templates/h-p-5.html';

import DisplayList from '../../components/display-list.mjs';

const fragments = [
    css7,
    css8,
    css9,
    css10,
    dom12,
    dom13,
    dom14,
    highPerformance5
].map(template => document.createRange().createContextualFragment(template))

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
