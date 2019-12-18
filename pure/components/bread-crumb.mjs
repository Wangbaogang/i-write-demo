class BreadCrumbs extends HTMLElement {
    static get is() {
        return 'bread-crumb';
    }

    static getItemHtml(item) {
        return `
            <li>

            <li>
        `
    }

    static concatHtml(data = []) {
        let html = '';
        data.forEach((item, index) => {
            
            html += `<a href=${item.href}>${item.label}`
            html += ''
        })
    }


    // e.g.
    // [
    //     {
    //         label: 'page 1',
    //         href: '#one'
    //     },
    //     {
    //         label: 'page 2',
    //         href: '#two'
    //     }
    // ]
    constructor(data = []) {
        super();

        

        this.attachShadow({
            mode: 'open'
        });

        for(i = 0; i < data.length; i++) {
            
        }

        
    }

    connectedCallback() {

    }
}

customElements.define(BreadCrumbs.is, BreadCrumbs);

export default BreadCrumbs;