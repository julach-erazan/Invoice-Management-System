const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

const dashboardRoutes = require("./routes/dashboard");
const updateProfilePictureRoutes = require("./routes/updateProfilePic");
const getProfileImageRoutes = require("./routes/getProfileImage");
const updatePasswordRoutes = require("./routes/updatePassword");

const shopRoutes = require("./routes/shopRegister");
const getShopRoutes = require("./routes/getShopData");
const deleteShopDataRoutes = require("./routes/deleteShopData");

const addEmployeeRoutes = require("./routes/addEmployee");
const getEmployeeRoutes = require("./routes/getEmployee");
const updateEmployeeRoutes = require("./routes/updateEmployee");
const deleteEmployeeRoutes = require("./routes/deleteEmployee");

const addBrandRoutes = require("./routes/addBrand");

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
app.use('/updateprofilepicture', updateProfilePictureRoutes);
app.use('/getprofileimage', getProfileImageRoutes);
app.use('/updatepassword', updatePasswordRoutes);

app.use('/shopregister', shopRoutes);
app.use('/getShopData', getShopRoutes);
app.use('/deleteshopdata', deleteShopDataRoutes);

app.use('/addemployee', addEmployeeRoutes);
app.use('/getemployee', getEmployeeRoutes);
app.use('/updateemployee', updateEmployeeRoutes);
app.use('/deleteemployee', deleteEmployeeRoutes);

app.use('/addbrand', addBrandRoutes);

app.listen(port, () => {
  console.log("Server Listnning...", {port});
});
