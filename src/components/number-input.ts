import { Component } from '../component';

export class MPNumberInput extends Component {
    private name: string;
    private text: string;
    private default: number;
    constructor(variableName = '', title = '', defaultValue = 0) {
        super('numberInput');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
