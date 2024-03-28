const {verificar_usuario, salvar_pedido, puxar_Sabores, puxar_bordas, pesquisa_pedidos, pesquisa_clientes} = require("./funcoes/funcoes") 

function verificarUsuario(form){
    verificar_usuario(form)

}
function salvarPedido(form){
    salvar_pedido(form)
}
async function puxarSabores(){
    const sabores = await puxar_Sabores() 
    const lista_sabores=[]
    for(i=0;i!=sabores.length;i++){
        lista_sabores[i] = sabores[i].nome_pizza 
    }
    return lista_sabores
}

async function puxarBordas(){
    const bordas = await puxar_bordas() 
    const lista_bordas=[]
    for(i=0;i!=bordas.length;i++){
        lista_bordas[i] = bordas[i].borda
    }
    return lista_bordas
}

async function pesquisaPedidos(cpf){
    console.log(cpf)
    return pesquisa_pedidos(cpf)
}

async function pesquisaClientes(cpf){
    return pesquisa_clientes(cpf,1)
}

module.exports = {puxarBordas, verificarUsuario, salvarPedido, puxarSabores, pesquisaPedidos, pesquisaClientes}
