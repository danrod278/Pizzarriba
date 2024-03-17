const express = require("express")
const bodyParser=require("body-parser")
const router = express.Router()
const path = require("path")
const models = require("../DB/model")
const Controller  = require("../Controller")

const carregaView = (nomeView)=>{
    return path.join(__dirname, '..','views', nomeView)
}

module.exports = {
    carregaView,
    express,
    bodyParser,
    router, 
    models,
    Controller
}

