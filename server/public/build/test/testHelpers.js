function log(wsID, action, msg) {
  console.log(`\nWebSocket ${wsID} ${action}:\n\t`)
  console.table(msg)
}

function assertMsg(msg, expectedMsg) {
  debugger
  expectedMsg = JSON.stringify(expectedMsg)
  const result = (msg === expectedMsg)
  console.assert(result, `\n${msg}\n${expectedMsg}`)
}
