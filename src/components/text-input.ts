import { Component } from '../component';

export type TextInputOptions = {
    variableName: string;
    title: string;
    defaultValue: string;
};

export class MPTextInput extends Component {
    readonly name: string;
    readonly text: string;
    readonly default: string;
    constructor(options: Partial<TextInputOptions>) {
        super('textInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || '';
    }
}
