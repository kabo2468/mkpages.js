import { Component } from '../component';

export class Switch extends Component {
    public name: string;
    public text: string;
    public default: boolean;
    constructor(variableName: string, title: string, defaultValue = false) {
        super('switch');
        this.name = variableName;
        this.text = title;
        this.default = defaultValue;
    }
}
