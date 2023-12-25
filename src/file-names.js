const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const nameCounts = {};

  for (const name of names) {
    let newName = name;
    let count = nameCounts[name] || 0;

    while (result.includes(newName)) {
      count++;
      newName = `${name}(${count})`;
    }

    result.push(newName);
    nameCounts[name] = count;
  }

  return result;
}

module.exports = {
  renameFiles
};
