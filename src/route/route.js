const express = require("express");
const router =  express.Router();
const {createuser} = require ("../controller/usercontroller");

router.post ("/createuser",createuser)

module.exports = router;