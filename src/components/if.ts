import { Component } from '../component';

export class MPIf extends Component {
    private var: string;
    private children: Component[];
    constructor(variableName = '', children: Component[] = []) {
        super('if');
        this.var = variableName;
        this.children = children;
    }
}
