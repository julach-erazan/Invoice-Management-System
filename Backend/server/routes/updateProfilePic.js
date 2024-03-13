const router = require("express").Router();
const { UserModel } = require("../models/userSchema");
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

router.post("/", upload.single("profileImagePath"), async (req, res) => {
  try {

    await UserModel.updateOne({_id: req.body.id}, { $set: { profileImagePath: req.file.filename }});
    res.status(201).json({ message: "Update Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
