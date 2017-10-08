function move(game, player, msg) {
  const blockCoords = msg["blockCoords"]
  const pieceName = msg["pieceName"]
  if (game.activePlayer !== player)
    return `${player.id} tried to move, but is not the game's active player! (${game.activePlayer})`
  let success = game.playerMove(player.id, pieceName, blockCoords)
  return (success) ? game.board.toJSONReadyObj() : `${player.id} tried to move, but it was found invalid!`
}

module.exports = move
