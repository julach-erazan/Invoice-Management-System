const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database Connected Successfully..."))
  .catch((err) => console.log(err.message));


  //mongodb+srv://exxplan:TnYnWF6VlgcWN43N@cluster0.ulv2ifr.mongodb.net/imsDB