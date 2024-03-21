const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userId: {type: String, require: true },
  empId: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  status: {type: String, require: true },
  dob: { type: String},
  gender: { type: String},
  address: { type: String},
  profileImagePath: {type: String},
  phoneNumber: { type: Number, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "100s",
  });
  return token;
};

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
