const stringLength = require('./stringlength');

describe('String Length', () => {
    test('ZikaZaki String', () => {
        // Arrange
        const str = 'ZikaZaki';
        const expected = 8;

        // Act
        const result = stringLength(str);

        // Assert
        expect(result).toBe(expected);
    });

     test('ZakariyaAl-Khamisi String', () => {
        // Arrange
        const str = 'ZakariyaAl-Khamisi';

        // Act
        const result = () => stringLength(str);

        // Assert
        expect(result).toThrow(Error);
    });
});