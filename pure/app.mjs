if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.mjs', {
            scope: './'
        }).then((registration) => {
            import('./index.mjs')
            .then(() => {
                console.log('import index.mjs successfully!');
            })
            // .catch(e => {
            //     console.table(e);

            //     // 第一次加载，service worker未获取页面的控制权，导入html时会出错
            //     if(e instanceof TypeError) {
            //         // location.reload();
            //     }
            // })
           
            registration.addEventListener('updatefound', () => {
                const netWorker = registration.installing;

                netWorker.addEventListener('statechange', () => {
                    console.log('netWorker.state has changed:', netWorker.state);
                })
            });
        })

        navigator.serviceWorker.addEventListener('controllerchange', () => {
            // This fires when the service worker controlling this page
            // changes, eg a new worker has skipped waiting and become
            // the new active worker.
            console.log('controllerchange')
        });
    })
}



