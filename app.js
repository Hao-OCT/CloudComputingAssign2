const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// var unirest = require("unirest");

// var req = unirest(
//   "GET",
//   "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-01"
// );

// req.query({
//   inboundpartialdate: "2019-12-01"
// });

// req.headers({
//   "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//   "x-rapidapi-key": "8654aad1e3mshbe551f028e8ff9ap1bad9cjsnf616b195d23f"
// });

// req.end(function(res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });
// ===================
//    Models & DB
// ===================
const url =
  "mongodb://dbUser:aiculus2019S2@ds235418.mlab.com:35418/cloudcomputing";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(cors());
// ====================
//       Routers
// ====================
const user = require("./routes/user");
const home = require("./routes/home");

app.use("/api/home", home);
app.use("/api/users", user);
app.get("/", (req, res) => res.redirect("/api/home"));
app.get("*", (req, res) => res.sendStatus(404));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server starts on ${port}`));
