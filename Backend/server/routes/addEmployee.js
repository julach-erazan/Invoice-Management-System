const router = require("express").Router();
const { UserModel } = require("../models/userSchema");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    const email = req.body.email.toLowerCase();
    // Check if empId already exists
    const existingEmail = await UserModel.findOne({ email: req.body.email });

    // Check if empId already exists
    if (existingEmail) {
      res.status(401).json({ message: "Email already exists!" });
      return;
    }  

    const existingEmpId = await UserModel.findOne({ userId: req.body.userId, empId: req.body.empId });

    // Check if empId already exists
    if (existingEmpId) {
      res.status(401).json({ message: "EmpId already exists!" });
      return;
    } 

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await UserModel.create({ ...req.body, email: email, password: hashedPassword});

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
    return;
  }
});

module.exports = router;