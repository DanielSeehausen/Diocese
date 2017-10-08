const ws = new WebSocket('ws://www.localhost:8080')

const testGame1 = {
  messages: [
    {
      action: "move",
      blockCoords: [[0, 0], [0, 1], [0, 2]],
      pieceName: "road"
    }
  ],
  expectedResponses: [
    {
      poop: "this is the expected response..."
    },
  ]
}


function main() {
  ws.addEventListener('message', (event) => {
    console.log("Server response: ", digestMsg('unpack', event.data))
  })
  debugTest(testGame1, ws)
}
