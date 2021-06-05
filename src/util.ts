import { Component } from './component';
import { Button } from './components/button';
import { Canvas } from './components/canvas';
import { Counter } from './components/counter';
import { If } from './components/if';
import { Image } from './components/image';
import { NumberInput } from './components/number-input';
import { Post } from './components/post';
import { RadioButton } from './components/radio-button';
import { Section } from './components/section';
import { Switch } from './components/switch';
import { Text } from './components/text';
import { TextInput } from './components/text-input';
import { Textarea } from './components/textarea';
import { TextareaInput } from './components/textarea-input';
import { JsonComponents } from './pages';

export function toComponent(obj: JsonComponents): Component {
    switch (obj.type) {
        case 'button':
            return Object.assign(new Button(), obj);
        case 'canvas':
            return Object.assign(new Canvas(), obj);
        case 'counter':
            return Object.assign(new Counter(), obj);
        case 'if':
            const ifData = {
                id: obj.id,
                var: obj.var || '',
                children: obj.children.map((child) => toComponent(child)),
            };
            return Object.assign(new If(), ifData);
        case 'image':
            return Object.assign(new Image(), obj);
        case 'numberInput':
            return Object.assign(new NumberInput(), obj);
        case 'post':
            return Object.assign(new Post(), obj);
        case 'radioButton':
            return Object.assign(new RadioButton(), obj);
        case 'section':
            const sectionData = {
                id: obj.id,
                title: obj.title,
                children: obj.children.map((child) => toComponent(child)),
            };
            return Object.assign(new Section(), sectionData);
        case 'switch':
            return Object.assign(new Switch(), obj);
        case 'textInput':
            return Object.assign(new TextInput(), obj);
        case 'text':
            return Object.assign(new Text(), obj);
        case 'textareaInput':
            return Object.assign(new TextareaInput(), obj);
        case 'textarea':
            return Object.assign(new Textarea(), obj);
    }
}
