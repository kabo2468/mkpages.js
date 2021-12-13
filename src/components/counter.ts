import { Component } from '../component';

export class MPCounter extends Component {
    private name: string;
    private text: string;
    private inc: number;
    constructor(variableName = '', title = '', increaseValue = 0) {
        super('counter');
        this.name = variableName;
        this.text = title;
        this.inc = increaseValue;
    }
}
