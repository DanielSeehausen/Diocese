const Piece = require('./Piece.js')

class Player {

  constructor(ip, ws) {
    this.ip = ip
    this.ws = ws
    this.id = null // if toString called before ID assigned. Second player to join always receives 2, first gets 1
    this.assignPieces()
  }

  // to assert that player's aren't spoofing messages and playing pieces they don't have
  playPiece(pieceName) {
    for (var idx = 0; idx < this.pieces.length; idx++) {
      if (this.pieces[idx].name === pieceName) {
        this.pieces.splice(idx, 1)
        return true
      }
    }
    throw `ERROR:\nPlayer: ${this.player}\n...tried to play...\nPiece: ${pieceName}\n...but it was not found...\nPlayer Piece Array: ${this.pieces}`
  }

  assignPieces() {
    this.pieces = Piece.getAllPieces(this)
  }

  assignID(id) {
    (id === 1 || id === 2) && (this.id = id) // yEUH! Budday heer we go jankmasta
  }

  toJSONReadyObj() {
    return { id: [this.id, this.ip] }
  }

  toString() {
    return `Player IP: ${this.ip}\tPlayer ID: ${this.id}\nPieces: ${this.pieces}`
  }

}


module.exports = Player
