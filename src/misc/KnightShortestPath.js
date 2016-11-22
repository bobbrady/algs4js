  /**
            Class to find shortest path

            This class uses a Depth First Search (DFS) algorithm to find the shortest path.

            @class
          */
  class KnightShortestPath {

    /**
      @constructor
    */
    constructor(boardSize) {
      // The number of squares per edge of the board square
      this.boardSize = boardSize;
      // The shortest path predecessor array
      this.predArr = [];
      // Board square markers so the engine knows if it already visited a square
      this.board = [];
      for (let row = 0; row < this.boardSize; row++) {
        this.board[row] = [];
        for (let col = 0; col < this.boardSize; col++) {
          this.board[row][col] = -1;
        }
      }
    }

    /**
      This function will use DFS to find the shortest path between
      two squares.  The results are an array of move predecessor
      indices.  The predecessor array is a MoveEngine property.

    @function
    @param {number} startIdx - The index of the starting square
    @param {number} endIdx - The index of the ending square
    @return {number} The number of moves in shortest path
    */
    getShortestPath(startIdx, endIdx) {
      // Boiler plate operations
      this.startIdx = startIdx;
      this.endIdx = endIdx;
      const startPos = this.getRowColFromIdx(startIdx);
      const endPos = this.getRowColFromIdx(endIdx);
      // The DFS search queue
      const queue = [];
      // Initialize the starting square
      this.board[startPos.row][startPos.col] = 0;
      this.predArr[startIdx] = null;
      // Start search
      queue.push(startPos);

      while (queue.length > 0) {
        // Remove element from head of queue
        const pos = queue.shift();

        // Check if reached the end position
        if (pos.row === endPos.row && pos.col === endPos.col) {
          return this.board[endPos.row][endPos.col];
        }

        // Get all neighboring moves
        const neighbors = this.getValidNeighbors(pos.row, pos.col);
        neighbors.forEach(neighbor => {
          this.board[neighbor.row][neighbor.col] = this.board[pos.row][pos.col] + 1;
          this.addPredecessor(neighbor, pos);
          queue.push(neighbor);
        });
      }
      return -1;
    }

    /**
      Function to convert from square index to row, column position

      @function
      @param {number} idx - The index of the square
    */
    getRowColFromIdx(idx) {
      const row = Math.floor(idx / this.boardSize);
      const col = idx % this.boardSize;
      return {
        row,
        col
      };
    }

    /**
      Function to add the predecessor square index of a neighbor square
      to the predecessor array.

      @function
      @param (Object) neighbor - The neighbor row, column position
      @param {Object} predecessor- the predecessor row, column position
    */
    addPredecessor(neighbor, predecessor) {
      const neighborIdx = (this.boardSize * neighbor.row) + neighbor.col;
      const predecessorIdx = (this.boardSize * predecessor.row) + predecessor.col;
      this.predArr[neighborIdx] = predecessorIdx;
    }

    /**
       Function to add a nieghboring move to and array of moves

       @function
       @param (Array)  arr - The array of neighboring moves
       @param {number} row - the neighbor row position
       @param {number} col - the neighbor column position
     */
    addValidNeighbor(arr, row, col) {
      if (row >= 0 && row < this.boardSize && col >= 0 && col < this.boardSize &&
        this.board[row][col] === -1) {
        arr.push({
          row,
          col
        });
      }
    }

    /**
      Function to get all nieghboring moves from a square.
      It will validate and reject any squares already visited

      @function
      @param {number} row - the position row position
      @param {number} col - the position column position
      @return (Array)  arr - The array of neighboring moves
    */
    getValidNeighbors(row, col) {
      const arr = [];
      this.addValidNeighbor(arr, row + 2, col + 1);
      this.addValidNeighbor(arr, row + 1, col + 2);
      this.addValidNeighbor(arr, row - 1, col + 2);
      this.addValidNeighbor(arr, row - 2, col + 1);
      this.addValidNeighbor(arr, row - 2, col - 1);
      this.addValidNeighbor(arr, row - 1, col - 2);
      this.addValidNeighbor(arr, row + 1, col - 2);
      this.addValidNeighbor(arr, row + 2, col - 1);
      return arr;
    }

    /**
      Function that gets the array of indices visited during
      the shortest path moves.

      @return {Array} - The array of idices visited
    */
    getMoveStack() {
      const moveStack = [this.endIdx];
      for (let idx = this.endIdx; idx !== this.startIdx; idx = this.predArr[idx]) {
        if (this.predArr[idx] !== this.startIdx) {
          moveStack.unshift(this.predArr[idx]);
        }
      }
      return moveStack;
    }

  }

  export default KnightShortestPath;
