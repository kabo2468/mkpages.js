import { Component } from '../component';

export type Actions = 'dialog' | 'resetRandom' | 'pushEvent' | 'callAiScript';

export type ButtonSettings = {
    text: string;
    primary: boolean;
    action: Actions;
    content: string | null;
    event: string | null;
    message: string | null;
    variable: string | null;
    fn: string | null;
};

export class MPButton extends Component {
    public text: string;
    public action: Actions;
    public primary: boolean;
    public content: string | null = null;
    public event: string | null = null;
    public message: string | null = null;
    public var: string | null = null;
    public fn: string | null = null;

    constructor({ text, primary, action, content, event, message, variable, fn }: Partial<ButtonSettings>) {
        super('button');
        this.text = text || '';
        this.primary = primary || false;
        this.action = action || 'dialog';
        if (action === 'dialog') {
            this.content = content || null;
        } else if (action === 'pushEvent') {
            this.event = event || null;
            this.message = message || null;
            this.var = variable || null;
        } else if (action === 'callAiScript') {
            this.fn = fn || null;
        }
    }
}
