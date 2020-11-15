import Component from '../component';

export default class MPImage extends Component {
    public fileId: string;
    constructor(fileId: string) {
        super('image');
        this.fileId = fileId;
    }
}
