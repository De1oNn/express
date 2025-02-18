const express = require("express");
const router = express.Router();
const checkPassword = require("../resolvers/checkPassword.js");

router.post("/checkPassword", checkPassword);

module.exports = router;
