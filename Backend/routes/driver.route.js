const express = require("express");
const { registerUser, authenticateUser } = require("../controllers/driver.controller");
const router = express.Router();
router.post("/signup",registerUser);
router.post("/signin",authenticateUser);
module.exports = router;