const Calculator = require('./calculator');

describe('Calculator', () => {
    // Adding: Test Case 1
    test('Adding 1 + 1 should return 2', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 1;
        const y = 1;
        const expected = 2;

        // Act
        const actual = calculator.add(x, y);

        // Assert
        expect(actual).toBe(expected);
    });
    // Adding: Test Case 2
    test('Adding 5 + 5 should return 10', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 5;
        const y = 5;
        const expected = 10;
        
        // Act
        const actual = calculator.add(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

    // Subtract: Test Case 1
    test('Subtracting 1 - 1 should return 0', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 1;
        const y = 1;
        const expected = 0;

        // Act
        const actual = calculator.subtract(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

    // Subtract: Test Case 2
    test('Subtracting 10 - 5 should return 5', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 10;
        const y = 5;
        const expected = 5;
        
        // Act
        const actual = calculator.subtract(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

     // Multiply: Test Case 1
     test('Multiplying 1 * 1 should return 1', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 1;
        const y = 1;
        const expected = 1;

        // Act
        const actual = calculator.multiply(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

    // Multiply: Test Case 2
    test('Multiplying 2 * 5 should return 10', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 2;
        const y = 5;
        const expected = 10;
        
        // Act
        const actual = calculator.multiply(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

      // Divide: Test Case 1
      test('Dividing 1 / 1 should return 1', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 1;
        const y = 1;
        const expected = 1;

        // Act
        const actual = calculator.divide(x, y);

        // Assert
        expect(actual).toBe(expected);
    });

    // Divide: Test Case 2
    test('Dividing 10 / 5 should return 2', () => {
        // Arrange
        const calculator = new Calculator();
        const x = 10;
        const y = 5;
        const expected = 2;
        
        // Act
        const actual = calculator.divide(x, y);

        // Assert
        expect(actual).toBe(expected);
    });
});

