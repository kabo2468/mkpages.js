import { v4 as uuid } from 'uuid';
import { CallAiScriptOptions, DialogOptions, PushEventOptions, ResetRandomOptions } from './components/button.js';
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

export class Component {
    public id: string;
    public type: string;

    constructor(type: string) {
        this.id = uuid();
        this.type = type;
    }
}

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
