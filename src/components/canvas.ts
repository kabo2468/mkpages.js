import { Component } from '../component';

export type CanvasOptions = {
    canvasId: string;
    width: number;
    height: number;
};

export class MPCanvas extends Component {
    readonly name: string;
    readonly width: number;
    readonly height: number;

    constructor(options: Partial<CanvasOptions>) {
        super('canvas');
        this.name = options.canvasId || '';
        this.width = options.width || 300;
        this.height = options.height || 200;
    }
}
