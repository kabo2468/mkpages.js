import { Component } from '../component';

export type SectionOptions = {
    title: string;
    children: Component[];
};

export class MPSection extends Component {
    readonly title: string;
    readonly children: Component[];
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
