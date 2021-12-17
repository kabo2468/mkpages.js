import { v4 as uuid } from 'uuid';
import { CallAiScriptOptions, DialogOptions, PushEventOptions, ResetRandomOptions } from './components/button';
import { CanvasOptions } from './components/canvas';
import { CounterOptions } from './components/counter';
import { IfOptions } from './components/if';
import { ImageOptions } from './components/image';
import { NoteOptions } from './components/note';
import { NumberInputOptions } from './components/number-input';
import { PostWithCanvasOptions } from './components/post';
import { RadioButtonOptions } from './components/radio-button';
import { SectionOptions } from './components/section';
import { SwitchOptions } from './components/switch';
import { TextOptions } from './components/text';
import { TextInputOptions } from './components/text-input';
import { TextareaOptions } from './components/textarea';
import { TextareaInputOptions } from './components/textarea-input';

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
    | (NoteOptions & { type: 'note' })
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
