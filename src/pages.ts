import { Component } from './component';
import { CallAiScriptOptions, DialogOptions, PushEventOptions, ResetRandomOptions } from './components/button';
import { CanvasOptions } from './components/canvas.js';
import { CounterOptions } from './components/counter.js';
import { IfOptions } from './components/if.js';
import { ImageOptions } from './components/image.js';
import { NumberInputOptions } from './components/number-input.js';
import { PostWithCanvasOptions } from './components/post.js';
import { RadioButtonOptions } from './components/radio-button.js';
import { SectionOptions } from './components/section.js';
import { SwitchOptions } from './components/switch.js';
import { TextInputOptions } from './components/text-input.js';
import { TextOptions } from './components/text.js';
import { TextareaInputOptions } from './components/textarea-input.js';
import { TextareaOptions } from './components/textarea.js';
import { toComponent } from './util';

type Fonts = 'serif' | 'sans-serif';

type BodyBase = {
    title: string | null;
    summary: string | null;
    content: Component[] | null;
    variables: any[] | null;
    script: string;
    eyeCatchingImageId: string | null;
    font: Fonts;
    alignCenter: boolean;
    hideTitleWhenPinned: boolean;
};

export type ComponentTypes = (
    | (DialogOptions & { type: 'button' })
    | (ResetRandomOptions & { type: 'button' })
    | (PushEventOptions & { type: 'button' })
    | (CallAiScriptOptions & { type: 'button' })
    | (CanvasOptions & { type: 'canvas' })
    | (CounterOptions & { type: 'counter' })
    | (Omit<IfOptions, 'children'> & { type: 'if'; children: ComponentTypes[] })
    | (ImageOptions & { type: 'image' })
    | (NumberInputOptions & { type: 'numberInput' })
    | (PostWithCanvasOptions & { type: 'post' })
    | (RadioButtonOptions & { type: 'radioButton' })
    | (Omit<SectionOptions, 'children'> & { type: 'section'; children: ComponentTypes[] })
    | (SwitchOptions & { type: 'switch' })
    | (TextOptions & { type: 'text' })
    | (TextInputOptions & { type: 'textInput' })
    | (TextareaOptions & { type: 'textarea' })
    | (TextareaInputOptions & { type: 'textareaInput' })
) & { type: string; id: string };

interface JsonBody {
    title: string;
    name: string;
    summary: string | null;
    font: Fonts;
    script: string;
    hideTitleWhenPinned: boolean;
    alignCenter: boolean;
    content: ComponentTypes[];
    variables: ComponentTypes[];
    eyeCatchingImageId: string | null;
}

interface Body extends BodyBase {
    name: string;
}

interface Settings extends Partial<BodyBase> {
    urlName?: string;
}

export class MkPages {
    private _urlName: string;
    private _title: string;
    private _summary: string | null;
    private _content: Component[];
    private _variables: any[];
    private _script: string;
    private _eyeCatchingImageId: string | null;
    private _font: Fonts;
    private _alignCenter: boolean;
    private _hideTitleWhenPinned: boolean;

    /**
     * Creates an instance of Pages from object.
     * @param {Settings} [detail]
     * @memberof Pages
     */
    constructor(object?: Settings);
    /**
     * Creates an instance of Pages from JSON.
     * @param {string} [json]
     * @memberof Pages
     */
    constructor(json: string);
    constructor(context?: Settings | string) {
        if (typeof context === 'string') {
            const json = JSON.parse(context) as JsonBody;

            this._urlName = json.name;
            this._title = json.title || '';
            this._summary = json.summary;
            this._content = json.content.map((ct) => toComponent(ct)) || [];
            // TODO: 変数
            this._variables = json.variables;
            this._script = json.script;
            this._eyeCatchingImageId = json.eyeCatchingImageId;
            this._font = json.font;
            this._alignCenter = json.alignCenter;
            this._hideTitleWhenPinned = json.hideTitleWhenPinned;
        } else {
            this._urlName = context?.urlName || Date.now().toString();
            this._title = context?.title || '';
            this._summary = context?.summary || null;
            this._content = context?.content || [];
            // TODO: 変数
            this._variables = context?.variables || [];
            this._script = context?.script || '';
            this._eyeCatchingImageId = context?.eyeCatchingImageId || null;
            this._font = context?.font || 'sans-serif';
            this._alignCenter = context?.alignCenter || false;
            this._hideTitleWhenPinned = context?.hideTitleWhenPinned || false;
        }
    }

    toObject(): Body {
        return {
            name: this._urlName,
            title: this._title,
            summary: this._summary,
            font: this._font,
            content: this._content,
            variables: this._variables,
            script: this._script,
            eyeCatchingImageId: this._eyeCatchingImageId,
            alignCenter: this._alignCenter,
            hideTitleWhenPinned: this._hideTitleWhenPinned,
        };
    }

    get urlName(): string {
        return this._urlName;
    }
    get title(): string {
        return this._title;
    }
    get summary(): string | null {
        return this._summary;
    }
    get content(): Component[] {
        return this._content;
    }
    get variables(): any[] {
        return this._variables;
    }
    get script(): string {
        return this._script;
    }
    get eyeCatchingImageId(): string | null {
        return this._eyeCatchingImageId;
    }
    get font(): string {
        return this._font;
    }
    get alignCenter(): boolean {
        return this._alignCenter;
    }
    get hideTitleWhenPinned(): boolean {
        return this._hideTitleWhenPinned;
    }

    setUrlName(value: string): MkPages {
        this._urlName = value;
        return this;
    }
    setTitle(value: string): MkPages {
        this._title = value;
        return this;
    }
    setSummary(value: string): MkPages {
        this._summary = value;
        return this;
    }
    setContent(value: Component[]): MkPages {
        this._content = value;
        return this;
    }
    setVariables(value: any[]): MkPages {
        this._variables = value;
        return this;
    }
    setScript(value: string): MkPages {
        this._script = value;
        return this;
    }
    setEyeCatchingImageId(value: string): MkPages {
        this._eyeCatchingImageId = value;
        return this;
    }
    setFont(value: Fonts): MkPages {
        this._font = value;
        return this;
    }
    setAlignCenter(value: boolean): MkPages {
        this._alignCenter = value;
        return this;
    }
    setHideTitleWhenPinned(value: boolean): MkPages {
        this._hideTitleWhenPinned = value;
        return this;
    }

    addComponents(...component: Component[]): MkPages {
        this._content.push(...component);
        return this;
    }

    removeComponent(index: number): MkPages {
        this._content.splice(index, 1);
        return this;
    }
}
