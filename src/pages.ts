import { Component } from './component';
import { ComponentJSONType, toComponent } from './util';

type Fonts = 'serif' | 'sans-serif';

interface JsonBody {
    title: string;
    name: string;
    summary: string | null;
    font: Fonts;
    script: '';
    hideTitleWhenPinned: boolean;
    alignCenter: boolean;
    content: ComponentJSONType[];
    variables: [];
    eyeCatchingImageId: string | null;
}

export class MkPages {
    private _urlName: string;
    private _title: string;
    private _summary: string | null;
    private _content: Component[];
    private _variables: [];
    private _script: '';
    private _eyeCatchingImageId: string | null;
    private _font: Fonts;
    private _alignCenter: boolean;
    private _hideTitleWhenPinned: boolean;

    /**
     * Creates an instance of Pages.
     * @memberof Pages
     */
    constructor();
    /**
     * Creates an instance of Pages from JSON.
     * @param {string} [json]
     * @memberof Pages
     */
    constructor(json: string);
    constructor(text?: string) {
        if (text) {
            const json = JSON.parse(text) as JsonBody;

            this._urlName = json.name;
            this._title = json.title;
            this._summary = json.summary;
            this._content = json.content.map((ct) => toComponent(ct));
            this._variables = json.variables;
            this._script = json.script;
            this._eyeCatchingImageId = json.eyeCatchingImageId;
            this._font = json.font;
            this._alignCenter = json.alignCenter;
            this._hideTitleWhenPinned = json.hideTitleWhenPinned;
        } else {
            this._urlName = Date.now().toString();
            this._title = '';
            this._summary = null;
            this._content = [];
            this._variables = [];
            this._script = '';
            this._eyeCatchingImageId = null;
            this._font = 'sans-serif';
            this._alignCenter = false;
            this._hideTitleWhenPinned = false;
        }
    }

    toObject() {
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
    get eyeCatchingImageId(): string | null {
        return this._eyeCatchingImageId;
    }
    get font(): Fonts {
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
    setSummary(value: string | null): MkPages {
        this._summary = value;
        return this;
    }
    setContent(value: Component[]): MkPages {
        this._content = value;
        return this;
    }
    setEyeCatchingImageId(value: string | null): MkPages {
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
