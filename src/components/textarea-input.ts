import { Component } from '../component';

type TextareaInput = {
    variableName: string;
    title: string;
    defaultValue: string;
};

export class MPTextareaInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(options: Partial<TextareaInput>) {
        super('textareaInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || '';
    }
}
