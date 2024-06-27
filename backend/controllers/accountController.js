const { startSession } = require("mongoose");
const { Account, User } = require("../db");

exports.getBalance = function (req, res) {
  res.status(200).json({
    balance: 10000,
  });
};

exports.transaction = async function (req, res) {
  const session = await startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  const user = await User.findOne({ username: req.body.userId }).session(
    session
  );
  const account = await Account.findOne({ userId: user._id }).session(session);
  console.log(account);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const recipient = await User.findOne({ username: to }).session(session);
  console.log(recipient);

  const recipientAccount = await Account.findOne({
    userId: recipient._id,
  }).session(session);

  if (!recipientAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "User not found",
    });
  }

  await Account.updateOne(
    { userId: user._id },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: recipient._id },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();
  res.status(200).json({
    message: "Transaction successful",
  });
};
