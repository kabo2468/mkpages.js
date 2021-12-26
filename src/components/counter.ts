import { Component } from '../component';

export type CounterOptions = {
    variableName: string;
    title: string;
    increaseValue: number;
};

export class MPCounter extends Component {
    readonly name: string;
    readonly text: string;
    readonly inc: number;
    constructor(options: Partial<CounterOptions>) {
        super('counter');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.inc = options.increaseValue || 0;
    }
}
