import Component from '../component';

export default class MPTextareaInput extends Component {
    public name: string;
    public text: string;
    public default: string;
    constructor(variableName: string, title: string, def: string) {
        super('textareaInput');
        this.name = variableName;
        this.text = title;
        this.default = def;
    }
}
