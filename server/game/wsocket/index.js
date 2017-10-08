var WebSocketServer = require('ws').Server
const Game = require('../Game.js')
const Player = require('../Player.js')
const digestMsg = require('./msgDigester.js')
const dispatch = require('./dispatch.js')

var wss = new WebSocketServer({port: 8080})

wss.on('connection', (ws, req) => {
    const ip = req.connection.remoteAddress
    const player = new Player(ip, ws)
    var game = Game.joinOrCreateGame(player)

    ws.on('message', (payload) => {
      console.log("\n")
      console.log("received", payload)
      /* 1. Websocket communication comes in
       * 2. Digester converts to format for consumption on server
       * 3. Dispatch sends message to appropriate place, which eventually unwinds and returns the appropriate response
       * 4. Digester converts to format for WS communication with client
       * 5. Response Msg gets emitted via Game.instance to both players
      */
      let response = dispatch(game, player, payload)
      console.log("responding with: ", response)
      game.emit(response)
      console.log('\t...success')
    })

})
