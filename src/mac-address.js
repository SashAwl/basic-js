const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const groupList = n.split("-");
  
  const partMatchCount = groupList.reduce((accom, item) => {
    const digit1 = item[0];
    const digit2 = item[1];
    let currentResult;

    if (item.length == 2 && 
      ((digit1 >= "0" && digit1 <= "9") || (digit1 >= "A" && digit1 <= "F")) &&
      ((digit2 >= "0" && digit2 <= "9") || (digit2 >= "A" && digit2 <= "F"))) {
        currentResult = 1;
      } else {
        currentResult = 0;
      }
    
      return accom + currentResult;
  }, 0);

  return partMatchCount === 6;
}

module.exports = {
  isMAC48Address
};
