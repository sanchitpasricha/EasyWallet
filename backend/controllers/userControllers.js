const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = require("../config");

const User = require("../db");
const userSchema = z.string().email();
const passwordSchema = z.string().min(8);

exports.signUp = (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  if (
    !userSchema.safeParse(username).success &&
    !passwordSchema.safeParse(password).success
  ) {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

  bcrypt.hash(password, 10).then((password) => {
    const newUser = new User({
      username,
      password,
      firstname,
      lastname,
    });
    newUser
      .save()
      .then((user) => {
        res.status(201).json({
          message: "User created successfully",
          user,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong",
          error: err,
        });
      });
  });
};

exports.signIn = (req, res) => {
  const { username, password } = req.body;
  if (!userSchema.safeParse(username).success) {
    return res.status(400).json({
      message: "Invalid username",
    });
  }
  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(400).json({
        message: "User not found!",
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({
          message: "Error while verifying password",
        });
      }
      const token = jwt.sign({ username }, secret);
      res.status(200).json({
        token,
      });
    });
  });
};

exports.updateUser = async (req, res) => {
  const { userId, password } = req.body;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
  }
  await User.findOneAndUpdate({ username: userId }, req.body);
  res.status(200).json({
    message: "User updated successfully",
  });
};
