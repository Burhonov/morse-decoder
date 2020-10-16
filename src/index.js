const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const BINARY_TABLE = {
        '00': '',
        '10': '.',
        '11': '-',
    };
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let morseExpr = '';
        let isSpace = false;
        for (let j = i; j < i + 10; j += 2) {
            const slicedPair = expr.slice(j, j + 2);
            if (slicedPair === '**') {
                isSpace = true;
                break;
            } else {
                morseExpr += BINARY_TABLE[slicedPair];
            }
        }
        result += isSpace ? ' ' : MORSE_TABLE[morseExpr];
    }
    return result;
}

module.exports = {
    decode
}