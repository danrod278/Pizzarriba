const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function cadastrar_usuario(form){
    if(!form || !form.cpf){
        console.log("forms falso")
        return
    }
        try{
            const novoUsuario = await Clientes.create({
                cpf:form.cpf,
                nome:form.nome,
                telefone:form.telefone,
                endereco:form.endereco
            })
            console.log("Novo Usuario criado com sucesso: "+novoUsuario)
        }catch(err){
            console.error("Houve um erro: "+err)
        }
 
}
module.exports = {cadastrar_usuario}
