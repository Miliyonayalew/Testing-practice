function stringLength(string) {
    if (string.length === 0) {
        return 'Error: Empty string';
    } else if (string.length > 10) {
        return 'Error: String too long';
    } else {
    return string.length;
    }
}

module.exports = stringLength;