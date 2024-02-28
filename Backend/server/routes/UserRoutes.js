const express = require('express');
const userRouter = express.Router();
const {addUser, logUser } = require('../controllers/UserController');


userRouter.post('/signup', addUser) //POST a new User

userRouter.post('/login', logUser) //Login an User

module.exports = userRouter;