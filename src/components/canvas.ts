import { Component } from '../component';

export class Canvas extends Component {
    private name: string;
    private width: number;
    private height: number;

    constructor(canvasId = '', width = 300, height = 200) {
        super('canvas');
        this.name = canvasId;
        this.width = width;
        this.height = height;
    }
}
