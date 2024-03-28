const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function pesquisa_clientes(CPF, f=0){
    console.log("cpf: "+CPF)
    try{
        const pesquisa = await Clientes.findOne({where:{cpf: CPF}})
        console.log("pesquisaClientes: "+pesquisa)
        if(f===0){
            if(pesquisa==null){ return true}//se encontrar
            else if(pesquisa){return false}//se nao encontrar
        }
        if(f===1){
            return pesquisa
        }
    }
    catch (err){
        console.error("Houve um Erro ao buscar usuario (pesquisaCliente):    "+err)
    }

}

module.exports = {pesquisa_clientes}
                                                                            