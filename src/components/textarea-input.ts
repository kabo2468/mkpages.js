import { Component } from '../component';

export class TextareaInput extends Component {
    public name: string;
    public text: string;
    public default: string;
    constructor(variableName: string, title: string, defaultValue = '') {
        super('textareaInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
