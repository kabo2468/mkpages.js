import { Component } from './component';
import { MPButton } from './components/button';
import { MPCanvas } from './components/canvas';
import { MPCounter } from './components/counter';
import { MPIf } from './components/if';
import { MPImage } from './components/image';
import { MPNote } from './components/note';
import { MPNumberInput } from './components/number-input';
import { MPPost } from './components/post';
import { MPRadioButton } from './components/radio-button';
import { MPSection } from './components/section';
import { MPSwitch } from './components/switch';
import { MPText } from './components/text';
import { MPTextInput } from './components/text-input';
import { MPTextarea } from './components/textarea';
import { MPTextareaInput } from './components/textarea-input';

type Props<T> = {
    [K in keyof T]: T[K];
};

export type ComponentJSONType =
    | (Props<MPButton> & { type: 'button' })
    | (Props<MPCanvas> & { type: 'canvas' })
    | (Props<MPCounter> & { type: 'counter' })
    | (Omit<MPIf, 'children'> & { type: 'if'; children: ComponentJSONType[] })
    | (Props<MPImage> & { type: 'image' })
    | (Props<MPNote> & { type: 'note' })
    | (Props<MPNumberInput> & { type: 'numberInput' })
    | (Props<MPPost> & { type: 'post' })
    | (Props<MPRadioButton> & { type: 'radioButton' })
    | (Omit<MPSection, 'children' | 'addComponents'> & { type: 'section'; children: ComponentJSONType[] })
    | (Props<MPSwitch> & { type: 'switch' })
    | (Props<MPText> & { type: 'text' })
    | (Props<MPTextInput> & { type: 'textInput' })
    | (Props<MPTextarea> & { type: 'textarea' })
    | (Props<MPTextareaInput> & { type: 'textareaInput' });

export function toComponent(json: ComponentJSONType): Component {
    switch (json.type) {
        case 'button':
            return Object.assign(new MPButton({}), json);
        case 'canvas':
            return Object.assign(new MPCanvas({}), json);
        case 'counter':
            return Object.assign(new MPCounter({}), json);
        case 'if':
            const ifData = {
                id: json.id,
                var: json.var,
                children: json.children.map((child) => toComponent(child)),
            };
            return Object.assign(new MPIf({}), ifData);
        case 'image':
            return Object.assign(new MPImage({}), json);
        case 'note':
            return Object.assign(new MPNote({}), json);
        case 'numberInput':
            return Object.assign(new MPNumberInput({}), json);
        case 'post':
            return Object.assign(new MPPost({}), json);
        case 'radioButton':
            return Object.assign(new MPRadioButton({}), json);
        case 'section':
            const sectionData = {
                id: json.id,
                title: json.title,
                children: json.children.map((child) => toComponent(child)),
            };
            return Object.assign(new MPSection({}), sectionData);
        case 'switch':
            return Object.assign(new MPSwitch({}), json);
        case 'textInput':
            return Object.assign(new MPTextInput({}), json);
        case 'text':
            return Object.assign(new MPText({}), json);
        case 'textareaInput':
            return Object.assign(new MPTextareaInput({}), json);
        case 'textarea':
            return Object.assign(new MPTextarea({}), json);
    }
}
