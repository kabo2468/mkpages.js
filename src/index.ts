import Component from './component';
import MPButton, { ButtonSettings } from './components/button';
import MPCanvas from './components/canvas';
import MPImage from './components/image';
import MPNumberInput from './components/number-input';
import MPSwitch from './components/switch';
import MPRadioButton from './components/radio-button';
import MPSection from './components/section';
import MPText from './components/text';
import MPTextInput from './components/text-input';
import MPTextarea from './components/textarea';
import MPTextareaInput from './components/textarea-input';
import MPCounter from './components/counter';
import MPIf from './components/if';
import MPPost from './components/post';

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

interface Options extends Partial<BodyBase> {
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
     * @param {Options} [detail]
     * @memberof Pages
     */
    constructor(object?: Options);
    /**
     * Creates an instance of Pages from JSON.
     * @param {string} [json]
     * @memberof Pages
     */
    constructor(json: string);
    constructor(context?: Options | string) {
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

    private _addComponent(component: Component): Pages {
        this._content.push(component);
        return this;
    }
    addSection(title: string, ...components: Component[]): Pages {
        this._addComponent(new MPSection(title, components));
        return this;
    }
    addText(text: string): Pages {
        this._addComponent(new MPText(text));
        return this;
    }
    addImage(fileId: string): Pages {
        this._addComponent(new MPImage(fileId));
        return this;
    }
    addTextarea(text: string): Pages {
        this._addComponent(new MPTextarea(text));
        return this;
    }
    addCanvas(canvasId: string, width?: number, height?: number): Pages {
        this._addComponent(new MPCanvas(canvasId, width, height));
        return this;
    }
    // TODO: actionによって必要な引数を教える
    addButton(settings: Partial<ButtonSettings>): Pages {
        this._addComponent(new MPButton(settings));
        return this;
    }
    addRadioButton(variableName: string, title: string, values: string[], def: string): Pages {
        this._addComponent(new MPRadioButton(variableName, title, values, def));
        return this;
    }
    addTextInput(variableName: string, title: string, def = ''): Pages {
        this._addComponent(new MPTextInput(variableName, title, def));
        return this;
    }
    addTextareaInput(variableName: string, title: string, def = ''): Pages {
        this._addComponent(new MPTextareaInput(variableName, title, def));
        return this;
    }
    addNumberInput(variableName: string, title: string, def = 0): Pages {
        this._addComponent(new MPNumberInput(variableName, title, def));
        return this;
    }
    addSwitch(variableName: string, title: string, def = false): Pages {
        this._addComponent(new MPSwitch(variableName, title, def));
        return this;
    }
    addCounter(variableName: string, title: string, inc = 1): Pages {
        this._addComponent(new MPCounter(variableName, title, inc));
        return this;
    }
    addIf(variableName: string, children: Component[]): Pages {
        this._addComponent(new MPIf(variableName, children));
        return this;
    }
    addPostForm(text: string, attachCanvasImage?: boolean, canvasId?: string): Pages {
        this._addComponent(new MPPost(text, attachCanvasImage, canvasId));
        return this;
    }
}
