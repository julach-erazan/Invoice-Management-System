const router = require("express").Router();
const { ShopModel } = require("../models/shopSchema");

router.post("/", async (req, res) => {
  try {
    const {error} = req.body;
    if(error){
      return res.status(400).send({ message: error.details[0].massage });
    }

    //Find Shop Data
    const shop = await ShopModel.findOne({ userId: req.body.id });

    if (!shop) {
      return res.status(401).send({ message: "Empty Fields!" });
    }else{
        await ShopModel.findOneAndDelete({ userId: req.body.id });
        return res.status(401).send({ message: "Delete successfully." });
    }

  } catch (error) {
    res.status(500).json({ message: "Internal Sever Error." });
    return;
  }
});

module.exports = router;
