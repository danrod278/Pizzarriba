const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const main = require("./routes/main")
const sucesso = require('./routes/sucesso')
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))

app.use('/', main)
app.use('/', sucesso)

app.listen(3000, ()=>{
    console.log("Esta rodando na porta 3000")
})

