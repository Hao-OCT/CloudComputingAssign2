const express = require("express");
const app = express();
const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/cc", { useNewUrlParser: true });

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
