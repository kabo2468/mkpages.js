import { Component } from '../component';

export class MPNumberInput extends Component {
    public name: string;
    public text: string;
    public default: number;
    constructor(name: string, title: string, defaultValue = 0) {
        super('numberInput');
        this.name = name;
        this.text = title;
        this.default = defaultValue;
    }
}
