const Board = require('./Board.js')

pendingGame = false

class Game {

  constructor(player) {
    this.p1 = player
    this.p1.assignID(1)
    this.p2 = null
    this.board = new Board()
    pendingGame = this
    this.activePlayer = player
  }

  // this moved to player -- they are assigned in constructor
  // assignPieces() {
  //   [this.p1, this.p2].forEach(player => player.assignPieces())
  // }

  startGame() {
    // this.assignPieces()
    emit("game starting")
  }

  emit(msg) {
    // console.log(this.p1)
    // console.log(this.p2)
    [this.p1, this.p2].forEach(player => player.ws.send(msg))
  }

  _playerJoin(player) {
    this.p2 = player
    this.p2.assignID(2)
    return this
  }

  static joinOrCreateGame(player) {
    if (pendingGame) {
      let game = pendingGame._playerJoin(player)
      pendingGame = false
      return game
    }
    let newGame = new Game(player)
    return newGame
  }

  swapPlayer() {
    (this.p1 === this.activePlayer) ? (this.activePlayer = this.p2) : (this.activePlayer = this.p1) // JANK NOTTEEIGH dont be TELLING ME ASSIGNMENT IN A TERNARY IS INAPPROPRIATE THERER ARE NO REACT WARNINGS TO SAVE YOU DAHLNODE
  }

  playerMove(playerID, pieceName, blockCoords) {
    let player = (this.p1.id === playerID) ? this.p1 : this.p2
    // success occurs when the player both has the piece to play and the board is free to play the piece
    let success = (player.playPiece(pieceName) && this.board.playerMove(playerID, pieceName, blockCoords)) // these should really be one, but I don't have a good board/player heirarchy in place atm
    success && this.swapPlayer() // Jeff Goldblumjank is best jank!
    return success
  }

  toJSONReadyObj() {
    let gameObj = {}
    gameObj.activePlayer = this.activePlayer
    gameObj.players = [this.p1.toJSONReadyObj(), this.p2.toJSONReadyObj()]
    gameObj.board = this.board.toJSONReadyObj()
    return gameObj
  }

  toString() {
    let strBuilder = []
    strBuilder.push(this.p1.toString())
    this.p2 && strBuilder.push(this.p2.toString()) // JANK!
    strBuilder.push(this.board.toString())
    return strBuilder.join('\n')
  }

}

module.exports = Game
