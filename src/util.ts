import { Component } from './component';
import { MPButton } from './components/button';
import { MPCanvas } from './components/canvas';
import { MPCounter } from './components/counter';
import { MPIf } from './components/if';
import { MPImage } from './components/image';
import { MPNumberInput } from './components/number-input';
import { MPPost } from './components/post';
import { MPRadioButton } from './components/radio-button';
import { MPSection } from './components/section';
import { MPSwitch } from './components/switch';
import { MPText } from './components/text';
import { MPTextInput } from './components/text-input';
import { MPTextarea } from './components/textarea';
import { MPTextareaInput } from './components/textarea-input';
import { JsonComponents } from './pages';

export function toComponent(obj: JsonComponents): Component {
    switch (obj.type) {
        case 'button':
            return Object.assign(new MPButton(), obj);
        case 'canvas':
            return Object.assign(new MPCanvas(), obj);
        case 'counter':
            return Object.assign(new MPCounter(), obj);
        case 'if':
            const ifData = {
                id: obj.id,
                var: obj.var || '',
                children: obj.children.map((child) => toComponent(child)),
            };
            return Object.assign(new MPIf(), ifData);
        case 'image':
            return Object.assign(new MPImage(), obj);
        case 'numberInput':
            return Object.assign(new MPNumberInput(), obj);
        case 'post':
            return Object.assign(new MPPost(), obj);
        case 'radioButton':
            return Object.assign(new MPRadioButton(), obj);
        case 'section':
            const sectionData = {
                id: obj.id,
                title: obj.title,
                children: obj.children.map((child) => toComponent(child)),
            };
            return Object.assign(new MPSection(), sectionData);
        case 'switch':
            return Object.assign(new MPSwitch(), obj);
        case 'textInput':
            return Object.assign(new MPTextInput(), obj);
        case 'text':
            return Object.assign(new MPText(), obj);
        case 'textareaInput':
            return Object.assign(new MPTextareaInput(), obj);
        case 'textarea':
            return Object.assign(new MPTextarea(), obj);
    }
}
