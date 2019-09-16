const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("This is the User page"));

module.exports = router;
