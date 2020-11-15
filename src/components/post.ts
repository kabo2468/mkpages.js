import Component from '../component';

export default class MPPost extends Component {
    public text: string;
    public attachCanvasImage: boolean;
    public canvasId: string;
    constructor(text: string, attachCanvasImage?: boolean, canvasId?: string) {
        super('post');
        this.text = text;
        this.attachCanvasImage = attachCanvasImage || false;
        this.canvasId = canvasId || '';
    }
}
