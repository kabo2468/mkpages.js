import { Component } from '../component';

export class MPSection extends Component {
    private title: string;
    private children: Component[];
    constructor(title = '', children: Component[] = []) {
        super('section');
        this.title = title;
        this.children = children;
    }

    addComponents(...components: Component[]): MPSection {
        this.children.push(...components);
        return this;
    }
}
