import { Component } from '../component';

export class Post extends Component {
    public text: string;
    public attachCanvasImage: boolean;
    public canvasId: string;
    constructor(text: string);
    constructor(text: string, canvasId: string);
    constructor(text: string, canvasId = '') {
        super('post');
        this.text = text;
        this.attachCanvasImage = canvasId ? true : false;
        this.canvasId = canvasId;
    }
}
