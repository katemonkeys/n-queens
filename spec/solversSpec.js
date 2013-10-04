describe('solvers', function() {
  window.displayBoard = function(){};

  describe('findNRooksSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(4, 8).map(function(n){
        var solutionBoard = findNRooksSolution(n);
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function(){

    it('finds the number of valid solutions for n of 0-8', function(){
      _.range(0, 8).map(function(n){
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('countNRooksUniqueSolutions()', function(){

    it('finds the number of valid UNIQUE solutions for n of 0-8', function(){
      _.range(0, 8).map(function(n){
        var solutionCount = countNRooksUniqueSolutions(n);
        var expectedSolutionCount = [1, 1, 1, 2, 7, 23, 115, 694][n];
        expect(solutionCount[0]).to.be.equal(expectedSolutionCount[0]);
        expect(solutionCount[1]).to.be.equal(expectedSolutionCount[1]);
        expect(solutionCount[2]).to.be.equal(expectedSolutionCount[2]);
        expect(solutionCount[3]).to.be.equal(expectedSolutionCount[3]);
        expect(solutionCount[4]).to.be.equal(expectedSolutionCount[4]);
        expect(solutionCount[5]).to.be.equal(expectedSolutionCount[5]);
        expect(solutionCount[6]).to.be.equal(expectedSolutionCount[6]);
        expect(solutionCount[7]).to.be.equal(expectedSolutionCount[7]);
      });
    });

  });


  describe('findNQueensSolution()', function(){

    it('finds a valid solution for n of 4-8', function(){
      _.range(4, 8).map(function(n){
        // var solutionBoard = new Board(findNQueensSolution(n));
        var solutionBoard = findNQueensSolution(n);
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNQueensSolutions()', function(){

    it('finds the number of valid solutions for n of 0-8', function(){
      _.range(4, 8).map(function(n){
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

    describe('countNQueensUniqueSolutions()', function(){

    it('finds the number of valid UNIQUE solutions for n of 0-8', function(){
      _.range(0,10).map(function(n){
        var solutionCount = countNQueensUniqueSolutions(n);
        var expectedSolutionCount = [1, 1, 0, 0, 1, 2, 1, 6, 12, 46, 92][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });


});
