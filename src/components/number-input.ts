import { Component } from '../component';

export class NumberInput extends Component {
    private name: string;
    private text: string;
    private default: number;
    constructor(variableName: string, title: string, defaultValue = 0) {
        super('numberInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
