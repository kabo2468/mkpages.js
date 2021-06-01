import { Component } from './component';

type Fonts = 'serif' | 'sans-serif';

type BodyBase = {
    title: string | null;
    summary: string | null;
    content: Component[] | null;
    variables: string[] | null;
    script: string;
    eyeCatchingImageId: string | null;
    font: Fonts;
    alignCenter: boolean;
    hideTitleWhenPinned: boolean;
};

type JsonComponents = {
    [key: string]: string | number | boolean | null;
    id: string;
    type: string;
};

interface JsonBody {
    title: string;
    name: string;
    summary: string | null;
    font: Fonts;
    script: string;
    hideTitleWhenPinned: boolean;
    alignCenter: boolean;
    content: JsonComponents[];
    variables: JsonComponents[];
    eyeCatchingImageId: string | null;
}

interface Body extends BodyBase {
    name: string;
}

interface Settings extends Partial<BodyBase> {
    urlName?: string;
}

export default class Pages {
    private _urlName: string;
    private _title: string;
    private _summary: string | null;
    private _content: Component[];
    private _variables: string[];
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
            this._content = json.content || [];
            // TODO: 変数
            this._variables = [];
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
            this._variables = [];
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
    get variables(): string[] {
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

    setUrlName(value: string): Pages {
        this._urlName = value;
        return this;
    }
    setTitle(value: string): Pages {
        this._title = value;
        return this;
    }
    setSummary(value: string): Pages {
        this._summary = value;
        return this;
    }
    setContent(value: Component[]): Pages {
        this._content = value;
        return this;
    }
    setVariables(value: string[]): Pages {
        this._variables = value;
        return this;
    }
    setScript(value: string): Pages {
        this._script = value;
        return this;
    }
    setEyeCatchingImageId(value: string): Pages {
        this._eyeCatchingImageId = value;
        return this;
    }
    setFont(value: Fonts): Pages {
        this._font = value;
        return this;
    }
    setAlignCenter(value: boolean): Pages {
        this._alignCenter = value;
        return this;
    }
    setHideTitleWhenPinned(value: boolean): Pages {
        this._hideTitleWhenPinned = value;
        return this;
    }

    addComponents(...component: Component[]): Pages {
        this._content.push(...component);
        return this;
    }
}
