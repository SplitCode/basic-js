const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  validateArgs(...args) {
    if (args.some(arg => typeof arg !== 'string') || args.length !== 2) {
      throw new Error('Incorrect arguments!');
    }
  }

  getRepeatedKey(message, key) {
    return key.repeat(Math.ceil(message.length / key.length)).toUpperCase().slice(0, message.length);
  }

  transformMessage(message, key, encrypt) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();

      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const newIndex = (encrypt ? messageIndex + this.alphabet.indexOf(key[keyIndex]) : messageIndex - this.alphabet.indexOf(key[keyIndex]) + 26) % 26;

        result += this.alphabet[newIndex];
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }


  encrypt(message, key) {
    this.validateArgs(message, key);
    const repeatedKey = this.getRepeatedKey(message, key);
    return this.transformMessage(message, repeatedKey, true);
  }

  decrypt(encryptedMessage, key) {
    this.validateArgs(encryptedMessage, key);
    const repeatedKey = this.getRepeatedKey(encryptedMessage, key);
    return this.transformMessage(encryptedMessage, repeatedKey, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
