import { Component } from '../component';

export class Textarea extends Component {
    private text: string;
    constructor(text = '') {
        super('textarea');
        this.text = text;
    }
}
