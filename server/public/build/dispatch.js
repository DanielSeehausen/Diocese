// const startGame = require('./actions/startGame.js')
// const gameUpdate = require('./actions/gameUpdate.js')
// const chat = require('./actions/chat.js')
// const terminate = require('./actions/terminate.js')
// const digestMsg = require('./msgDigester.js')

function logMsg(msg) {
  console.log(`Action: ${msg["action"]}\nPayload: ${msg}`)
}

const DISPATCH_DICT = {
  // 'startGame': startGame,
  // 'gameUpdate': gameUpdate,
  // 'chat': chat,
  // 'terminate': terminate,
  'logMsg': logMsg
}

function dispatch(payload) {
  DISPATCH_DICT["logMsg"](payload)
  // let msg = digestMsg("unpack", payload)
  // let action = msg["action"]
  // let response = DISPATCH_DICT[action](msg)
  // return digestMsg('pack', response, action)
}

module.exports = dispatch
