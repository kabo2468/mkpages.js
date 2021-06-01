import { Component } from '../component';

type Actions = 'dialog' | 'resetRandom' | 'pushEvent' | 'callAiScript';

type ButtonSettings = {
    title: string;
    primary: boolean;
    action: Actions;
    content: string | null;
    event: string | null;
    message: string | null;
    variable: string | null;
    fn: string | null;
};

export class Button extends Component {
    private text: string;
    private action: Actions;
    private primary: boolean;
    private content: string | null = null;
    private event: string | null = null;
    private message: string | null = null;
    private var: string | null = null;
    private fn: string | null = null;

    constructor(
        action: 'dialog',
        { title, primary, content }: Partial<Pick<ButtonSettings, 'title' | 'primary' | 'content'>>
    );
    constructor(action: 'resetRandom', { title, primary }: Partial<Pick<ButtonSettings, 'title' | 'primary'>>);
    constructor(
        action: 'pushEvent',
        {
            title,
            primary,
            event,
            message,
            variable,
        }: Partial<Pick<ButtonSettings, 'title' | 'primary' | 'event' | 'message' | 'variable'>>
    );
    constructor(
        action: 'callAiScript',
        { title, primary, fn }: Partial<Pick<ButtonSettings, 'title' | 'primary' | 'fn'>>
    );
    constructor(action: Actions, { title, primary, content, event, message, variable, fn }: Partial<ButtonSettings>) {
        super('button');
        this.text = title || '';
        this.primary = primary || false;
        this.action = action;
        switch (action) {
            case 'dialog':
                this.content = content || '';
                break;
            case 'pushEvent':
                this.event = event || '';
                this.message = message || '';
                this.var = variable || '';
                break;
            case 'resetRandom':
                break;
            case 'callAiScript':
                this.fn = fn || '';
                break;
        }
    }
}
