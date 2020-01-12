class ShowPerformance extends HTMLElement {
    static get is() {
        return 'show-performance';
    }

    constructor() {    
        super();
        const func = this.getAttribute('func')
        const times = this.getAttribute('times')
        eval(func);
        this._times = parseInt(times);
        this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        const func = this._func;
        const start = new Date();
        for(var i = 0; i < this._times; i++) {
            func();
        }
        const end = new Date();
        this.shadowRoot.innerHTML = `
            <div>
                <pre>${this._func}</pre>
                <br>
                运行次数 ${this._times}
                <br>
                运行时间：
                ${(end - start) / 1000} 秒
            <div>
        `
    }
} 
customElements.define(ShowPerformance.is, ShowPerformance);

export default ShowPerformance