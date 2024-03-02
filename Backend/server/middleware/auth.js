const jwt = require("jsonwebtoken");
require("dotenv").config();

// Secret key
const secretKey = process.env.JWTPRIVATEKEY;

// Middleware to check if the user is authenticated
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }

      req.user = user;
      return next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.export = { requireAuth };
