import { Component } from '../component';

export class Post extends Component {
    private text: string;
    private attachCanvasImage: boolean;
    private canvasId: string;
    constructor(text: string);
    constructor(text: string, canvasId: string);
    constructor(text: string, canvasId = '') {
        super('post');
        this.text = text;
        this.attachCanvasImage = canvasId ? true : false;
        this.canvasId = canvasId;
    }
}
