const mongoose = require("mongoose");

dbName = "myDB"

mongoose
  .connect(
    "mongodb+srv://exxplan:TnYnWF6VlgcWN43N@cluster0.ulv2ifr.mongodb.net/imsDB"
  )
  .then(() => console.log("Database Connected Successfully..."))
  .catch((err) => console.log(err.message));