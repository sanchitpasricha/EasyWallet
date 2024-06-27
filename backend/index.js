const dotenv = require("dotenv");
dotenv.config({ path: "./fig.env" });
const express = require("express");
const userRoutes = require("./routes/user");
const app = express();
const cors = require("cors");

const accountRouter = require("./routes/account");

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/accounts", accountRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
