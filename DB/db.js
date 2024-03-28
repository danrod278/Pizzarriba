const Sequelize = require('sequelize');
const sequelize = new Sequelize('pizzarriba', 'root', '', {dialect: 'mysql', host: 'localhost'})
 
sequelize.authenticate().then(()=>{
    console.log("Conectado ao seridor SQL")
}).catch((err)=>{
    console.error("Erro ao conectar "+err)
})

module.exports = {sequelize, Sequelize}

