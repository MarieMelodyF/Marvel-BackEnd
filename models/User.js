const mongoose = require("mongoose");

const User = mongoose.model("user", {
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true },
  token: { type: String, unique: true },
  hash: { type: String, unique: true },
  salt: { type: String, unique: true },
});

module.exports = User;
