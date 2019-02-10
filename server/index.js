var app = require("express")()
var server = require("http").Server(app)
var io = require("socket.io")(server)

server.listen(80, function(res, req) {
  console.log("listening server 80")
})

io.on("connection", function(socket) {
  socket.on("message", function(data, callback) {
    socket.broadcast.emit("message", data)
    callback(data)
  })
})
