const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const withAuth = require("../middleware/auth");
const { User, validateRegister, validateChange } = require("../models/user");

//TODO: For real application, should keep this secret an actual secret
//using environment variables or some other method and make sure you
//DO NOT commit it to version control if you happen to be using git
const secret = "This is a secret String";

//find a user with the given username and verify that the given
//password is correct. If the password is correct, we will issue
//a signed token to the requester.

router.post("/login", function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: "Internal error please try again"
        });
      } else if (!user) {
        res.status(401).json({
          error: "Incorrect username or password"
        });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500).json({
              error: "Internal error please try again"
            });
          } else if (!same) {
            res.status(401).json({
              error: "Incorrect username or password"
            });
          } else {
            //Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: "1h"
            });
            res.cookie("token", token, { httpOnly: true }).sendStatus(200);
            //res.send(token);
          }
        });
      }
    });
  });

  router.post("/register", async (req, res) => {
    try {
      const { error } = validateRegister(req.body);
      if (error) return res.status(400).send(error.details[0].message);
  
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      await user.save();
      res.status(200).send(user);
    } catch (ex) {
      console.log(ex.errors);
      res.status(500).send(ex.message);
    }
  });

router.get("/", (req, res) => res.send("This is the User page"));

router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

module.exports = router;
