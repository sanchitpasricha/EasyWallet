const express = require("express");
const {
  signUp,
  signIn,
  updateUser,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middleware");
const userRouter = express.Router();

userRouter.put("/", authMiddleware, updateUser);
userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

module.exports = userRouter;
