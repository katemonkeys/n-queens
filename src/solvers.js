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
//    var row = n - rowsLeft;
    var unavailCol = [];
    for (var i = 0 ; i<piecesArr.length; i++) {
      unavailCol.push(piecesArr[i]);
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


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var temp = 1;
  for (var i = n; i>0; i--) {
    temp *= i;
  }
  return temp;
};


// return the number of UNIQUE nxn chessboards that satisfy the problem
window.countNRooksUniqueSolutions = function(n){
  var temp = 1;
  for (var i = n; i>0; i--) {
    temp *= i;
  }
  return temp;
};


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

  /*
A funny although altogether inefficient way of doing this is the following:
  var ourBoard, testMatrix;

  var proposeQueenSolution = function() {
    testMatrix = [];
    for (var i = 0; i<8; i++) {
      testMatrix[i] = Math.floor(Math.random()*8);
    }
    ourBoard = new Board({n:n});
    for(var r = 0; r < n; r++) {
      ourBoard.rows()[r][testMatrix[r]] = 1;
    }
    if (!ourBoard.hasAnyQueensConflicts()) {
      return ourBoard;
    }
    else {
      proposeQueenSolution();
    }
  };

  return ourBoard;

  */

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
 
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

  // var ourBoard = new Board({n:n});
  // for(var r = 0; r < n; r++) {
  //   ourBoard.rows()[r][solutions[0][r]] = 1;
  // }
  // return ourBoard;

  var solutionCount = solutions.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
