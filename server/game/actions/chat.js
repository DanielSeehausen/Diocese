function chat(game, player, msg) {
  return {
    playerID: player.id,
    chatStr: msg["chatStr"]
  }
}

module.exports = chat
