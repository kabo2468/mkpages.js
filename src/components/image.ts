import { Component } from '../component';

export class MPImage extends Component {
    private fileId: string;
    constructor(fileId = '') {
        super('image');
        this.fileId = fileId;
    }
}
