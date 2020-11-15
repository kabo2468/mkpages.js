import Component from '../component';

export default class MPSwitch extends Component {
    public name: string;
    public text: string;
    public default: boolean;
    constructor(variableName: string, title: string, def: boolean) {
        super('if');
        this.name = variableName;
        this.text = title;
        this.default = def;
    }
}
