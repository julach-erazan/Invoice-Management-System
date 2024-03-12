const router = require("express").Router();
const { ShopModel } = require("../models/shopSchema");
const multer = require("multer");
const path = require("path");


// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
   storage: storage
});

router.post("/", upload.single('logoPath'), async (req, res) => {
  try {

    ShopModel.create({...req.body, logoPath: req.file.filename})
    res.status(201).json({ message: "Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;