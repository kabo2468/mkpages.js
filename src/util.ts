import { Component, ComponentTypes } from './component';
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

export function toComponent(obj: ComponentTypes): Component {
    switch (obj.type) {
        case 'button':
            switch (obj.action) {
                case 'dialog':
                    return new MPButton(obj);
                case 'pushEvent':
                    return new MPButton(obj);
                case 'resetRandom':
                    return new MPButton(obj);
                case 'callAiScript':
                    return new MPButton(obj);
            }
        case 'canvas':
            return new MPCanvas(obj);
        case 'counter':
            return new MPCounter(obj);
        case 'if':
            const ifData = {
                id: obj.id,
                var: obj.variableName || '',
                children: obj.children.map((child) => toComponent(child)),
            };
            return new MPIf(ifData);
        case 'image':
            return new MPImage(obj);
        case 'numberInput':
            return new MPNumberInput(obj);
        case 'post':
            return new MPPost(obj);
        case 'radioButton':
            return new MPRadioButton(obj);
        case 'section':
            const sectionData = {
                id: obj.id,
                title: obj.title,
                children: obj.children.map((child) => toComponent(child)),
            };
            return new MPSection(sectionData);
        case 'switch':
            return new MPSwitch(obj);
        case 'textInput':
            return new MPTextInput(obj);
        case 'text':
            return new MPText(obj);
        case 'textareaInput':
            return new MPTextareaInput(obj);
        case 'textarea':
            return new MPTextarea(obj);
    }
}
