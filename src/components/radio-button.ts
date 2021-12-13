import { Component } from '../component';

export class MPRadioButton extends Component {
    private name: string;
    private title: string;
    private values: string[];
    private default: string;
    constructor(variableName = '', title = '', values: string[] = [], defaultValue = '') {
        super('radioButton');
        this.name = variableName;
        this.title = title;
        this.values = values;
        this.default = defaultValue;
    }
}
