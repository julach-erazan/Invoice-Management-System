const router = require("express").Router();
const { UserModel } = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    res.json({ firstName: user.firstName, lastName: user.lastName, phoneNumber: user.phoneNumber, email: user.email});
  } catch (error) {
    return;
  }
});

module.exports = router;
