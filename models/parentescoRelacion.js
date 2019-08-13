module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_PARENTESCOS_O_RELACION',{
        ID_RELACION: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        RELACION: {type: Sequelize.STRING, allowNull: false },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 