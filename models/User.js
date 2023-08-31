const mongoose = require("mongoose");

const User = mongoose.model("user", {
  email: { String, unique: true },
  username: { String, unique: true },
  token: { String, unique: true },
  hash: { String, unique: true },
  salt: { String, unique: true },
});

module.exports = User;
