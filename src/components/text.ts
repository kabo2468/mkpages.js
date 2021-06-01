import { Component } from '../component';

export class Text extends Component {
    public text: string;
    constructor(text: string) {
        super('text');
        this.text = text;
    }
}
