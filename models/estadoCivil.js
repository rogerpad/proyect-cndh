module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_ESTADOS_CIVILES',{
        ID_ESTADO_CIVIL: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        ESTADO_CIVIL: {type: Sequelize.STRING, allowNull: false },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 