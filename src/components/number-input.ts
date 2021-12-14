import { Component } from '../component';

type NumberInputOption = {
    variableName?: string;
    title?: string;
    defaultValue?: number;
};

export class MPNumberInput extends Component {
    private name: string;
    private text: string;
    private default: number;
    constructor(options: Partial<NumberInputOption>) {
        super('numberInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || 0;
    }
}
