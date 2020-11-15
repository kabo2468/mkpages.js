import Component from '../component';

export default class MPText extends Component {
    public text: string;
    constructor(text: string) {
        super('text');
        this.text = text;
    }
}
