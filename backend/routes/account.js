const express = require("express");
const { getBalance, transaction } = require("../controllers/accountController");
const { authMiddleware } = require("../middleware");
const accountRouter = express.Router();

accountRouter.get("/balance", getBalance);
accountRouter.post("/transactions", authMiddleware, transaction);

module.exports = accountRouter;
