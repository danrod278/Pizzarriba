const { express, router, bodyParser, carregaView, models, Controller } = require("./dependencias")
router.get('/', (req, res) => {
    const carregaPagina = async function(){
        const lista_sabores = await Controller.puxarSabores()
        const lista_bordas = await Controller.puxarBordas()
        res.render(carregaView("index"), {sabores:lista_sabores, bordas:lista_bordas})
    }
    carregaPagina()

})
router.post("/main", (req, res) => {
    let form = (req.body)

    console.log("Formulario recebido "+form)
    Controller.verificarUsuario(form)
    Controller.salvarPedido(form)

})

module.exports = router
