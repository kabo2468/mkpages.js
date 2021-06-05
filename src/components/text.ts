import { Component } from '../component';

export class Text extends Component {
    private text: string;
    constructor(text = '') {
        super('text');
        this.text = text;
    }
}
