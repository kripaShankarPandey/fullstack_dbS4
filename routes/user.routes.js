const UserModel = require("../model/user.model");
const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hashpass = await bcrypt.hash(password, 6);
    // console.log(hashpass);
    const data = new UserModel({ email, password: hashpass, name });
    await data.save();
    res.send("user registered sucessfully");
  } catch (err) {
    res.send("Something went Wrong");
  }
});
userRoute.post("/login", async (req, res) => {
  try {
    // Load hash from your password DB.
    const hashPass = await UserModel.findOne({ email: req.body.email });
    bcrypt.compare(req.body.password, hashPass.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ user_id: hashPass._id }, "masai");
        res.send({ msg: "user login sucessfully", token: token });
      } else {
        res.send({ msg: "wrong Credentails" });
      }
    });
  } catch (err) {
    res.send({ msg: "wrong Credentails" });
  }
});
module.exports = userRoute;
