import { Component } from '../component';

export type SwitchOptions = {
    variableName: string;
    title: string;
    defaultValue: boolean;
};

export class MPSwitch extends Component {
    readonly name: string;
    readonly text: string;
    readonly default: boolean;
    constructor(options: Partial<SwitchOptions>) {
        super('switch');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || false;
    }
}
