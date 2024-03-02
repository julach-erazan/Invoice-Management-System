const router = require("express").Router();
const { UserModel } = require("../models/user");

router.post("/", async (req, res) => {
    // res.send(`Welcome to the homepage, ${req.user.username}!`);
});

module.exports = router;

