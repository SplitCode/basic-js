const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const flatArray = matrix.flat();
  const catsCount = flatArray.reduce((count, item) => {
    if (item === '^^') {
      return count + 1;
    }
    return count;
  }, 0);

  return catsCount;
}

module.exports = {
  countCats
};
