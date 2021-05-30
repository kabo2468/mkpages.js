import { Component } from '../component';

export class MPText extends Component {
    public text: string;
    constructor(text: string) {
        super('text');
        this.text = text;
    }
}
