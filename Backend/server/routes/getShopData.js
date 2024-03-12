const router = require("express").Router();
const { ShopModel } = require("../models/shopSchema");

router.post("/", async (req, res) => {
  try {

    const data = await ShopModel.findOne({user: req.body.email})
    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;