const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function pesquisa_pedidos(cpf){
    console.log("pesquisa_pedidos em ação: "+cpf)
    try{
        const pesquisa = await Pedidos.findAll({where:{cpf: cpf}})
        //console.log(pesquisa)
        return JSON.stringify(pesquisa)
         
    }
    catch (err){
        console.error("Houve um Erro (pesquisaPedidos):    "+err)
    }

}

module.exports = {pesquisa_pedidos}
