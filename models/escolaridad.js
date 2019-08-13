module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_ESCOLARIDAD',{
        ID_ESCOLARIDAD: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        NIVEL_ESCOLAR: {type: Sequelize.STRING, allowNull: false },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 