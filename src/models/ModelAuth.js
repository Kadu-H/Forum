const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },

    email:{
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },

    senha:{
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
});

module.exports = mongoose.model("Accounts", AuthSchema);