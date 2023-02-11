import { Component } from './component';
import { MPImage } from './components/image';
import { MPNote } from './components/note';
import { MPSection } from './components/section';
import { MPText } from './components/text';

type Props<T> = {
    [K in keyof T]: T[K];
};

export type ComponentJSONType =
    | (Props<MPImage> & { type: 'image' })
    | (Props<MPNote> & { type: 'note' })
    | (Omit<MPSection, 'children' | 'addComponents'> & { type: 'section'; children: ComponentJSONType[] })
    | (Props<MPText> & { type: 'text' });

export function toComponent(json: ComponentJSONType): Component {
    switch (json.type) {
        case 'image':
            return Object.assign(new MPImage({}), json);
        case 'note':
            return Object.assign(new MPNote({}), json);
        case 'section':
            const sectionData = {
                id: json.id,
                title: json.title,
                children: json.children.map((child) => toComponent(child)),
            };
            return Object.assign(new MPSection({}), sectionData);
        case 'text':
            return Object.assign(new MPText({}), json);
    }
}
