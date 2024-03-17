const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function cadastrar_usuario(form){
    if(!form || !form.cpf){
        console.log("forms falso")
        return
    }
    const busca = await pesquisa(form.cpf)
    if(!busca){//se encontrar
        return
    }else if(busca){//se nao encontrar
        console.log(busca)
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
}

async function pesquisa(cpf){
        
        try{
            const pesquisa = await Clientes.findOne({where:{cpf: cpf}})
            console.log(pesquisa)
            if(pesquisa){ return false}//se encontrar
            else if(pesquisa==null){return true}//se nao encontrar
        }
        catch (err){
            console.error("Houve um Erro:    "+err)
        }
    
}


module.exports = {cadastrar_usuario}
