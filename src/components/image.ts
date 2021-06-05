import { Component } from '../component';

export class Image extends Component {
    private fileId: string;
    constructor(fileId = '') {
        super('image');
        this.fileId = fileId;
    }
}
