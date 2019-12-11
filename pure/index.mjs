// ServiceWorker help with import html template
import css7 from './template/css-7.html';
import DisplayList from './display-list.mjs';

const head = document.querySelector('head');
head.appendChild(css7);

document.body.appendChild(new DisplayList());

