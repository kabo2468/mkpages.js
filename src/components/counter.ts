import { Component } from '../component';

export class Counter extends Component {
    private name: string;
    private text: string;
    private inc: number;
    constructor(variableName: string, title: string, increaseValue = 0) {
        super('counter');
        this.name = variableName;
        this.text = title;
        this.inc = increaseValue;
    }
}
