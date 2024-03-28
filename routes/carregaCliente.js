const {express, bodyParser, carregaView, router, funcoes, Controller} = require("./dependencias");

router.post("/carregaCliente", (req, res)=>{
    const cpf = req.body.cpf
    console.log("______Recebi o cpf (carregaCliente): "+cpf)
    const puxaUsuario = async ()=>{
        try{
            const dataUsuario = await Controller.pesquisaClientes(cpf)
            console.log("_____Dados do Cliente_____"+dataUsuario)
            res.json({dataUsuario})
        }catch(err){
            console.log("Houve um erro ao buscar usuarios em carregaClientes(): "+err)
        }
        
    }
    puxaUsuario()
    
})

module.exports=router
