const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");

//database connection
require("./db")

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

const port = process.env.PORT || 8000

//routes
app.use('/signup', registerRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);


app.listen(port, () => {
  console.log("Server Listnning...", {port});
});
