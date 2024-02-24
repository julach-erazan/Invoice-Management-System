const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

dbName = "myDB"

mongoose
  .connect(
    "mongodb+srv://exxplan:TnYnWF6VlgcWN43N@cluster0.ulv2ifr.mongodb.net/imsDB"
  )
  .then(() => console.log("Database Connected Successfully..."))
  .catch((err) => console.log(err.message));

app.post("/signup", async(req, res)=>{

  const {firstName} = req.body

  console.log("Password: " + req.body.password);
    
})

app.listen(8000, () => {
  console.log("Server Listnning...");
});
