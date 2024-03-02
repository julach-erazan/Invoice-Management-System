const router = require("express").Router();
const {UserModel} = require("../models/user");
const bcrypt = require("bcryptjs");


router.post('/', async (req, res) => {
    try {
        // Check if email already exists
        const existingEmail = await UserModel.findOne({ email: req.body.email });
        if (existingEmail) {
          return res.status(400).json({ message: "Email already exists" });
        }
    
        const salt = await bcrypt.genSalt(Number(process.env.SALT));

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        UserModel.create({...req.body, password: hashedPassword})

        res.status(201).json({ message: 'User registered successfully' });

      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }    
})

module.exports = router;