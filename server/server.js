var restify = require('restify')
var fs = require('fs')
var Path = require('path')
var ecstatic = require('ecstatic')

var server = restify.createServer()

// Should have used a backing store. shrug!
var boards = {}

var listBoards = function (req, res, next) {
  var boardsList = Array.prototype.map(Object.keys(boards), function (it, idx, ary) {
    return {it: boards[it].name}
  })

  res.send(boardsList)
  next()
}
var getBoard = function (req, res, next) {
  var board = boards[req.params.id]
  if (typeof board === 'object') {
    res.send(board)
  } else {
    res.send(404, new Error("Object does not exist."))
  }
  next()
}
var updateBoard = function (req, res, next) {
  var board = boards[req.params.id]
  if (typeof board === 'object') {
    board = JSON.parse(req.body)
    res.send(board)
  } else {
    res.send(404, new Error("Object does not exist."))
  }

  next()
}


// Not implemented!
var deleteBoard = function (req, res, next) {
  next()
}
var newBoard = function (req, res, next) {
  next()
}

ecstatic({ root: __dirname + '', handleError: false })

server.get('/api/boards', listBoards)
server.post('/api/board', newBoard)
server.get('/api/board/:id', getBoard)
server.put('/api/board/:id', updateBoard)
server.del('/api/board/:id', deleteBoard)

server.use(restify.requestLogger())
server.use(restify.gzipResponse())


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url)
});
