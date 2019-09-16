const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

// ===================
//    Models & DB
// ===================
const url = "mongodb://dbUser:aiculus2019S2@ds235418.mlab.com:35418/cloudcomputing";
mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
// ====================
//       Routers
// ====================
const user = require("./routes/user");
const home = require("./routes/home");

app.use("/home", home);
app.use("/users", user);
app.get("/", (req, res) => res.redirect("/home"));
app.get("*", (req, res) => res.sendStatus(404));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server starts on ${port}`));
