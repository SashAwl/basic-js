const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const result = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      matrix[i][j] = matrix[i][j] ? 1 : 0;
    }
  }

  console.log(matrix)

  for (let i = 0; i < height; i++) {
    let row = [];

    for (let j = 0; j < width; j++) {
      let currentCount = 0;

      if (matrix[i][j] === 1) {
        currentCount = 1;
      }
      
      if (matrix[i][j] !== 1 && i === 0 && j > 0 && j < width-1) {
        currentCount = 
          matrix[i][j-1] + matrix[i][j+1] + 
          matrix[i+1][j-1] + matrix[i+1][j] + matrix[i+1][j+1];
      }

      if (matrix[i][j] !== 1 && i === height-1 && j > 0 && j < width-1) {
        currentCount = 
          matrix[i-1][j-1] + matrix[i-1][j] + matrix[i-1][j+1] + 
          matrix[i][j-1] + matrix[i][j+1];
      }

      if (matrix[i][j] !== 1 && j === 0 && i > 0 && i < height-1) {
        currentCount = 
        matrix[i-1][j] + matrix[i-1][j+1] + 
        matrix[i][j+1] + 
        matrix[i+1][j] + matrix[i+1][j+1];
      }

      if (matrix[i][j] !== 1 && j === width-1 && i > 0 && i < height-1) {
        currentCount = 
          matrix[i-1][j-1] + matrix[i-1][j] + 
          matrix[i][j-1] +
          matrix[i+1][j-1] + matrix[i+1][j];
      }

      if (matrix[i][j] !== 1 && i === 0 && j === 0) {
        currentCount =  
          matrix[i][j+1] + 
          matrix[i+1][j] + matrix[i+1][j+1];
      }

      if (matrix[i][j] !== 1 && i === 0 && j === width-1) {
        currentCount = 
          matrix[i][j-1] + 
          matrix[i+1][j-1] + matrix[i+1][j];
      }

      if (matrix[i][j] !== 1 && i === height-1 && j === 0) {
        currentCount = 
          matrix[i-1][j] + matrix[i-1][j+1] + 
           matrix[i][j+1];
      }

      if (matrix[i][j] !== 1 && i === height-1 && j === width-1) {
        currentCount = 
          matrix[i-1][j-1] + matrix[i-1][j] + 
          matrix[i][j-1];
      }

      if (matrix[i][j] !== 1 && i !== 0 && j !== 0 && i !== height-1 && j !== width-1) {
        currentCount = 
          matrix[i-1][j-1] + matrix[i-1][j] + matrix[i-1][j+1] + 
          matrix[i][j-1] + matrix[i][j+1] + 
          matrix[i+1][j-1] + matrix[i+1][j] + matrix[i+1][j+1]
      }

      row.push(currentCount);
    }
    result.push(row);
  }

  return result;
}

// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]))

module.exports = {
  minesweeper
};
