import { MPImage, MPNote, MPSection, MPText } from '../src';
import { toComponent } from '../src/util';

const id = 'd0721695-fbd1-410f-a0e3-8921cdbe2d5e';

describe('Utils', () => {
    describe('toComponent', () => {
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
        test('Section (No children)', () => {
            const component = toComponent({
                type: 'section',
                id,
                children: [],
                title: 'Section',
            });
            expect(component).toBeInstanceOf(MPSection);
        });
        test('Section (Has children)', () => {
            const component = toComponent({
                type: 'section',
                id,
                children: [
                    {
                        type: 'image',
                        id,
                        fileId: 'fileId',
                    },
                ],
                title: 'Section',
            });
            expect(component).toBeInstanceOf(MPSection);
        });
        test('Text', () => {
            const component = toComponent({
                type: 'text',
                id,
                text: 'Text',
            });
            expect(component).toBeInstanceOf(MPText);
        });
    });
});
