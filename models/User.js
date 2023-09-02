const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  mongoose.Schema({
    email: { type: String, unique: true, require: true },
    username: { type: String, unique: true, require: true },
    token: { type: String },
    hash: { type: String },
    salt: { type: String },
  })
);

module.exports = User;
