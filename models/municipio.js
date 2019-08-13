const Sequelize = require('sequelize')

module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_MUNICIPIOS',{
        ID_MUNICIPIO: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        ID_DEPARTAMENTO: {type: Sequelize.INTEGER, allowNull: false},
        CODIGO_MUNICIPIO: {type: Sequelize.INTEGER, allowNull: false},
        MUNICIPIO: {type: Sequelize.STRING, allowNull: false},
        ESTADO: {type: Sequelize.INTEGER, allowNull: false}
    })
}