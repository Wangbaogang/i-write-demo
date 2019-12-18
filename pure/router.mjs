class Router {
    constructor() {
        this.routes = {};

        this.currentUrl = '';
        this.refresh = this.refresh.bind(this);

        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
    }

    start() {
        this.refresh();
    }

    route(path, callback = function() {}) {
        this.routes[path] = callback;
    }

    refresh() {
        this.currentUrl = location.hash.slice(1) || '';
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    }
}

export default Router;