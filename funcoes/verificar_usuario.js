const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")
const {pesquisa_clientes} = require("./pesquisaClientes")
const {cadastrar_usuario} = require("./criar_usuario")

async function verificar_usuario(form){
    try{
        const pesquisa = await pesquisa_clientes(form.cpf, 0)
        console.log(form)
        if(pesquisa==false){
            return console.log("Usuario não criado")
        }else{
            cadastrar_usuario(form)
        }
    }catch(err){
        console.log("Houve um erro ao fazer uma busca por usuarios (verificar_usuario): "+err)
    }
}

module.exports = {verificar_usuario}
