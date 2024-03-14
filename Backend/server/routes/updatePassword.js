const router = require("express").Router();
const { UserModel } = require("../models/userSchema");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const {error} = req.body;
    if(error){
      return res.status(400).send({ message: error.details[0].massage });
    }

    //Find User
    const user = await UserModel.findOne({ _id: req.body.id });

    // // Check if the old password is correct
    const passwordCheck = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!passwordCheck) {
        return res.status(401).json({ message: "Invalid Old Password!" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt); // Hash the password

    await UserModel.updateOne({_id: req.body.id}, { $set: { password: hashedPassword }});
    res.status(201).json({ message: "Change Password Successfully." });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
    return;
  }
});

module.exports = router;
