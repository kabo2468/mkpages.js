import { Component } from '../component';

type TextOption = {
    text: string;
};

export class MPText extends Component {
    private text: string;
    constructor(options: Partial<TextOption>) {
        super('text');
        this.text = options.text || '';
    }
}
