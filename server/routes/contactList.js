const mongoose = require("mongoose")
const router = require("express").Router()
const User = mongoose.model("User")

router.post("/getUser", (req, res) => {
  const {
    body: { id }
  } = req
  console.log(id)

  User.find({ _id: id }, { _id: 1, login: 1 }).then(users => {
    return res.json(users)
  })
})

router.get("/userList", (req, res) => {
  User.find({}, { _id: 1, login: 1 }).then(users => {
    return res.json(users)
  })
})

router.post("/new_channel", (req, res) => {
  const {
    body: { userId }
  } = req
  User.find({ _id: userId }).then(user => {
    return res.json(user.contacts)
  })
})

module.exports = router
