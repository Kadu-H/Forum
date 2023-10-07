const ModelAuth = require("../models/ModelAuth");
const bcrypt = require("bcrypt");

const createAccount = async (req, res) => {

    let info = {
        user: req.body.user,
        email: req.body.email,
        senha: req.body.senha,
    }

    const verifyIfUserExist = await ModelAuth.findOne({ user: info.user });

    if(!verifyIfUserExist){
        const verifyIfEmailExist = await ModelAuth.findOne({ email: info.email });

        if(!verifyIfEmailExist){
            const salt = await bcrypt.genSalt(6);
            const passwordHash = await bcrypt.hash(req.body.senha, salt);

            info.senha = passwordHash;

            const account = await ModelAuth.create(info);

            res.status(200).json(account);
        } else{
            res.json({"Error": "email existente"})
        }

    } else{
        res.json({"Error": "usuario existente"})
    }
}

module.exports = createAccount;