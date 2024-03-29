import { Component } from '../component';

export type ImageOptions = {
    fileId: string;
};

export class MPImage extends Component {
    readonly fileId: string;
    constructor(options: Partial<ImageOptions>) {
        super('image');
        this.fileId = options.fileId || '';
    }
}
