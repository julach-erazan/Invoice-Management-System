const router = require("express").Router();
const { UserModel } = require("../models/userSchema");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    await UserModel.findOneAndDelete({_id: req.body.id});

    res.status(201).json({ message: "Employee Record Delete Successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;