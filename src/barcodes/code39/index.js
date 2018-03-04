import Barcode from '../barcode.js';

class Code39 extends Barcode {
  constructor(data, options) {
    data = data.toUpperCase();
    super(data, options);
  }

  encode() {
    var result = getEncoding('*');
    for(let i = 0; i < this.data.length; i++) {
			result += getEncoding(this.data[i]) + "0";
    }

    return this.result;
  }

  validate() {}
}

/*
 * This is beyond stupid, but this 'binary' is literally just
 * the actual patern of bars (1) and whitespace (0) that makes
 * up each individual character. These values correspond, in
 * order, to 0-9, A-Z, $, *
 * 
 * This is terribad and I should do a better job.
 */
var bars = {
  0: "101000111011101",
  1: "111010001010111",
  2: "101110001010111",
  3: "111011100010101",
  4: "101000111010111",
  5: "111010001110101",
  6: "101110001110101",
  7: "101000101110111",
  8: "111010001011101",
  9: "101110001011101",
  A: "111010100010111",
  B: "101110100010111",
  C: "111011101000101",
  D: "101011100010111",
  E: "111010111000101",
  F: "101110111000101",
  G: "101010001110111",
  H: "111010100011101",
  I: "101110100011101",
  J: "101011100011101",
  K: "111010101000111",
  L: "101110101000111",
  M: "111011101010001",
  N: "101011101000111",
  O: "111010111010001",
  P: "101110111010001",
  Q: "101010111000111",
  R: "111010101110001",
  S: "101110101110001",
  T: "101011101110001",
  U: "111000101010111",
  V: "100011101010111",
  W: "111000111010101",
  X: "100010111010111",
  Y: "111000101110101",
  Z: "100011101110101",
  "$": "100010001000101",
  "*": "100010111011101"
};

function getEncoding(char) {
  return bars[char];
}

export {Code39};
