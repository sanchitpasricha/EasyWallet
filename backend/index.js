const express = require("express");
const userRoutes = require("./routes/user");
const app = express();
const cors = require("cors");
const { authMiddleware } = require("./middleware");

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
