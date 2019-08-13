module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_TIPOS_IDENTIFICACION',{
        ID_TIPO_IDENTIFICACION: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        TIPO_IDENTIFICACION: {type: Sequelize.STRING, allowNull: false },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 