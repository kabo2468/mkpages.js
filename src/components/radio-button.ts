import { Component } from '../component';

export type RadioButtonOptions = {
    variableName: string;
    title: string;
    values: string[];
    defaultValue: string;
};

export class MPRadioButton extends Component {
    private name: string;
    private title: string;
    private values: string[];
    private default: string;
    constructor(options: Partial<RadioButtonOptions>) {
        super('radioButton');
        this.name = options.variableName || '';
        this.title = options.title || '';
        this.values = options.values || [];
        this.default = options.defaultValue || '';
    }
}
