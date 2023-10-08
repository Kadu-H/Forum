const express = require("express");
const router = express.Router();

const {
    createQuote,
    getAllQuotes,
    getQuote,
} = require("../src/controllers/ControlerQuotes");

router.route('/').post(createQuote);
router.route('/:id_parent').post(createQuote);
router.route('/all').get(getAllQuotes);
router.route('/:id').get(getQuote);

module.exports = router;