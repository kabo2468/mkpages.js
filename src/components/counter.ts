import { Component } from '../component';

export class MPCounter extends Component {
    public name: string;
    public text: string;
    public inc: number;
    constructor(variableName: string, title: string, increaseValue = 0) {
        super('counter');
        this.name = variableName;
        this.text = title;
        this.inc = increaseValue;
    }
}
