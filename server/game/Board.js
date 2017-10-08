function getDefaultBoard() {
  return (
    [[null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null]]
 )
}


class Board {

  constructor() {
    this.board = getDefaultBoard()
    this.currPlayer = null
    this.width = this.board[0].length
    this.height = this.board.length
  }

  posOutOfBounds(pos) {
    return ((pos[0] < 0 || pos[0] >= this.height) || (pos[1] < 0 || pos[1] >= this.width))
  }

  posOccupied(pos) {
    return (this.board[pos[0]][pos[1]] !== null) ? true : false
  }

  movesAreValid(positions) {
    for (let posIdx = 0; posIdx < positions.length; posIdx++) {
      if (this.posOutOfBounds(positions[posIdx]) || this.posOccupied(positions[posIdx]))
        return false
    }
    return true
  }

  _assignPlayer(playerID, pos) {
    this.board[pos[0]][pos[1]] = playerID
  }

  playerMove(playerID, positions) {
    if (this.movesAreValid(positions)) {
      positions.forEach(pos => this._assignPlayer(playerID, pos))
      return true
    }
    return false
  }

  toJSONReadyObj() {
    return this.board.reduce((acc, row, idx) => {
      acc[idx] = row
      return acc
    }, {})
  }

  toString() {
    return this.board.reduce((acc, row) => (acc + row + "\n"), "")
  }

}


module.exports = Board
