module.exports = function(io) {
  io.on("connection", function(socket) {
    socket.on("msg", function(data, resolve) {
      socket.broadcast.emit("msg", data)
      resolve(data)
    })

    socket.on("leave channel", function(channel) {
      socket.leave(channel)
    })
    socket.on("join channel", function(channel) {
      socket.join(channel)
    })
    socket.on("new message", function(msg, resolve) {
      console.log(socket)

      socket.broadcast.to(msg.channel).emit("message", msg)
      resolve(msg)
    })
  })
}
