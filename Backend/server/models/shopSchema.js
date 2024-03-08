const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopName: { type: String, require: true },
  logoPath: { type: String },
  shopRegistationNumber: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  address: { type: String },
});

const ShopModel = mongoose.model("shops", shopSchema);

module.exports = { ShopModel };