import { Component } from '../component';

export type TextareaOptions = {
    text: string;
};

export class MPTextarea extends Component {
    private text: string;
    constructor(options: Partial<TextareaOptions>) {
        super('textarea');
        this.text = options.text || '';
    }
}
