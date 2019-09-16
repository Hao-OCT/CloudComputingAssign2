const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// ===================
//    Models & DB
// ===================
mongoose.connect("mongodb://localhost/cc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// ====================
//       Routers
// ====================
const user = require("./routes/user");
const home = require("./routes/home");

app.use("/home", home);
app.use("/users", user);
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));
app.get("/", (req, res) => res.redirect("/home"));
app.get("*", (req, res) => res.sendStatus(404));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server starts on ${port}`));
