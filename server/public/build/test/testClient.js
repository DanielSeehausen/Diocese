const ws1 = new WebSocket('ws://www.localhost:8080')
const ws2 = new WebSocket('ws://www.localhost:8080'); // <-- actually required!!! errors: (intermediate value) is not a function


// initializing our two clients with IDs 1 && 2
(() => {
  const wsConns = [ws1, ws2]
  wsConns.forEach((ws, idx) => {
    // Connection opened
    ws.addEventListener('open', (event) => {
      log(idx+1, 'opened', event.data)
    })

    // Listen for messages
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      log(idx+1, 'received', msg)
    })

    // Connection closed
    ws.addEventListener('close', (event) => {
      log(idx+1, 'CLOSING', event.reason)
    })

    // Connection errored
    ws.addEventListener('error', (event) => {
      console.error("Client websocket errored: ", event.data)
    })
  })
})()

function runTest(testGame) {
  var lastSender = null
  var ws1SendMsgIdx = 0
  var ws1RecMsgIdx = 0
  var ws2SendMsgIdx = 0
  var ws2RecMsgIdx = 0
  const ws1Sends = testGame.sends.ws1
  const ws2Sends = testGame.sends.ws2
  const ws1Receives = testGame.receives.ws1
  const ws2Receives = testGame.receives.ws2

  ws1.addEventListener('message', (event) => {
    let msg = event.data
    assertMsg(msg, ws1Receives[ws1RecMsgIdx])
    ws1RecMsgIdx++
    if (lastSender === 2 || lastSender === null) {
      ws1.send(JSON.stringify(ws1Sends[ws1SendMsgIdx]))
      ws1SendMsgIdx++
      lastSender = 1
    }
  })

  ws2.addEventListener('message', (event) => {
    let msg = event.data
    assertMsg(msg, ws2Receives[ws2RecMsgIdx])
    ws2RecMsgIdx++
    if (lastSender === 1) {
      ws2.send(JSON.stringify(ws2Sends[ws2SendMsgIdx]))
      ws2SendMsgIdx++
      lastSender = 2
    }
  })

  ws1.send(JSON.stringify({action: 'ready'}))
  ws2.send(JSON.stringify({action: 'ready'}))


}
