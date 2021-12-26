import { readFileSync } from 'fs';
import { MkPages, MPText } from '../src';

describe('MkPages', () => {
    test('Default', () => {
        expect(new MkPages().toObject()).toMatchObject({
            name: expect.any(String),
            title: '',
            summary: null,
            font: 'sans-serif',
            content: [],
            variables: [],
            script: '',
            eyeCatchingImageId: null,
            alignCenter: false,
            hideTitleWhenPinned: false,
        });
    });

    test('From JSON (None)', () => {
        const file = readFileSync('./test/none.json', { encoding: 'utf8' });
        expect(new MkPages(file).toObject()).toEqual({
            name: '1605251905295',
            title: '',
            summary: null,
            font: 'sans-serif',
            script: '',
            hideTitleWhenPinned: false,
            alignCenter: false,
            content: [],
            variables: [],
            eyeCatchingImageId: null,
        });
    });

    test('From JSON', () => {
        const file = readFileSync('./test/test.json', { encoding: 'utf8' });
        expect(new MkPages(file).toObject()).toEqual({
            name: 'builder-test',
            title: 'Builder Test',
            summary: null,
            font: 'sans-serif',
            script: '',
            hideTitleWhenPinned: false,
            alignCenter: true,
            content: [
                {
                    id: '62c8910c-3004-451b-bb2b-37d5394418a8',
                    text: 'test',
                    type: 'text',
                },
                {
                    id: '444fec12-4157-4f08-b3ad-5e7e71d172de',
                    text: 'misskey',
                    type: 'text',
                },
                {
                    id: 'f248dd85-0695-4a9e-b39f-ff6e67d6f8a4',
                    type: 'button',
                    text: 'dialogTitle',
                    action: 'dialog',
                    content: 'naiyou',
                    event: null,
                    message: null,
                    primary: false,
                    var: null,
                    fn: null,
                },
                {
                    id: '952230dc-2c8e-4f39-b556-8aca131ec11d',
                    type: 'button',
                    text: 'randomTitle',
                    action: 'resetRandom',
                    content: null,
                    event: null,
                    message: null,
                    primary: false,
                    var: null,
                    fn: null,
                },
                {
                    id: '20af3ce7-d880-419e-809b-3f6eef91c816',
                    type: 'button',
                    text: 'eventTitle',
                    action: 'pushEvent',
                    content: null,
                    event: 'eventName',
                    message: 'pushedMes',
                    primary: false,
                    var: 'AI',
                    fn: null,
                },
                {
                    id: '53151d76-aae0-4195-8efd-09d71008f721',
                    type: 'button',
                    text: 'asTitle',
                    action: 'callAiScript',
                    content: null,
                    event: null,
                    message: null,
                    primary: false,
                    var: null,
                    fn: 'fnName',
                },
            ],
            variables: [],
            eyeCatchingImageId: null,
        });
    });

    test('Url Name', () => {
        const page = new MkPages().setUrlName('test-page-url');
        expect(page.urlName).toBe('test-page-url');
    });

    test('Title', () => {
        const page = new MkPages().setTitle('Page Title');
        expect(page.title).toBe('Page Title');
    });

    test('Summary', () => {
        const page = new MkPages().setSummary('Page Summary');
        expect(page.summary).toBe('Page Summary');
    });

    test('Null Summary', () => {
        const page = new MkPages().setSummary(null);
        expect(page.summary).toBe(null);
    });

    test('Empty Content', () => {
        const page = new MkPages().setContent([]);
        expect(page.content).toStrictEqual([]);
    });

    test('Empty Variables', () => {
        const page = new MkPages().setVariables([]);
        expect(page.variables).toStrictEqual([]);
    });

    test('Script', () => {
        const page = new MkPages().setScript('<: "Hello world"');
        expect(page.script).toBe('<: "Hello world"');
    });

    test('Eye Catching Image Id', () => {
        const page = new MkPages().setEyeCatchingImageId('imageId');
        expect(page.eyeCatchingImageId).toBe('imageId');
    });

    test('Null Eye catching image id', () => {
        const page = new MkPages().setEyeCatchingImageId(null);
        expect(page.eyeCatchingImageId).toBe(null);
    });

    test('Font sans-serif', () => {
        const page = new MkPages().setFont('sans-serif');
        expect(page.font).toBe('sans-serif');
    });

    test('Font serif', () => {
        const page = new MkPages().setFont('serif');
        expect(page.font).toBe('serif');
    });

    test('Align center', () => {
        const page = new MkPages().setAlignCenter(true);
        expect(page.alignCenter).toBe(true);
    });

    test('Hide title when pinned', () => {
        const page = new MkPages().setHideTitleWhenPinned(true);
        expect(page.hideTitleWhenPinned).toBe(true);
    });

    test('addComponent', () => {
        const page = new MkPages().addComponents(new MPText({ text: 'Text' }));
        expect(page.toObject().content).toEqual([
            {
                type: 'text',
                id: expect.any(String),
                text: 'Text',
            },
        ]);
    });

    test('removeComponent', () => {
        const page = new MkPages().addComponents(
            new MPText({ text: 'Text1' }),
            new MPText({ text: 'Text2' }),
            new MPText({ text: 'Text3' })
        );
        page.removeComponent(1);
        expect(page.toObject().content).toEqual([
            {
                type: 'text',
                id: expect.any(String),
                text: 'Text1',
            },
            {
                type: 'text',
                id: expect.any(String),
                text: 'Text3',
            },
        ]);
    });
});
