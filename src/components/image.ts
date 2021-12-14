import { Component } from '../component';

type ImageOption = {
    fileId: string;
};

export class MPImage extends Component {
    private fileId: string;
    constructor(options: Partial<ImageOption>) {
        super('image');
        this.fileId = options.fileId || '';
    }
}
