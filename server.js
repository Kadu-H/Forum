const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const connectDB = require("./db/ConnectMongoDB.js")

const RouteAuth = require("./routes/RouteAuth");

require('dotenv').config();

const app = express();

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`Servidor aberto na porta ${process.env.PORT}`));
    } catch (error) {
        console.log("Error ", error);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({msg: "funcionando"});
});

app.use(express.json());
app.use("/auth", RouteAuth);
start();