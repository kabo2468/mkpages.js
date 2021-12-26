import { Component } from '../component';

export type IfOptions = {
    variableName: string;
    children: Component[];
};

export class MPIf extends Component {
    readonly var: string;
    readonly children: Component[];
    constructor(options: Partial<IfOptions>) {
        super('if');
        this.var = options.variableName || '';
        this.children = options.children || [];
    }
}
