import { Component } from '../component';

export class MPImage extends Component {
    public fileId: string;
    constructor(fileId: string) {
        super('image');
        this.fileId = fileId;
    }
}
