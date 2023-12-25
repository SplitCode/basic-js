const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCharCount(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

function getCommonCharacterCount(s1, s2) {
  const charCount1 = getCharCount(s1);
  const charCount2 = getCharCount(s2);

  let commonCount = 0;

  for (const char in charCount1) {
    if (charCount2[char]) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
