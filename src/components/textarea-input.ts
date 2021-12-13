import { Component } from '../component';

export class MPTextareaInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(variableName = '', title = '', defaultValue = '') {
        super('textareaInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
