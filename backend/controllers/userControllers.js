const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");

const { User, Account } = require("../db");
const userSchema = z.string().email();
const passwordSchema = z.string().min(8);

exports.signUp = async (req, res) => {
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
    Account.create({
      userId: newUser._id,
      balance: 10000,
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
      const token = jwt.sign({ username }, JWT_SECRET);
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

exports.searchUser = async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      { username: { $regex: filter } },
      { firstname: { $regex: filter } },
      { lastname: { $regex: filter } },
    ],
  });

  res.status(200).json({
    user: users.map((user) => {
      return {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id,
      };
    }),
  });
};
