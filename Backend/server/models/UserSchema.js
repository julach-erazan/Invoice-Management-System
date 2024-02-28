const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    phoneNumber: {type: Number, require: true},
    email: {type: String, require: true},
    hashedPassword: {type: String, require: true}
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
