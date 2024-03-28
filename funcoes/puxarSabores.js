const  {Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function puxar_Sabores(){
    const sabores = await Sabores.findAll()
    
    return sabores
}
puxar_Sabores()
module.exports = {puxar_Sabores}
