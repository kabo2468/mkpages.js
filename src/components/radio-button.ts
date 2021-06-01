import { Component } from '../component';

export class RadioButton extends Component {
    private name: string;
    private title: string;
    private values: string[];
    private default: string;
    constructor(variableName: string, title: string, values: string[], defaultValue: string) {
        super('radioButton');
        this.name = variableName;
        this.title = title;
        this.values = values;
        this.default = defaultValue;
    }
}
