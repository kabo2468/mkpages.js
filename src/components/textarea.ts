import { Component } from '../component';

export class Textarea extends Component {
    public text: string;
    constructor(text: string) {
        super('textarea');
        this.text = text;
    }
}
