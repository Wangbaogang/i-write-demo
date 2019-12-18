console.log(self);

//避免定义的函数污染ServiceWorkerGlobalScope全局作用域
(function() {
    self.addEventListener('install', (event) => {
        self.skipWaiting();
    });
    
    //Call clients.claim so that we intercept requests even on initial page load.
    self.addEventListener('activate', (event) => {
        self.clients.claim();
    });
    
    self.addEventListener('fetch', async event => {
        const request = event.request;
        console.log('Fetch Event:',event);
        if(isTemplateReq(request)) {
           event.respondWith(getResponse(request));
        }
    });
    
    function isTemplateReq(request) {
        if(request.url.endsWith('.html') && request.destination === 'script') {
            return true;
        }
        return false;
    }
    
    function getESModule(text) {
        // 有 重复template元素 问题
        // return `
        //     const template = document.createElement('template');
        //     template.innerHTML = \`${text}\`;
        //     export default template;
        // `

        // return `
        //     const template = document.createRange().createContextualFragment(\`${text}\`);
        //     export default template;
        // `;

        return `
            const template = \`${text}\`;
            export default template;
        `
    }
    
    async function getResponse(request) {
        const response = await fetch(request);
        const text = await response.text();
        console.log(request, response, text);
        const esModule = getESModule(text);
        return new Response(esModule, {
            headers: {
                'Content-Type': 'application/javascript'
            }
        });
    }
})();

