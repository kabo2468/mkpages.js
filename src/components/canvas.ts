import Component from '../component';

export default class MPCanvas extends Component {
    public name: string;
    public width: number;
    public height: number;

    constructor(canvasId: string, width = 300, height = 200) {
        super('textarea');
        this.name = canvasId;
        this.width = width;
        this.height = height;
    }
}
