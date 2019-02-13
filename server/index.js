const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const mongoose = require("mongoose")

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise

//Configure Mongoose
mongoose.connect("mongodb://localhost/react-chat")
mongoose.set("debug", true)

const app = express()
//Initiate our app

//Configure our app
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  session({
    secret: "dgsgsdfgsfdg",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
)

//Models & routes
require("./models/User")
require("./config/passport")
app.use(require("./routes/user"))

const server = app.listen(80, function(res, req) {
  console.log("listening server 80")
})

const io = require("socket.io")(server)

io.on("connection", function(socket) {
  socket.on("message", function(data, callback) {
    socket.broadcast.emit("message", data)
    callback(data)
  })
})
