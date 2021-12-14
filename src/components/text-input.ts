import { Component } from '../component';

type TextInputOption = {
    variableName: string;
    title: string;
    defaultValue: string;
};

export class MPTextInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(options: Partial<TextInputOption>) {
        super('textInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || '';
    }
}
