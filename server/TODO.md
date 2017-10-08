
## MUST HAPPEN NOW
  - server has to emit message that client is ready once pieces have been instantiated so game can start

# SERVER

## SERVER GAME MGMT
  - assert check for game over after every move (player out of pieces)
  - For now, double pass should emit a game over -- implement this
  - later, manage 'player can not move anymore' with any remaining pieces and available positions on board (must make nice nice so it is not taxing)
  - players need to have 'pieces' added/make PIECE class
  - implement scoring
  - fix how new games are spawned to be not withon the Game class file -- that is JANK! new object game spawner? or happen at dispatch level? ples.

## WEBSOCKET COMMUNICATION
  - Messages need to be emitted to BOTH players -- player needs pointer to its WSS object
  - Need to wrap responses that have some type of response code in addition to the payload
  - Client needs way to end game/opt out early
  - Server must handle connection breaking from client
  - Server must send a game starting signal
  - Much later -- either obfuscate responses or standardize so bots can be made

## TESTING OF IMPLEMENTED FEATURES:
  - check if new game instances are spawned correctly
  - check that playerSwapping correctly updates

## GENERAL
  - should merge bundle with server so rest of routing can be finished
  - get DO droplet or use chouxbe.us if they havent banned me for life for some basic deployment testing? or just get new domain?

# CLIENT
