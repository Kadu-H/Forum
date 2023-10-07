const express = require("express");
const router = express.Router();

const createAccount = require("../src/controllers/ControllerAuth");

router.route('/register').get(createAccount);

module.exports = router;