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

  var placeRook = function (rowsLeft,piecesArr) {
    if (rowsLeft === 0) {
      solutions.push(piecesArr);
      return;
    }
    // debugger;
    var row = n - rowsLeft;
    var unavailCol = [];
    for (var i = 0 ; i<piecesArr.length; i++) {
      unavailCol.push(piecesArr[i]);
      // unavailCol.push(piecesArr[i]+(row - i));
      // unavailCol.push(piecesArr[i]-(row - i));
    }
    for (var k = 0; k<n; k++) {
      if (unavailCol.indexOf(k) === -1) {
        var nextPiecesArr = piecesArr.concat(k);
        placeRook(rowsLeft-1, nextPiecesArr);
      }
    }
  };
  // var availCol = _.range(n);
  // var placeRook = function(avail =Col, board){
  //   if(availCol.length === 0) {
  //     // if(!board.hasAnyRooksConflicts()) {
  //       solutions.push(board);
  //     // }
  //     return;
  //   }
  //   for(var i = 0; i < availCol.length; i++) {
  //     var nextAvailCol = availCol.slice(0);
  //     var nextBoard = board.copy();
  //     nextBoard.rows()[n-availCol.length][nextAvailCol.splice(i,1)] = 1; // modifying one row
  //     placeRook(nextAvailCol, nextBoard);
  //   }
  // };

  // placeRook(availCol, ourBoard);

  placeRook(n,[]);

  var ourBoard = new Board({n:n});
  for(var r = 0; r < n; r++) {
    ourBoard.rows()[r][solutions[0][r]] = 1;
  }
  return ourBoard;
//  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  // return ourBoard.rows();
  // return solutions[0].rows();
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

  var solutions = [];

  var placeRook = function (rowsLeft,piecesArr) {
    if (rowsLeft === 0) {
      solutions.push(piecesArr);
      return;
    }
    // debugger;
    var row = n - rowsLeft;
    var unavailCol = [];
    for (var i = 0 ; i<piecesArr.length; i++) {
      unavailCol.push(piecesArr[i]);
      unavailCol.push(piecesArr[i]+(row - i));
      unavailCol.push(piecesArr[i]-(row - i));
    }
    for (var k = 0; k<n; k++) {
      if (unavailCol.indexOf(k) === -1) {
        var nextPiecesArr = piecesArr.concat(k);
        placeRook(rowsLeft-1, nextPiecesArr);
      }
    }
  };
  placeRook(n,[]);

  var ourBoard = new Board({n:n});
  for(var r = 0; r < n; r++) {
    ourBoard.rows()[r][solutions[0][r]] = 1;
  }
  return ourBoard;

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
