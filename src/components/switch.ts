import { Component } from '../component';

type SwitchOption = {
    variableName: string;
    title: string;
    defaultValue: boolean;
};

export class MPSwitch extends Component {
    private name: string;
    private text: string;
    private default: boolean;
    constructor(options: Partial<SwitchOption>) {
        super('switch');
        this.name = options.variableName || '';
        this.text = options.title || '';
        this.default = options.defaultValue || false;
    }
}
