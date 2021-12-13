import { Component } from '../component';

export class MPText extends Component {
    private text: string;
    constructor(text = '') {
        super('text');
        this.text = text;
    }
}
