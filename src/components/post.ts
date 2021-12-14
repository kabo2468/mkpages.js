import { Component } from '../component';

type PostOption = {
    text: string;
};
type PostOptionWithCanvas = PostOption & { canvasId: string };

export class MPPost extends Component {
    private text: string;
    private attachCanvasImage: boolean;
    private canvasId: string;

    constructor(options: Partial<PostOption>);
    constructor(options: Partial<PostOptionWithCanvas>);
    constructor(options: Partial<PostOption> | Partial<PostOptionWithCanvas>) {
        super('post');
        this.text = options.text || '';
        this.canvasId = '';
        this.attachCanvasImage = false;
        if ('canvasId' in options) {
            this.canvasId = options.canvasId || '';
            this.attachCanvasImage = true;
        }
    }
}
