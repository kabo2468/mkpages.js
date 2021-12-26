import {
    MPButton,
    MPCanvas,
    MPCounter,
    MPIf,
    MPImage,
    MPNote,
    MPNumberInput,
    MPPost,
    MPRadioButton,
    MPSection,
    MPSwitch,
    MPText,
    MPTextarea,
    MPTextareaInput,
    MPTextInput,
} from '../src';
import { toComponent } from '../src/util';

const id = 'd0721695-fbd1-410f-a0e3-8921cdbe2d5e';

describe('Utils', () => {
    describe('toComponent', () => {
        test('Button (dialog)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'dialog',
                content: 'Dialog Content',
                primary: true,
                text: 'Button',
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Button (pushEvent)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'pushEvent',
                event: 'event',
                message: 'Pushed',
                primary: true,
                text: 'Button',
                var: 'variable',
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Button (resetRandom)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'resetRandom',
                text: 'Button',
                primary: true,
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Button (callAiScript)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'callAiScript',
                fn: 'fnName',
                primary: true,
                text: 'Button',
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Canvas', () => {
            const component = toComponent({
                type: 'canvas',
                id,
                name: 'canvasId',
                height: 200,
                width: 300,
            });
            expect(component).toBeInstanceOf(MPCanvas);
        });
        test('Counter', () => {
            const component = toComponent({
                type: 'counter',
                id,
                inc: 1,
                text: 'Counter',
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPCounter);
        });
        test('If', () => {
            const component = toComponent({
                type: 'if',
                id,
                children: [],
                var: 'variable',
            });
            expect(component).toBeInstanceOf(MPIf);
        });
        test('Image', () => {
            const component = toComponent({
                type: 'image',
                id,
                fileId: 'fileId',
            });
            expect(component).toBeInstanceOf(MPImage);
        });
        test('Note', () => {
            const component = toComponent({
                type: 'note',
                id,
                note: 'noteId',
                detailed: true,
            });
            expect(component).toBeInstanceOf(MPNote);
        });
        test('NumberInput', () => {
            const component = toComponent({
                type: 'numberInput',
                id,
                default: 0,
                text: 'Number Input',
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPNumberInput);
        });
        test('Post', () => {
            const component = toComponent({
                type: 'post',
                id,
                canvasId: 'canvasId',
                text: 'Post',
                attachCanvasImage: true,
            });
            expect(component).toBeInstanceOf(MPPost);
        });
        test('RadioButton', () => {
            const component = toComponent({
                type: 'radioButton',
                id,
                default: '1',
                title: 'Radio Button',
                values: ['1', '2', '3'],
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPRadioButton);
        });
        test('Section', () => {
            const component = toComponent({
                type: 'section',
                id,
                children: [],
                title: 'Section',
            });
            expect(component).toBeInstanceOf(MPSection);
        });
        test('Switch', () => {
            const component = toComponent({
                type: 'switch',
                id,
                default: true,
                text: 'Switch',
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPSwitch);
        });
        test('TextInput', () => {
            const component = toComponent({
                type: 'textInput',
                id,
                default: 'Text',
                text: 'Text Input',
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPTextInput);
        });
        test('Text', () => {
            const component = toComponent({
                type: 'text',
                id,
                text: 'Text',
            });
            expect(component).toBeInstanceOf(MPText);
        });
        test('TextareaInput', () => {
            const component = toComponent({
                type: 'textareaInput',
                id,
                default: 'Textarea',
                text: 'Textarea',
                name: 'variable',
            });
            expect(component).toBeInstanceOf(MPTextareaInput);
        });
        test('Textarea', () => {
            const component = toComponent({
                type: 'textarea',
                id,
                text: 'Textarea',
            });
            expect(component).toBeInstanceOf(MPTextarea);
        });
    });
});
