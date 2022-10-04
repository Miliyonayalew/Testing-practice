const stringLength = require('./stringLength');

describe('stringLength', () => {
    test('returns the length of a string', () => {
        expect(stringLength('Bicaw')).toBe(5);
    });
    test('returns an error if the string is empty', () => {
        expect(stringLength('')).toBe('Error: Empty string');
    });
    test('returns an error if the string is too long', () => {
        expect(stringLength('Miliyonayalew')).toBe('Error: String too long');
    });
});


