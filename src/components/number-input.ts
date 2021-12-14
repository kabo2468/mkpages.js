import { Component } from '../component';

export type NumberInputOptions = {
    variableName?: string;
    title?: string;
    defaultValue?: number;
};

export class MPNumberInput extends Component {
    private name: string;
    private text: string;
    private default: number;
    constructor(options: Partial<NumberInputOptions>) {
        super('numberInput');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || 0;
    }
}
