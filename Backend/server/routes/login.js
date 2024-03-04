const router = require("express").Router();
const { UserModel } = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    // Check if the email exists
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.status(400).send({ message: "Invalid Email or Password" });
      return;
    }

    const password = req.body.password;
    // Check if the password is correct
    const passwordCheck = bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      res.status(400).json({ message: "Invalid Email or Password" });
      return;
    }
    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY);

    res.json({ token, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Internal Sever Error" });
    return;
  }
});

module.exports = router;
