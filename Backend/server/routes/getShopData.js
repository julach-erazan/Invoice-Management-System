const router = require("express").Router();
const { ShopModel } = require("../models/shopSchema");

router.post("/", async (req, res) => {
  try {

    const data = await ShopModel.findOne({userId: req.body.id})
    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;