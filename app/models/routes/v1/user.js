const express = require("express");
const router = express.Router();
const User = require("../../userModel");

router.get("/", (req, res) => {
  User.find().then(users => {
    res.json(users);
  });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    age: req.body.age
  });

  const savedUser = await user.save();
  res.json(savedUser);
});
module.exports = router;
