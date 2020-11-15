import Component from '../component';

export default class MPSection extends Component {
    public title: string;
    public children: Component[];
    constructor(title: string, children: Component[]) {
        super('section');
        this.title = title;
        this.children = children;
    }

    addComponent(component: Component): MPSection {
        this.children.push(component);
        return this;
    }
}
