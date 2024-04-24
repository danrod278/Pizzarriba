const express    = require("express")
const app        = express()
const path       = require("path")
const bodyParser = require("body-parser")

const main       = require("./routes/main")
const sucesso    = require('./routes/sucesso')
const verify     = require("./routes/verifyPedidos") 
const carregaUsuario = require("./routes/carregaCliente")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))
app.use(express.static('public'))


app.use('/', main)
app.use('/', sucesso)
app.use('/', verify)
app.use('/', carregaUsuario)

app.listen(3000, ()=>{
    console.log("Esta rodando na porta 3000")
})

