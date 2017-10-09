const express = require('express')
var path = require('path')
const app = express()
require('./game/wsocket/index.js')

const root = __dirname + '/public/' // yoo no it

// some middleware for logging the knotty bad asset requests
app.use(function(req, res, next) {
  console.log(req.connection.remoteAddress + " requesting: " + req.originalUrl)
  next()
})

// root bebeeh
app.get('/', (req, res) => {
  res.sendFile(root + 'index.html')
})

// opens websocket connection and looks to join/create a game
app.get('/lobby', (req, res) => {
  res.sendFile(root + 'index.html')
})

app.get('/test', (req, res) => {
  res.sendFile(root + '/build/test/testIndex.html')
})

app.get('/test/:file', (req, res) => {
  console.log("WOT", req.params.file)
  res.sendFile(root + '/build/test/' + req.params.file)
})

// routes for all the 404 pages assets, including stylesheet
app.get('/404/:file', (req, res) => {
  res.sendFile(root + '/404/' + req.params.file)
})

// catch all sends them suckas two bernard u no it m8
app.get('*', (req, res) => {
  res.sendFile(root + '/404/index.html')
})


app.listen(3000)
