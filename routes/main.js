const {express, router, bodyParser, carregaView, models, Controller} = require("./dependencias")
router.get('/', (req, res)=>{
    res.render(carregaView("index"))
})
router.post("/main", (req, res)=>{
    let form = req.body
    console.log(form)
    Controller.cadastrarUsuario(form)
    Controller.salvarPedido(form)
})

module.exports=router
