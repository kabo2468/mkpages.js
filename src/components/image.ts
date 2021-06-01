import { Component } from '../component';

export class Image extends Component {
    private fileId: string;
    constructor(fileId: string) {
        super('image');
        this.fileId = fileId;
    }
}
