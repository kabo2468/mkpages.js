import { v4 as uuid } from 'uuid';

export default class Component {
    public id: string;
    public type: string;

    constructor(type: string) {
        this.id = uuid();
        this.type = type;
    }
}
