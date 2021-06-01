import { Component } from '../component';

export class Switch extends Component {
    private name: string;
    private text: string;
    private default: boolean;
    constructor(variableName: string, title: string, defaultValue = false) {
        super('switch');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
