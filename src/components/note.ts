import { Component } from '../component';

export type NoteOptions = {
    note: string;
    detailed: boolean;
};

export class MPNote extends Component {
    readonly note: string;
    readonly detailed: boolean;

    constructor(options: Partial<NoteOptions>) {
        super('note');
        this.note = options.note || '';
        this.detailed = options.detailed || false;
    }
}
