import Component from '../component';

export default class MPCanvas extends Component {
    public name: string;
    public width: number;
    public height: number;

    constructor(canvasId: string, width: number, height: number) {
        super('canvas');
        this.name = canvasId;
        this.width = width;
        this.height = height;
    }
}
