const express = require("express");
const router = express.Router();
const addUsers = require("../resolvers/addUsers.js");

router.post("/", addUsers);

module.exports = router;
