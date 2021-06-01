import { Component } from '../component';

export class TextareaInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(variableName: string, title: string, defaultValue = '') {
        super('textareaInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
