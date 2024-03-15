const router = require("express").Router();
const { UserModel } = require("../models/userSchema");

router.get("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    const user = await UserModel.find();

    if (!user) {
        return res.status(401).send({ message: "Empty Fields" });
    }

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
