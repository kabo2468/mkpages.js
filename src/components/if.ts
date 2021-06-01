import { Component } from '../component';

export class If extends Component {
    public var: string;
    public children: Component[];
    constructor(variable: string, children: Component[]) {
        super('if');
        this.var = variable;
        this.children = children;
    }
}
