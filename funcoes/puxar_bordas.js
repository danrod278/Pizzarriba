const {Bordas, Clientes, Sabores, Pedidos, sequelize, Sequelize} = require("./dependencias")

async function puxar_bordas(){
    const bordas = await Bordas.findAll()
    return bordas
}

module.exports = {puxar_bordas}
