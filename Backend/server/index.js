require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

//database connection
require("./db")

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

const port = process.env.PORT || 8080

const mongoose = require("mongoose");
const userRouter = require('./routes/UserRoutes');

app.use('/', userRouter);

app.listen(port, () => {
  console.log("Server Listnning...");
});
