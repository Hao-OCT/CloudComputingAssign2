const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const withAuth = require("../middleware/auth");

//TODO: For real application, should keep this secret an actual secret
//using environment variables or some other method and make sure you
//DO NOT commit it to version control if you happen to be using git
const secret = "This is a secret String";

//find a user with the given username and verify that the given
//password is correct. If the password is correct, we will issue
//a signed token to the requester.


router.get("/", (req, res) => res.send("This is the User page"));

module.exports = router;
