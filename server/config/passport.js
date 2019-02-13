const mongoose = require("mongoose")
const passport = require("passport")
const LocalStrategy = require("passport-local")

const User = mongoose.model("User")

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[login]",
      passwordField: "user[password]"
    },
    (login, password, done) => {
      User.findOne({ login })
        .then(user => {
          if (!user) {
            return done(null, false, "login is invalid")
          }
          if (!user.validatePassword(password)) {
            return done(null, false, "password is incorrect")
          }
          return done(null, user)
        })
        .catch(done)
    }
  )
)
