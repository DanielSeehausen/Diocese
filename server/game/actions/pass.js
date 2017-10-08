function pass(game, player) {
  game.swapPlayer()
  return {
    playerID: player.id
  }
}

module.exports = pass
