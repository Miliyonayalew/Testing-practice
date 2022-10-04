const calculator = require('./calculator');

describe('calculator', () => {
    const calc = new calculator(5, 5);
    test('returns the sum of two numbers', () => {
        expect(calc.add()).toBe(10);
    });
    test('returns the difference of two numbers', () => {
        expect(calc.subtract()).toBe(0);
    });
    test('returns the product of two numbers', () => {
        expect(calc.multiply()).toBe(25);
    });
    test('returns the quotient of two numbers', () => {
        expect(calc.divide()).toBe(1);
    });
});