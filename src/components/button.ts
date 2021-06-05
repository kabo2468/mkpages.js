import { Component } from '../component';

export type Actions = 'dialog' | 'resetRandom' | 'pushEvent' | 'callAiScript';

interface ButtonOptions {
    title: string;
    primary: boolean;
}
interface DialogOptions extends ButtonOptions {
    content: string;
}
interface ResetRandomOptions extends ButtonOptions {}
interface PushEventOptions extends ButtonOptions {
    event: string;
    message: string;
    variable: string;
}
interface CallAiScriptOptions extends ButtonOptions {
    functionName: string;
}

export class Button extends Component {
    private text: string;
    private action: Actions;
    private primary: boolean;
    private content: string | null = null;
    private event: string | null = null;
    private message: string | null = null;
    private var: string | null = null;
    private fn: string | null = null;

    constructor(action?: 'dialog', options?: Partial<DialogOptions>);
    constructor(action?: 'resetRandom', options?: Partial<ResetRandomOptions>);
    constructor(action?: 'pushEvent', options?: Partial<PushEventOptions>);
    constructor(action?: 'callAiScript', options?: Partial<CallAiScriptOptions>);
    constructor(
        action: Actions = 'dialog',
        options?: Partial<DialogOptions & ResetRandomOptions & PushEventOptions & CallAiScriptOptions>
    ) {
        super('button');
        this.text = options?.title || '';
        this.primary = options?.primary || false;
        this.action = action;
        switch (action) {
            case 'dialog':
                this.content = options?.content || '';
                break;
            case 'pushEvent':
                this.event = options?.event || '';
                this.message = options?.message || '';
                this.var = options?.variable || '';
                break;
            case 'resetRandom':
                break;
            case 'callAiScript':
                this.fn = options?.functionName || '';
                break;
        }
    }
}
