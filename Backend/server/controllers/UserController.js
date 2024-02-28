const UserModel = require("../models/UserSchema");

const addUser = async (req, res) => {
  UserModel.create(req.body)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

const logUser = async (req, res) => {
  const {email, hashedPassword} = req.body;
  console.log(email);
};

module.exports = { addUser, logUser };
