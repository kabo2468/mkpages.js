import { MPImage, MPNote, MPSection, MPText } from '../src';

describe('Components', () => {
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
    test('Note', () => {
        const component = new MPNote({
            detailed: true,
            note: 'noteId',
        });
        expect(component).toMatchObject({
            type: 'note',
            id: expect.any(String),
            note: 'noteId',
            detailed: true,
        });
    });
    test('Note no options', () => {
        const component = new MPNote({});
        expect(component).toMatchObject({
            type: 'note',
            id: expect.any(String),
            note: '',
            detailed: false,
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
});
