const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");
const shopRoutes = require("./routes/shopRegister");
const getShopRoutes = require("./routes/getShopData");
const updateProfilePictureRoutes = require("./routes/updateProfilePic");
const getProfileImageRoutes = require("./routes/getProfileImage");

//database connection
require("./db")

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.static('public'));

const port = process.env.PORT || 8000

//routes
app.use('/signup', registerRoutes);
app.use('/login', loginRoutes); 
app.use('/dashboard', dashboardRoutes);
app.use('/shopregister', shopRoutes);
app.use('/getShopData', getShopRoutes);
app.use('/updateprofilepicture', updateProfilePictureRoutes);
app.use('/getprofileimage', getProfileImageRoutes);


app.listen(port, () => {
  console.log("Server Listnning...", {port});
});
