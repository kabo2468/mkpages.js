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

describe('Components', () => {
    test('Button (no args)', () => {
        const component = new MPButton({});
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'dialog',
            text: '',
            primary: false,
            content: null,
            event: null,
            message: null,
            var: null,
            fn: null,
        });
    });
    test('Button (dialog)', () => {
        const component = new MPButton({
            action: 'dialog',
            title: 'Button',
            content: 'Dialog',
            primary: true,
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'dialog',
            text: 'Button',
            primary: true,
            content: 'Dialog',
            event: null,
            message: null,
            var: null,
            fn: null,
        });
    });
    test('Button (dialog & no options)', () => {
        const component = new MPButton({
            action: 'dialog',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'dialog',
            text: '',
            primary: false,
            content: '',
            event: null,
            message: null,
            var: null,
            fn: null,
        });
    });
    test('Button (resetRandom)', () => {
        const component = new MPButton({
            action: 'resetRandom',
            primary: true,
            title: 'Reset Random',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'resetRandom',
            text: 'Reset Random',
            primary: true,
            content: null,
            event: null,
            message: null,
            var: null,
            fn: null,
        });
    });
    test('Button (resetRandom & no options)', () => {
        const component = new MPButton({
            action: 'resetRandom',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'resetRandom',
            text: '',
            primary: false,
            content: null,
            event: null,
            message: null,
            var: null,
            fn: null,
        });
    });
    test('Button (pushEvent)', () => {
        const component = new MPButton({
            action: 'pushEvent',
            event: 'event',
            message: 'Message',
            primary: true,
            title: 'Push Event',
            variable: 'variable',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'pushEvent',
            text: 'Push Event',
            primary: true,
            content: null,
            event: 'event',
            message: 'Message',
            var: 'variable',
            fn: null,
        });
    });
    test('Button (pushEvent & no options)', () => {
        const component = new MPButton({
            action: 'pushEvent',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'pushEvent',
            text: '',
            primary: false,
            content: null,
            event: '',
            message: '',
            var: '',
            fn: null,
        });
    });
    test('Button (callAiScript)', () => {
        const component = new MPButton({
            action: 'callAiScript',
            functionName: 'func',
            primary: true,
            title: 'Call function',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'callAiScript',
            text: 'Call function',
            primary: true,
            content: null,
            event: null,
            message: null,
            var: null,
            fn: 'func',
        });
    });
    test('Button (callAiScript & no options)', () => {
        const component = new MPButton({
            action: 'callAiScript',
        });
        expect(component).toMatchObject({
            type: 'button',
            id: expect.any(String),
            action: 'callAiScript',
            text: '',
            primary: false,
            content: null,
            event: null,
            message: null,
            var: null,
            fn: '',
        });
    });
    test('Canvas', () => {
        const component = new MPCanvas({
            canvasId: 'canvasId',
            height: 500,
            width: 400,
        });
        expect(component).toMatchObject({
            type: 'canvas',
            id: expect.any(String),
            name: 'canvasId',
            width: 400,
            height: 500,
        });
    });
    test('Canvas no options', () => {
        const component = new MPCanvas({});
        expect(component).toMatchObject({
            type: 'canvas',
            id: expect.any(String),
            name: '',
            width: 300,
            height: 200,
        });
    });
    test('Counter', () => {
        const component = new MPCounter({
            increaseValue: 5,
            title: 'Counter',
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'counter',
            id: expect.any(String),
            name: 'variable',
            text: 'Counter',
            inc: 5,
        });
    });
    test('Counter no options', () => {
        const component = new MPCounter({});
        expect(component).toMatchObject({
            type: 'counter',
            id: expect.any(String),
            name: '',
            text: '',
            inc: 0,
        });
    });
    test('If', () => {
        const component = new MPIf({
            children: [new MPText({})],
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'if',
            id: expect.any(String),
            var: 'variable',
            children: [expect.any(MPText)],
        });
    });
    test('If no options', () => {
        const component = new MPIf({});
        expect(component).toMatchObject({
            type: 'if',
            id: expect.any(String),
            var: '',
            children: [],
        });
    });
    test('Image', () => {
        const component = new MPImage({
            fileId: 'fileId',
        });
        expect(component).toMatchObject({
            type: 'image',
            id: expect.any(String),
            fileId: 'fileId',
        });
    });
    test('Image no options', () => {
        const component = new MPImage({});
        expect(component).toMatchObject({
            type: 'image',
            id: expect.any(String),
            fileId: '',
        });
    });
    test('NumberInput', () => {
        const component = new MPNumberInput({
            defaultValue: 3,
            title: 'Number Input',
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'numberInput',
            id: expect.any(String),
            name: 'variable',
            text: 'Number Input',
            default: 3,
        });
    });
    test('NumberInput no options', () => {
        const component = new MPNumberInput({});
        expect(component).toMatchObject({
            type: 'numberInput',
            id: expect.any(String),
            name: '',
            text: '',
            default: 0,
        });
    });
    test('Post', () => {
        const component = new MPPost({
            text: 'Post form',
        });
        expect(component).toMatchObject({
            type: 'post',
            id: expect.any(String),
            text: 'Post form',
            canvasId: '',
            attachCanvasImage: false,
        });
    });
    test('Post no options', () => {
        const component = new MPPost({});
        expect(component).toMatchObject({
            type: 'post',
            id: expect.any(String),
            text: '',
            canvasId: '',
            attachCanvasImage: false,
        });
    });
    test('Post with canvas', () => {
        const component = new MPPost({
            text: 'With canvas',
            canvasId: 'canvasId',
        });
        expect(component).toMatchObject({
            type: 'post',
            id: expect.any(String),
            text: 'With canvas',
            canvasId: 'canvasId',
            attachCanvasImage: true,
        });
    });
    test('RadioButton', () => {
        const component = new MPRadioButton({
            defaultValue: '1',
            title: 'Radio Button',
            values: ['1', '2', '3'],
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'radioButton',
            id: expect.any(String),
            name: 'variable',
            title: 'Radio Button',
            values: ['1', '2', '3'],
            default: '1',
        });
    });
    test('RadioButton no options', () => {
        const component = new MPRadioButton({});
        expect(component).toMatchObject({
            type: 'radioButton',
            id: expect.any(String),
            name: '',
            title: '',
            values: [],
            default: '',
        });
    });
    test('Section', () => {
        const component = new MPSection({
            children: [new MPText({})],
            title: 'Section',
        });
        expect(component).toMatchObject({
            type: 'section',
            id: expect.any(String),
            title: 'Section',
            children: [expect.any(MPText)],
        });
    });
    test('Section no options', () => {
        const component = new MPSection({});
        expect(component).toMatchObject({
            type: 'section',
            id: expect.any(String),
            title: '',
            children: [],
        });
    });
    test('Section addComponent', () => {
        const component = new MPSection({}).addComponents(new MPText({}));
        expect(component).toMatchObject({
            type: 'section',
            id: expect.any(String),
            title: '',
            children: [expect.any(MPText)],
        });
    });
    test('Switch', () => {
        const component = new MPSwitch({
            defaultValue: true,
            title: 'Switch',
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'switch',
            id: expect.any(String),
            name: 'variable',
            text: 'Switch',
            default: true,
        });
    });
    test('Switch no options', () => {
        const component = new MPSwitch({});
        expect(component).toMatchObject({
            type: 'switch',
            id: expect.any(String),
            name: '',
            text: '',
            default: false,
        });
    });
    test('TextInput', () => {
        const component = new MPTextInput({
            defaultValue: 'Text',
            title: 'Text Input',
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'textInput',
            id: expect.any(String),
            name: 'variable',
            text: 'Text Input',
            default: 'Text',
        });
    });
    test('TextInput no options', () => {
        const component = new MPTextInput({});
        expect(component).toMatchObject({
            type: 'textInput',
            id: expect.any(String),
            name: '',
            text: '',
            default: '',
        });
    });
    test('Text', () => {
        const component = new MPText({
            text: 'Text',
        });
        expect(component).toMatchObject({
            type: 'text',
            id: expect.any(String),
            text: 'Text',
        });
    });
    test('Text no options', () => {
        const component = new MPText({});
        expect(component).toMatchObject({
            type: 'text',
            id: expect.any(String),
            text: '',
        });
    });
    test('TextareaInput', () => {
        const component = new MPTextareaInput({
            defaultValue: 'Textarea',
            title: 'Textarea Input',
            variableName: 'variable',
        });
        expect(component).toMatchObject({
            type: 'textareaInput',
            id: expect.any(String),
            text: 'Textarea Input',
            name: 'variable',
            default: 'Textarea',
        });
    });
    test('TextareaInput no options', () => {
        const component = new MPTextareaInput({});
        expect(component).toMatchObject({
            type: 'textareaInput',
            id: expect.any(String),
            text: '',
            name: '',
            default: '',
        });
    });
    test('Textarea', () => {
        const component = new MPTextarea({
            text: 'Textarea',
        });
        expect(component).toMatchObject({
            type: 'textarea',
            id: expect.any(String),
            text: 'Textarea',
        });
    });
    test('Textarea no options', () => {
        const component = new MPTextarea({});
        expect(component).toMatchObject({
            type: 'textarea',
            id: expect.any(String),
            text: '',
        });
    });
});
