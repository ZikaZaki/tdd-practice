const sum = require('./sum');

describe('Sum Function', () => {
    test('Adding 7 + 3 should return 10', () => {
        const x = 7;
        const y = 3;
        const expected = 10;

        const actual = sum(x, y);

        expect(actual).toBe(expected);
    });
});