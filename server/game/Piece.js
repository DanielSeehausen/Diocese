const PIECE_DICT = {
  house:       [[0, 0]],
  house2:      [[0, 0]],
  apartments:  [[0, 0],  [1, 0]],
  apartments2: [[0, 0],  [1, 0]],
  road:        [[-1, 0], [0, 0],  [1, 0]],
  square:      [[0, 0],  [0, 1],  [1, 0],  [1, 1]],
  school:      [[-1, 0], [0, 0],  [1, 0],  [0, 1]],
  mansion:     [[-1, 0], [0, 0],  [1, 0],  [-1, 1], [1, 1]],
  hospital:    [[0, -1], [-1, 0], [0, 0],  [1, 0],  [0, 1]],
  office:      [[1, -1], [-1, 0], [0, 0],  [1, 0],  [-1, 1]],
  federal:     [[0, -1], [-1, 0], [0, 0],  [1, 0],  [-1, 1]],
  tenements:   [[0, -1], [1, -1], [-1, 0], [0, 0],  [-1, 1]],
}

class Piece {

  constructor(player, name, jaunts) {
    this.owner = player
    this.name = name
    this.jaunts = jaunts
    this.played = false
    this.destroyed = false
  }

  static getAllPieces(player) {
    let pieces = []
    for (var [name, jaunts] of Object.entries(PIECE_DICT))
      pieces.push(new Piece(player, name, jaunts))
    return pieces
  }

  toJSONReadyObj() {
    return {
      name: this.name,
      jaunts: this.jaunts,
      played: this.played,
      destroyed: this.destroyed,
    }
  }

  toString() {
    return `Piece: ${this.name}\tPlayerID: ${this.owner.id}\tP/D: ${this.played}/${this.destroyed}`
  }
}

module.exports = Piece
