const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("This is the home page"));

router.get("/login", (req, res) => res.send("This is the login page"));

router.get("/register", (req, res) => res.send("This is the register page"));

module.exports = router;
