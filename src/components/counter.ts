import { Component } from '../component';

type CounterOption = {
    variableName: string;
    title: string;
    increaseValue: number;
};

export class MPCounter extends Component {
    private name: string;
    private text: string;
    private inc: number;
    constructor(options: Partial<CounterOption>) {
        super('counter');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.inc = options.increaseValue || 0;
    }
}
