import { Component } from '../component';

export class RadioButton extends Component {
    public name: string;
    public title: string;
    public values: string[];
    public default: string;
    constructor(variableName: string, title: string, values: string[], def: string) {
        super('radioButton');
        this.name = variableName;
        this.title = title;
        this.values = values;
        this.default = def;
    }
}
