const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User")
require("./database/databaseConfig")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.post("/signup", async(req, res)=>{

  console.log(req.body);
    
})

app.listen(8000, () => {
  console.log("Server Listnning...");
});
