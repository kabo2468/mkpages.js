import { Component } from '../component';

export class Section extends Component {
    private title: string;
    private children: Component[];
    constructor(title: string, children: Component[]) {
        super('section');
        this.title = title;
        this.children = children;
    }

    addComponents(...components: Component[]): Section {
        this.children.push(...components);
        return this;
    }
}
