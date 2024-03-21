const router = require("express").Router();
const { BrandModel } = require("../models/brandSchema");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    await BrandModel.create(req.body);

    res.status(201).json({ message: "Brand added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
    return;
  }
});

module.exports = router;