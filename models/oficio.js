module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_OFICIOS',{
        ID_OFICIO: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        OFICIO: {type: Sequelize.STRING, allowNull: false },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 