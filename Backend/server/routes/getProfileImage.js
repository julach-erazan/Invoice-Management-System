const router = require("express").Router();
const { UserModel } = require("../models/userSchema");

router.post("/", async (req, res) => {
  try {

    const data = await UserModel.findOne({_id: req.body.id})
    res.json(data.profileImagePath);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;