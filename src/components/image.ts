import { Component } from '../component';

export class Image extends Component {
    public fileId: string;
    constructor(fileId: string) {
        super('image');
        this.fileId = fileId;
    }
}
