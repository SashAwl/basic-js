const { NotImplementedError } = require('../extensions/index.js');

/**
   * Given some integer, find the maximal number you can obtain
   * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  maxN = 0;
  strN = n.toString();
  for (const char of strN) {
    newN = +strN.replace(char, "");
    maxN = Math.max(maxN, newN);
  }

  return maxN;
}

module.exports = {
  deleteDigit
};
