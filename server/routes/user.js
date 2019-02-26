const mongoose = require("mongoose")
const passport = require("passport")
const router = require("express").Router()
const auth = require("./middlewares/auth")
const User = mongoose.model("User")

//POST new user route (optional, everyone has access)
router.post("/register", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req

  if (!user.login) {
    return res.status(422).json({
      error: "is required login"
    })
  }

  if (!user.password) {
    return res.status(422).json({
      error: "is required login"
    })
  }
  User.findOne({ login: user.login }).then(result => {
    if (!result) {
      const finalUser = new User(user)
      finalUser.setPassword(user.password)
      return finalUser.save().then(() => {
        res.json({ user: finalUser.toAuthJSON() })
      })
    } else {
      return res.status(422).json({
        error: "User with there are login exist"
      })
    }
  })
})

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req

  if (!user.login) {
    return res.status(422).json({
      error: "is required login"
    })
  }

  if (!user.password) {
    return res.status(422).json({
      error: "is required password"
    })
  }
  return passport.authenticate(
    "local",
    { session: false, failureFlash: true },
    (err, passportUser, info) => {
      if (err) {
        return next(err)
      }

      if (passportUser) {
        const user = passportUser
        user.token = passportUser.generateJWT()
        return res.json({ user: user.toAuthJSON() })
      } else {
        return res.status(422).json({ error: info })
      }
    }
  )(req, res, next)
})

module.exports = router
