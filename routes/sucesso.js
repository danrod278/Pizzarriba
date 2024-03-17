const {express, bodyParser, carregaView, router, funcoes} = require("./dependencias");

router.get("/sucesso", (req, res)=>{
    res.send({mensagem: "pedido realizado com sucesso"})
})
module.exports=router
