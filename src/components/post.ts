import { Component } from '../component';

export type PostOptions = {
    text: string;
};
export type PostWithCanvasOptions = Partial<PostOptions> & {
    canvasId: string;
};

export class MPPost extends Component {
    readonly text: string;
    readonly attachCanvasImage: boolean;
    readonly canvasId: string;

    constructor(options: Partial<PostOptions>);
    constructor(options: PostWithCanvasOptions);
    constructor(options: Partial<PostOptions> | PostWithCanvasOptions) {
        super('post');
        this.text = options.text || '';
        if ('canvasId' in options) {
            this.canvasId = options.canvasId;
            this.attachCanvasImage = true;
        } else {
            this.canvasId = '';
            this.attachCanvasImage = false;
        }
    }
}
