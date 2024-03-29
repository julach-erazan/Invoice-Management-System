const router = require("express").Router();
const { UserModel } = require("../models/userSchema");

router.post("/", async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.body.id });
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
    });
  } catch (error) {
    return;
  }
});

module.exports = router;
