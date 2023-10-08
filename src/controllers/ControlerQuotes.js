const ModelQuotes = require("../models/ModelQuotes");

const createQuote = async (req, res) => {
    
    let topic = {
        user: req.body.user,
        title: req.body.title,
        desc: req.body.desc,
        id_parent: (req.params.id_parent? req.params.id_parent : "0"),
    }

    const quote = await ModelQuotes.create(topic);

    res.status(200).json(quote);
}

const getQuote = async (req, res) => {
    let quote = await ModelQuotes.findOne({ _id: req.params.id });
    const answer = await ModelQuotes.find({ id_parent: req.params.id });
    
    quote = {
        _id: quote._id,
        user: quote.user,
        title: quote.title,
        desc: quote.desc,
        id_parent: quote.id_parent,
        answer: answer,
    }

    res.json(quote);
}

const getAllQuotes = async (req, res) => {
    const quotes = await ModelQuotes.find({ id_parent: "0" });
    res.json(quotes);
}

module.exports = {
    createQuote,
    getAllQuotes,
    getQuote,
};