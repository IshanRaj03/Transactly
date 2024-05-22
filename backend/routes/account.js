const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Account, User } = require("../db");
const { authMiddleware } = require("../middleware");
const mongoose = require("mongoose");

router.use(cors());

router.get("/firstName", authMiddleware, async (req, res) => {
  const id = req.userId;
  const user = await User.findOne({
    _id: id,
  });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  res.json({
    firstName: user.firstName,
  });
});

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const toUserID = req.body.to;
  const amountToBeSent = req.body.amount;

  const fromAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );
  const toAccount = await Account.findOne({ userId: toUserID }).session(
    session
  );

  if (!fromAccount || !toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "User not found",
    });
  }

  if (fromAccount.balance < amountToBeSent) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }
  await Account.updateOne(
    {
      userId: toUserID,
    },
    {
      $inc: {
        balance: amountToBeSent,
      },
    }
  ).session(session);
  await Account.updateOne(
    {
      userId: fromAccount.userId,
    },
    {
      $inc: {
        balance: -amountToBeSent,
      },
    }
  ).session(session);

  await session.commitTransaction();

  res.status(200).json({
    message: "Transaction Successful",
  });
});

module.exports = router;
