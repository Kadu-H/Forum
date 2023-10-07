const ModelAuth = require("../models/ModelAuth");
const bcrypt = require("bcrypt");

const loginAccount = async (req, res) => {
    const usuario = await ModelAuth.findOne({ user: req.body.user });

    if(usuario){
        const verifyPassword = await bcrypt.compare(req.body.senha, usuario.senha);

        if(verifyPassword){
            res.json(usuario);
        } else{
            res.json({"Error": "Senha Errada"});
        }
    } else{
        res.json({"Error": "Usuario não encontrado"});
    }

}

const createAccount = async (req, res) => {

    let usuario = {
        user: req.body.user,
        email: req.body.email,
        senha: req.body.senha,
    }

    const verifyIfUserExist = await ModelAuth.findOne({ user: usuario.user });

    if(!verifyIfUserExist){
        const verifyIfEmailExist = await ModelAuth.findOne({ email: usuario.email });

        if(!verifyIfEmailExist){
            const salt = await bcrypt.genSalt(6);
            const passwordHash = await bcrypt.hash(req.body.senha, salt);

            usuario.senha = passwordHash;

            const account = await ModelAuth.create(usuario);

            res.status(200).json(account);
        } else{
            res.json({"Error": "email existente"})
        }

    } else{
        res.json({"Error": "usuario existente"})
    }
}

module.exports = { 
    createAccount,
    loginAccount
};