const Sequelize = require('sequelize')
const sequelize = new Sequelize('ecommerce','root','senai',{
    host:'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log('deu certo')
}).catch((err)=>{
    console.log('nao deu certo' +err)
})

module.exports = sequelize