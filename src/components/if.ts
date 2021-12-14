import { Component } from '../component';

type IfOption = {
    variableName: string;
    children: Component[];
};

export class MPIf extends Component {
    private var: string;
    private children: Component[];
    constructor(options: Partial<IfOption>) {
        super('if');
        this.var = options.variableName || '';
        this.children = options.children || [];
    }
}
