const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },

    title:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },

    desc:{
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },

    id_parent:{
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
    },
});

module.exports = mongoose.model("Quotes", QuoteSchema);