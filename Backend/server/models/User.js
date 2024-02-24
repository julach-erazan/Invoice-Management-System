const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: Number},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
