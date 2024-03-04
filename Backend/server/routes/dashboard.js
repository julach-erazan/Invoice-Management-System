const router = require("express").Router();
const { UserModel } = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    res.json({ name: user.firstName });
  } catch (error) {
    return;
  }
});

module.exports = router;
