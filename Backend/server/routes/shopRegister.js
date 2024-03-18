const router = require("express").Router();
const { ShopModel } = require("../models/shopSchema");
const multer = require("multer");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("logoPath"), async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    // // Check if the user exists
    const user = await ShopModel.findOne({ userId: req.body.userId });

    if (!user) {
      await ShopModel.create({ ...req.body, logoPath: req.file.filename });
      res.status(201).json({ message: "Registered Successfully" });
    } else {
      await ShopModel.updateOne(
        { userId: req.body.userId },
        { $set: { ...req.body, logoPath: req.file.filename } }
      );
      res.status(201).json({ message: "Update Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
