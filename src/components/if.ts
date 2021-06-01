import { Component } from '../component';

export class If extends Component {
    public var: string;
    public children: Component[];
    constructor(variableName: string, children: Component[]) {
        super('if');
        this.var = variableName;
        this.children = children;
    }
}
