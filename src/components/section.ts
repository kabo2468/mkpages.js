import { Component } from '../component';

type SectionOptions = {
    title: string;
    children: Component[];
};

export class MPSection extends Component {
    private title: string;
    private children: Component[];
    constructor(options: Partial<SectionOptions>) {
        super('section');
        this.title = options.title || '';
        this.children = options.children || [];
    }

    addComponents(...components: Component[]): MPSection {
        this.children.push(...components);
        return this;
    }
}
