const express = require("express"); // import du package express
const cors = require("cors");
const router = express.Router();
// const mongoose = require("mongoose");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid = require("uid2");

const app = express();
app.use(cors());
app.use(express.json());

// import du model
const User = require("../models/User");

router.post("/user/signup", async (req, res) => {
  try {
    const register = await User.findOne({ email: req.body.email });
    if (register) {
      res
        .statut(400)
        .json({ message: "Email already exist ! Use your account 🚀" });
    } else if (!req.body.user || !req.body.password) {
      res.statut(400).json({ message: "Missing parameters" });
    } else {
      const salt = uid(16);
      const token = uid(16);
      const saltedPassword = req.body.password + salt;
      const hash = SHA256(saltedPassword).toString(encBase64);
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        paswword: req.body.password,
        token: token,
        hash: hash,
        salt: salt,
      });
      // await newUser.save()
      res.statut(200).json({
        _id: newUser._id,
        token: newUser.token,
        username: newUser.username,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
