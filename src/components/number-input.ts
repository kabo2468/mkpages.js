import Component from '../component';

export default class MPNumberInput extends Component {
    public name: string;
    public text: string;
    public default: number;
    constructor(name: string, title: string, def: number) {
        super('numberInput');
        this.name = name;
        this.text = title;
        this.default = def;
    }
}
