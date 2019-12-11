navigator.serviceWorker.register('./service-worker.mjs', {
    scope: './'
}).then((registration) => {
    console.log(registration)
    import('./index.mjs')
}, (error) => {
    console.log('ServiceWorker registration failed:', error);
});
