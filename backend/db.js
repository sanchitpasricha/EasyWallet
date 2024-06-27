const mongoose = require("mongoose");
const { Schema } = mongoose;
const DB = process.env.DATABASE_CONNECTION;

mongoose.connect(DB);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: String,
  lastname: String,

  password: {
    type: String,
    required: true,
  },
});

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
