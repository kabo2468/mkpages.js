import Component from '../component';

export default class MPTextarea extends Component {
    public text: string;
    constructor(text: string) {
        super('textarea');
        this.text = text;
    }
}
