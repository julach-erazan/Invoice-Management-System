const router = require("express").Router();
const { UserModel } = require("../models/user");
const bcrypt = require("bcryptjs");
require('dotenv').config();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    // Check if the email exists
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    const password = req.body.password;
    // Check if the password is correct
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY);

    res.json({ token });

  } catch (error) {
    res.status(500).send({ message: "Internal Sever Error" });
  }
});

module.exports = router;
