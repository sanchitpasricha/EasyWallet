const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

exports.authMiddleware = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  jwt.verify(token, JWT_SECRET, function (err, data) {
    if (err) {
      res.status(403).json({
        message: "Unauthorized",
      });
    } else {
      req.body.userId = data.username;
      next();
    }
  });
};
