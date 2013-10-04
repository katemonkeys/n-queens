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

  var solutions = [];
  var transposeArray = [];
  var tempVar = 0;

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

//  console.log('Original array had '+solutions.length);

  tempVar = 0;
  var duplicates = {};
  for (var p = 0; p<solutions.length; p++){
    for (var j = 0; j<n; j++) {
      transposeArray[solutions[p][j]] = j;
    }
    for (var m = p; m<solutions.length; m++) {
      if (transposeArray.join('') === solutions[m].join('') ) {
          duplicates[solutions[m].join('')] = true;
      }
    }
  }

  var duplArr = [];
  for (var key in duplicates) {
    duplArr.push(key);
  }
//console.log('duplicates by tranpose reduce by ' + duplArr.length);

  return solutions.length - duplArr.length;

//  console.log(tempArray);
// Check:
// 4f rotation
// h
// v

};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){

  var solutions = [];

  var placeQueen = function (rowsLeft,piecesArr) {
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
        placeQueen(rowsLeft-1, nextPiecesArr);
      }
    }
  };
  placeQueen(n,[]);

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

  var placeQueen = function (rowsLeft,piecesArr) {
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
        placeQueen(rowsLeft-1, nextPiecesArr);
      }
    }
  };
  placeQueen(n,[]);

  // var ourBoard = new Board({n:n});
  // for(var r = 0; r < n; r++) {
  //   ourBoard.rows()[r][solutions[0][r]] = 1;
  // }
  // return ourBoard;

  var solutionCount = solutions.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensUniqueSolutions = function(n){
 
  var solutions = [];

  var placeQueen = function (rowsLeft,piecesArr) {
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
        placeQueen(rowsLeft-1, nextPiecesArr);
      }
    }
  };
  placeQueen(n,[]);

  // var ourBoard = new Board({n:n});
  // for(var r = 0; r < n; r++) {
  //   ourBoard.rows()[r][solutions[0][r]] = 1;
  // }
  // return ourBoard;
  

  var solutionCount = solutions.length;
  return solutionCount;
};