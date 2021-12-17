import {
    MPButton,
    MPCanvas,
    MPCounter,
    MPIf,
    MPImage,
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
                title: 'Button',
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
                title: 'Button',
                variable: 'variable',
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Button (resetRandom)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'resetRandom',
                title: 'Button',
                primary: true,
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Button (callAiScript)', () => {
            const component = toComponent({
                type: 'button',
                id,
                action: 'callAiScript',
                functionName: 'fnName',
                primary: true,
                title: 'Button',
            });
            expect(component).toBeInstanceOf(MPButton);
        });
        test('Canvas', () => {
            const component = toComponent({
                type: 'canvas',
                id,
                canvasId: 'canvasId',
                height: 200,
                width: 300,
            });
            expect(component).toBeInstanceOf(MPCanvas);
        });
        test('Counter', () => {
            const component = toComponent({
                type: 'counter',
                id,
                increaseValue: 1,
                title: 'Counter',
                variableName: 'variable',
            });
            expect(component).toBeInstanceOf(MPCounter);
        });
        test('If', () => {
            const component = toComponent({
                type: 'if',
                id,
                children: [],
                variableName: 'variable',
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
        test('NumberInput', () => {
            const component = toComponent({
                type: 'numberInput',
                id,
                defaultValue: 0,
                title: 'Number Input',
                variableName: 'variable',
            });
            expect(component).toBeInstanceOf(MPNumberInput);
        });
        test('Post', () => {
            const component = toComponent({
                type: 'post',
                id,
                canvasId: 'canvasId',
                text: 'Post',
            });
            expect(component).toBeInstanceOf(MPPost);
        });
        test('RadioButton', () => {
            const component = toComponent({
                type: 'radioButton',
                id,
                defaultValue: '1',
                title: 'Radio Button',
                values: ['1', '2', '3'],
                variableName: 'variable',
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
                defaultValue: true,
                title: 'Switch',
                variableName: 'variable',
            });
            expect(component).toBeInstanceOf(MPSwitch);
        });
        test('TextInput', () => {
            const component = toComponent({
                type: 'textInput',
                id,
                defaultValue: 'Text',
                title: 'Text Input',
                variableName: 'variable',
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
                defaultValue: 'Textarea',
                title: 'Textarea',
                variableName: 'variable',
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
