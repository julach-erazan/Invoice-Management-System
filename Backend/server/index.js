const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("./database/databaseConfig")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

const userRouter = require('./routes/UserRoutes');

app.use('/', userRouter);

app.listen(8000, () => {
  console.log("Server Listnning...");
});
