import { Component } from '../component';

export class TextInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(variableName = '', title = '', defaultValue = '') {
        super('textInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
