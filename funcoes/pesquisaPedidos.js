const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")


async function pesquisaPedidos(cpf, f=0){
    
    try{
        const pesquisa = await Pedidos.findOne({where:{cpf: cpf}})
        
        if(f=0){
            return pesquisa
        }
        return 
    }
    catch (err){
        console.error("Houve um Erro:    "+err)
    }

}


module.exports = {pesquisaPedidos}
