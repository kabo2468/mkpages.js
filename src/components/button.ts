import { Component } from '../component';

export type Actions = 'dialog' | 'resetRandom' | 'pushEvent' | 'callAiScript';

type ButtonOptions = {
    action: Actions;
    title: string;
    primary: boolean;
};
export type DialogOptions = ButtonOptions & {
    action: 'dialog';
    content: string;
};
export type ResetRandomOptions = ButtonOptions & {
    action: 'resetRandom';
};
export type PushEventOptions = ButtonOptions & {
    action: 'pushEvent';
    event: string;
    message: string;
    variable: string;
};
export type CallAiScriptOptions = ButtonOptions & {
    action: 'callAiScript';
    functionName: string;
};

export class MPButton extends Component {
    private text: string;
    private action: Actions;
    private primary: boolean;
    private content: string | null = null;
    private event: string | null = null;
    private message: string | null = null;
    private var: string | null = null;
    private fn: string | null = null;

    constructor(options: Partial<DialogOptions>);
    constructor(options: Partial<ResetRandomOptions>);
    constructor(options: Partial<PushEventOptions>);
    constructor(options: Partial<CallAiScriptOptions>);
    constructor(
        options:
            | Partial<DialogOptions>
            | Partial<ResetRandomOptions>
            | Partial<PushEventOptions>
            | Partial<CallAiScriptOptions>
    ) {
        super('button');
        this.text = options?.title || '';
        this.primary = options?.primary || false;
        this.action = options.action || 'dialog';
        switch (options.action) {
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
