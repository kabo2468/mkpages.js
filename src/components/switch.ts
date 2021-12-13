import { Component } from '../component';

export class MPSwitch extends Component {
    private name: string;
    private text: string;
    private default: boolean;
    constructor(variableName = '', title = '', defaultValue = false) {
        super('switch');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
