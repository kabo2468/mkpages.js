import { Component } from '../component';

export type TextareaInputOptions = {
    variableName: string;
    title: string;
    defaultValue: string;
};

export class MPTextareaInput extends Component {
    private name: string;
    private text: string;
    private default: string;
    constructor(options: Partial<TextareaInputOptions>) {
        super('textareaInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || '';
    }
}
