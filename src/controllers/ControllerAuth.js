const ModelAuth = require("../models/ModelAuth");

const createAccount = async (req, res) => {
    const account = await ModelAuth.create(req.body);
    res.status(200).json(account);
}

module.exports = createAccount;