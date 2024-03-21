const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  brandName: { type: String, require: true },
});

const BrandModel = mongoose.model("brands", brandSchema);

module.exports = { BrandModel };
