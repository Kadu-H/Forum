require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({msg: "funcionando"});
});

app.listen(port, console.log(`Servidor aberto na porta ${port}`));