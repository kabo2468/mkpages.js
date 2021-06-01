import { Component } from '../component';

export class NumberInput extends Component {
    public name: string;
    public text: string;
    public default: number;
    constructor(variableName: string, title: string, defaultValue = 0) {
        super('numberInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
