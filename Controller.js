const {verificar_usuario, salvar_pedido} = require("./funcoes/funcoes") 

function verificarUsuario(form){
    verificar_usuario(form)

}
function salvarPedido(form){
    salvar_pedido(form)
}
module.exports = {verificarUsuario, salvarPedido}