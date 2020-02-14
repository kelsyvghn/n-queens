/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var arrayCreator = function (index) {
    var arr = Array.from({ length: n });
    arr.fill(0);

    arr[index] = 1;

    return arr;
  };

  var solution = [];

  for (let i = 0; i < n; i++) {
    solution.push(arrayCreator(i));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = n; //fixme



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  // var solution = new Board({n: 4}); // {n: n}
  // var rows = solution.rows();

  // var colIindex = 0;
  // // var rowIndex = 0;
  // // var counter = {}; // indication whethere we reach the n col.
  // // var counterQueen = 0;

  // // var recurseBoard = function (matrix, row, col) {

  // //   if (counterQueen === 4) { return solution; }

  // //   if (!counter[row]) {
  // //     counter[row] = 0;
  // //   }

  // //   if (counter[row] >= n) {
  // //     solution[row -= 1].fill(0);
  // //     counterQueen--;
  // //     return recurseBoard(matrix, row -= 1, col += 1);
  // //   }
  // //   //toggle piece at col
  // //   matrix.togglePiece(row, col);

  // //   //if pass col test
  // //   if (matrix.hasColConflictAt(col) || matrix.hasMajorDiagonalConflictAt(col) || matrix.hasMinorDiagonalConflictAt(col)) {
  // //     //if fails increment col one
  // //     counter[row] += 1;
  // //     matrix.togglePiece(row, col);
  // //     recurseBoard(matrix, row, col += 1);
  // //   }

  // //   //goes back to start recurse call index plus one
  // //   //if passes all test, row plus one on recurse
  // //   // counter.row = col;
  // //   counterQueen++;
  // //   return recurseBoard(solution, rowIndex += 1, colIindex);
  // };

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return recurseBoard(solution, rowIndex, colIindex);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
