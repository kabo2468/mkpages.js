import { Component } from '../component';

export type TextOptions = {
    text: string;
};

export class MPText extends Component {
    readonly text: string;
    constructor(options: Partial<TextOptions>) {
        super('text');
        this.text = options.text || '';
    }
}
