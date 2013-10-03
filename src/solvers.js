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
window.findNRooksSolution = function(n){
  // debugger;
  // n = 5;
  var solutions = [];
  var keys = _.range(n);
  var placeRook = function(keys, board){
    if(keys.length === 0) {
      if(!board.hasAnyRooksConflicts()) {
        solutions.push(board);
      }
      return;
    }
    for(var i = 0; i < keys.length; i++) {
      var tempKeys = keys.slice(0);
      var tempBoard = board.copy();
      tempBoard.rows()[n-keys.length][tempKeys.splice(i,1)] = 1; // modifying one row
      placeRook(tempKeys, tempBoard);
    }
  };

  var ourBoard = new Board({n:n});
  placeRook(keys, ourBoard);

  // console.log(ourBoard.rows());
  // // console.log(ourBoard.rows());
  // var pieces = []; //fixmeex
  // var availRows = _.range(n);
  // var availCols = _.range(n);
  // var board = new Board({'n':n});
  // while (availRows.length) {
  //   var pieceRow = availRows.shift();
  //   var pieceCol = availCols.shift();
  //   pieces.push([pieceRow,pieceCol]);
  //   board.rows()[pieceRow][pieceCol] = 1;
  // }


//  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  // return ourBoard.rows();
  return solutions[0].rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var temp = 1;
  for (var i = n; i>0; i--) {
    temp *= i;
  }
//  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return temp;
};

// construct the board like we did the rooks board, for n size
// so the first element in the first row has 8 choices, which eliminates a column
//the second element in the second row has 7 choices, further eliminating a column
//etc
//make all 8! boards and test them for major and minor diagonals

// 1. iterate through each column in the top row
// 2. for each column position
    // 1. Place a queen on that position
// 3. Repeat steps 1-2 for each board

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  // n=4;
  var solutions = [];
  var keys = _.range(n);
  var placeRook = function(keys, board){
    if(keys.length === 0) {
      if(!board.hasAnyQueensConflicts()) {
        solutions.push(board);
      }
      return;
    }
    for(var i = 0; i < keys.length; i++) {
      var tempKeys = keys.slice(0);
      var tempBoard = board.copy();
      tempBoard.rows()[n-keys.length][tempKeys.splice(i,1)] = 1; // modifying one row
      placeRook(tempKeys, tempBoard);
    }
  };
  // debugger;
  var ourBoard = new Board({n:n});
  placeRook(keys, ourBoard);

  console.log(n, solutions.length);
  return solutions[0];
};

  // var pieces = [];
  // var size = n;

  // var rookPlacer = function(size, piecesSoFar) {
  //   if(size === 0) {
  //     pieces.push(piecesSoFar);
  //     return;
  //   }
  //   for(var i = 0; i < n; i++) {
  //     var totalPieces = piecesSoFar.push([n-size, i]);
  //     rookPlacer(size-1, totalPieces);
  //   }
  // };

  // rookPlacer(n, []);
  // return pieces;
// };


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
