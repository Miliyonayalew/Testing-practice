const capitalizeString = require('./capitalizeString');

test('The first letter should be capital', () => { 
    expect(capitalizeString('miliyon')).toBe('Miliyon');
 })