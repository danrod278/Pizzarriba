const {cadastrar_usuario, salvar_pedido} = require("./funcoes/funcoes") 

function cadastrarUsuario(form){
    cadastrar_usuario(form)

}
function salvarPedido(form){
    salvar_pedido(form)
}
module.exports = {cadastrarUsuario, salvarPedido}