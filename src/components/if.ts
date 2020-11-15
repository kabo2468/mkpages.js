import Component from '../component';

export default class MPIf extends Component {
    public var: string;
    public children: Component[];
    constructor(variable: string, children: Component[]) {
        super('if');
        this.var = variable;
        this.children = children;
    }
}
