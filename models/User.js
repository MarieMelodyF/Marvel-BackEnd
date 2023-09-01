const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  mongoose.Schema({
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    token: { type: String },
    hash: { type: String },
    salt: { type: String },
  })
);

module.exports = User;
