import "./index.css";
export default class BasicTemplate {
    static get toolbox() {
        return {
            title: 'BasicTemplate',
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data, config, api, readOnly }) {
        this.data = { ...data }
        this.config = { ...config }
        this.api = api
        this.readOnly = readOnly

        this.settings = [
            {
                name: 'title',
                icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`,
            }
        ]
    }

    render() {
        const input = document.createElement('div');
        input.setAttribute('contenteditable', true);
        return input;
    }

    save(blockContent) {
        const title = blockContent.querySelector('.basic-template__title').innerText;

        return {
            title: title
        };
    }

    // validate(savedData) {
    //     // return false for invalid data
    //     if (!savedData) {
    //         return false;
    //     }
    //     return true;
    // }

    renderSettings() {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        return input;
    }
}