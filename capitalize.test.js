const capitalizeFirstLetter = require('./capitalize');

describe('Capitalize First Letter', () => {
    test('Capitalize First Letter', () => {
        const str = 'zakariya';
        const expected = 'Zakariya';

        const actual = capitalizeFirstLetter(str);

        expect(actual).toBe(expected);
    });
});