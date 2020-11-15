import Component from '../component';

export default class MPCounter extends Component {
    public name: string;
    public text: string;
    public inc: number;
    constructor(variableName: string, title: string, increase: number) {
        super('counter');
        this.name = variableName;
        this.text = title;
        this.inc = increase;
    }
}
