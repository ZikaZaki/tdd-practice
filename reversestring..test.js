const reverseString = require('./reversestring');

describe('Reverse String', () => {
    test('Reverse String', () => {
        // Arrange
        const str = 'ZikaZaki';
        const expected = 'ikaZakiZ';

        // Act
        const result = reverseString(str);

        // Assert
        expect(result).toBe(expected);
    });
});