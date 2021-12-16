import { Component } from '../component';

export type PostOptions = {
    text: string;
};
export type PostWithCanvasOptions = {
    text: string;
    canvasId: string;
};

export class MPPost extends Component {
    private text: string;
    private attachCanvasImage: boolean;
    private canvasId: string;

    constructor(options: Partial<PostOptions>);
    constructor(options: Partial<PostWithCanvasOptions>);
    constructor(options: Partial<PostOptions> | Partial<PostWithCanvasOptions>) {
        super('post');
        this.text = options.text || '';
        this.canvasId = '';
        this.attachCanvasImage = false;
        if ('canvasId' in options) {
            this.canvasId = options.canvasId || '';
            this.attachCanvasImage = options.canvasId ? true : false;
        }
    }
}
