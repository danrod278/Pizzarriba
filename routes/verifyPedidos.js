const {express, bodyParser, carregaView, router, funcoes, Controller} = require("./dependencias");


router.post("/verifyPedidos", (req, res)=>{
    const dados = req.body.cpfInput
    //console.log("Pedido recebido: "+dados)
    const chamaPesquisa = async ()=>{
        try{
            const pedidos = await Controller.pesquisaPedidos(dados)
            res.json(pedidos)
        }catch (erro){
            console.log("Erro ao tentar buscar pedidos: "+erro)
        }
    }
    chamaPesquisa()

})

module.exports=router           