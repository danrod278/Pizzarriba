const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function salvar_pedido(form){
    try{
        if(!form || !form.cpf || !form.sabor || !form.tamanho || !form.borda){
            console.log("forms falso")
            return
        }
        const novoPedido = await Pedidos.create({
            cpf:form.cpf,
            nome_pizza:form.sabor,
            borda:form.borda,
            tamanho:form.tamanho
        })
        console.log("Novo pedido salvo")
    }catch (err){
        console.log("Houve um erro: "+err)
    }
}

module.exports={salvar_pedido}