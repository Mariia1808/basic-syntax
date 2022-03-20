export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let current = char_to_int(str.charAt(i));
        let next = char_to_int(str.charAt(i + 1));
        if (current >= next) {
            result += current;
        } else {
            result -= current;
        }
    }
    return result;
}
function char_to_int(character) {
    switch (character) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
