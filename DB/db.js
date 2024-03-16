const Sequelize = require('sequelize');
const sequelize = new Sequelize('pizzarriba', 'root', '', {dialect: 'mysql', host: 'localhost'})
 
sequelize.authenticate().then(()=>{
    console.log("Funcionando")
}).catch((err)=>{
    console.error(err)
})

module.exports = {sequelize, Sequelize}

