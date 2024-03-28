const db = require("./db")
const sequelize = db.sequelize
const Sequelize = db.Sequelize

const Clientes = sequelize.define("usuarios", {
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Sabores = sequelize.define("sabores", {
    nome_pizza:{
        type: Sequelize.STRING,
        allowNull:false
    },
    ingredientes:{
        type: Sequelize.STRING,
        allowNull:false
    }
})
const Bordas = sequelize.define("bordas", {
    borda:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

const Pedidos = sequelize.define("pedidos", {
    cpf:{
        type: Sequelize.STRING,
        allowNull:false
    },
    nome_pizza:{
        type: Sequelize.STRING,
        allowNull:false
    },
    borda:{
        type: Sequelize.STRING,
        allowNull:false
    },
    tamanho:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

/*Clientes.sync({force:true})
Sabores.sync({force:true})
Bordas.sync({force:true})
Pedidos.sync({force:true})*///caso seja a primeira vez que esta usando descomente essas linhas. depois recomente ou apague

module.exports = {Clientes, Sabores, Bordas, Pedidos, sequelize, Sequelize}
