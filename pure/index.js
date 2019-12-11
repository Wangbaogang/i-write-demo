class DisplayList extends HTMLElement {
    static get is() {
        return 'display-list';
    }
    
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        })
        const root = this.shadowRoot;
        
        root.innerHTML = `
            <style>
                ul {
                    list-style: none;
                }
                .tabs {
                    display: flex;
                    flex-direction: row;
                }
                li {
                    margin: 0 10px;
                }
                label:hover {
                    cursor: pointer;
                }
                .text {
                    vertical-align: middle;
                }
            </style>
            <ul class="tabs">
            </ul>
            <ul class="panels">
            </ul>
        `;        
    }

    connectedCallback() {
        const root = this.shadowRoot;

        const tabs = root.querySelector('.tabs');
        const panels = root.querySelector('.panels');
        const templates = Array.from(document.querySelector('head').querySelectorAll('template'))
        const name = "shadow-dom";
        templates.forEach((template, index) => {
            const tab = document.createElement('li');
            tab.innerHTML = `
                <label>
                    <input type="radio" name=${name}></input>
                    <span class="text">${template.dataset.label}</span>
                </label>
            `;
            tabs.appendChild(tab);


            const panel = document.createElement('li');
            panel.setAttribute('style', 'display:none');

            const innerRoot = document.createElement('article');
            innerRoot.attachShadow({
                mode: 'open'
            });
            innerRoot.shadowRoot.appendChild(template.content);
            panel.appendChild(innerRoot);

            panels.appendChild(panel);

            tab.querySelector('input').addEventListener('click', function(event) {
                Array.from(panels.children).forEach(pnl => {
                    pnl.setAttribute('style', 'display:none');
                }) 
                panel.setAttribute('style', 'display:block');
            })

            
        })
       
    }
}

customElements.define(DisplayList.is, DisplayList);

export default DisplayList;