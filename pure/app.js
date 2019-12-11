"use strict";

navigator.serviceWorker.register('./service-worker.js', {
    scope: './'
}).then(() => import('./index.js'));
