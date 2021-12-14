import { Component } from '../component';

type TextareaOption = {
    text: string;
};

export class MPTextarea extends Component {
    private text: string;
    constructor(options: Partial<TextareaOption>) {
        super('textarea');
        this.text = options.text || '';
    }
}
