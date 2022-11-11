const express = require("express");
const { registerUser, authenticateUser } = require("../controllers/driver.controller");
const router = express.Router()
router.post("/signup",registerUser)
router.post("/signin",authenticateUser)
// router.post("/score", postScore)
module.exports = router;