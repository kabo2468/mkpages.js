import { Component } from '../component';

export class MPTextarea extends Component {
    private text: string;
    constructor(text = '') {
        super('textarea');
        this.text = text;
    }
}
