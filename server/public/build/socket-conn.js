const dispatch = require('./dispatch.js')
const unpack = require('./ws-msg-unpacker.js')
const ws = new WebSocket('ws://www.localhost:8080')
const testGame = require('./testClient.js')

const GREETING = "Client websocket opened: "
const FAREWELL = "Client websocket closed: "
const ERROR = "Client websocket errored: "

// Connection opened
ws.addEventListener('open', (event) => {
  console.log(GREETING, event.data)
})

// Listen for messages
ws.addEventListener('message', (event) => {
  const msg = unpack(event.data)
  dispatch(msg)
})

// Connection closed
ws.addEventListener('close', (event) => {
  console.log(FAREWELL, event.data)
})

// Connection errored
ws.addEventListener('error', (event) => {
  console.error(ERROR, event.data)
})
