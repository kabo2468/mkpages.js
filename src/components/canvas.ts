import { Component } from '../component';

type CanvasOption = {
    canvasId: string;
    width: number;
    height: number;
};

export class MPCanvas extends Component {
    private name: string;
    private width: number;
    private height: number;

    constructor(options: Partial<CanvasOption>) {
        super('canvas');
        this.name = options.canvasId || '';
        this.width = options.width || 300;
        this.height = options.height || 200;
    }
}
