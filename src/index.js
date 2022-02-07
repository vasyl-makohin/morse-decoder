const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let str = '';
  let i = 0;

  while (i < expr.length) {

    let def = expr.slice(i, i + 10);
    let newStr = '';

    for (let j = 0; j < 10; j += 2) {
      if (def[j] === '*') {
        str += ' ';
        break;
      }
      else if (def[j] === '1' && def[j + 1] === '0') {
        newStr += '.';
      }
      else if (def[j] === '1' && def[j + 1] === '1') {
        newStr += '-';
      }
    }
    for (let item in MORSE_TABLE) {
      if (item === newStr) {
        str += MORSE_TABLE[item];
      }
    }
    i += 10;
  }
  return str;
}

module.exports = {
  decode
};