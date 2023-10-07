const express = require("express");
const router = express.Router();

const {
    createAccount,
    loginAccount,
} = require("../src/controllers/ControllerAuth");

router.route('/register').post(createAccount);
router.route('/login').post(loginAccount);

module.exports = router;