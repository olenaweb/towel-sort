
// You should implement your task here.

module.exports = function towelSort(matrix) {
  function compareNumbers(a, b) {
    return b - a;
  }
  let result = [];
  if (matrix == undefined) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 == 0) {
      matrix[i].sort(compareNumbers);
    }
    result = result.concat(matrix[i]);
  }
  return result;
}
